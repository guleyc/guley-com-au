---
title: 'A Deep Dive into Mine Cost Calculation: A Case Study'
date: '2025-10-17'
author: 'Cagatay Guley'
layout: post
permalink: /a-deep-dive-into-mine-cost-calculation-a-case-study/
tags: [Mining, Cost, Engineering, Case Study, Open Pit, Copper, Opex]
image: open-pit-mine.jpg
mathjax: true
---

In this post, we'll conduct a step-by-step analysis of a mine's cost structure based on its operational data. The data we'll use is for a hypothetical copper mine located in Canada. I will explain the engineering logic and fundamental formulas behind each item to provide a comprehensive overview.

### 1. Location

**Example Mine Site:** Princeton, BC, Canada

### 2. Open Pit Geometry

The pit geometry is a fundamental element that affects everything from the stripping ratio to equipment efficiency.

- **Pit Size at Surface:** 975 m x 305 m
- **Pit Depth:** 100 m
- **Bench Height:** 12 m
- **Bench Face Angle:** 70 degrees
- **Berm Width:** 12 m
- **Road Grade:** 10%

**Short Note:** The bench height, face angle, and berm width collectively determine the **overall pit slope angle**. These parameters are critical for pit wall stability. The 10% road grade is a key factor that directly impacts truck fuel consumption and cycle times.

### 3. Production Capacity

This section is where the "heart" of the mine operates. Here, we'll analyze how much material is moved and how much metal is produced.

**Mining:**

- Daily Ore Production: 20,000 tonnes/day
- Daily Waste Production: 23,150 tonnes/day
- Total Annual Mining: 4,640,000 tonnes/year

**Milling (Mineral Processing):**

- Plant Capacity: 18,150 tonnes/day
- Annual Ore Processed: 2,672,000 tonnes/year
- Mill Head Grade: 0.43% Cu
- Minerals Recovered: Cu, Au, Ag
- Recovery: 85.5%
- Concentrate Grade: 30% Cu
- Primary Process: SAG Mill, Cone Crusher, Ball Mill, Copper Flotation

#### Analysis and Calculations

With the given figures, we can calculate some critical Key Performance Indicators (KPIs).

**Stripping Ratio:** The ratio of waste material that must be moved to extract a certain amount of ore.

$$
\text{Stripping Ratio} = \frac{\text{Waste Mined}}{\text{Ore Mined}} = \frac{25,500}{22,000} \approx \mathbf{1.16} \text{ (tonne waste / tonne ore)}
$$

This means for every 1 tonne of ore, 1.16 tonnes of waste must be mined. This ratio is vital for the mine's economics.

**Ratio of Concentration:** The ratio of the concentrate grade to the head grade. It shows how effectively the plant enriches the ore.

$$
\text{Ratio of Concentration} = \frac{\text{Concentrate Grade}}{\text{Head Grade}} = \frac{30\%}{0.43\%} \approx \mathbf{69.8}
$$

**Annual Metal Production:** Let's calculate how much saleable copper the mine produces.

$$
\text{Annual Copper Production (tonnes)} = (\text{Annual Ore Processed}) \times (\text{Head Grade}) \times (\text{Recovery})
$$

$$
\text{Annual Copper Production} = (2,672,000 \text{ tonnes}) \times (0.0043) \times (0.855) \approx \mathbf{9,824 \text{ tonnes of metallic copper}}
$$

**Annual Concentrate Production:** The produced metallic copper is contained within the 30% Cu concentrate.

$$
\text{Annual Concentrate Production} = \frac{\text{Annual Copper Production}}{\text{Concentrate Grade}} = \frac{9,824 \text{ tonnes}}{0.30} \approx \mathbf{32,747 \text{ tonnes of copper concentrate}}
$$

### 4. Pit Equipment

**Loading:** 4 x P&H 1900A shovels (10 yd³ ~7.65 m³ bucket)

**Haulage:** 15 x Lectra Haul M100 trucks

**Ancillary Equipment:** Dozers, graders, rubber-tired dozers, and front-end loaders.

**Short Note:** Equipment selection is based on bench height, production capacity, and material characteristics. The number and capacity of shovels and trucks are determined by "fleet matching" calculations to minimize wait times for both loaders and haulers.

### 5. Blasting

**Explosive Type:** 85% ANFO, 15% Slurry

**Powder Factor:** 0.23 kg/ton

**Loading Factor:** 0.41 kg/m³

**Short Note:** The Powder Factor is a key efficiency metric indicating the amount of explosive used to break one unit of rock. ANFO is a cost-effective choice for dry holes. In the presence of water, water-resistant explosives like Slurry are used. This mine employs a hybrid approach.

### 6. Drilling

- **Drills:** 3 x Bucyrus-Erie 60R
- **Hole Diameter:** 251 mm
- **Pattern (Burden x Spacing):** 5.5 m x 7.3 m
- **Meter Drilled/Shift:** 150 m/shift
- **Tons/Meter Drilled:** 77 tonnes/meter
- **Bit Life:** 1,830 m

**Short Note:** The drill pattern (burden and spacing) directly influences blasting efficiency and rock fragmentation. The "Tons/meter" metric shows how many tonnes of material are liberated for each meter drilled. This can be cross-checked with a theoretical calculation (assuming rock density of ~2.7 t/m³):

$$
\text{Tonnes/meter} = (\text{Burden}) \times (\text{Spacing}) \times (\text{Density})
$$

$$
\text{Tonnes/meter} = (5.5 \text{ m}) \times (7.3 \text{ m}) \times (2.7 \text{ t/m³}) \approx \mathbf{108 \text{ tonnes/meter}}
$$

The difference between the theoretical value (108 t/m) and the practical field value (77 t/m) can be attributed to geological conditions, blasting inefficiencies, and measurement methods.

### 7. Power Requirements

- **Total Installed Power:** 53,600 HP ~40 MW
- **Peak Demand:** 35,776 kVA
- **Annual Mill Demand:** 255,282,172 kWh
- **Total Annual Demand:** 266,573,172 kWh

**Short Note:** As seen here, **over 95%** of the total energy consumption originates from the mineral processing plant. Grinding circuits (crushers, SAG, and ball mills) are typically the most energy-intensive parts of a mine. Therefore, any initiative to improve grinding efficiency has a massive impact on costs.

### 8. Personnel

- **Open Pit:** 142 people (47.5%)
- **Mineral Processing Plant:** 107 people (35.8%)
- **Surface Plant:** 14 people (4.7%)
- **Admin & Other:** 36 people (12.0%)

**TOTAL EMPLOYEES:** 299 people

### 9. Mining Costs (for ore and waste, $/ton)

These costs apply to **all material moved (both ore and waste)**. The currency is assumed to be Canadian Dollars (CAD).

- Dozing and Grading: $0.05
- Drilling: $0.07
- Blasting: $0.13
- Loading: $0.14
- Hauling: $0.21
- Crushing (in-pit): $0.11
- Other (Pumping, Maintenance, Supervision, etc.): $0.21

**TOTAL MINING COST: $0.92 / ton** (of total material mined)

### 10. Milling Costs (for ore only, $/ton)

These costs apply only to the **ore** that is fed to the processing plant.

- Crushing: $0.096
- Grinding: $1.844
- Flotation: $0.244
- Drying: $0.075
- Power: $0.921
- Labor: $0.437
- Other (Assaying, Conveying, Tailings, etc.): $0.347

**TOTAL MILLING COST: $3.954 / ton** (of ore processed)

### How Are Unit Costs Calculated?

The unit costs listed above are the result of a "bottom-up" accounting process. Here’s a breakdown of the methodology.

#### Mining Unit Cost Calculation

The mining unit cost ($/ton) represents the total expense incurred to move one tonne of material (both ore and waste) in the open pit.

$$
\text{Mining Unit Cost} = \frac{\text{Total Mining Opex}}{\text{Total Tonnes Mined (Ore + Waste)}}
$$

**Cost Components (Total Mining OPEX):**

- **Labor:** Salaries and wages for operators, mechanics, supervisors, and engineers.
- **Fuel & Lubricants:** Diesel for trucks, dozers, and graders.
- **Electricity:** Power for electric shovels, pumps, and lighting.
- **Consumables:** Explosives (ANFO, boosters), drill bits, and tires for mobile equipment.
- **Maintenance:** Spare parts, repair services, and workshop costs.
- **Support Services:** Costs associated with road maintenance, dewatering, and technical services (survey, geology).

These costs are summed over a specific period (e.g., a month or year) and then divided by the total tonnes moved in that same period to arrive at the `$0.92/ton` figure.

#### Milling Unit Cost Calculation

The milling unit cost ($/ton) represents the total expense to process one tonne of ore through the plant. The key difference is the denominator—only ore tonnes are considered.

$$
\text{Milling Unit Cost} = \frac{\text{Total Milling Opex}}{\text{Total Tonnes Milled (Ore Only)}}
$$

**Cost Components (Total Milling OPEX):**

- **Labor:** Salaries and wages for plant operators, metallurgists, and maintenance crews.
- **Power:** This is often the largest single cost, consumed by crushers, SAG/ball mills, pumps, and flotation cells.
- **Reagents:** Flotation chemicals (collectors, frothers), flocculants for thickeners.
- **Grinding Media:** Steel balls for the ball mills.
- **Maintenance:** Spare parts for crushers (liners), mills (liners), pumps, and pipelines.
- **Other:** Assay laboratory costs, water management, and tailings disposal costs.

These costs are summed over a period and divided by the tonnes of ore that passed through the plant's primary crusher in that period to get the `$3.954/ton` figure.

### Overall Cost Analysis & Conclusion

Now for the most critical part: What do these numbers tell us? Let's calculate the mine's total operational expenditure (OpEx) and, most importantly, the unit cost of the metal produced.

**Total Annual Mining Cost:**

$$
(4,640,000 \text{ tonnes/year}) \times (\$0.92/\text{tonne}) = \mathbf{\$4,268,800 / year}
$$

**Total Annual Milling Cost:**

$$
(2,672,000 \text{ tonnes/year}) \times (\$3.954/\text{tonne}) = \mathbf{\$10,565,088 / year}
$$

**Total Annual Operating Cost (OPEX):**

$$
\$4,268,800 + \$10,565,088 = \mathbf{\$14,833,888 / year}
$$

**Total Cost per Tonne of Ore Processed:** This is one of the most fundamental cost metrics for a mine.

$$
\frac{\text{Total Annual Cost}}{\text{Annual Tonnes of Ore Processed}} = \frac{\$14,833,888}{2,672,000 \text{ tonnes}} = \mathbf{\$5.55 / \text{tonne of ore}}
$$

**Unit Cost of Copper Produced (C1 Cash Cost):** This is the ultimate figure that determines profitability and is compared against the market price of the metal. Annual Copper Production: 9,824 tonnes ~21,658,000 pounds (lbs)

$$
\text{Cost per lb of Cu} = \frac{\text{Total Annual Cost}}{\text{Total Pounds of Copper Produced}} = \frac{\$14,833,888}{21,658,000 \text{ lbs}} = \mathbf{\$0.685 / \text{lb Cu}}
$$

This analysis demonstrates how a simple list of data can be transformed into meaningful engineering and financial conclusions.

I hope this detailed breakdown was helpful. I look forward to your questions and comments.