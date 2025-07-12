---
title: 'Injection Works in Underground Openings'
date: '2023-07-11'
author: 'Cagatay Guley'
layout: post
permalink: /injection-works-in-underground-openings/
redirect_from:
  - /injection-works-in-underground-openings
categories: [mining]
tags: [injection, works, underground, openings]
image: injection.jpg
mathjax: true
---

Ground treatment and water control are paramount for the safety, stability, and long-term serviceability of tunnels. This article provides a technical overview of advanced injection methodologies employed in modern tunneling projects. We will explore the principles and applications of cementitious grouting for pre-excavation ground improvement, post-excavation support, and structural integrity, including key concepts like the Umbrella Arch method, rock bolting, and contact grouting. Furthermore, the article delves into specialized chemical injection systems, namely polyurethane (PU) and acrylic resins, which are critical for challenging waterproofing scenarios. The discussion incorporates mix design considerations, quality control parameters, and the fundamental mechanics governing each technique.

## 1.0 Cementitious Grouting: Principles and Applications

Cement-based grouting is a foundational technique in tunneling, utilized to modify the mechanical and hydrological properties of the surrounding ground mass. Its application can be broadly categorized into pre-excavation, syn-excavation (concurrent with excavation), and post-excavation phases.

### 1.1 Pre-Excavation Ground Improvement

The primary objective of pre-excavation grouting is to improve the stand-up time of the ground, reduce permeability, and ensure a stable excavation face before the Tunnel Boring Machine (TBM) or conventional excavation equipment advances.

* **a. Umbrella Arch Method (Forepoling):** This technique creates a protective, load-bearing canopy above and around the crown of the tunnel alignment. A series of sub-horizontal holes are drilled, into which perforated steel pipes (lances) are installed. Grout is then injected through these pipes to permeate the surrounding soil/rock mass. This creates a composite, reinforced arch that mitigates the risk of collapse in weak ground conditions. This is often executed using **Self-Drilling Anchors (SDA)**, which combine the drilling, anchor installation, and grouting processes into a single, efficient operation.

* **b. Face Stabilization (Face Bolting):** To prevent instabilities or collapse of the excavation face, especially in granular or fractured ground, grouted bolts are installed directly into the tunnel face. This technique, sometimes referred to as "mirror improvement," increases the cohesion and shear strength of the ground mass immediately ahead of the excavation, ensuring a controlled advance. The process involves drilling into the face, followed by the injection of a cementitious grout, often in conjunction with the insertion of fiberglass or steel dowels.

* **c. Consolidation Grouting:** This is a broader term for injecting grout into a volume of ground to reduce its compressibility and permeability. The goal is to create a monolithic, stabilized block of ground through which the tunnel can be safely excavated. The effectiveness of consolidation is governed by grout rheology and injection pressure, which must be carefully controlled to avoid ground heave. A key control parameter is the **Grouting Intensity Number (GIN)**, a real-time measure of the energy imparted to the ground:

    $$GIN = P \times V$$

    Where:
    * $P$ is the final injection pressure (bar)
    * $V$ is the absorbed grout volume per meter of borehole (L/m)

### 1.2 Post-Excavation Support Systems

* **Rock Bolting (Anchoring):** Following excavation, rock bolts are installed to systematically reinforce the tunnel perimeter and control rock mass deformations. The process involves:
    1.  **Drilling:** Holes are drilled to a designed depth and pattern.
    2.  **Anchor Installation:** A steel or fiberglass rod is inserted.
    3.  **Grouting:** The annulus of the borehole is filled with cement or resin grout, which anchors the rod to the rock mass.
    4.  **Pre-Tensioning:** For active support, a torque is applied to the bolt nut, which induces a tensile load in the bolt. This, in turn, creates a compressive zone in the rock mass around the tunnel, enhancing its stability. The relationship between applied torque and induced tension can be approximated by:

        $$T = K \cdot D \cdot P$$

        Where:
        * $T$ is the applied torque (Nm)
        * $K$ is the nut factor (dimensionless, typically ~0.2 for steel)
        * $D$ is the nominal bolt diameter (m)
        * $P$ is the induced tensile load (N)

* **Contact and Annulus Grouting:** After the installation of a primary (shotcrete) or final (segmental) lining, voids may exist between the lining and the excavated rock profile. Contact grouting is performed to fill these voids. This is critical for:
    * Ensuring uniform load transfer from the ground to the lining.
    * Preventing the development of water pathways and subsequent leakage.
    * Eliminating potential for lining deformation into voids.

## 2.0 Grout Mix Design for Water Control

In environments with high groundwater ingress, standard cement-water mixtures can be ineffective, as the grout can be diluted or washed away before achieving its initial set. In such cases, specialized mix designs incorporating chemical admixtures are required.

The table below presents an example of a sophisticated mix design for a 1 m³ batch, engineered for challenging, water-bearing ground, utilizing sodium silicate as an accelerator.

**Table 1: Example Grout Mix Design for Water Control**

| Component | Density (kg/m³) | Mass for 1 m³ (kg) | Volume for 1 m³ (L) | Function |
| :--- | :--- | :--- | :--- | :--- |
| Water | 1000 | 780 | 780 | Solvent / Reactant |
| Cement (CEM I 42.5R) | 3090 | 295 | 95.5 | Binder |
| Bentonite | 1700 | 40 | 23.5 | Anti-bleed / Thixotropic Agent |
| Retarder (e.g., EUCON 130) | 1095 | 5 | 4.6 | Extends Workability (Pot Life) |
| Sodium Silicate (e.g., CreteShot NS 303) | 1375 | 132 | 96 | Accelerator (for Flash Setting) |
| **TOTAL** | **~1252** | **1252** | **1000** | **-** |

**Key Mix Design Parameters:**

* **Water/Cement Ratio ($w/c$):** This is a primary determinant of strength and permeability. For this mix, the mass-based $w/c$ ratio is:
    $$\frac{w}{c} = \frac{\text{Mass of Water}}{\text{Mass of Cement}} = \frac{780 \text{ kg}}{295 \text{ kg}} \approx 2.64$$
    *Note: This very high w/c ratio suggests the grout is designed for void-filling and water-stopping rather than high structural strength. The high bentonite content supports this, creating a stable, high-volume, low-strength slurry.*
* **Admixture Roles:**
    * **Bentonite:** A clay mineral that swells in water, reducing grout bleed (sedimentation) and imparting thixotropic properties (gelling at rest, fluid when pumped).
    * **Retarder:** A chemical that slows down the cement hydration process, providing sufficient time to pump the grout over long distances.
    * **Sodium Silicate:** An accelerator injected separately or at the point of application. It reacts almost instantly with the cementitious grout, causing rapid gelling (flash setting). This is indispensable for sealing off active, high-pressure water inflows.

## 3.0 Chemical Grouting for Waterproofing

For fine fissures (micro-cracks) and persistent water leaks where cement particles cannot penetrate, low-viscosity chemical resins are employed. These are typically delivered via a two-component pump system through injection packers installed in drilled holes.

### 3.1 Polyurethane (PU) Injection

Polyurethane resins are two-component systems (typically an isocyanate and a polyol) that react to form either a flexible or rigid foam/gel.

* **Mechanism:** The user's description of mixing 20 kg of polyurethane with 2 kg of a catalyst points to a **hydrophobic** PU system. This type of resin reacts primarily with its catalyst, but its volume expands significantly upon contact with water, forming a dense, closed-cell foam. This foam acts as a durable, flexible barrier against water ingress.
* **Application:** Holes are drilled at a ~45° angle to intersect the water-bearing crack or joint behind the tunnel lining. Packers are inserted, and the PU resin is injected until refusal or until unreacted resin is observed at the leak point, indicating the void is filled.

### 3.2 Acrylic Injection

Acrylic resins offer a different solution, primarily for sealing fine cracks and creating a waterproof "curtain" within the ground mass or structure.

* **Mechanism:** Acrylics are multi-component systems that polymerize to form a highly flexible, cohesive gel. Their most significant advantage is their extremely low viscosity, often close to that of water ($\eta \approx 1-5 \text{ mPa} \cdot \text{s}$). This allows them to penetrate the finest fissures that other grouts cannot.
* **Application:** The process described—mixing acrylic (25 kg) with catalyst (1.25 kg) in one tank, and water (25 kg) with an initiator salt (0.625 kg) in another—is standard practice.
    * **Two-Component Pump:** The two mixtures are kept separate until the point of injection. They are pumped through separate lines that converge at a "Y" junction just before the injection packer.
    * **Controllable Gel Time:** This separation is critical because mixing all four components initiates a rapid polymerization reaction. The gel time (the time from mixing to hardening) can be precisely controlled, typically from a few seconds to several minutes, by adjusting the amount of catalyst and initiator. This control is essential for ensuring the resin permeates the target area before it solidifies.

## Conclusion

The successful construction and long-term maintenance of tunnels rely on a systematic and adaptable approach to ground engineering and waterproofing. While cementitious grouting forms the backbone of ground stabilization and structural support, chemical injections with polyurethane and acrylic resins provide indispensable, high-performance solutions for complex water control challenges. The selection of the appropriate technique, material, and mix design, guided by a thorough understanding of the site-specific geological and hydrogeological conditions, is fundamental to achieving a safe, durable, and resilient underground infrastructure.