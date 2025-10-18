---
title: 'Soothsayer: Time Series Forecasting System'
date: '2025-09-24'
author: 'Cagatay Jay Guley'
layout: post
permalink: /soothsayer-time-series-forecasting-system/
redirect_from:
  - /soothsayer-time-series-forecasting-system
tags: [forecast, prediction, time, series, soothsayer]
image: timeseries.jpeg
---

I'll walk you through the key forecasting methods used in my **Soothsayer** project, an optimized multi-method time series forecasting system written in Python. The code integrates various statistical and machine learning models to predict future values in time series data. Below, I explain each forecasting formula (or method) used in the system, breaking down how they work and why they’re effective for time series forecasting.

## Project Overview: Soothsayer

Soothsayer is designed to handle time series data efficiently, combining classical statistical methods with modern machine learning techniques. It processes data from a CSV file, detects seasonality, optimizes model hyperparameters, and generates weighted ensemble predictions for robust forecasting. The system includes models like Linear Trend, Seasonal Naive, Moving Average, Exponential Smoothing, ARIMA, Prophet, and several machine learning algorithms such as Random Forest, XGBoost, and Neural Networks.

Let’s dive into each forecasting method used in the `predict_statistical_models_enhanced` and `predict_ml_models` functions, as well as the ensemble weighting mechanism.

---

## Statistical Forecasting Methods

The statistical models in Soothsayer are implemented in the `predict_statistical_models_enhanced` method. These methods are particularly suited for capturing patterns like trends and seasonality in time series data. Below are the formulas and techniques used:

### 1. Linear Trend
**What it does**: Fits a straight line to the time series data to capture a linear trend.

**How it works**:
- The system uses NumPy’s `polyfit` to fit a linear polynomial (`y = mx + c`) to the data, where:
  - `x` is the time index (a range of integers from 0 to the length of the data).
  - `y` is the time series values.
  - `m` is the slope, and `c` is the intercept.
- For a future time point at index `n + periods_ahead`, the prediction is:
  ```
  y_pred = m * (n + periods_ahead - 1) + c
  ```
- **Why it’s useful**: Simple and effective for data with a consistent upward or downward trend.

**Code snippet**:
```python
x = np.arange(len(ts_data))
y = ts_data.values
coeffs = np.polyfit(x, y, 1)
trend_pred = coeffs[0] * (len(ts_data) + periods_ahead - 1) + coeffs[1]
```

### 2. Seasonal Naive
**What it does**: Assumes that the future value will be the same as the value from the last observed seasonal cycle.

**How it works**:
- The system detects the seasonal period (e.g., 7 days for weekly, 30 days for monthly, or 365 days for yearly) using STL decomposition.
- If a seasonal period is detected, the prediction is the value from one seasonal cycle ago:
  ```
  y_pred = y[t - seasonal_period]
  ```
- If no seasonality is detected, it falls back to the most recent value:
  ```
  y_pred = y[t - 1]
  ```
- **Why it’s useful**: Captures repeating patterns in data, like weekly or monthly cycles, with minimal computation.

**Code snippet**:
```python
seasonal_period = self.detect_seasonality(ts_data)
if seasonal_period and len(ts_data) >= seasonal_period:
    seasonal_pred = ts_data.iloc[-seasonal_period]
else:
    seasonal_pred = ts_data.iloc[-1]
```

### 3. Moving Average
**What it does**: Predicts the next value as the average of the most recent observations.

**How it works**:
- Uses a fixed window of recent data points (e.g., the last 30 points or a quarter of the data length).
- The prediction is the mean of the values in the window:
  ```
  y_pred = mean(y[t - window : t])
  ```
- **Why it’s useful**: Smooths out short-term fluctuations and provides a baseline forecast for stable data.

**Code snippet**:
```python
window = min(30, len(ts_data) // 4, len(ts_data))
if window > 0:
    ma_pred = ts_data.tail(window).mean()
```

### 4. Exponential Smoothing
**What it does**: Models the time series by combining level, trend, and seasonal components with exponentially decreasing weights.

**How it works**:
- The system uses `statsmodels.tsa.holtwinters.ExponentialSmoothing` with automatic trend and seasonality detection.
- It checks for a trend using the Augmented Dickey-Fuller test (`adfuller`) to determine if the series is stationary after differencing.
- Seasonality is detected using STL decomposition.
- The model is configured with:
  - Trend component (`trend='add'`) if a trend is detected.
  - Seasonal component (`seasonal='add'`) if a seasonal period is found.
- The prediction is made for the target date:
  ```
  y_pred = fitted_model.forecast(periods_ahead)
  ```
- **Why it’s useful**: Balances recent and older observations, making it effective for data with trends and seasonality.

**Code snippet**:
```python
seasonal_period = self.detect_seasonality(ts_data)
trend_test = adfuller(ts_data.diff().dropna())[1] < 0.05
model = ExponentialSmoothing(
    ts_data,
    trend='add' if trend_test else None,
    seasonal='add' if seasonal_period else None,
    seasonal_periods=seasonal_period
)
fitted_model = model.fit()
exp_pred = fitted_model.forecast(periods_ahead).iloc[-1]
```

### 5. ARIMA
**What it does**: Autoregressive Integrated Moving Average model captures trends and dependencies in time series data.

**How it works**:
- If the `pmdarima` library is available, `auto_arima` is used to automatically select the best ARIMA parameters (`p`, `d`, `q`) with:
  - Maximum autoregressive order (`max_p=3`), differencing (`max_d=2`), and moving average (`max_q=3`).
  - Seasonal components enabled (`seasonal=True`) and stepwise search for efficiency.
- Otherwise, a simple ARIMA(1,1,1) model is used:
  ```
  y_pred = fitted_model.forecast(periods_ahead)
  ```
- **Why it’s useful**: ARIMA is robust for modeling complex time series with trends and short-term dependencies.

**Code snippet**:
```python
if HAS_AUTO_ARIMA:
    model = auto_arima(
        ts_data, 
        seasonal=True, 
        stepwise=True,
        max_p=3, max_q=3, max_d=2
    )
    arima_pred = model.predict(n_periods=periods_ahead)[-1]
else:
    model = ARIMA(ts_data, order=(1, 1, 1))
    fitted_model = model.fit()
    arima_pred = fitted_model.forecast(periods_ahead).iloc[-1]
```

### 6. Prophet
**What it does**: A flexible forecasting model developed by Facebook, designed for time series with strong seasonal patterns and missing data.

**How it works**:
- If the `prophet` library is available, the system prepares a DataFrame with `ds` (dates) and `y` (values).
- Seasonality is enabled based on data length:
  - Daily seasonality if data spans >365 days.
  - Weekly seasonality if data spans >90 days.
  - Yearly seasonality if data spans >365 days.
- The model is fit with a changepoint prior scale of 0.05 for flexibility:
  ```
  y_pred = model.predict(future_df)['yhat']
  ```
- **Why it’s useful**: Handles missing data, outliers, and multiple seasonalities well, making it suitable for real-world time series.

**Code snippet**:
```python
if HAS_PROPHET:
    prophet_df = pd.DataFrame({
        'ds': ts_data.index,
        'y': ts_data.values
    })
    model = Prophet(
        daily_seasonality=len(ts_data) > 365,
        weekly_seasonality=len(ts_data) > 90,
        yearly_seasonality=len(ts_data) > 365,
        changepoint_prior_scale=0.05
    )
    model.fit(prophet_df)
    future_df = pd.DataFrame({'ds': [target_date]})
    forecast = model.predict(future_df)
    prophet_pred = forecast['yhat'].iloc[0]
```

---

## Machine Learning Models

The machine learning models in Soothsayer are implemented in the `predict_ml_models` method, leveraging features created by `create_enhanced_features`. These models are trained on lagged values, statistical summaries, and time-based features to predict future values.

### 1. Linear Regression
- **What it does**: Fits a linear model to predict the target based on input features.
- **Formula**: `y = w0 + w1*x1 + w2*x2 + ... + wn*xn`
- **Why it’s useful**: Simple and interpretable, effective when relationships are linear.

### 2. Ridge Regression
- **What it does**: Linear regression with L2 regularization to prevent overfitting.
- **Formula**: Minimizes `||y - Xw||^2 + alpha * ||w||^2`
- **Why it’s useful**: Handles multicollinearity in features.

### 3. Lasso Regression
- **What it does**: Linear regression with L1 regularization for feature selection.
- **Formula**: Minimizes `||y - Xw||^2 + alpha * ||w||_1`
- **Why it’s useful**: Automatically selects important features.

### 4. Elastic Net
- **What it does**: Combines L1 and L2 regularization.
- **Formula**: Minimizes `||y - Xw||^2 + alpha * (l1_ratio * ||w||_1 + 0.5 * (1 - l1_ratio) * ||w||^2)`
- **Why it’s useful**: Balances feature selection and regularization.

### 5. Decision Tree
- **What it does**: Splits data into regions based on feature thresholds to predict the target.
- **Why it’s useful**: Captures non-linear relationships but can overfit.

### 6. Random Forest
- **What it does**: Ensemble of decision trees using bagging.
- **Why it’s useful**: Robust to overfitting and effective for complex patterns.

### 7. Extra Trees
- **What it does**: Similar to Random Forest but with random splits.
- **Why it’s useful**: Faster and often performs well on noisy data.

### 8. Gradient Boosting
- **What it does**: Builds trees sequentially, correcting errors of previous trees.
- **Why it’s useful**: Highly accurate for structured data.

### 9. Support Vector Regression (SVR)
- **What it does**: Fits a regression model within a margin of tolerance using a kernel (RBF in this case).
- **Why it’s useful**: Effective for non-linear relationships with proper tuning.

### 10. Neural Network (MLP)
- **What it does**: Multi-layer perceptron with hidden layers for complex pattern recognition.
- **Why it’s useful**: Captures intricate non-linear patterns but requires more data.

### 11. XGBoost (Optional)
- **What it does**: Optimized gradient boosting with efficient tree pruning.
- **Why it’s useful**: Fast and highly accurate for structured data.

### 12. LightGBM (Optional)
- **What it does**: Gradient boosting with histogram-based learning for speed.
- **Why it’s useful**: Efficient for large datasets.

**Feature Engineering**:
- Features include lagged values (e.g., t-1, t-2, t-3, t-7, t-14, t-30), statistical summaries (mean, std, min, max, quantiles), and time-based features (weekday, month, day, quarter).
- Feature selection is applied using `SelectKBest` with `f_regression` to reduce dimensionality.

**Code snippet**:
```python
features = self.create_enhanced_features(target_date)
if name in self.scalers:
    features_scaled = self.scalers[name].transform(features)
    pred = model.predict(features_scaled)[0]
else:
    pred = model.predict(features)[0]
```

---

## Ensemble Weighting

The `calculate_dynamic_weights_enhanced` method combines predictions from all models using dynamic weights based on recent performance.

**How it works**:
- For each model, the Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE) from recent predictions are used to calculate a weight:
  ```
  weight = 1.0 / (0.7 * MAE + 0.3 * RMSE + 1e-6)
  ```
- Weights are normalized to sum to 1.
- Models with performance above the 75th percentile are prioritized, but at least three models are kept to ensure diversity.
- The final prediction is a weighted sum:
  ```
  final_prediction = sum(pred_i * weight_i)
  ```

**Why it’s useful**: Combines the strengths of multiple models, giving more influence to those with better recent performance.

**Code snippet**:
```python
weight = 1.0 / (0.7 * mae + 0.3 * rmse + 1e-6)
weights = {k: v/total_weight for k, v in weights.items()}
weighted_prediction = sum(pred * weights.get(model, 0) for model, pred in all_predictions.items())
```

---

## Confidence Interval Calculation

To provide uncertainty estimates, Soothsayer calculates a 95% confidence interval for the ensemble prediction:
- Uses the standard deviation of individual model predictions (`std_pred`).
- Applies a z-score of 1.96 for 95% confidence:
  ```
  margin_error = 1.96 * std_pred
  conf_lower = weighted_prediction - margin_error
  conf_upper = weighted_prediction + margin_error
  ```

**Why it’s useful**: Quantifies the uncertainty in the forecast, helping users understand the range of possible outcomes.

**Code snippet**:
```python
z_score = 1.96
margin_error = z_score * std_pred
conf_lower = weighted_prediction - margin_error
conf_upper = weighted_prediction + margin_error
```

---

The Soothsayer forecasting system combines a diverse set of statistical and machine learning models to produce robust time series predictions. By leveraging methods like Linear Trend, Seasonal Naive, Moving Average, Exponential Smoothing, ARIMA, Prophet, and various ML algorithms, it captures a wide range of patterns in the data. The ensemble approach with dynamic weighting ensures that the most reliable models contribute more to the final prediction, while the confidence interval provides a measure of uncertainty.

Feel free to try out the Soothsayer code in your own projects! You can find the full implementation [at Github](https://github.com/guleyc/soothsayer). Let me know in the comments if you have questions or suggestions for improving the system.