// defining global variables
let sales, svg, y, x, color
fetch('/upload').then(response => response.json()).then(d3Data => {
    // from https://yangdanny97.github.io/intro-to-d3/data-binding/
    // https://observablehq.com/@d3/learn-d3-scales

    // updating the data to the global variable sale
    sales = d3Data.d3data;
    // check the data in the console
    console.log(sales);


    let maxCount = d3.max(sales, (d, i) => d.count);
    x = d3.scaleLinear()
        .range([0, width])
        .domain([0, 50])
    let xaxis = d3.axisTop().scale(x)

    y = d3.scaleBand()
        .range([0, height])
        .domain(sales.map((d, i) => d.emoji))

    // append the svg object to the body of the page
    svg = d3.select("#graph")
        //setting the width of the d3
        .attr("width", width + margin.left + margin.right)
        //setting the height of the d3
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .call(xaxis)

    color = d3.scaleSequential()
        .domain([0, d3.max(sales, d => d.count)])
        .interpolator(d3.interpolateInferno)

    update(sales)
});
let toggle = () => {
    sales.forEach(s => {
        //Randomize the count of the bars
        s.count += Math.floor(Math.random() * 5) - 2
        //setting minimum count to 0, in case the random number makes count negative
        if (s.count < 0) s.count = 0;
        //setting maximum count to 50, in case the random number makes count negative
        if (s.count > 50) s.count = 50;
    })
    update(sales.filter(s => s.count != 0).sort((a, b) => b.count - a.count));
}
let update = data => {
    y = d3.scaleBand()
        .range([0, height])
        .domain(data.map((d, i) => d.emoji))

    svg.selectAll('.data')
        .data(data, (d, i) => d.emoji)
        .join(
            enter => {
                let group = enter.append('g')
                    .attr('class', "data")
                //append the individual bars
                group.append("rect")
                    .attr("class", "bar")
                    .attr('x', x(0))
                    .attr('y', d => y(d.emoji))
                    .attr('stroke', "black")
                    .attr('fill', d => `${color(d.count)}`)
                    .attr('height', y.bandwidth())
                    .attr('width', d => x(d.count))
                    //defining index so as to use in functions like IncrementCount,DecreaseCount,deleteBar
                    .attr('index',(d,i)=>i)
                    //increment bar value on mouseover
                    .on("mouseover", IncrementCount)
                    //decrease bar value on click
                    .on("click", DecreaseCount)
                   
                    

                group.append('text')
                    .attr("class", "label")
                    .attr("text-anchor", "end")
                    .attr('transform', d => `translate(${x(0)},${y(d.emoji) + y.bandwidth() * 3 / 4}) scale(${y.bandwidth() / 20})`) //fudgy
                    .text(d => d.emoji)
                    .attr('stroke', "black")
                    .attr('index',(d,i)=>i)
                    //delete the bar on emoji click
                    .on("click", deleteBar)

            },
            update => {
                let group = update.transition()
                    .duration(1000)
                group.select("rect")
                    .attr('width', d => x(d.count))
                    .attr('height', y.bandwidth())
                    .attr('fill', d => `${color(d.count)}`)
                    .attr('y', d => y(d.emoji)),
                    // console.log(d => d.emoji);
                    group.select("text")
                        .attr('transform', d => `translate(${x(0)},${y(d.emoji) + y.bandwidth() * 3 / 4}) scale(${y.bandwidth() / 20})`)
                    group.select("text").text(d => d.emoji);  
                },
            remove =>
                remove.attr("opacity", 0.75)
                    .transition()
                    .duration(1000)
                    .attr("opacity", 0)
                    .remove()
        )
}
function deleteBar(d) {
    let index = this.getAttribute("index");
    sales[index].count=0;
    update(sales.filter(s => s.count != 0).sort((a, b) => b.count - a.count));
}
function IncrementCount(d) {
    let index = this.getAttribute("index");
    sales[index].count++;
    update(sales.filter(s => s.count != 0).sort((a, b) => b.count - a.count));
}
function DecreaseCount(d) {
    let index = this.getAttribute("index");
    sales[index].count--;
    update(sales.filter(s => s.count != 0).sort((a, b) => b.count - a.count));
}     
// set the dimensions and margins of the graph
const margin = {
    top: 50,
    right: 20,
    bottom: 30,
    left: 50
}
const width = 600 - margin.left - margin.right
const height = 500 - margin.top - margin.bottom;
