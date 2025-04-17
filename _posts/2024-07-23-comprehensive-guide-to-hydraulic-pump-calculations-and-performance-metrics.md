---
title: 'Comprehensive Guide to Hydraulic Pump Calculations and Performance Metrics'
date: '2024-07-23T08:41:56+00:00'
author: 'Cagatay Guley'
layout: post
categories: [energy]
---

Hydraulic pumps are used in hydraulic drive systems. A hydraulic pump is a mechanical source of power that converts mechanical power into hydraulic energy. It generates flow with enough power to overcome the pressure induced by the load at the pump outlet. When a hydraulic pump operates, it creates a vacuum at the pump inlet, which forces liquid from the reservoir into the inlet line to the pump and, by mechanical action, delivers this liquid to the pump outlet and forces it into the hydraulic system;

Flow Rate (Q): The flow rate is the amount of fluid a pump can move in a given time, measured in liters per minute (L/min) or gallons per minute (GPM).

\[latex\]Q = V \\times N \\times \\eta\_v\[/latex\]

Q = Flow rate (L/min)  
V = Cylinder swept volume (liters)  
N = Pump speed (RPM)  
ηv = Volumetric efficiency

Pressure (P): The pressure created by the pump is usually measured in bar or pascal (Pa).

Power (P): The power required by the pump to move the fluid under pressure is measured in kilowatts (kW) or horsepower (HP).

\[latex\]P = \\frac{Q \\times \\Delta p}{600 \\times \\eta\_{m}}\[/latex\]

P = Power (kW)  
Q = Flow rate (L/min)  
Δp = Pressure difference (bar)  
ηm = Mechanical efficiency

**a. Gear Pumps**

There are simple and economical machines. Their displacement is fixed. The swept volume or displacement of gear pumps for hydraulics is between about 1 and 200 milliliters. They have the lowest volumetric efficiency. These pumps create pressure through the meshing of the gear teeth, which forces fluid around the gears to pressurize the outlet side. For lubrication, the gear pump uses a small amount of oil from the pressurized side of the gears, bleeds this through the hydrodynamic bearings, and vents the same oil either to the low-pressure side of the gears or through a dedicated drain port on the pump housing. Some gear pumps can be quite noisy compared to other types, but modern gear pumps are highly reliable and much quieter than older models. This is in part due to designs incorporating split gears, helical gear teeth, and higher precision/quality tooth profiles that mesh and unmesh more smoothly, reducing pressure ripple and related detrimental problems. Another positive attribute of the gear pump is that catastrophic breakdown is a lot less common than in most other types of hydraulic pumps. This is because the gears gradually wear down the housing and/or main bushings, reducing the volumetric efficiency of the pump gradually until it is all but useless. This often happens long before wear causes the unit to seize or break down.

<figure class="wp-block-image size-full">![](https://guley.com.tr/wp-content/uploads/2024/07/GearPumps.gif)</figure>Displacement Volume (V)

\[latex\]V = \\frac{\\pi \\times D\_{o}^2 \\times W \\times N}{4}\[/latex\]

Do​ = Outer diameter (m)  
W = Gear width (m)  
N = Number of gears

Efficiency: Volumetric efficiency (ηv) typically ranges from 85% to 95%.

**b. Rotary vane pumps**

Rotary vane pumps have higher efficiencies than gear pumps but are also used for mid pressures up to 180 bar (18,000 kPa) in general. Their displacement is fixed and simply adjustable. Some types of vane pumps can change the center of the vane body, so that a simple adjustable pump is obtained. These adjustable vane pumps are generally constant pressure or constant power pumps: the displacement is increased until the required pressure or power is reached, and subsequently, the displacement or swept volume is decreased until an equilibrium is reached. A critical element in vane pump design is how the vanes are pushed into contact with the pump housing and how the vane tips are machined at this very point. Several types of “lip” designs are used, and the main objective is to provide a tight seal between the inside of the housing and the vane, and at the same time to minimize wear and metal-to-metal contact. Forcing the vane out of the rotating center and towards the pump housing is accomplished using spring-loaded vanes, or more traditionally, vanes loaded hydrodynamically.

<figure class="wp-block-image size-full">![](https://guley.com.tr/wp-content/uploads/2024/07/RotaryVane.jpg)</figure>Flow Rate (Q):

\[latex\]Q = V \\times N \\times \\eta\_v\[/latex\]

Volumetric Efficiency (ηv​): Typically ranges from 85% to 90%.

**c. Screw pumps**

Screw pumps consist of two Archimedes’ screws that intermesh and are enclosed within the same chamber. These pumps are used for high flows at relatively low pressure (max 100 bars (10,000 kPa)). Their displacement is fixed. They are used on board ships where a constant pressure hydraulic system extends through the whole ship, especially to control ball valves, but also to help drive the steering gear and other systems. The advantage of screw pumps is the low sound level; however, the efficiency is not high. The major problem with screw pumps is that the hydraulic reaction force is transmitted in a direction that’s axially opposed to the direction of the flow. There are two ways to overcome this problem: firstly, put a thrust bearing beneath each rotor, and secondly, create a hydraulic balance by directing a hydraulic force to a piston under the rotor.

<figure class="wp-block-image size-full">![](https://guley.com.tr/wp-content/uploads/2024/07/ScrewPumps.jpg)</figure>Flow Rate (Q):

\[latex\]Q = \\frac{n \\times V\_s \\times N \\times \\eta\_v}{60}\[/latex\]

n = Number of screws  
Vs​ = Screw displacement volume (Liters)  
N = Pump speed (RPM)  
ηv​ = Volumetric efficiency

**d. Bent axis pumps**

Bent axis pumps, axial piston pumps, and motors using the bent axis principle, fixed or adjustable displacement, exist in two different basic designs. The Thoma principle with a maximum 25-degree angle and the Wahlmark principle with spherical-shaped pistons in one piece with the piston rod, piston rings, and a maximum 40-degree angle between the driveshaft centerline and pistons. These have the best efficiency of all pumps. Although in general the largest displacements are approximately one liter per revolution, if necessary, a two-liter swept volume pump can be built. Often variable-displacement pumps are used so that the oil flow can be adjusted carefully. These pumps can generally work with a working pressure of up to 350–420 bars in continuous operation.

<figure class="wp-block-image size-full">![](https://guley.com.tr/wp-content/uploads/2024/07/BentAxisPumps.gif)</figure>Flow Rate (Q):

\[latex\]Q = A\_p \\times S \\times N \\times \\eta\_v\[/latex\]

Ap​ = Piston area (m²)  
S = Stroke length (m)  
N = Number of pistons  
ηv = Volumetric efficiency

Power (P):

\[latex\]P = \\frac{Q \\times \\Delta p}{600 \\times \\eta\_m}\[/latex\]

Q: Flow Rate (L/min)  
Δp: Pressure Difference (bar)  
ηm = Mechanical Efficiency

**e. Inline axial piston pumps**

Axial piston pumps using the swashplate principle have a quality that is almost the same as the bent axis model. Their displacement is fixed and adjustable. They have the advantage of being more compact in design and also allow the use of “through-drive” series mounted auxiliary rotating equipment based on their in-line design. The pumps are easier and more economical to manufacture; the disadvantage is that they are more sensitive to oil contamination. The axial piston pump is likely the most widely used variable displacement type, being found in everything from heavy industrial to mobile applications.

By using different compensation techniques, the variable displacement type of these pumps can continuously alter fluid discharge per revolution and system pressure based on load requirements, maximum pressure cut-off settings, horsepower/ratio control, and even fully electroproportional systems, requiring no other input than electrical signals. This makes them potentially hugely power-saving compared to other constant flow pumps in systems where prime mover/diesel/electric motor rotational speed is constant and required fluid flow is non-constant.

<figure class="wp-block-image size-full">![](https://guley.com.tr/wp-content/uploads/2024/07/InlineAxialPistonPumps.gif)</figure>Flow Rate (Q): Inline axial piston pumps use a swashplate or bent axis design to convert rotary motion into linear motion. The flow rate can be calculated using the formula:

\[latex\]Q = A\_p \\times S \\times N \\times \\eta\_v\[/latex\]

Ap = Piston area (m²)  
S = Stroke length (m)  
N = Number of pistons  
ηv = Volumetric efficiency

**f. Radial piston pumps**

Radial piston pumps are used especially for high pressure and relatively small flows. Pressures of up to 650 bar are normal. In fact, variable displacement is possible. The pump is designed in such a way that the plungers are connected to a floating ring. This floating ring can be moved horizontally by a control lever, thus causing an eccentricity in the center of rotation of the plungers. The amount of eccentricity can be controlled to vary the discharge. The suction and discharge can be totally reversed seamlessly by shifting the eccentricity to the opposite side. Hence, both quantity and direction can be varied in a radial piston pump, just as in the swashplate pump.

<figure class="wp-block-image size-full">![](https://guley.com.tr/wp-content/uploads/2024/07/RadialPistonPumps.jpg)</figure>Flow Rate (Q):

\[latex\]Q = \\frac{V\_s \\times N \\times \\eta\_v}{60}\[/latex\]

Vs = Swept volume per piston (m³)  
N = Pump speed (RPM)  
ηv = Volumetric efficiency