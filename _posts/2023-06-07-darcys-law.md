---
title: 'Darcy’s Law'
date: '2023-06-07T06:27:00+00:00'
author: 'Cagatay Guley'
layout: post
categories: [engineering]
---

Darcy’s Law, which is based on a hydraulic principle, relates the seepage velocity of water in a porous medium (such as sand, gravel, or rock) to the permeability of the medium and the hydraulic gradient (pressure difference).

### <span class="ez-toc-section" id="Darcys_Law_Expression_Q"></span>Darcy’s Law Expression (Q)<span class="ez-toc-section-end"></span>

<div class="wp-block-katex-display-block katex-eq" data-katex-display="true">```
Q=-k*A*(dh/dL)
```

</div>Where:

Q represents the volume of water seeping through a cross-sectional area in unit time (typically per second) (unit: m³/s).  
k is the permeability coefficient, which represents the ability of the porous medium to allow water flow (unit: m²).  
A represents the cross-sectional area through which water flows (unit: m²).  
dh/dL is the hydraulic gradient, obtained by dividing the pressure difference by the distance (unit: m/m).  
The negative sign in Darcy’s Law indicates that the seepage occurs opposite to the direction of the hydraulic gradient.

To calculate the seepage velocity (Q) using Darcy’s Law, you need to know the permeability coefficient (k), the cross-sectional area (A), and the hydraulic gradient (dh/dL). Once you have these values, you can use the equation mentioned above to calculate the seepage velocity.

### <span class="ez-toc-section" id="Hydraulic_Gradient_dhdL"></span>Hydraulic Gradient (dh/dL)<span class="ez-toc-section-end"></span>

To calculate the hydraulic gradient, you need to measure the difference in head (h2 – h1) between two points along the flow path and divide it by the distance (L) between those two points. The formula for calculating the hydraulic gradient is as follows:

<div class="wp-block-katex-display-block katex-eq" data-katex-display="true">```
Hyrdaulic Gradient (dh/dL) = (h2-h1)/2
```

</div>Here’s a step-by-step explanation:

1. Measure the head (h1) at the starting point or reference point.
2. Measure the head (h2) at the ending point or another point along the flow path.
3. Determine the distance (L) between the two points.
4. Calculate the difference in head or pressure: (h2 – h1).
5. Divide the difference in head by the distance: (h2 – h1) / L.
6. The result is the hydraulic gradient, which represents the change in head per unit distance (e.g., meters per meter or feet per foot).

The hydraulic gradient provides insight into the change in pressure or head along a flow path, indicating how fluid flow will occur within the system. It is an essential parameter in understanding and analyzing fluid flow behavior in various engineering and natural systems, such as pipes, channels, rivers, or groundwater flow.

### <span class="ez-toc-section" id="Example_1"></span>**Example 1**<span class="ez-toc-section-end"></span>

A sand layer with a cross-sectional area of 1.2 m² has a permeability coefficient of 0.003 m² and a hydraulic gradient of 0.015 m/m. Calculate the seepage velocity.

**Given:**  
A = 1.2 m² (cross-sectional area)  
k = 0.003 m² (permeability coefficient)  
dh/dL = 0.015 m/m (hydraulic gradient)

**Using Darcy’s Law:**

<div class="wp-block-katex-display-block katex-eq" data-katex-display="true">```
Q=-k*A*(dh/dL)
```

</div><div class="wp-block-katex-display-block katex-eq" data-katex-display="true">```
Q=-0.003 m^2*1.2m^2*0.015 m/m
```

</div><div class="wp-block-katex-display-block katex-eq" data-katex-display="true">```
Q=-0.000054 m^3/s
```

</div>The negative sign indicates that the seepage occurs opposite to the direction of the hydraulic gradient. Therefore, the seepage velocity is 0.000054 m³/s (or equivalently, 54 mL/s).

### <span class="ez-toc-section" id="Example_2"></span>**Example 2**<span class="ez-toc-section-end"></span>

In a gravel layer, water seeps through a cross-sectional area of 0.8 m². The permeability coefficient is 0.0015 m², and the hydraulic gradient is 0.02 m/m. Calculate the seepage velocity.

**Given:**  
A = 0.8 m² (cross-sectional area)  
k = 0.0015 m² (permeability coefficient)  
dh/dL = 0.02 m/m (hydraulic gradient)

**Using Darcy’s Law:**  
Q = -kA(dh/dL)  
Q = -0.0015 m² × 0.8 m² × 0.02 m/m  
Q = -0.000024 m<sup>3</sup>/s

The negative sign indicates that the seepage occurs opposite to the direction of the hydraulic gradient. Therefore, the seepage velocity is 0.000024 m³/s (or equivalently, 24 mL/s).

These examples demonstrate how to calculate the seepage velocity using Darcy’s Law based on the given values of permeability, cross-sectional area, and hydraulic gradient.

<figure class="wp-block-table">| **Rock Type** | **Permeability Coefficient (k) (m²)** | **Hydraulic Gradient (dh/dL) (m/m)** |
|---|---|---|
| Sand | 10<sup>-10</sup> – 10<sup>-5</sup> | 0.001 – 0.1 |
| Sandstone | 10<sup>-15</sup> – 10<sup>-12</sup> | 0.001 – 0.1 |
| Gravel | 10<sup>-12</sup> – 10<sup>-9</sup> | 0.001 – 0.1 |
| Gravelly Sandstone | 10<sup>-15</sup> – 10<sup>-10</sup> | 0.001 – 0.1 |
| Clay | 10<sup>-18</sup> – 10<sup>-15</sup> | 0.0001 – 0.01 |
| Silty Sand | 10<sup>-16</sup> – 10<sup>-12</sup> | 0.0001 – 0.01 |
| Limestone | 10<sup>-14</sup> – 10<sup>-10</sup> | 0.001 – 0.1 |
| Rock Salt | 10<sup>-20</sup> – 10<sup>-17</sup> | 0.0001 – 0.01 |
| Shale | 10<sup>-20</sup> – 10<sup>-17</sup> | 0.0001 – 0.01 |
| Granite | 10<sup>-18</sup> – 10<sup>-14</sup> | 0.001 – 0.1 |

</figure>