'use strict';

$(document).ready(init);

var current = 'pig';
var $source;

function init(){
  initBoard();
  switchUser();
  $('#board').on('click', '.active', select);
  $('#board').on('click', '.empty', move);
}

function move(){
  if(!$source){
    return;
  }
  else{
    var $target = $(this);
    var isKing = $source.is('.king');

    var src = {};
    var tgt = {};

    src.x = $source.data('x') * 1;
    src.y = $source.data('y') * 1;
    tgt.x = $target.data('x') * 1;
    tgt.y = $target.data('y') * 1;

    console.log(src, tgt);

    var compass = {};
    compass.north = (current === 'bird') ? -1 : 1;
    compass.east = (current === 'bird') ? -1 : 1;
    compass.west = compass.east *= -1;
    compass.south = compass.north *= -1;

    switch(moveType(src, tgt, compass, isKing)){
      case 'move':
        movePiece($source, $target);
        switchUser();

        break;
      case 'jump':
        console.log('jump!');
    }
  }
}

function movePiece($source, $target){
  var targetClasses = $target.attr('class');
  var sourceClasses = $source.attr('class');
  $source.attr('class', targetClasses);
  $target.attr('class', sourceClasses);
}

function moveType(src, tgt, compass, isKing){
  if(isMove(src, tgt, compass, isKing)){
    return 'move';
  }
  if(isJump() && isEnemy()){
    return 'jump';
  }
  function isMove(src, tgt, compass, isKing){
    return (src.x + compass.east === tgt.x ||
      (src.x + compass.west === tgt.x) &&
      (src.y + compass.north === tgt.y) ||
      (isKing && src.y + compass.south === tgt.y));
  }

  function isJump(){

  }

  function isEnemy(){

  }
}

function select(){
  $source = $(this);
  $('.valid').removeClass('selected');
  $source.addClass('selected');
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
