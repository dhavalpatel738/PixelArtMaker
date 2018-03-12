// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
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

var color = "#000000";
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  makeGrid();
});

$('#pixelCanvas').on('click', 'td', function (e) {
    //console.log($(this).attr('id'));
    $('#'+$(this).attr('id')).css('background-color', color);
});

$(document).ready(function(){
  $('#colorPicker').change(function() {
    console.log('color: ' +  $(this).val());
    color = $(this).val();

  })
});
