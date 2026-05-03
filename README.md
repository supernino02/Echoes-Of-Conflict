# BUGBusters: Visualizing Conflict and Human Suffering through Data

**BUGBusters** is a student team from the [University of Genoa](https://unige.it/en), composed of [Isabella Tagliafico](https://github.com/Isabibbi), [Luca Ninivaggi](https://github.com/supernino02), and [Flavio Barrara Stefani](https://github.com/FlavioBarraraStefani). This repository contains our interactive data visualization project developed for the university's Data Visualization course. 

The website aims to raise awareness and provide intuitive insights into the **[Global Terrorism Database (GTD)](https://www.start.umd.edu/data-tools/GTD)**. By using complex visual storytelling over a rich dataset of historical terrorist attacks, the goal is to make the raw data accessible, understandable, and deeply impactful. It uncovers trends regarding terrorist groups, targets, and methods used in attacks worldwide.

Both versions of the interactive single-page application are hosted on GitHub Pages:
- **[Final Mobile-Optimized Version](https://supernino02.github.io/Echoes-Of-Conflict/website.html)**: The completed version of the project, specifically optimized for visualization and interaction on mobile screens.
- **[Preliminary Desktop Version](https://supernino02.github.io/Echoes-Of-Conflict/old_website.html)**: An earlier version of the project, designed natively for larger monitors, featuring a slightly different layout.

See the dedicated READMEs inside the `website/` and `old_website/` directories for more technical details regarding directory structure, data pre-processing, and implementation specifics.

## How to Explore the Data

The interface features an interactive 3D globe that offers different visual perspectives based on the chosen category (Groups, Attacks, or Targets) from the bottom navigation bar. An interactive timeline slider allows users to watch how these global conflict trends evolve over time. 

By clicking on specific category instances—either directly on the globe or within the auxiliary plots below it—users can open a detailed, data-driven modal containing in-depth explanations and specialized charts for that specific entity.

### Interface Overview
<table align="center">
  <tr>
    <td align="center"><b>1. Base Navigation and Timeline</b></td>
    <td align="center"><b>2. Visualizing Terrorist Groups</b></td>
    <td align="center"><b>3. Tracking Attack Trends</b></td>
    <td align="center"><b>4. In-Depth Details</b></td>
  </tr>
  <tr>
    <td align="center">
      <img src="./readme_images/base_globe_interface.png" alt="Main Globe Interface" width="100%">
    </td>
    <td align="center">
      <img src="./readme_images/groups_distribution_view.png" alt="Groups Distribution View" width="100%">
    </td>
    <td align="center">
      <img src="./readme_images/attacks_choropleth_view.png" alt="Attacks Choropleth View" width="100%">
    </td>
    <td align="center">
      <img src="./readme_images/detailed_explanation_modal.png" alt="Detailed In-Depth Modal" width="100%">
    </td>
  </tr>
</table>