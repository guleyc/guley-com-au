---
title: 'Multi-Timeframe Price Predictor'
date: '2025-03-25'
author: 'Cagatay Guley'
layout: post
permalink: /multi-timeframe-price-predictor/
redirect_from:
  - /multi-timeframe-price-predictor
categories: [engineering]
tags: [price, prediction, indicator, binance, crypto]
image: crypto-asset.png
---

A powerful, multi-timeframe price prediction indicator that adapts to any market and price range.

## ✨ Main Features
- Multi-timeframe predictions (1min to 1D)
- Adaptive price formatting for any asset (from BTC to small alt coins)
- Clear Buy/Sell signals with visual alerts
- Advanced technical analysis engine using RSI, MACD, Bollinger Bands and EMAs
- Price prediction paths showing potential future price moves
- Confidence-weighted predictions with volatility adjustment

## 🔧 Settings
- Prediction period: Lookback period for analyzing patterns (default: 14)
- Smoothing factor: How smoothly predictions change (0.1-0.9)
- Decimal places: Auto-adjusts to asset price or manually set precision
- Volatility weight: Adjust impact of market volatility on predictions
- Confidence level: Set how aggressive predictions should be

## 📊 Signals Explained
- STRONG BUY: High confidence upward movement expected
- BUY: Moderate upward movement expected
- NEUTRAL: No clear direction
- SELL: Moderate downward movement expected
- STRONG SELL: High confidence downward movement expected

## 📈 How To Use
1. Watch the signals table for different timeframes
2. Look for confluence across multiple timeframes
3. Use prediction paths to gauge potential targets
4. Combine with your trading strategy for confirmation

Perfect for both day trading and longer-term position analysis. Works on stocks, forex, crypto, and commodities.

```
//@version=6
//
// @author guleyc
// 
indicator("Multi-Timeframe Price Predictor", overlay=true)

// Main Settings
predictionPeriods = input.int(14, "Prediction period", minval=5, maxval=100)
smoothingFactor = input.float(0.5, "Smoothing factor", minval=0.1, maxval=0.9, step=0.1) 
showBuySell = input.bool(true, "Show Buy/Sell signals")
timeFrames = input.string("1,5,15,1H,4H,1D", "Prediction timeframes (comma separated)")
manualDecimalsOption = input.string("Auto", "Decimal places", options=["Auto", "2", "4", "6", "8"])

// Enhanced settings
volatilityWeight = input.float(1.0, "Volatility weight", minval=0.1, maxval=2.0, step=0.1)
confidenceLevel = input.float(0.75, "Confidence level", minval=0.5, maxval=1.0, step=0.05)

// Color settings
bullColor = color.rgb(0, 180, 0, 80)   // Green
bearColor = color.rgb(255, 0, 0, 80)   // Red

// Indicator calculations
rsi = ta.rsi(close, 14)
rsiShort = ta.rsi(close, 7)
[macdLine, signalLine, _] = ta.macd(close, 12, 26, 9)
[middle, upper, lower] = ta.bb(close, 20, 2)
ema20 = ta.ema(close, 20)
ema50 = ta.ema(close, 50)
ema200 = ta.ema(close, 200)

// Enhanced signal calculations
rsiSignal = rsi < 30 ? 1 : rsi > 70 ? -1 : (50 - rsi) / 20
rsiShortSignal = rsiShort < 30 ? 1 : rsiShort > 70 ? -1 : (50 - rsiShort) / 20
macdSignal = macdLine > signalLine ? 1 : macdLine < signalLine ? -1 : (macdLine - signalLine) * 5
bbSignal = close < lower ? 1 : close > upper ? -1 : (middle - close) / (upper - lower) * 2
emaSignal = ema20 > ema50 ? 0.5 : ema20 < ema50 ? -0.5 : 0
emaLongSignal = ema50 > ema200 ? 0.5 : ema50 < ema200 ? -0.5 : 0

// Total signal with weighted approach
totalSignals = (rsiSignal * 2 + rsiShortSignal + macdSignal * 1.5 + bbSignal * 1.5 + emaSignal + emaLongSignal) / 7.5
normSignal = math.max(math.min(totalSignals, 1), -1)  // Normalize between -1 and 1

// Volatility calculation
atr = ta.atr(14)
atrShort = ta.atr(7) 
atrRatio = atr / ta.sma(atr, 50)
volatilityFactor = math.min(atrRatio * volatilityWeight, 3.0)

// Split timeframe array
var string[] tf_array = str.split(timeFrames, ",")

// Auto-detect decimals based on price
getDecimalPlaces() =>
    int decimals = 2 // default for most assets
    
    if manualDecimalsOption != "Auto"
        // Bu satırda hata oluşuyor. str.tonumber() float döndürüyor, int gerekiyor
        // FIX: int değere çevirme eklendi
        decimals := int(str.tonumber(manualDecimalsOption))
    else
        if close < 0.0001
            decimals := 8
        else if close < 0.01
            decimals := 6
        else if close < 1
            decimals := 4
        else if close < 100
            decimals := 2
        else
            decimals := 2
    
    decimals

// Format price with appropriate decimal places
formatPrice(price) =>
    int decimals = getDecimalPlaces()
    string format = "#." + str.repeat("#", decimals)
    str.tostring(price, format)

// Calculate prediction for each timeframe
calculatePrediction(timeframe) =>
    float mult = timeframe == "1" ? 0.5 : timeframe == "3" ? 0.75 : timeframe == "5" ? 1.0 : timeframe == "15" ? 2.0 : timeframe == "30" ? 3.0 : timeframe == "1H" ? 5.0 : timeframe == "4H" ? 15.0 : timeframe == "1D" ? 30.0 : timeframe == "1W" ? 120.0 : 4.0
    
    // Enhanced prediction logic
    float priceDelta = close * (normSignal * volatilityFactor * 0.01 * mult)
    float rawPrediction = close + priceDelta
    
    // Apply confidence level
    float adjustedPrediction = close + priceDelta * confidenceLevel
    
    // Smoothing with recent price action
    var float smoothedPrediction = na
    smoothedPrediction := na(smoothedPrediction) ? adjustedPrediction : adjustedPrediction * (1 - smoothingFactor) + smoothedPrediction * smoothingFactor
    
    // Calculate confidence based on signal strength and volatility
    float signalConfidence = math.abs(normSignal) * confidenceLevel
    float volatilityImpact = math.max(0, 1 - (atrRatio - 1) * 0.5)
    float totalConfidence = math.min(signalConfidence * volatilityImpact, 0.95)
    
    [smoothedPrediction, normSignal * volatilityFactor, totalConfidence]

// Arrays to hold last values for signals and predictions
var float[] lastPredictions = array.new_float(10, na)
var float[] lastSignals = array.new_float(10, na)
var float[] lastConfidence = array.new_float(10, na)
var int lastSignalDir = 0

// Advanced buy-sell conditions
buySignal = normSignal > 0.4 and normSignal > normSignal[1] and (lastSignalDir <= 0 or (lastSignalDir > 0 and normSignal > normSignal[3] * 1.2))
sellSignal = normSignal < -0.4 and normSignal < normSignal[1] and (lastSignalDir >= 0 or (lastSignalDir < 0 and normSignal < normSignal[3] * 1.2))

if buySignal or sellSignal
    lastSignalDir := buySignal ? 1 : -1

// Update predictions and indicators only on barstate.islast
if barstate.islast
    // Create prediction table
    var table predictionTable = table.new(position.top_right, 4, math.min(array.size(tf_array), 10) + 1, bgcolor=color.rgb(0, 0, 0, 80), frame_width=2, border_width=1)
    
    // Table headers
    table.cell(predictionTable, 0, 0, "Timeframe", bgcolor=color.rgb(0, 0, 40, 90), text_color=color.white)
    table.cell(predictionTable, 1, 0, "Price", bgcolor=color.rgb(0, 0, 40, 90), text_color=color.white)
    table.cell(predictionTable, 2, 0, "% Change", bgcolor=color.rgb(0, 0, 40, 90), text_color=color.white)
    table.cell(predictionTable, 3, 0, "Signal", bgcolor=color.rgb(0, 0, 40, 90), text_color=color.white)
    
    // Recreate labels
    var label[] predictionLabels = array.new<label>()
    
    // Clear previous labels
    if array.size(predictionLabels) > 0
        for i = 0 to array.size(predictionLabels) - 1
            label.delete(array.get(predictionLabels, i))
        array.clear(predictionLabels)
    
    // Calculate predictions for each timeframe
    int tfCount = math.min(array.size(tf_array), 10)
    
    for i = 0 to tfCount - 1
        string tf = array.get(tf_array, i)
        [predictedPrice, signalStrength, confidence] = calculatePrediction(tf)
        
        // Store values
        array.set(lastPredictions, i, predictedPrice)
        array.set(lastSignals, i, signalStrength)
        array.set(lastConfidence, i, confidence)
        
        // Calculate percentage change
        float percentChange = (predictedPrice - close) / close * 100
        
        // Calculate color and signal text
        color predColor = signalStrength > 0 ? bullColor : bearColor
        string signalText = signalStrength > 0.5 ? "STRONG BUY" : signalStrength > 0.2 ? "BUY" : signalStrength < -0.5 ? "STRONG SELL" : signalStrength < -0.2 ? "SELL" : "NEUTRAL"
        
        // Format percent change and price with appropriate decimals
        string formattedPrice = formatPrice(predictedPrice)
        string changeText = percentChange > 0 ? "+" + str.tostring(math.round(percentChange * 100) / 100, "#.##") + "%" : str.tostring(math.round(percentChange * 100) / 100, "#.##") + "%"
        
        // Add to table - make sure to stay within bounds
        table.cell(predictionTable, 0, i + 1, tf, text_color=color.white)
        table.cell(predictionTable, 1, i + 1, formattedPrice, text_color=percentChange > 0 ? color.green : color.red)
        table.cell(predictionTable, 2, i + 1, changeText, text_color=percentChange > 0 ? color.green : color.red)
        table.cell(predictionTable, 3, i + 1, signalText, text_color=signalStrength > 0.5 ? color.rgb(0, 255, 0) : signalStrength > 0 ? color.rgb(0, 200, 0) : signalStrength < -0.5 ? color.rgb(255, 0, 0) : signalStrength < 0 ? color.rgb(200, 0, 0) : color.gray)
        
        // Price prediction label with adaptive formatting
        if i < 4  // Show more predictions, up to 4
            int labelOffset = i == 0 ? 3 : i == 1 ? 7 : i == 2 ? 12 : 20
            label newLabel = label.new(bar_index + labelOffset, predictedPrice, tf + ": " + formattedPrice + " (" + changeText + ")", color=color.new(predColor, 20), style=signalStrength > 0 ? label.style_label_up : label.style_label_down, textcolor=color.white)
            array.push(predictionLabels, newLabel)

// Always show basic moving averages
plot(ema20, "EMA 20", color.new(color.blue, 60), 1)
plot(ema50, "EMA 50", color.new(color.yellow, 60), 1)

// Show buy/sell signals
plotshape(showBuySell and buySignal ? low - atr : na, "Buy Signal", shape.triangleup, location.belowbar, color.green, 0, text="BUY")
plotshape(showBuySell and sellSignal ? high + atr : na, "Sell Signal", shape.triangledown, location.abovebar, color.red, 0, text="SELL")

// Show prediction lines (starting from the last bar)
var line[] predictionLines = array.new<line>()

// Clear previous lines
if barstate.islast and array.size(predictionLines) > 0
    for i = 0 to array.size(predictionLines) - 1
        line.delete(array.get(predictionLines, i))
    array.clear(predictionLines)

// Draw new prediction lines
if barstate.islast
    for i = 0 to math.min(array.size(tf_array) - 1, 4)
        if not na(lastPredictions.get(i))
            color lineColor = lastSignals.get(i) > 0 ? color.new(color.green, 50) : color.new(color.red, 50)
            int lineOffset = i == 0 ? 3 : i == 1 ? 7 : i == 2 ? 12 : i == 3 ? 20 : 30
            newLine = line.new(x1=bar_index, y1=close, x2=bar_index + lineOffset, y2=lastPredictions.get(i), color=lineColor, width=2, style=lastSignals.get(i) > 0 ? line.style_solid : line.style_dashed)
            array.push(predictionLines, newLine)
```