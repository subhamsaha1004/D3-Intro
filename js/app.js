d3.selectAll('p').style('color', function(val, index){
	return (index % 2 != 0) ? "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")" : "rgb(255,0,255)";
});

d3.selectAll('p')
	.data([12, 16, 18, 20, 22, 24])
	.style('font-size', function(d){
		return d + 'px';
	});

document.querySelector('#chngBkg').addEventListener('click', function(e){
	d3.select('body').transition()
		.style('background-color', 'black');
}, false);

d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * 0.5); });

var svg = d3.select('svg'),
		circle = svg.select('circle');

svg.style('border', '1px solid #f00');

circle.style('fill', '#2ecc71');
circle.attr('cy', 90);
circle.attr('cx', 90);
circle.attr('r', 30);

document.querySelector('#crclePos').addEventListener('click', function(e){
	circle.attr("cx", function() {
	  return Math.floor(Math.random() * 360);
	});
}, false);