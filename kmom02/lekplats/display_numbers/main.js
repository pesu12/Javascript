/**
 * Place your JS-code here.
 */
 $(document).ready(function(){
   'use strict';
   var text;
   text = document.getElementById('text');
   text.innerHTML = 'Eulers konstant E = '+ Math.E+'<br />';
   text.innerHTML += 'PI = '+ Math.PI+'<br />';
   text.innerHTML += 'Largest value possible = '+ Number.MAX_VALUE+ '<br />';
   text.innerHTML += 'Positive infinity ='+ Number.POSITIVE_INFINITY +'<br />'+'<br />';
   text.className = 'blue';

   var table = document.createElement("TABLE");

   // Create an empty <thead> element and add it to the table:
   var header = table.createTHead();

   // Create an empty <tr> element and add it to the first position of <thead>:
   var row = table.insertRow(0);

   var cell = row.insertCell(0);
   var cell1 = row.insertCell(1);
   var cell2 = row.insertCell(2);
   var cell3 = row.insertCell(3);
   var cell4 = row.insertCell(4);
   var cell5 = row.insertCell(5);

   var cell1num= 42;
   var cell2num= 4.2;
   var cell3num= 12100;
   var cell4num= 0.0112;
   var cell5num= 16711935;

   cell.innerHTML = "<b>Function</b>";
   cell1.innerHTML = "<b>"+cell1num+"</b>";
   cell2.innerHTML = "<b>"+cell2num+"</b>";
   cell3.innerHTML = "<b>"+cell3num+"</b>";
   cell4.innerHTML = "<b>"+cell4num+"</b>";
   cell5.innerHTML = "<b>"+cell5num+"</b>";

   var row1 = table.insertRow(1);
   var cell6 = row1.insertCell(0);
   var cell7 = row1.insertCell(1);
   var cell8 = row1.insertCell(2);
   var cell9 = row1.insertCell(3);
   var cell10 = row1.insertCell(4);
   var cell11 = row1.insertCell(5);

   cell6.innerHTML = "Exponentialform";
   cell7.innerHTML = cell1num.toExponential();
   cell8.innerHTML = cell2num.toExponential();
   cell9.innerHTML = cell3num.toExponential();
   cell10.innerHTML = cell4num.toExponential();
   cell11.innerHTML = cell5num.toExponential();

   var row2 = table.insertRow(2);
   var cell12 = row2.insertCell(0);
   var cell13 = row2.insertCell(1);
   var cell14 = row2.insertCell(2);
   var cell15 = row2.insertCell(3);
   var cell16 = row2.insertCell(4);
   var cell17 = row2.insertCell(5);

   cell12.innerHTML = "Fixed form, three decimals";
   cell13.innerHTML = cell1num.toFixed(3);
   cell14.innerHTML = cell2num.toFixed(3);
   cell15.innerHTML = cell3num.toFixed(3);
   cell16.innerHTML = cell4num.toFixed(3);
   cell17.innerHTML = cell5num.toFixed(3);


   var row3 = table.insertRow(3);
   var cell18 = row3.insertCell(0);
   var cell19 = row3.insertCell(1);
   var cell20 = row3.insertCell(2);
   var cell21 = row3.insertCell(3);
   var cell22 = row3.insertCell(4);
   var cell23 = row3.insertCell(5);

   cell18.innerHTML = "Round to closes integer";
   cell19.innerHTML = Math.round(cell1num);
   cell20.innerHTML = Math.round(cell2num);
   cell21.innerHTML = Math.round(cell3num);
   cell22.innerHTML = Math.round(cell4num);
   cell23.innerHTML = Math.round(cell5num);



   var row4 = table.insertRow(4);
   var cell24 = row4.insertCell(0);
   var cell25 = row4.insertCell(1);
   var cell26 = row4.insertCell(2);
   var cell27 = row4.insertCell(3);
   var cell28 = row4.insertCell(4);
   var cell29 = row4.insertCell(5);

   cell24.innerHTML = "Sqare root";
   cell25.innerHTML = Math.sqrt(cell1num).toFixed(4);
   cell26.innerHTML = Math.sqrt(cell2num).toFixed(4);
   cell27.innerHTML = Math.sqrt(cell3num).toFixed(2);
   cell28.innerHTML = Math.sqrt(cell4num).toFixed(5);
   cell29.innerHTML = Math.sqrt(cell5num).toFixed(1);

   var row5 = table.insertRow(5);
   var cell30 = row5.insertCell(0);
   var cell31 = row5.insertCell(1);
   var cell32 = row5.insertCell(2);
   var cell33 = row5.insertCell(3);
   var cell34 = row5.insertCell(4);
   var cell35 = row5.insertCell(5);

   cell30.innerHTML = "Value for sinus";
   cell31.innerHTML = Math.sin(cell1num).toFixed(5);
   cell32.innerHTML = Math.sin(cell2num).toFixed(5);
   cell33.innerHTML = Math.sin(cell3num).toFixed(5);
   cell34.innerHTML = Math.sin(cell4num).toFixed(5);
   cell35.innerHTML = Math.sin(cell5num).toFixed(5);

   table.className = 'blue';

   text.parentElement.appendChild(table);
 });
