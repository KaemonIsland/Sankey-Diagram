import React from 'react';
import anychart from 'anychart';

const data = [
    {from: "Google", to: "Facebook", weight: 20000},
    {from: "Google", to: "Twitter", weight: 17000},
    {from: "Google", to: "YouTube", weight: 8000},
    {from: "Google", to: "Wikipedia", weight: 11000},
    {from: "Bing", to: "Facebook", weight: 7500},
    {from: "Bing", to: "Twitter", weight: 5000},
    {from: "Bing", to: "Wikipedia", weight: 4000},
]


const Sankey = () => {

    let sankeyChart = anychart.sankey(data);

    //Title
    sankeyChart.title("Sankey Diagram Customization Example")

    //Node Width
    sankeyChart.nodeWidth("30%");

    //Node Padding
    sankeyChart.nodePadding(20);

    //Defines Container for Chart
    sankeyChart.container("container");

    //Draws Chart
    sankeyChart.draw();

    // Customizes the Visual Appearance
    sankeyChart.flow().normal().fill('#ffa000 0.5')
    sankeyChart.flow().hovered().fill(anychart.color.darken("#ffa000"));
    sankeyChart.flow().hovered().stroke("#455a63")
    return (
        <div id="container">

        </div>
    )
}

export default Sankey;