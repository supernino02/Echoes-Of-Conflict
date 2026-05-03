const BASE_URL = "./old_website/BACKEND_DATA/";


// -------------------------------
// Simplified Chart Loader (No Auth Required)
// -------------------------------
const loadChart = (function () {
  const cache = new Map();

  return async function (filePath, chartFunc, containerId) {
    const containerDiv = document.getElementById(containerId);
    if (!containerDiv) return;

    try {
      // Check cache first to avoid duplicate network requests
      if (!cache.has(filePath)) {
        const url = `${BASE_URL}${filePath}`;
        const res = await fetch(url);
        
        if (!res.ok) throw new Error(`Failed to fetch ${filePath}: ${res.status}`);
        
        // Parse the raw JSON directly
        const rawData = await res.json();
        cache.set(filePath, rawData);
      }

      const rawData = cache.get(filePath);
      
      // Make sure the container is visible and draw the chart
      containerDiv.style.display = "block"; 
      chartFunc(rawData);

    } catch (err) {
      containerDiv.innerHTML = `<div class="alert alert-danger">Failed to load chart: ${err.message}</div>`;
      console.error(`Error loading chart from ${filePath}:`, err);
    }
  };
})();

// -------------------------------
// Function to load all charts concurrently
// -------------------------------
async function initCharts() {
  const tasks = [
    // Section 1: Comparing Categories
    loadChart("comparing_categories/bar_chart.json", drawBarChart, "bar_chart_container"),
    loadChart("comparing_categories/full_stacked_chart.json", drawStackedBarChart, "stacked_bar_chart_container"),
    loadChart("comparing_categories/waffle_chart.json", drawWaffleChart, "waffle_chart_container"),
    loadChart("comparing_categories/heatmap_chart.json", drawHeatmapChart, "heatmap_chart_container"),
    loadChart("comparing_categories/multiple_bar_chart.json", drawMultipleBarChart, "multiple_bar_chart_container"),

    // Section 2: Visualizing Distributions
    loadChart("visualizing_distributions/mirror_chart.json", drawMirrorChart, "mirror_chart_container"),
    loadChart("visualizing_distributions/box_plot_chart.json", drawBoxPlotChart, "dist_boxplot_container"),
    loadChart("visualizing_distributions/ridgeline_plot_chart.json", drawRidgePlotChart, "dist_ridgeline_container"),

    // Section 3: Timeline Visualization
    loadChart("timeline_visualization/connected_scatter_plot.json", drawConnectedScatter, "nyt_scatter_container"),

    // Section 4: Maps
    loadChart("maps/proportional_symbol_map.json", drawProportionalSymbolMap, "proportional_symbol_map_container"),
    loadChart("maps/bubble_events_map.json", drawBubbleEventsMap, "bubble_events_map_container"),
    loadChart("maps/choropleth_map.json", drawChoroplethMap, "choropleth_map_container"),

    // Section 5: Network Analysis
    loadChart("network/sankey.json", drawSankeyChart, "sankey_container"),
    loadChart("network/network_weapons_yearly_flat.json", drawNetworkChart, "network_container")
  ];

  await Promise.all(tasks);
}

// -------------------------------
// Initialize seamlessly on page load
// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // 1. Force hide the old API auth section so the user never sees it
    const authSection = document.getElementById("api-auth");
    if (authSection) {
        authSection.style.display = 'none';
    }

    // 2. Force show all sections that were previously hidden behind the ".private-section" class
    document.querySelectorAll('.private-section').forEach(el => {
        el.style.display = 'block'; 
    });
    
    // 3. Add the authenticated class just in case your CSS relies on it to format the page
    document.body.classList.add("authenticated");

    // 4. Fetch the data and render the charts!
    initCharts();
});