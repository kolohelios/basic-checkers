'use strict';

$(document).ready(init);

var current = 'pig';

function init(){
  initBoard();
  switchUser();
  $('board').on('click', '.active', select);
}

function initBoard(){
  $('#board tr:lt(3) .valid').addClass('player pig');
  $('#board tr:gt(4) .valid').addClass('player bird');
  $('#board td:not(.player)').addClass('empty');

}

function switchUser(){
  current = (current === 'pig') ? 'bird' : 'pig';
  $('.valid').removeClass('active selected');
  $('.' + current).addClass('active');
}

function select(){
  
}
