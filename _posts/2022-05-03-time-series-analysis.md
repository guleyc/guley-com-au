---
title: 'Time Series Analysis'
date: '2022-05-03'
author: 'Cagatay Guley'
layout: post
permalink: /time-series-analysis/
redirect_from:
  - /time-series-analysis
categories: [engineering]
tags: [time, series, analysis, forecasting, regression]
mathjax: true
---

Time series analysis is a statistical method employed to forecast future values based on historical data. It aims to predict the values of a variable that changes over time, such as stock prices, weather patterns, or economic indicators, by utilizing past observations. To construct a time series forecasting model, the first step involves examining the dataset. The dataset consists of measurements of the variable at regular intervals over time, such as daily closing prices of a stock or monthly average temperature. The initial step is to analyze the statistical characteristics of the time series data, which may include trend, seasonality, and periodic variations. Trend refers to the long-term increasing or decreasing pattern observed in the data. Seasonality captures the regular, recurring patterns at specific intervals, such as the surge in retail sales during the holiday season. Periodic variations represent regular repeating patterns observed in the data.

Time series data refers to a sequence of data points or observations recorded at various or regular intervals of time. These recorded data points can be collected at frequencies such as hourly, daily, weekly, monthly, quarterly, or annually.

Time Series Forecasting is the process of utilizing a statistical model based on past outcomes to predict future values of a time series. This intricate procedure involves employing historical data points to make informed projections about forthcoming trends within the time series.

The utilization of time series analysis for predictive purposes involves the utilization of pivotal models based on known historical outcomes to forecast future results. Let us assume that at time (t), we aspire to predict Y, which, by the very definition of time series prediction, is contingent upon Y at (t-1), Y at (t-2), and so forth. Hence, the basic model equation is formulated as follows: Y(t) = Y(t-1) + Y(t-2) / 2.

In the above equation, Y is dependent on the average of its two preceding values. Consequently, this approach can be denominated as a univariate time series forecast. In this context, to predict the future value, we solely consider the two previous values. Hence, the window size here is 2. The window size can be regarded as a hyperparameter, necessitating the provision of a range of distinct values to the model. The value that yields the most accurate prediction shall then be chosen as the window size.

It is imperative to acknowledge that while this basic model showcases the essence of univariate time series forecasting, real-world applications often demand more intricate and sophisticated models. These models might encompass additional features, incorporate external factors, or integrate more extensive historical data to enhance predictive capabilities. Furthermore, the selection of the optimal window size is not a trivial task and might necessitate empirical experimentation to determine the configuration that optimally captures the underlying patterns in the data.

#### Key Concepts to be Acquainted With

**Trend** — The linearly increasing or decreasing behavior of a series over time. A trend can be upward, downward, or flat (horizontal).

**Seasonality** — In a Time Series that exhibits a recurring pattern at fixed intervals over a yearly span, this is referred to as a seasonal model or seasonality. Seasonal patterns can be observed in numerous types of time series. For instance, heating costs might decrease in the summer and increase in the winter. Companies need to comprehend seasonality to effectively manage their inventories, workforce, and many other crucial aspects.

**ETS Decomposition** — ETS Decomposition is employed to disentangle various components of a time series.

**Stationarity** — It signifies that the mean value of a series remains constant over its time period. If past effects accumulate and values increase indefinitely, stationarity is not achieved.

**Differencing** — Differencing is utilized to render a series stationary and manage autocorrelations. There could be situations in time series analysis where differencing is unnecessary, and excessively differenced series can yield erroneous predictions.

**Dependence** — It denotes the relationship between two observations of the same variable in prior time periods.

**Noise** — Variability in observations that cannot be elucidated by the model.

In the realm of time series analysis, these concepts are paramount for comprehending the underlying dynamics and patterns within data. Accurate analysis and forecasting hinge on the mastery of these foundational principles. By dissecting trends, identifying seasonal influences, employing decomposition methods, ensuring stationarity, utilizing differencing judiciously, accounting for dependence, and recognizing the presence of noise, analysts can extract meaningful insights and build robust models that effectively predict future outcomes.

#### Smoothing Techniques

**Smoothing** is a fundamental process in reducing the noise present in our series and revealing underlying patterns that might emerge over time. In time series analysis, there are three significant smoothing methods.

**Single Exponential Smoothing**: Also known as Simple Exponential Smoothing, this is a time series forecasting technique for univariate data without trends or seasonality. SES performs well on stationary series. Here, alpha is a smoothing factor that takes values between 0 and 1. It determines how quickly weights diminish for previous observations. (yt​ = Smoothed value at time t, α = Smoothing constant (0 &lt; α &lt; 1), xt= Actual value at time t, y(t−1) = Smoothed value at time t−1)

$$S_t = \alpha X_t + (1 – \alpha) S_{t-1}$$

$$F_{t+k} = S_t \quad \text{(for k = 1, 2, 3, ...)}$$

Where:

* $S_t$: The smoothed value (or level) of the series at time $t$.
* $X_t$: The actual observed value at time $t$.
* $S_{t-1}$: The smoothed value from the previous period ($t-1$).
* $\alpha$ (alpha): The smoothing coefficient ($0 \le \alpha \le 1$). This coefficient determines how much weight is given to the most recent observation. As alpha approaches 1, the model responds more quickly to recent changes; as it approaches 0, the smoothing is greater and the model is less responsive to recent changes.
* $F_{t+k}$: The forecast for $k$ steps ahead from time $t$.

**Double Exponential Smoothing**: Double Exponential Smoothing is an extension of Exponential Smoothing that explicitly adds support for trends in univariate time series. Double Exponential Smoothing with additive trend is classically referred to as Holt’s Linear Trend model. Here, beta is the trend smoothing factor and takes values between 0 and 1.

$$S_t = \alpha X_t + (1 – \alpha) (S_{t-1} + b_{t-1})$$

$$b_t = \beta (S_t – S_{t-1}) + (1 – \beta) b_{t-1}$$

$$F_{t+k} = S_t + k b_t$$

Where:

* $S_t$: Smoothed value at time $t$
* $\alpha$: Smoothing constant ($0 < \alpha < 1$)
* $X_t$: Actual value at time $t$
* $b_t$: Trend component at time $t$
* $\beta$: Trend smoothing constant ($0 < \beta < 1$)
* $F_{t+k}$: Forecast value at time $t$ for $k$ periods ahead
* $k$: Number of periods ahead for forecasting

**Triple Exponential Smoothing**: Triple Exponential Smoothing, an extension of Exponential Smoothing, explicitly incorporates support for seasonality in univariate time series. This method is sometimes called Holt-Winters Exponential Smoothing. Gamma is the seasonal smoothing factor, and L represents the length of the season.

$$L_t = \alpha \left( \frac{X_t}{S_{t-m}} \right) + (1 – \alpha) (L_{t-1} + T_{t-1})$$

$$T_t = \beta (L_t – L_{t-1}) + (1 – \beta) T_{t-1}$$

$$S_t = \gamma \left( \frac{X_t}{L_t} \right) + (1 – \gamma) S_{t-m}$$

$$F_{t+k} = (L_t + k T_t) S_{t-m+k \pmod m}$$

Where:

* $L_t$: Smoothed level at time $t$
* $T_t$: Smoothed trend at time $t$
* $S_t$: Seasonal component at time $t$
* $X_t$: Actual value at time $t$
* $\alpha$: Level smoothing coefficient ($0 < \alpha < 1$)
* $\beta$: Trend smoothing coefficient ($0 < \beta < 1$)
* $\gamma$: Seasonal smoothing coefficient ($0 < \gamma < 1$)
* $m$: Number of periods in a season
* $k$: Number of periods ahead for forecasting

By applying these smoothing techniques, analysts can enhance their ability to discern meaningful patterns and trends in time series data while mitigating the impact of noise. The selection of appropriate smoothing factors and the consideration of the type of trends or seasonality present in the data are vital decisions that significantly impact the accuracy of forecasts. These techniques provide valuable tools for understanding and predicting complex temporal data patterns in diverse fields ranging from economics to healthcare to meteorology.

#### Autoregression (AR) Models

The Autoregression (AR) method models the next step in a sequence as a linear function of observations from previous time steps. This method is suitable for univariate time series without trends or seasonality. It’s important to note that our data needs to be stationary before applying any statistical model.

#### Stationary Data

A stationary time series is one whose properties—such as mean, variance, and covariance—are not dependent on the time at which the series is observed. Hence, time series with trends or seasonality are not stationary—trend and seasonality affect the value of the time series at different points in time. The model will work effectively only if specific features (mean, variance, covariance) are consistent across selected time intervals. If there’s a trend in your dataset, you need to remove it (via differencing or detrending) before proceeding.

Stationary data characteristics include:

- Constant mean
- Constant variance
- Stationary covariance
- Autocorrelation

An autoregression model assumes that previous observations of a time series can be useful for predicting the value at the next time step. This relationship between variables is called correlation. Positive correlation exists when both variables change in the same direction; negative correlation exists when they change in opposite directions. Various statistical measures can be employed to calculate the correlation between the output variable and the values at specific lagged time steps. The stronger the correlation between the output variable and a delayed variable, the more weight the autoregression model can assign to that variable during modeling.

**Lags:** These are values of the considered time interval and are referred to as lags. More generally, a lag k autocorrelation is the correlation between values that are k time periods apart.

**ACF (Autocorrelation Function):** ACF is an autocorrelation function that provides us with autocorrelation values of any series with its lagged values. In simple terms, it explains how well the current value of the series is related to its past values. A time series can have components like trend, seasonality, cyclic, and residual. ACF takes all these components into account while finding correlations, making it a ‘complete autocorrelation graph.’

**PACF (Partial Autocorrelation Function):** PACF is a partial autocorrelation function. As the name suggests, PACF is a subset of ACF. PACF captures the correlation between observations made at two points in time while accounting for any influences from other data points. We can use PACF to determine the optimal number of terms to use in an AR model. The number of terms determines the order of the model. Identifying an AR model is usually done using the best PACF values.

#### Moving Average (MA)

Also known as Rolling or Running Average, a Moving Average is used to analyze time series data by calculating the averages of different subsets of the full dataset. Since it involves taking the mean of the dataset over time, it’s also called Moving Mean (MM) or Rolling Mean.

#### Autoregressive Moving Average (ARMA)

The ARMA method models the next step in a sequence as a linear function of observations and residual errors from previous time steps. It combines both Autoregressive (AR) and Moving Average (MA) models.

#### Autoregressive Integrated Moving Average (ARIMA)

ARIMA is an extension of ARMA that models the next step in a sequence as a linear function of differenced observations and residual errors from previous time steps. In addition to combining AR and MA models, it also incorporates differencing to make the series stationary. This integration step is denoted as “I” in ARIMA.

#### Seasonal Autoregressive Integrated Moving Average (SARIMA)

SARIMA models the next step in a sequence as a linear function of differenced observations, residual errors, differenced seasonal observations, and seasonal residual errors from previous time steps. It combines ARIMA with the ability to perform autoregression, differencing, and moving average modeling at a seasonal level.

#### Seasonal Autoregressive Integrated Moving Average with Exogenous Regressors (SARIMAX)

SARIMAX is an extension of SARIMA that includes modeling external variables. It can be used to model various models covered by external variables like ARX, MAX, ARMAX, and ARIMAX. This method is suitable for univariate time series with trend and/or seasonal components as well as external variables.

#### Vector Autoregression Moving Average (VARMA)

VARMA method models the next step in each time series using an ARMA model. It’s a generalization of ARMA to multiple parallel time series, i.e., multivariate time series. It’s suitable for multivariate time series without trend and seasonal components.

#### Vector Autoregression Moving Average with Exogenous Regressors (VARMAX)

VARMAX, an extension of VARMA, includes modeling external variables. It’s a multivariate version of the ARMAX method, covering external variables’ modeling within the VARMA framework.

#### Example of an ARIMA Model in python

```
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA

# Loading the dataset
data = pd.read_csv('data.csv')

# Converting the 'Date' column to datetime
data['Date'] = pd.to_datetime(data['Date'])

# Setting the 'Date' column as the index
data.set_index('Date', inplace=True)

# Creating and fitting the ARIMA model
# The order parameter is (p, d, q) where:
# p = number of lag observations included in the model (autoregressive part)
# d = number of times that the raw observations are differenced (differencing part)
# q = size of the moving average window (moving average part)
model = ARIMA(data, order=(1, 1, 1))
model_fit = model.fit()

# Making predictions for the next 5 time steps
forecast = model_fit.forecast(steps=5)

# Printing the forecasted values
print(forecast)
```

This code example loads the time series data from a file called data.csv. It then sets the data as a time series by converting the ‘Date’ column to datetime and setting it as the index. The ARIMA model with an order of (1, 1, 1) is created and fitted to the data. Finally, predictions for the next 5 steps are made using the forecast method.

#### Example of a SARIMA Model

```
import pandas as pd
from statsmodels.tsa.statespace.sarimax import SARIMAX

# Loading the dataset
data = pd.read_csv('data.csv')

# Converting the 'Date' column to datetime
data['Date'] = pd.to_datetime(data['Date'])

# Setting the 'Date' column as the index
data.set_index('Date', inplace=True)

# Creating and fitting the SARIMA model
# The order parameter is (p, d, q) where:
# p = number of lag observations included in the model (autoregressive part)
# d = number of times that the raw observations are differenced (differencing part)
# q = size of the moving average window (moving average part)
# The seasonal_order parameter is (P, D, Q, s) where:
# P = seasonal autoregressive order
# D = seasonal differencing order
# Q = seasonal moving average order
# s = number of time steps for a single seasonal period
model = SARIMAX(data, order=(1, 1, 1), seasonal_order=(1, 1, 1, 12))
model_fit = model.fit()

# Making predictions for the next 5 time steps
forecast = model_fit.forecast(steps=5)

# Printing the forecasted values
print(forecast)
```

In this example, the time series data is loaded from a file called data.csv. The data is then set as a time series by converting the ‘Date’ column to datetime and setting it as the index. The SARIMA model with an order of (1, 1, 1) and seasonal order of (1, 1, 1, 12) is created and fitted to the data. Finally, predictions for the next 5 steps are made using the forecast method.

#### Example of a ETS Model

```
import pandas as pd
from statsmodels.tsa.holtwinters import ExponentialSmoothing

# Loading the dataset
data = pd.read_csv('data.csv')

# Converting the 'Date' column to datetime
data['Date'] = pd.to_datetime(data['Date'])

# Setting the 'Date' column as the index
data.set_index('Date', inplace=True)

# Creating and fitting the ETS model
# The parameters are:
# trend: 'add' indicates an additive trend component
# seasonal: 'add' indicates an additive seasonal component
# seasonal_periods: the number of periods in a season (e.g., 12 for monthly data with yearly seasonality)
model = ExponentialSmoothing(data, trend='add', seasonal='add', seasonal_periods=12)
model_fit = model.fit()

# Making predictions for the next 5 time steps
forecast = model_fit.forecast(steps=5)

# Printing the forecasted values
print(forecast)
```

In this example, the time series data is loaded from a file called data.csv. The data is then set as a time series by converting the ‘Date’ column to datetime and setting it as the index. The ETS model with an additive trend and additive seasonality is created and fitted to the data. The seasonal\_periods parameter is set to 12, indicating monthly seasonality. Finally, predictions for the next 5 steps are made using the forecast method.

#### Example of a GARCH Model

```
import pandas as pd
import arch

# Loading the dataset
data = pd.read_csv('data.csv')

# Converting the 'Date' column to datetime
data['Date'] = pd.to_datetime(data['Date'])

# Setting the 'Date' column as the index
data.set_index('Date', inplace=True)

# Creating and fitting the GARCH model
# The parameters are:
# vol: 'Garch' specifies that a GARCH model is used for modeling volatility
# p: the number of lagged volatility terms (GARCH order)
# q: the number of lagged squared returns terms (ARCH order)
model = arch.arch_model(data, vol='Garch', p=1, q=1)
model_fit = model.fit()

# Making volatility forecasts for the next 5 time steps
forecast = model_fit.forecast(horizon=5)

# Printing the forecasted variances
print(forecast.variance.values[-1, :])
```

This example loads the time series data from a file called data.csv. The data is then set as a time series by converting the ‘Date’ column to datetime and setting it as the index. The GARCH model with a p-value of 1 and q-value of 1 is created and fitted to the data. Finally, volatility forecasts are made using the forecast method.

#### data.csv Example

```
Date,Value 
2010-01-01,10 
2010-02-01,15 
2010-03-01,12 
2010-04-01,18 
2010-05-01,20 
2010-06-01,16 
2010-07-01,14 
2010-08-01,18 
2010-09-01,22 
2010-10-01,25 
2010-11-01,20 
2010-12-01,16
```

Once the appropriate time series forecasting model is chosen, it is utilized to generate predictions for the data. These predictions are typically compared with the actual values, which are used to assess the goodness of fit of the model. Common performance metrics used to evaluate the model’s performance include mean squared error (MSE), mean absolute error (MAE), and root mean squared error (RMSE).