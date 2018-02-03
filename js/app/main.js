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
 * Creating an SVG circle
 */
let svgContainer = d3.select("body")
    .append("p")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);

svgContainer.append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 50);

/**
 * Creating an SVG square
 */
svgContainer = d3.select("body")
    .append("p")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);

svgContainer.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", 100)
    .style("fill", "green");

/**
 * Creating an SVG rectangle
 */
svgContainer = d3.select("body")
    .append("p")
    .append("svg")
    .attr("width", 50)
    .attr("height", 100);

svgContainer.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 50)
    .attr("height", 100)
    .style("fill", "green");

/**
 * Creating an SVG ellipse
 */
svgContainer = d3.select("body")
    .append("p")
    .append("svg")
    .attr("width", 50)
    .attr("height", 30);

svgContainer.append("ellipse")
    .attr("cx", 25)
    .attr("cy", 15)
    .attr("rx", 25)
    .attr("ry", 15)
    .style("fill", "red");

/**
 * Creating an SVG line
 */
svgContainer = d3.select("body")
    .append("p")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);

svgContainer.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 100)
    .attr("y2", 100)
    .attr("stroke", "blue")
    .attr("stroke-width", 5);