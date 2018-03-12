// Select color input
// Select size input

function makeGrid() {
  var height = $('#inputHeight').val();
  var width = $('#inputWidth').val();

  var trTd = "";
  for(var r=1; r<=height; r++) {
    trTd += "<tr>";
    for(var d=1; d<=width; d++) {
      trTd += "<td id="+r+d+"></td>";
    }
    trTd += "</tr>";
  }

  $('#pixelCanvas').append(trTd);
}

//Default color
var color = "#000000";

//Preventing submit default action and call to makeGrid
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  makeGrid();
});

//Fill cell with color
$('#pixelCanvas').on('click', 'td', function (e) {
    //console.log($(this).attr('id'));
    $('#'+$(this).attr('id')).css('background-color', color);
});

//Change var color to user selected color
  $('#colorPicker').change(function() {
    console.log('color: ' +  $(this).val());
    color = $(this).val();

  });
