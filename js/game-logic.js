"use strict";

var gameLogic = {};

gameLogic.data = [
  {unlocked: false, image: "FOO", name: "Bob", age: 36, description: "sits and watches TV", container: {main: null}},
  {unlocked: false, image: "BAR", name: "Mary", age: 36, description: "Has lots of cats", container: {main: null}}
]

gameLogic.Start = function()
{ 
  this.CreateCards( document.getElementById("cardContainer") );
}

gameLogic.CreateCards = function( parentElement )
{
  for (var i=0; i < this.data.length; i++)
  {
    var s = document.createElement("span");
    this.data[i].container.main = s;
    this.CreateCard(s, i);
    parentElement.appendChild(s);
  }
  this.UpdateCards();
}
gameLogic.UpdateCard = function(id)
{
  var container = this.data[id].container;
  container.image.innerHTML = this.data[id].image;
  container.name.innerHTML = this.data[id].name;
  container.age.innerHTML = this.data[id].age;
  container.description.innerHTML = this.data[id].description;
}
gameLogic.UpdateCards = function()
{
  for (var i=0; i < this.data.length; i++)
  {
    this.UpdateCard(i);
  }  
}
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
    
    if (i >= 0 && i < this.data.length)
    {
      this.OnFoundId( i );
    }
  }
  catch( err ) {
    console.log("Got error parsing scan: "+err); 
  }
}
gameLogic.CreateCard = function( parentElement, id )
{
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      if (i==0)
      {
        if (j==0)
        {
         this.data[id].container.image = cell;
        }
        else
        {
         this.data[id].container.name = cell;
        }
      }
      else
      {
        if (j==0)
        {
         this.data[id].container.age = cell;
        }
        else
        {
         this.data[id].container.description = cell;
        }
      }
      row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  parentElement.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");  
}

gameLogic.Start();
