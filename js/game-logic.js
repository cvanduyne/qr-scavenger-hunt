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
  // Turn the scanned value into a zero based index referring to the data items
  try {
    var s = value.split(" ")
    var i = parseInt( s[s.length - 1] ) - 1;
    
    if (i >= 0 && i < data.length)
    {
      this.OnFoundId( i );
    }
  catch( err ) {
    console.log("Got error parsing scan: "+err); 
  }
}
