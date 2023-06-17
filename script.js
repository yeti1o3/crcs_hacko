var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'bar',

	// The data for our dataset
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [{
			label: 'CRCS Data',
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1,
			data: [12, 19, 3, 5, 2, 3, 7]
		}]
	},

	// Configuration options go here
	options: {}
});