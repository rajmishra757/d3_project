/**
 * Data required throughout this file
 * are defined here
 */
let data = [1, 2, 3];
let circleredii = [50, 40, 30, 20, 10];
let circleColors = ["red", "green", "purple", "yellow", "blue"];
let JsonSpaceCircles = [
    {
        "x_axis": 30,
        "y_axis": 30,
        "radius": 25,
        "color": "red"
    },
    {
        "x_axis": 70,
        "y_axis": 70,
        "radius": 25,
        "color": "green"
    },
    {
        "x_axis": 110,
        "y_axis": 110,
        "radius": 25,
        "color": "purple"
    }
];
let lineData = [
    { "x": 0, "y": 10 },
    { "x": 15, "y": 5 },
    { "x": 30, "y": 20 },
    { "x": 40, "y": 10 },
    { "x": 45, "y": 15 }
];

/**
 * Binding data to elements
 */
d3.select("body")
    .selectAll("p")
    .data(data)
    .enter()
    .append("p")
    .text(function (d, i) {
        return "i = " + i + " d = " + d + " this = " + JSON.stringify(d3.select(this));
    });

/**
 * Ctreating nested circles based on data
 */
let circleContainer = d3.select("body")
    .append("p")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);


let circles = circleContainer.selectAll("circle")
    .data(circleredii)
    .enter()
    .append("circle");

circles.attr("cx", 50)
    .attr("cy", 50)
    .attr("r", function (d) {
        return d;
    })
    .style("fill", function (d, i) {
        return circleColors[i];
    })

/**
 * Adding circles to specific coordinates
 * based on data
 */
circleContainer = d3.select("body")
    .append("p")
    .append("svg")
    .attr("width", 135)
    .attr("height", 135)
    .style("border", "1px solid black");

circles = circleContainer.selectAll("circle")
    .data(JsonSpaceCircles)
    .enter()
    .append("circle");

circles.attr("cx", function (d) {
    return d.x_axis;
})
    .attr("cy", function (d) {
        return d.y_axis;
    })
    .attr("r", function (d) {
        return d.radius;
    })
    .style("fill", function (d) {
        return d.color;
    })

/**
 * Creating an SVG path (Line)
 */

let lineFunction = d3.svg.line()
    .x(function (d) {
        return d.x;
    })
    .y(function (d) {
        return d.y;
    })
    .interpolate("linear");
/**
 * linear, step-before, step-after,
 * basis, basis-closed, bundle,
 * cardinal, cardinal-open, cardinal-closed,
 * monotone
 */

let svgContainer = d3.select("body")
    .append("p")
    .append("svg")
    .attr("width", 50)
    .attr("height", 25);

svgContainer.append("path")
    .attr("d", lineFunction(lineData))
    .attr("stroke", "red")
    .attr("stroke-width", 2)
    .style("fill", "none");
/**
 * d3.svg.line - create a new line generator
 * d3.svg.line.radial - create a new radial line generator
 * d3.svg.area - create a new area generator
 * d3.svg.area.radial - create a new radial area generator
 * d3.svg.arc - create a new arc generator
 * d3.svg.symbol - create a new symbol generator
 * d3.svg.chord - create a new chord generator
 * d3.svg.diagonal - create a new diagonal generator
 * d3.svg.diagonal.radial - create a new radial diagonal generator
 */