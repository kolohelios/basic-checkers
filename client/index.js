'use strict';

$(document).ready(init);

function init(){
  initBoard();
}

function initBoard(){
  $('#board tr:lt(3) .valid').addClass('p1 pig');
  $('#board tr:gt(4) .valid').addClass('p2 bird');
  $('#board td:not(.p1 .p2)').addClass('empty');
}
