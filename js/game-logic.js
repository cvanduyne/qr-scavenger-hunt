"use strict";

var gameLogic = {};

var data = [
  {unlocked: false, name: "Bob", age: 36, description: "sits and watches TV"},
  {unlocked: false, name: "Mary", age: 36, description: "Has lots of cats"}
]
gameLogic.OnFoundId = function( id )
{
  console.log("Handling id: "+id);  
}
gameLogic.HandleScan = function( value )
{
  var s = value.split(" ")
  var i = parseInt( s[s.length - 1] );
  
  this.OnFoundId( i );
}
