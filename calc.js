// Make a jQuery selection to access the input DOM element.
var input = $('#equation');
var min = $('#min');
var max = $('#max');
// Set the initial text value programmatically using jQuery.
input.val('sin(x)*x');
min.val(-10);
max.val(10);

// $('#draw').click(function () {


// });
 // Here's how to evaluate math expressions using Math.js:
 var math = mathjs(),
 expr = 'sin(x)*x',
 scope = {
   x: 0
//    ,t:0
 },
 tree = math.parse(expr, scope);

var trace1 = {
    x: [],
    y: [],
    mode: 'lines',
    // type: 'scatter',
    // name: 'Team A',
    // text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
    // marker: { size: 7 }
  };
  

  
  var data = [ trace1 ];
  
  var layout = { 
    // xaxis: {
    //   range: [ -1, 1 ] 
    // },
    // yaxis: {
    //   range: [-1, 1]
    // },
    title:'Mathematical Equations Plotter'
  };
//   trace1.x.push(12);
//   console.log(trace1.x);
  function autoGenerateNumbersToPlot(){
    trace1.x=[];
    trace1.y=[];
        var text = input.val();
    console.log(min.val());
    tree = math.parse(text,scope);
      //genet=rating numbers between 0 and 10 to plot them
      // Team A would b 5 > x> 0 && 10 > y > 5
      // Team b would b 5 > y> 0 && 10 > x > 5
      //Math.floor(Math.random() * 10) + 0  >> from zero to 10 va
      var newMin = min.val()*1;
      var newMax = max.val() * 1;
      console.log(typeof(newMax));
      for(var i = newMin;i<= newMax;i+=0.1){
       x1 = i;
       y1 = gettingEquation(x1);
       trace1.x.push(x1);
       trace1.y.push(y1);
      }
      // for(var i = 0;i<100;i++){
      //   y1 = Math.random() * 5 + 0;
      //   x1 = Math.random() * 4.5 + 5;
      //   trace2.x.push(x1);
      //   trace2.y.push(y1);
      // }
      console.log(trace1.x , trace1.y);
      Plotly.newPlot('myDiv', data, layout);

  }
  function gettingEquation(x2){
    scope.x=x2;
    
    // scope.t = time;
    // return Math.sin(mathX)* mathX;
    return tree.eval();

}
  autoGenerateNumbersToPlot();
  
 