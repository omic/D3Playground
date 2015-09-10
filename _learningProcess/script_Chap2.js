// d3.selectAll('.item:nth-child(2n)').text('select');

// d3.selectAll('.item:nth-child(3n)')
// .html('<strong>selection</strong>');

// d3.select('#chart')
// .append('span')
// .html(' <strong>selection</strong');

// d3.select('#chart')
// .insert('span',':nth-child(3)')
// .html(' <strong>selection</strong');

// d3.select('#chart .item:nth-child(3)')
// .remove();

// d3.selectAll('.item')
// .attr('class','highlight')

// d3.selectAll('.item:nth-child(3) ')
// .classed('highlight',true)

// d3.selectAll('.item:nth-child(3) ')
// .classed({
// 	'highlight': true,
// 	'item': false,
// 	'bigger': true
// })

// d3.selectAll('.item:nth-child(3)')
// 	.style({
// 		'background':'#268BD2',
// 		'padding': '10px',
// 		'margin': '5px',
// 		'color': '#EEE8D5'
// 	})

// d3.selectAll('.item')
// 	.data([true,true,true])
// 	.style('background','#268BD2');


// var myStyles = ['#268BD2'];
// d3.selectAll('.item')
// 	.data(myStyles)
// 	.style('background',myStyles[0]);


// var myStyles = [
// 	'#A57706',
// 	'#BD3613',
// 	'#D11C24',
// 	'#C61C6F',
// 	'#595AB7',
// 	'#2176C7'
// 	];

// d3.selectAll('.item')
// 	.data(myStyles)
// 	.style('background',function(d) {
// 		return d;
// 	});


var myStyles = [
	{ 	width: 200,
		name: 'Barot Bellingham',
		color: '#A57706'},
	{ 	width: 230,
		name: 'Hassum Harrod',
		color: '#BD3613'},
	{ 	width: 220,
		name: 'Jennifer Jerome',
		color: '#D11C24'},
	{ 	width: 290,
		name: 'Richard Tweet',
		color: '#C61C6F'},
	{	width: 236,
		name: 'Lorenzo Garcia',
		color: '#595AB7'},
	{	width: 230,
		name: 'Xhou Ta',
		color: '#2176C7'}
	];

d3.selectAll('#chart').selectAll('div')
	.data(myStyles)
	.enter().append('div')
	.classed('item',true)
	.text(function(d) {
		return d.name;
	})
	.style({
		'color':'white',
		'background':function(d) {
			return d.color;
		},
		'width':function(d) {
			return d.width+'px';
		}
	});
