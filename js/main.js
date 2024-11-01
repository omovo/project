
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Set Data
const data = google.visualization.arrayToDataTable([
  ['Programming-Language', 'Mhl'],
  ['Javascript',55],
  ['Python',49],
  ['Kotlin',44],
  ['PHP',24],
  ['Java',15]
]);

// Set Options
const options = {
  title:'Most Useful Programming Language '
};

// Draw
const chart = new google.visualization.BarChart(document.getElementById('myChart'));
chart.draw(data, options);

}