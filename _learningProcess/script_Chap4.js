var bardata = [20, 30, 50, 15, 40, 80,20, 30, 50, 15, 40, 80,20, 30, 50, 15, 40, 80];

var height = 400,
	width = 600,
	barWidth = 50,
	barOffset = 5;

var colors = d3.scale.linear()
			.domain([0, d3.max(bardata)])
			.range(['#FFB832','#C61C6F'])

var yScale = d3.scale.linear()
	.domain([0, d3.max(bardata)])
	.range([0, height])

var xScale = d3.scale.ordinal()
	.domain(d3.range(0, bardata.length))
	.rangeBands([0, width])

d3.select('#chart').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background', '#C9D7D6')
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', colors)
		.attr('width', xScale.rangeBand(barWidth))
		.attr('height', function(d) {
			return yScale(d);
		})
		.attr('x', function(d,i) {
			return xScale(i);
			// return i * (barWidth + barOffset);
		})
		.attr('y', function(d) {
			return height - yScale(d);
		})