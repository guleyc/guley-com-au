---
title: 'Inverse Fisher Transform Indicators with MACD v6'
date: '2023-08-25'
author: 'Cagatay Guley'
layout: post
permalink: /inverse-fisher-transform-indicators-with-macd-v6/
redirect_from:
  - /inverse-fisher-transform-indicators-with-macd-v6
categories: [engineering]
tags: [inverse, fisher, transform, indicators, macd]
image: macd.png
mathjax: true
---

This document provides a detailed technical breakdown of the "Inverse Fisher Transform Indicators with MACD v6," a custom indicator developed in Pine Script for the TradingView platform. The primary objective of this indicator is to normalize and transform the output of several common oscillators—Stochastic, RSI, CCI, and MFI—using the Inverse Fisher Transform (IFT). This process aims to generate clearer, more timely trading signals by reducing noise and normalizing oscillator behavior. The indicator aggregates these transformed values into a unified rating system and integrates MACD as a supplementary tool for signal confirmation. This paper will detail the mathematical foundations, calculation pipeline, and practical application of each component.

## Core Concept: The Inverse Fisher Transform (IFT)

The standard Fisher Transform, developed by John Ehlers, is a mathematical operation that transforms any data set into a nearly Gaussian (normal) probability distribution. In trading, this is useful for identifying price reversals.

The **Inverse Fisher Transform (IFT)**, as its name suggests, performs the reverse operation. It takes a normalized input (typically in the range of `[-1, 1]`) and maps it to a new output, creating sharp, wave-like indicator movements that are less prone to the choppiness of traditional oscillators. The primary benefit is its ability to pinpoint turning points with minimal lag.

### Mathematical Formulation

The IFT is mathematically equivalent to the **hyperbolic tangent function (`tanh`)**. If we have a normalized value `x`, the IFT is calculated as:

$$y_{IFT} = \frac{e^{2x} - 1}{e^{2x} + 1} = \tanh(x)$$

## Indicator Components and Calculation Pipeline

The indicator follows a multi-step process to generate its final output.

### Step 1: Raw Oscillator Calculation
The script first calculates the values of several standard oscillators.

#### a) Relative Strength Index (RSI)
$$RSI = 100 - \frac{100}{1 + RS}$$

#### b) Commodity Channel Index (CCI)
$$CCI = \frac{\text{Typical Price} - \text{SMA}(\text{Typical Price}, n)}{0.015 \times \text{Mean Deviation}}$$

#### c) Stochastic Oscillator
$$\%K = 100 \times \frac{\text{Current Close} - \text{Lowest Low}_n}{\text{Highest High}_n - \text{Lowest Low}_n}$$

#### d) Money Flow Index (MFI)
$$MFI = 100 - \frac{100}{1 + \text{Money Flow Ratio}}$$

### Step 2: Smoothing with Weighted Moving Average (WMA)
To reduce signal noise, the raw values from each oscillator are smoothed using a Weighted Moving Average (WMA).
$$WMA = \frac{\sum_{i=1}^{n} \text{Price}_i \times w_i}{\sum_{i=1}^{n} w_i}$$

### Step 3: Normalization and IFT Application
The smoothed oscillator values are normalized and then used as the input `x` in the IFT formula:
$$\text{Final Value} = \tanh(\text{Normalized Value})$$

## Signal Generation and Rating System

The final IFT-transformed values determine the market rating:
- **Strong Buy:** IFT value > 0.5
- **Buy:** IFT value is positive.
- **Neutral:** IFT value is near zero.
- **Sell:** IFT value is negative.
- **Strong Sell:** IFT value < -0.5

### Alerting Conditions
1.  **Level Crossing:** Alert when IFT crosses overbought/oversold levels.
2.  **Gradient Change:** Alert when the slope of the IFT line changes direction.

## Complementary Tool: Moving Average Convergence Divergence (MACD)

MACD is included as a supplementary visual tool for confirmation.
- **MACD Line:** EMA(12) - EMA(26)
- **Signal Line:** EMA(9) of MACD Line
- **Histogram:** MACD Line - Signal Line

The "Inverse Fisher Transform Indicators with MACD v6" script is a sophisticated tool that leverages the normalizing power of the IFT to enhance traditional oscillators. By smoothing data, applying the IFT, and aggregating the results, it provides a powerful method for identifying market reversals with improved clarity and reduced lag.

```
//@version=5
//
// @author guleyc
// 
indicator('Inverse Fisher Transform Indicators with MACD v6', shorttitle='MACD_IFT_V6')
STOCHASTIC = input(false, title='IFT on Stochastic Line')
RSI = input(false, title='IFT on RSI Line')
CCI = input(false, title='IFT on CCI Line')
MFI = input(false, title='IFT on MFI Line')
AVERAGE = input(true, title='IFT AVERAGE Line')
srcData = input(title='Price data', defval=close)

// fixed lines
hline(0.5, color=#FF6961)
hline(0, color=#CFCFC4)
hline(-0.5, color=#77DD77)

// smoothing
wmalength = input(9, title='Smoothing Length')

// cci calculations
ccilength = input(7, 'CCI Length')
cv1 = 0.1 * (ta.cci(close, ccilength) / 4)
cv2 = ta.wma(cv1, wmalength)
RCCI = (math.exp(2 * cv2) - 1) / (math.exp(2 * cv2) + 1)

// rsi calculations
rsilength = input(7, 'RSI Length')
rv1 = 0.1 * (ta.rsi(close, rsilength) - 50)
rv2 = ta.wma(rv1, wmalength)
RRSI = (math.exp(2 * rv2) - 1) / (math.exp(2 * rv2) + 1)

// stoch calculations
stochlength = input(7, 'STOCH Length')
sv1 = 0.1 * (ta.stoch(close, high, low, stochlength) - 50)
sv2 = ta.wma(sv1, wmalength)
RSTO = (math.exp(2 * sv2) - 1) / (math.exp(2 * sv2) + 1)

// mfi calculations
mfilength = input(7, 'MFI Length')
source = hlc3
up = math.sum(volume * (ta.change(source) <= 0 ? 0 : source), mfilength)
lo = math.sum(volume * (ta.change(source) >= 0 ? 0 : source), mfilength)
mfi = 100.0 - 100.0 / (1.0 + up / lo)
mv1 = 0.1 * (mfi - 50)
mv2 = ta.wma(mv1, wmalength)
RMFI = (math.exp(2 * mv2) - 1) / (math.exp(2 * mv2) + 1)

// average calculations
AVINV = (RCCI + RRSI + RSTO + RMFI) / 4

// plot lines
plot(AVERAGE and AVINV ? AVINV : na, color=color.new(#E6BE8A, 0), linewidth=3, title='AVERAGE')
plot(STOCHASTIC and RSTO ? RSTO : na, color=color.new(#DA8A67, 0), linewidth=3, title='STOCH')
plot(RSI and RRSI ? RRSI : na, color=color.new(#F984E5, 0), linewidth=3, title='RSI')
plot(CCI and RCCI ? RCCI : na, color=color.new(#96DED1, 0), linewidth=3, title='CCIv2')
plot(MFI and RMFI ? RMFI : na, color=color.new(#BC987E, 0), linewidth=3, title='MFI')

// macd constants, global arrays and inputs {

// input `options` selections.
string RT1 = "MAs and Oscillators"
string RT2 = "MAs"
string RT3 = "Oscillators"
string ON  = "On"
string OFF = "Off"
string TD0 = "None"
string TD1 = "Longs"
string TD2 = "Shorts"
string TD3 = "Longs and Shorts"
string PS1 = "Columns"
string PS2 = "Histogram"
string PS3 = "Area"
string PS4 = "Line"

// input tooltips
string C_TT  = "Pick only one. These are preset colors, but you can modify anyone of them."
string TF_TT = "When using a higher timeframe, values do not repaint, which means that only values from COMPLETED timeframes are displayed."
string RP_TT = "When NOT using a higher timeframe, setting this to 'Off' will show you the confirmed value from the last closed bar. This ensures the rating will not change during the current bar."
string MA_TT = "Determines the respective weight of MAs and Oscillators when both are used to calculate the overall rating. Equal weight for MAs and Oscillators is 50%. If you use 60% for MAs, then Oscillators weigh in at 40% of the overall rating."
string WD_TT = "Width for styles other than 'Columns'."
string DR_TT = "Markers only become active when you select a direction here. Your marker setup defines the conditions that will trigger an alert configured on the indicator."
string AT_TT = "If both Longs and Shorts are displayed, shows only the first marker in a given direction. This prevents triggering successive markers in the same direction. Has no effect when only long or only short markers are displayed."
string LU_TT = "The level that must be breached upward to trigger a long.\n'Buy' state corresponds to 0.1\n'Strong Buy' state corresponds to 0.5\n\nUse zero if you do not want triggers on this condition."
string LD_TT = "The level that must be breached downward to trigger a short.\n'Sell' state corresponds to -0.1\n'Strong Sell' state corresponds to -0.5\n\nUse zero if you do not want triggers on this condition."
string GD_TT = "The number of cumulative advances or declines in the signal (capped to 5). The maximum of 5 corresponds to the brightest color for the signal.\n\nUse zero if you do not want triggers on this condition."

// levels determining
float LEVEL_STRONG = 0.5
float LEVEL_WEAK   = 0.1

// color constants.
color BLUE    = #013BCAff
color GOLD    = #CCCC00ff
color GRAY    = #808080ff
color LIME    = #00FF00ff
color PINK    = #FF0080ff
color RED     = #FF0000ff
color VIOLET  = #AA00FFff
color WHITE   = #FFFFFFff
color NEUTRAL = #434650

// global arrays
var float[] ratings = array.new_float(3)
var string[] TEXTS = array.from("All", "MAs", "Osc")
var int[] indices = array.new_int(3)

// ————— Inputs
string  GRP1            = "Calculations"
string  tfInput         = input.timeframe("",        "Higher timeframe",         group = GRP1, tooltip = TF_TT)
bool    repaintInput    = input.string(ON,           "Repainting",               group = GRP1, tooltip = RP_TT, options = [ON, OFF]) == ON
string  calcsInput      = input.string(RT1,          "Rating uses",              group = GRP1,                  options = [RT2, RT3, RT1])
float   maInput         = input.int(50,              "Weight of MAs (%)",        group = GRP1, tooltip = MA_TT, minval  = 0, maxval = 100, step = 10) / 100
string  styleInput      = input.string(PS1,          "Plot style",               group = GRP1, inline  = "10",  options = [PS1, PS2, PS3, PS4])
int     widthInput      = input.int(1,               "",                         group = GRP1, inline  = "10",  minval  = 1, maxval = 50, tooltip = WD_TT)
color   colorInput1     = input.color(LIME,          "Bull  ",                   group = GRP1, inline  = "14",  tooltip = C_TT)
bool    showColorInput1 = input.bool(true,           "",                         group = GRP1, inline  = "14")
color   colorInput2     = input.color(GOLD,          "",                         group = GRP1, inline  = "14")
bool    showColorInput2 = input.bool(false,          "",                         group = GRP1, inline  = "14")
color   colorInput3     = input.color(WHITE,         "",                         group = GRP1, inline  = "14")
bool    showColorInput3 = input.bool(false,          "",                         group = GRP1, inline  = "14")
color   colorInput4     = input.color(PINK,          "Bear   ",                  group = GRP1, inline  = "15",  tooltip = C_TT)
bool    showColorInput4 = input.bool(true,           "",                         group = GRP1, inline  = "15")
color   colorInput5     = input.color(VIOLET,        "",                         group = GRP1, inline  = "15")
bool    showColorInput5 = input.bool(false,          "",                         group = GRP1, inline  = "15")
color   colorInput6     = input.color(BLUE,          "",                         group = GRP1, inline  = "15")
bool    showColorInput6 = input.bool(false,          "",                         group = GRP1, inline  = "15")
color   neutColorInput  = input.color(NEUTRAL,       "Neutral",                  group = GRP1, inline  = "16")

string  GRP2            = "Alert Markers (non-repainting)"
string  dirInput        = input.string(TD0,          "Direction",                group = GRP2, tooltip = DR_TT, options = [TD0, TD1, TD2, TD3]) 
bool    altInput        = input.string(ON,           "Alternate Longs & Shorts", group = GRP2, tooltip = AT_TT, options = [ON, OFF]) == ON and dirInput == TD3
float   levelUpInput    = input.float( LEVEL_STRONG, "Longs Level",              group = GRP2, tooltip = LU_TT, minval  =  0, maxval = 1, step = 0.05) 
float   levelDnInput    = input.float(-LEVEL_STRONG, "Shorts Level",             group = GRP2, tooltip = LD_TT, minval  = -1, maxval = 0, step = 0.05) 
float   gradInput       = input.float(0,             "Cumulative adv./decl.",    group = GRP2, tooltip = GD_TT, minval  =  0, maxval = 5, step = 1) 
string  alertUpInput    = input.string("Long",       "Alert message: Long",      group = GRP2, inline  = "14")
string  alertDnInput    = input.string("Short",      "Short",                    group = GRP2, inline  = "14")

// determine base bull/bear colors as per user selection
color bullColor = showColorInput1 ? colorInput1 : showColorInput2 ? colorInput2 : showColorInput3 ? colorInput3 : colorInput1
color bearColor = showColorInput4 ? colorInput4 : showColorInput5 ? colorInput5 : showColorInput6 ? colorInput6 : colorInput4

bool doLongs  = dirInput == TD1 or dirInput == TD3
bool doShorts = dirInput == TD2 or dirInput == TD3

style = switch styleInput 
    PS4 => plot.style_line
    PS3 => plot.style_area  
    PS2 => plot.style_histogram
    =>     plot.style_columns 
// }

// functions {

//  Helper functions.
rising(series float src)  => 
    bool result = ta.rising(src, 1)
falling(series float src) => 
    bool result = ta.falling(src, 1)
trendUp() => 
    bool result = close > ta.ema(close, 50)
trendDn() => 
    bool result = close < ta.ema(close, 50)
notNa(series float src) => 
    bool result = not na(src) and not na(src[1])
ratingMa(series float ma, series float src) => 
    float result = math.sign(src - ma)
ratingBullBear(series bool bullCond, series bool bearCond) => 
    int result = na(bullCond) or na(bearCond) ? na : bullCond ? 1 : bearCond ? -1 : 0

// ichimoku rating
donchian(series int length) => 
    float result = math.avg(ta.lowest(length), ta.highest(length))
ratingIchimoku() =>
    float conversion = donchian(9)
    float base       = donchian(26)
    float lead1      = math.avg(conversion, base)
    float lead2      = donchian(52)
    float result     = ratingBullBear(
          lead1 > lead2 and close > lead1 and close < base and close[1] < conversion and close > conversion,
          lead2 > lead1 and close < lead2 and close > base and close[1] > conversion and close < conversion)
    if not (na(lead1) or na(lead2) or na(close) or na(close[1]) or na(base) or na(conversion))
        result
    else
        float(na)

// oscillator ratings
ratingRsi() =>
    float rsi    = ta.rsi(close,14)
    float result = ratingBullBear(rsi < 30 and falling(rsi), rsi > 70 and rising(rsi))
    result := notNa(rsi) ? result : na
ratingStoch() =>
    float k = ta.sma(ta.stoch(close, high, low, 14), 3)
    float d = ta.sma(k, 3)
    float result = ratingBullBear(k < 20 and d < 20 and k > d and k[1] < d[1], k > 80 and d > 80 and k < d and k[1] > d[1])
    result := notNa(k) and notNa(d) ? result : na
ratingCci() =>
    float cci = ta.cci(close, 20)
    float result = ratingBullBear(cci < -100 and rising(cci), cci > 100 and falling(cci))
    result := notNa(cci) ? result : na
ratingAdx() =>
    [diPlus, diMinus, adx] = ta.dmi(14, 14)
    float result = ratingBullBear(adx > 20 and diPlus[1] < diMinus[1] and diPlus > diMinus, adx > 20 and diPlus[1] > diMinus[1] and diPlus < diMinus)
    result := notNa(diPlus) and notNa(diMinus) and not na(adx) ? result : na
ratingAo() =>
    float ao     = ta.sma(hl2, 5) - ta.sma(hl2, 34)
    bool  aoXUp  = ta.crossover(ao, 0)
    bool  aoXDn  = ta.crossunder(ao, 0)
    float result = ratingBullBear(aoXUp or (ao > 0 and ao[1] > 0 and rising(ao)), aoXDn or (ao < 0 and ao[1] < 0 and falling(ao)))
    result := notNa(ao) ? result : na
ratingMom() =>
    float mom = close - close[10]
    float result = ratingBullBear(rising(mom), falling(mom))
    result := notNa(mom) ? result : na
ratingMacd() =>
    [macd, signal, _] = ta.macd(close, 12, 26, 9)
    float result = ratingBullBear(macd > signal, macd < signal)
    result := not na(macd) and not na(signal) ? result : na
ratingStochRsi() =>
    float rsi = ta.rsi(close, 14)
    float k = ta.sma(ta.stoch(rsi, rsi, rsi, 14), 3)
    float d = ta.sma(k, 3)
    float result = ratingBullBear(trendDn() and k < 20 and d < 20 and k > d and k[1] < d[1], trendUp() and k > 80 and d > 80 and k < d and k[1] > d[1])
    result := notNa(k) and notNa(d) and not na(trendDn()) and not na(trendUp()) ? result : na
ratingWpr() =>
    float wpr = ta.wpr(14)
    float result = ratingBullBear(wpr < -80 and rising(wpr), wpr > -20 and falling(wpr))
    result := notNa(wpr) ? result : na
ratingBbp() =>
    float powerBull = high - ta.ema(close, 13)
    float powerBear = low  - ta.ema(close, 13)
    float result = ratingBullBear(trendUp() and powerBear < 0 and rising(powerBear), trendDn() and powerBull > 0 and falling(powerBull))
    result := notNa(powerBull) and notNa(powerBear) and not na(trendDn()) and not na(trendUp()) ? result : na
ratingUo() =>
    int pFast =  7
    int pMid  = 14
    int pLong = 28
    float tl  = close[1] < low ? close[1] : low
    float uo  = na
    float v1  = math.sum(ta.tr, pFast)
    float v2  = math.sum(ta.tr, pMid)
    float v3  = math.sum(ta.tr, pLong)
    float v4  = math.sum(close - tl, pFast)
    float v5  = math.sum(close - tl, pMid)
    float v6  = math.sum(close - tl, pLong)
    if v1 != 0 and v2 != 0 and v3 != 0
        float p0 = pLong / pFast
        float p1 = pLong / pMid
        float v7 = (v4 / v1) * p0
        float v8 = (v5 / v2) * p1
        float v9 = (v6 / v3)
        uo := 100 * (v7 + v8 + v9) / (p0 + p1 + 1)
    float result = ratingBullBear(uo > 70, uo < 30)
    result := not na(uo) ? result : na
ratings(series int offset) =>

    var float[] indRatings = array.new_float(0)

    // calculate ma rating
    array.clear(indRatings)
    array.push(indRatings, ratingMa(ta.sma(close,  10), close))
    array.push(indRatings, ratingMa(ta.sma(close,  20), close))
    array.push(indRatings, ratingMa(ta.sma(close,  30), close))
    array.push(indRatings, ratingMa(ta.sma(close,  50), close))
    array.push(indRatings, ratingMa(ta.sma(close, 100), close))
    array.push(indRatings, ratingMa(ta.sma(close, 200), close))
    array.push(indRatings, ratingMa(ta.ema(close,  10), close))
    array.push(indRatings, ratingMa(ta.ema(close,  20), close))
    array.push(indRatings, ratingMa(ta.ema(close,  30), close))
    array.push(indRatings, ratingMa(ta.ema(close,  50), close))
    array.push(indRatings, ratingMa(ta.ema(close, 100), close))
    array.push(indRatings, ratingMa(ta.ema(close, 200), close))
    array.push(indRatings, ratingMa(ta.hma(close,   9), close))
    array.push(indRatings, ratingMa(ta.vwma(close, 20), close))
    array.push(indRatings, ratingIchimoku())
    float ratingMas = array.avg(indRatings)

    // calculate oscillators rating
    array.clear(indRatings)
    array.push(indRatings, ratingRsi())
    array.push(indRatings, ratingStoch())
    array.push(indRatings, ratingCci())
    array.push(indRatings, ratingAdx())
    array.push(indRatings, ratingAo())
    array.push(indRatings, ratingMom())
    array.push(indRatings, ratingMacd())
    array.push(indRatings, ratingStochRsi())
    array.push(indRatings, ratingWpr())
    array.push(indRatings, ratingBbp())
    array.push(indRatings, ratingUo())
    float ratingOsc = array.avg(indRatings)

    // calculate weighted average of the two groups: ma and oscillator
    float ratingTot = nz(ratingMas * maInput) + nz(ratingOsc * (1. - maInput))
    [ratingTot[offset], ratingMas[offset], ratingOsc[offset]]

orderSignals(userSelection) =>
    switch userSelection
        RT2 => 
         array.set(indices, 0, 1),
         array.set(indices, 1, 2),
         array.set(indices, 2, 0)
        RT3 =>
         array.set(indices, 0, 2),
         array.set(indices, 1, 1),
         array.set(indices, 2, 0)
        =>
         array.set(indices, 0, 0),
         array.set(indices, 1, 1),
         array.set(indices, 2, 2)

countRising(series float src) =>
    var int cnt = 0
    float chg = ta.change(math.abs(src))
    switch 
        src == 0 => cnt := 0
        chg  > 0 => cnt := math.min(5, cnt + 1)
        chg  < 0 => cnt := math.max(1, cnt - 1)
    int result = src > 0 ? cnt : -cnt

signalColor(series int gradient) =>
    color col  = gradient > 0 ? bullColor : gradient < 0 ? bearColor : neutColorInput
    float transp = 100 - (math.abs(gradient) * 20)
    transp :=  transp == 80 ? 75 : transp
    color result = col == neutColorInput ? col : color.new(col, transp)

colorFromRating(series float rating) =>
    color result = switch 
        rating >  LEVEL_STRONG => color.new(bullColor, 20)
        rating >  LEVEL_WEAK   => color.new(bullColor, 50)
        rating < -LEVEL_STRONG => color.new(bearColor, 20)
        rating < -LEVEL_WEAK   => color.new(bearColor, 50)
        =>                        neutColorInput

textFromRating(series float rating) =>
    string result = switch 
        rating >  LEVEL_STRONG => "Strong Buy"
        rating >  LEVEL_WEAK   => "Buy"
        rating < -LEVEL_STRONG => "Strong Sell"
        rating < -LEVEL_WEAK   => "Sell"
        =>                        "Neutral"

print(series string txt, series int lineNo, series color txtColor) =>
    var label lbl = label.new(bar_index, 0, "", xloc.bar_index, yloc.price, color(na), label.style_label_left, color.white, textalign = text.align_left)
    var string[] returnsPrefix = array.new_string(math.max(0, lineNo - 1), "\n")
    var string[] returnsSuffix = array.new_string(math.max(0, 4 - lineNo), "\n")
    var string prefix = array.join(returnsPrefix, "")
    var string suffix = array.join(returnsSuffix, "")
    string labelStr   = prefix + "{0}" + suffix
    // Update label.
    if barstate.islast
        label.set_x(lbl, bar_index)
        label.set_text(lbl, str.format(labelStr, txt))
        label.set_textcolor(lbl, txtColor)
// }

// macd calculations {

if barstate.isfirst
    orderSignals(calcsInput)
bool htfUsed = tfInput != ""
bool chartTfIsTooHigh = htfUsed and timeframe.in_seconds() >= timeframe.in_seconds(tfInput)
int idx1 = htfUsed and barstate.isrealtime ? 1 : 0
int idx2 = (repaintInput and not htfUsed) or (htfUsed and barstate.isrealtime) ? 0 : 1
[ratingTot_, ratingMas_, ratingOsc_] = request.security(syminfo.tickerid, tfInput, ratings(idx1))
float ratingTot = ratingTot_[idx2]
float ratingMas = ratingMas_[idx2]
float ratingOsc = ratingOsc_[idx2]

array.set(ratings, 0, ratingTot)
array.set(ratings, 1, ratingMas)
array.set(ratings, 2, ratingOsc)
float userRating = array.get(ratings, array.get(indices, 0))
// }

// plots {

if chartTfIsTooHigh
    runtime.error("Chart's timeframe must be smaller than " + tfInput)

// build signal color
bool  condBuy      = userRating >  LEVEL_WEAK
bool  condSell     = userRating < -LEVEL_WEAK
float valsBuy      = condBuy  ? userRating : 0
float valsSell     = condSell ? userRating : 0
int   risingBuys   = countRising(valsBuy)
int   fallingSells = countRising(valsSell)
int   gradientLvl  = condBuy ? risingBuys : condSell ? fallingSells : 0
color signalColor  = signalColor(gradientLvl)

// user-selected rating
plot(userRating, "Rating", signalColor, widthInput, style)

// levels
// fixed levels
hline( LEVEL_STRONG, "Strong Buy Level",  color.new(bullColor,  50), hline.style_dashed)
hline( LEVEL_WEAK,   "Buy Level",         color.new(bullColor,  65), hline.style_dashed)
hline( 0.0,          "0.0 Level",         color.new(color.gray, 50), hline.style_dashed)
hline(-LEVEL_WEAK,   "Sell Level",        color.new(bearColor,  75), hline.style_dashed)
hline(-LEVEL_STRONG, "Strong Sell Level", color.new(bearColor,  50), hline.style_dashed)
// marker breach levels
hline(doLongs  ? levelUpInput : na, "Long Level",  levelUpInput == 0 ? color(na) : bullColor, hline.style_dotted)
hline(doShorts ? levelDnInput : na, "Short Level", levelDnInput == 0 ? color(na) : bearColor, hline.style_dotted)

// data window values
plotchar(ratingTot, "All",         "", location.top, colorFromRating(ratingTot))
plotchar(ratingMas, "MAs",         "", location.top, colorFromRating(ratingMas))
plotchar(ratingOsc, "Oscillators", "", location.top, colorFromRating(ratingOsc))
plotchar(na,        "═══════",     "", location.top, colorFromRating(ratingTot))

var int idxOfLine1 = array.get(indices, 0)
var int idxOfLine2 = array.get(indices, 1)
var int idxOfLine3 = array.get(indices, 2)

string COLUMN1_PADDING = "  "
string COLUMN2_PADDING = "      "
if barstate.islast
    // legends
    print(COLUMN1_PADDING + array.get(TEXTS, idxOfLine1) + ":", 1, color.silver)
    print(COLUMN1_PADDING + array.get(TEXTS, idxOfLine2) + ":", 2, color.gray)
    print(COLUMN1_PADDING + array.get(TEXTS, idxOfLine3) + ":", 3, color.gray)
    // rating states
    print(COLUMN2_PADDING + textFromRating(array.get(ratings, idxOfLine1)), 1, colorFromRating(array.get(ratings, idxOfLine1)))
    print(COLUMN2_PADDING + textFromRating(array.get(ratings, idxOfLine2)), 2, colorFromRating(array.get(ratings, idxOfLine2)))
    print(COLUMN2_PADDING + textFromRating(array.get(ratings, idxOfLine3)), 3, colorFromRating(array.get(ratings, idxOfLine3)))
// }

// alerts and markers. {

// alerts
int ensureNoRepaintIdx = not htfUsed and repaintInput ? 1 : 0
bool xUp = levelUpInput != 0 and ta.crossover( userRating, levelUpInput)
bool xDn = levelDnInput != 0 and ta.crossunder(userRating, levelDnInput)
bool gUp = gradInput != 0 and gradientLvl ==  gradInput and gradientLvl[1] <  gradInput
bool gDn = gradInput != 0 and gradientLvl == -gradInput and gradientLvl[1] > -gradInput
var bool lastDirectionUp = na

bool triggerLong  = ((xUp or gUp) and (not altInput or na(lastDirectionUp) or not lastDirectionUp) and doLongs )[ensureNoRepaintIdx]
bool triggerShort = ((xDn or gDn) and (not altInput or na(lastDirectionUp) or     lastDirectionUp) and doShorts)[ensureNoRepaintIdx]

if triggerLong
    alert(alertUpInput, alert.freq_once_per_bar)
    lastDirectionUp := true
else if triggerShort
    alert(alertDnInput, alert.freq_once_per_bar)
    lastDirectionUp := false

plotchar(gradientLvl, "Advances/Declines", "", location.top, signalColor)
plotchar(triggerLong,  "Long Marker",  "▲", location.bottom, color.new(bullColor, 00), size = size.tiny)
plotchar(triggerShort, "Short Marker", "▼", location.top,    color.new(bearColor, 00), size = size.tiny)
// }
```