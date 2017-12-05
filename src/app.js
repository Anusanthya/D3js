// var t = d3.transition()
//   .delay(1000)
//   .duration(1000);

// d3.selectAll('.block')
//   .transition(t)
//   .style('width', '400px');

// d3.select('.a')
//   .transition(t)
//   .style('background-color', 'lightgreen');

// d3.select('.b')
//   .transition(t)
//   .style('background-color', 'brown');


//OnClick events

function go() {
  var t = d3.transition()
    .delay(1000)
    .duration(1000);

  d3.selectAll('.block')
    .transition(t)
    .style('width', '400px');

  d3.select('.a')
    .transition(t)
    .style('background-color', 'lightgreen');

  d3.select('.b')
    .transition(t)
    .style('background-color', 'brown');
}

function configure (t, delay, duration) {
  return t.delay(delay).duration(duration);
}

function goNow() {
  d3.selectAll('.block')
    .transition()
    .call(configure, 1000, 1000)
    .style('height', '200px')
}
