---
layout: post
title: "Improving Nocturnal Precipitation and Low-Level Jets over the Great Plains with an Advanced Turbulence Representation"
description: English version of my contribution to AISAM newsletter based on my JAMES paper which shows how extending the higher-order scheme CLUBB improves the nocturnal precipitation peak on the Great Plains along with the associated Low-Level Jet wind structure. 
date: 2025-08-20 00:00:00
authors:
  - name: "Emanuele Silvio Gentile"
    affiliation: "Princeton University/GFDL"
categories: [blog]
tags: [climate, turbulence, CLUBB, AM4]
images:
  lightbox2: true
  photoswipe: true
  spotlight: true
  venobox: true
---
*This post is based on the paper <a href="https://www.authorea.com/users/745948/articles/1325061-enhancing-great-plains-nocturnal-precipitation-and-low-level-jets-in-am4-with-an-extended-clubb-closure">Enhancing Great Plains Nocturnal Precipitation and Low-Level Jets in AM4 with an Extended CLUBB Closure</a>, a collaboration with <a href="https://uwm.edu/math/people/larson-vincent/">Prof. Vince Larson</a>, <a href="https://www.gfdl.noaa.gov/ming-zhao-homepage/">Dr. Ming Zhao</a>, <a href="https://www.met.psu.edu/directory/colin-zarzycki">Prof. Colin Zarzycki</a>, <a href="https://www.su.se/english/profiles/gsven-1.182452" style="color:#28a745;">Prof. Gunilla Svensson</a>, and <a href="https://www.gfdl.noaa.gov/leo-donner-homepage/">Dr. Leo Donner</a>.*

## Background
The Great Plains of the United States represent one of the most complex natural laboratories for studying convective meteorology and its interaction with strong wind currents flowing from south to north. In summer, this vast region is characterized by a nocturnal maximum of precipitation, linked to the formation of low-level jets (LLJ): intense currents that develop within the first kilometers of the atmosphere and transport large amounts of moisture from the Gulf of Mexico northward. This transport favors the initiation of thunderstorms even in the absence of strong synoptic forcing, making nocturnal convective events a key element of the regional climate.

Despite their importance, faithfully reproducing the nocturnal rainfall peak and the structure of LLJs remains a challenge for numerical models, which often tend to generate an erroneous daytime maximum. This is related to convective parameterizations that are overly sensitive to surface thermal instability produced by daytime heating over the Great Plains. Observational campaigns such as PECAN have highlighted these limitations, pointing to the critical role of turbulent processes in the boundary layer for triggering nocturnal convection.

To address these limitations, we extended the CLUBB turbulence scheme in the GFDL-AM4 global climate model by introducing two innovations: a **prognostic treatment of momentum fluxes** and a **multiscale turbulent lengthscale**. This configuration was tested to assess its impact on nocturnal summer precipitation and LLJ structure in the Great Plains, comparing results with satellite and radar observations.

---

## Methods

To improve the representation of the nighttime precipitation peak over the Great Plains, we used the GFDL-AM4 global climate model, developed at the Geophysical Fluid Dynamics Laboratory (NOAA). AM4 has a horizontal resolution of about 100 km and includes parameterizations for convection, clouds, and boundary-layer turbulence.

In this work, the CLUBB turbulence scheme (Cloud Layers Unified By Binormals) was extended to replace the standard AM4 parameterizations, introducing two main innovations:

Prognostic momentum flux treatment
In traditional models, vertical momentum fluxes (the turbulent exchange of momentum) are handled in a simplified way using a diagnostic momentum flux (AM4-CLUBB_DM configuration in this study), which corresponds to a “diffusive” gradient-based approach. This method cannot reproduce counter-gradient fluxes that emerge in nocturnal Low-Level Jets, where air masses can propagate above the jet core. With the prognostic momentum flux (AM4-CLUBB_PM configuration), the fluxes evolve dynamically, making it possible to capture such effects (Larson et al., 2019).

Multiscale turbulent length scale
In the traditional version of CLUBB, a single turbulent length scale governs all turbulent processes. In the new scheme, however, different characteristic times and length scales are used for different variables and fluxes (e.g., temperature, humidity, vertical velocity). This makes the parameterization more realistic, as it reflects the fact that turbulent eddies do not all share the same characteristic size—hence a multiscale turbulent length scale (Guo et al., 2021). This approach leads to two additional configurations: AM4-CLUBB_DM_X or AM4-CLUBB_PM_X, depending on whether the diagnostic or prognostic momentum flux is used.

To isolate the effects of these modifications, five distinct simulations were carried out: one control run with standard AM4, and four with the extended CLUBB scheme, varying the combination of diagnostic/prognostic approach (AM4-CLUBB_DM and AM4-CLUBB_PM) and single/multiscale turbulent length scale (AM4-CLUBB_DM_X and AM4-CLUBB_PM_X).

The evaluation of results relied on:

Satellite precipitation data (IMERG, NASA), which provide high-frequency, high-resolution estimates of the diurnal rainfall cycle;

Wind profiles from lidar and radar profilers at the ARM Southern Great Plains site (Oklahoma), one of the most comprehensive in the world, allowing direct observation of the formation and intensification of nocturnal low-level jets.

The comparison between simulations and observations enabled assessment of both the phase and amplitude of the diurnal precipitation cycle, as well as the vertical structure of the jet and associated moisture transport fields.

---

## Results

The reference simulations with GFDL-AM4 reproduce the model’s well-known bias (Fig. 1): the diurnal cycle of summer precipitation over the Great Plains shows an afternoon maximum instead of a nocturnal one, with an average lead of 6–8 hours compared to IMERG satellite observations. The amplitude of the cycle is also too weak, with values nearly halved relative to observations. This deficit is tightly linked to the model’s difficulty in representing Low-Level Jets (LLJs) and the associated nighttime moisture transport from the Gulf of Mexico.

<img src="{{ site.baseurl }}/assets/img/greatplains_fig1.png" alt="Figure 1" width="70%">

The implementation of the CLUBB scheme produces the first improvements (Fig. 2a,c,e). Simulations with diagnostic momentum fluxes (AM4-CLUBB_DM) slightly reduce the phase bias, shifting the precipitation maximum toward the evening hours. A more substantial improvement emerges with the prognostic treatment of momentum fluxes (AM4-CLUBB_PM): here, the precipitation peak occurs around 03 UTC on average, much closer to the observed 01–02 UTC. The amplitude of the diurnal cycle also increases, leading to an overall 40% improvement compared to the standard model version.

<img src="{{ site.baseurl }}/assets/img/greatplains_fig2.png" alt="Figure 2" width="600">

Introducing the multiscale turbulent length scale in combination with prognostic momentum fluxes (AM4-CLUBB_PM_X) yields further benefits (Fig. 2b,d,f). Mean nocturnal precipitation over the central Great Plains approaches satellite-derived values, with the bias reduced to less than –1 mm/day (compared with –3 mm/day in the control simulation). The hourly distribution also exhibits a clear nocturnal maximum and a more pronounced afternoon minimum, indicating a more realistic coupling between the stable PBL and nocturnal convection.

Additional analyses with AM4 coupled to the extended CLUBB turbulence scheme reveal how parameterization choices crucially affect the representation of the nocturnal LLJ over the Great Plains (Fig. 3). In the nocturnal vertical profiles, both the diagnostic and prognostic momentum flux versions with a single turbulent length scale (AM4-CLUBB_DM and AM4-CLUBB_PM) confine turbulent activity to the lowest ~200 m, with rapid decay of fluxes and variances above this level. In contrast, the multiscale formulation sustains water vapor and liquid potential temperature fluxes well beyond 2000 m (AM4-CLUBB_DM_X and AM4-CLUBB_PM_X), accompanied by enhanced vertical velocity skewness and stronger nocturnal convection.

<img src="{{ site.baseurl }}/assets/img/greatplains_fig3.png" alt="Figure 3" width="600">

Regarding the LLJ structure, all configurations capture the main features of the observed summertime circulation. However, adopting prognostic momentum fluxes strengthens the jet by ~2 m/s compared to the diagnostic configuration, particularly near the Rocky Mountains. By contrast, the multiscale turbulent length scale tends to weaken the jet, with winds up to 2.5 m/s slower in the jet core.

Comparison with ARM Southern Great Plains observations (Fig.4) indicates that the diagnostic momentum flux version reproduces jet intensity reasonably well, whereas the prognostic version introduces stronger anisotropy and places the LLJ core too high. Using the multiscale turbulent length scale together with prognostic fluxes partly mitigates these discrepancies, reducing vertical shear and bringing the jet depth closer to that typical of the planetary boundary layer.

Finally, analysis of the momentum flux budgets highlights that the multiscale formulation substantially enhances buoyancy-driven turbulence production, promoting more frequent counter-gradient fluxes and pointing to a stronger role of deep, non-local eddies in nighttime mixing around the LLJ core.

<img src="{{ site.baseurl }}/assets/img/greatplains_fig4.png" alt="Figure 4" width="600">

---

## Conclusions

This study demonstrates that a more realistic representation of subgrid scalar and momentum turbulent transport can yield substantial improvements in simulating key regional processes. The combined use of prognostic momentum flux and multiscale turbulent lengthscale in CLUBB significantly reduced the nocturnal precipitation phase bias over the Great Plains while also improving LLJ intensity and Gulf moisture transport.

Importantly, these advances were achieved without ad hoc parameter tuning, but solely by introducing turbulence physics more faithful to the underlying Navier–Stokes equations. This reinforces the idea that the evolution of climate models does not only rely on higher resolution but also on a more accurate representation of unresolved processes in the model core.

However, with ~100 km grid spacing, a global model like AM4 cannot reproduce mesoscale convective systems that drive much of the nocturnal rainfall maximum. A natural next step is to transfer these innovations to km-scale global models, where the “gray zone” between parameterized turbulence and resolved convection opens new challenges. In parallel, integrating artificial intelligence and machine learning approaches may further refine subgrid turbulence representation, with benefits extending beyond the Great Plains to the prediction of global extreme events.

---
