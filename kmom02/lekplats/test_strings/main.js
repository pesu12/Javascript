/**
 * Place your JS-code here.
 */
 $(document).ready(function(){
   'use strict';
   var text;
   text = document.getElementById('text');
   text.innerHTML = '<b>Strings - Datatypes and values</b><br /><br />';
   var text_copyright = 'Copyright \u00A9 by XXX';
   text.innerHTML += text_copyright + '&nbsp;&nbsp;('+text_copyright.length+')<br />';
   var text_mumintroll = ' Mumintrollet ';
   var text_con_mumintroll= text_copyright.concat(text_mumintroll);
   text.innerHTML += text_con_mumintroll + '&nbsp;&nbsp;('+text_con_mumintroll.length+')<br />';
   var text_year = 1942;
   var text_con_mumintroll_year= text_con_mumintroll.concat(text_year);
   text.innerHTML += text_con_mumintroll_year + '&nbsp;&nbsp;('+text_con_mumintroll_year.length+')<br />';
   var text_point = '.';
   var text_con_mumintroll_year_point = text_con_mumintroll_year.concat(text_point);
   text.innerHTML += text_con_mumintroll_year_point + '&nbsp;&nbsp;('+text_con_mumintroll_year_point.length+')<br />';
   var new_string= text_copyright + text_mumintroll + text_year + text_point;
   var new_string_without_xxx = new_string.replace(" XXX","");
   text.innerHTML += new_string_without_xxx + '&nbsp;&nbsp;('+new_string_without_xxx.length+')<br />';
   var string_typedef = "19" + "42";
   text.innerHTML += string_typedef + '&nbsp;&nbsp;(typeof=' + typeof string_typedef + ')<br />';
   var string_typedef1 = "19" + 42;
   text.innerHTML += string_typedef1 + '&nbsp;&nbsp;(typeof=' + typeof string_typedef1 + ')<br />';
   var num_typedef = 19 + 42;
   text.innerHTML += num_typedef + '&nbsp;&nbsp;(typeof=' + typeof num_typedef + ')<br />';
   var string_typedef2 = 19 + "42";
   text.innerHTML += string_typedef2 + '&nbsp;&nbsp;(typeof=' + typeof string_typedef2 + ')<br />';
   text.className = 'blue';
   console.log('Everything is ready.');

 });
