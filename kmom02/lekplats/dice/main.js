/**
 * Place your JS-code here.
 */
 $(document).ready(function(){
   'use strict';
   var text;
   text = document.getElementById('text');
   text.innerHTML = '<b>Dice functions in Javascript</b><br /><br />';
   var text_6_dice = 'Throw a serie of 6 with a dice.<br />';
   text.innerHTML += text_6_dice;
   var text_6_Result = rollDice(6)+'<br /><br />';
   text.innerHTML += text_6_Result;
   var text_12_dice = 'Throw a serie of 12 with a dice.<br />';
   text.innerHTML += text_12_dice;
   var text_12_Result = rollDice(12)+'<br /><br />';
   text.innerHTML += text_12_Result;
   var text_100_dice = 'Throw a serie of 100 with a dice.<br />';
   text.innerHTML += text_100_dice;
   var text_100_Result = rollDice(100)+'<br /><br />';
   text.innerHTML += text_100_Result;

   text.className = 'blue';
   console.log('Everything is ready.');

   function rollDice(times) {
     var result        =  0;
     var total_result  =  0;
     var result_string = '';
     var average       =  0;
     var i;
     for (i = 0; i < times; i++) {
       result = Pesu.random(1,6);
       total_result+=result;
       result_string += +result.toString() + ', ';
     }
     average = total_result / times;
     var average_fixed1 = average.toFixed(1);
     var result_average = 'Average: ' + average_fixed1.toString() + ' ' + 'Serie: ' + result_string;
     return result_average;
   }

 });
