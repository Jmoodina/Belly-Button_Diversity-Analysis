// Place constant URL
const dataURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch JSON  data and log
d3.json(dataURL).then(function(data) {
  console.log("Fetched JSON data:", data);
});

// Initialize the dashboard on startup
function initializeDashboard() {

    // Select the dropdown menu using D3
    let dropdownMenu = d3.select("#selDataset");

    // Fetch sample names and populate the drop-down selector
    d3.json(dataURL).then((data) => {
        
        // Retrieve sample names
        let sampleNames = data.names;

        // Populate the dropdown menu with sample names
        sampleNames.forEach((id) => {
            dropdownMenu.append("option")
                .text(id)
                .property("value", id);
        });

        // Set the default sample
        let defaultSample = sampleNames[0];

        // Build the initial plots
        buildMetadata(defaultSample);
        buildBarChart(defaultSample);
        buildBubbleChart(defaultSample);
        buildGaugeChart(defaultSample);

    });
};

// Function to populate metadata information
function buildMetadata(selectedSample) {

    // Retrieve all metadata using D3
    d3.json(dataURL).then((data) => {

        // Filter metadata based on the selected sample
        let selectedMetadata = data.metadata.filter(result => result.id == selectedSample)[0];

        // Clear previous metadata
        d3.select("#sample-metadata").html("");

        // Display key/value pairs in the metadata panel
        Object.entries(selectedMetadata).forEach(([key, value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });

};

// Function to build the bar chart
function buildBarChart(selectedSample) {

    // Retrieve all sample data using D3
    d3.json(dataURL).then((data) => {

        // Filter sample data based on the selected sample
        let selectedSampleData = data.samples.filter(result => result.id == selectedSample)[0];

        // Extract necessary data for the bar chart
        let otuIds = selectedSampleData.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
        let sampleValues = selectedSampleData.sample_values.slice(0, 10).reverse();
        let otuLabels = selectedSampleData.otu_labels.slice(0, 10).reverse();

        // Create trace for the bar chart
        let barTrace = {
            x: sampleValues,
            y: otuIds,
            text: otuLabels,
            type: "bar",
            orientation: "h"
        };

        // Layout for the bar chart
        let barLayout = {
            title: "Top 10 Operational Taxonomic Units (OTUs)"
        };

        // Plot the bar chart using Plotly
        Plotly.newPlot("bar", [barTrace], barLayout)
    });
};

// Function to build the bubble chart
function buildBubbleChart(selectedSample) {

    // Retrieve all sample data using D3
    d3.json(dataURL).then((data) => {
        
        // Filter sample data based on the selected sample
        let selectedSampleData = data.samples.filter(result => result.id == selectedSample)[0];

        // Extract necessary data for the bubble chart
        let bubbleTrace = {
            x: selectedSampleData.otu_ids,
            y: selectedSampleData.sample_values,
            text: selectedSampleData.otu_labels,
            mode: "markers",
            marker: {
                size: selectedSampleData.sample_values,
                color: selectedSampleData.otu_ids,
                colorscale: "Earth"
            }
        };

        // Layout for the bubble chart
        let bubbleLayout = {
            title: "Bacteria Count Per Sample",
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
        };

        // Plot the bubble chart using Plotly
        Plotly.newPlot("bubble", [bubbleTrace], bubbleLayout)
    });
};

// Function to update the dashboard when the selected sample changes
function updateDashboard(selectedSample) { 

    // Log the new selected sample
    console.log("Selected Sample:", selectedSample); 

    // Call functions to update all charts
    buildMetadata(selectedSample);
    buildBarChart(selectedSample);
    buildBubbleChart(selectedSample);
    buildGaugeChart(selectedSample);
};

// Call the initialize function to set up the dashboard
initializeDashboard();