var x = 2;
var array = ["Kody", "Mich"];

function add()
{
 var item = document.getElementById("id").value;
 array[x] = item;
 x++;
}

function remove()
{
    var trash = document.getElementById("id").value;
   for (var i = 0,len = array.length; i < len; i++) {
        if ( array[i] === trash ) { // strict equality test
            array.splice(i, 1);
        }
    }
    x--;
}

function display()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Name " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}