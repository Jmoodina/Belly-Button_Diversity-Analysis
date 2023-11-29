# Project Completion Report: Belly Button Biodiversity Dashboard

## Objective:
The objective of this assignment was to build an interactive dashboard to explore the Belly Button Biodiversity dataset, revealing microbial species present in human navels.

### Steps Completed:

1. Data Retrieval:
Utilized the D3 library to read in the samples.json dataset from the provided URL.

2. Horizontal Bar Chart:
Created a horizontal bar chart with a dropdown menu to display the top 10 Operational Taxonomic Units (OTUs) found in an individual.
Used sample_values as values for the bar chart, otu_ids as labels, and otu_labels as hovertext for enhanced information.

3. Bubble Chart:
Developed a bubble chart displaying each sample.
Used otu_ids for x values, sample_values for y values, sample_values for marker size, otu_ids for marker colors, and otu_labels for text values.

4. Sample Metadata Display:
Displayed the sample metadata, including demographic information.
Presented each key-value pair from the metadata JSON object somewhere on the dashboard.

5. Dynamic Updates:
Ensured that all plots dynamically update when a new sample is selected, providing a seamless and responsive user experience.

6. Dashboard Layout:
Created a customized layout for the dashboard, enhancing user engagement and visual appeal.

7. Deployment:
Deployed the interactive dashboard to a free static page hosting service, specifically GitHub Pages, to make it accessible to a wider audience.

8. Documentation:
Maintained regular commits throughout the development process, ensuring a clear version history.
Created a thorough README.md file in the GitHub repository to provide comprehensive information and guidance for users and developers.

## Conclusion:
The Belly Button Biodiversity Dashboard has been successfully completed, allowing users to explore and analyze microbial data interactively. The dynamic updates, coupled with visually appealing charts and metadata displays, contribute to an engaging user experience. The deployment on GitHub Pages ensures accessibility for a broader audience.