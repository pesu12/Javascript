/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   'use strict';

   //Declare variables.
   var mmi, text, out, log, table, bankroll, color,bet;

   //Get data from html
   log = document.getElementById('log');
   text = document.getElementById('text');
   table = document.getElementById('table');

   text.innerHTML = '<b>Roulette </b></br>';
   text.innerHTML += 'Add bet. Push the Roll button. If result is your played color';
   text.innerHTML += ' the bet is added to your</br> bankroll. If the result is not your';
   text.innerHTML += 'played color. Bet is taken from your bankroll.';

   text.className = 'black';
   mmi = document.getElementById('inoutput');
   mmi['bankroll'].value = 100;
   mmi['bet'].value = 10;
   mmi['color'].select = 'Black';

   //Create roulette table gui
   createRouletteGui();

  //When rollback is clicked on
   mmi['roll'].onclick = (function() {
     var rolls, makespinn, times = 10, step = 0, indata, indataok;

     //Get data from the form
     indata=getIndata();

     //Check that the indata is valid
     indataok=checkIndata(indata);
     if(indataok) {
     //Inner functopm
        makespinn = function () {
          var output, outputok, number;

          number = document.getElementById('n' + rolls[step]);
          number.className += ' selected';

          if (step > 0) {
               number = document.getElementById('n' + (rolls[step-1]));
               number.className = 'number ' + getColor(rolls[step-1]);
             }

             step += 1;
             if (step < times) {
               window.setTimeout(makespinn, 500);
             } else {
               output=updateAccount(rolls[9],indata);
               outputok=makeOutput(indata,output);
            }
        };
        clearRouletteGui();
        rolls=makeRoll(times);
        setTimeout(makespinn, 500);
      }
   });

   /**
    * Function get indata from user.
    * @return {string}
    */
   function getIndata() {
     var indata;
     bet = document.getElementById('bet').value;
     bankroll = document.getElementById('bankroll').value;
     color = document.getElementById('color');

     indata=';'+bankroll+';;'+bet+';;;'+mmi['color'].value;

     return indata;
   }

   /**
    * Function to check indata from the user..
    * @param {string} indata
    * @return {return boolen} dataok
    */
   function checkIndata(indata) {
     var checkok=true, bankrollcheck, betcheck;
     bankrollcheck=indata.substring(1,indata.indexOf(";;"));
     if(bankrollcheck<1) {
       alert("The bankroll must be bigger than 0.");
       checkok=false;
     }
     betcheck=indata.substring(indata.indexOf(";;")+2,indata.indexOf(";;;"));
     if(betcheck<1) {
       alert("The bet must be bigger than 0.");
       checkok=false;
     }
     if(document.getElementById('bet').value-document.getElementById('bankroll').value>0) {
       alert("The bet must be not be bigger than bankroll");
       checkok=false;
     }
     return checkok;
   }


   /**
    * Function to make rolls depending on nr
    * @param {string} indata
    * @return {string array}
    */
   function makeRoll(nr) {
     var i, res = [];
     //Generate randomvalue
     for(i = 0; i < nr; i++) {
      res[i]=Pesu.random(0,36);
     }
     return res;
   }

   /**
    * Function that updates the user account.
    * @param {String} result
    * @return {String}
    */
   function updateAccount(result,indata) {

     var roulettecolor,playedcolor, outresult;

     //Get indata
     playedcolor=indata.substring(indata.indexOf(";;;")+3,indata.length);
     roulettecolor=getColor(result);

     //If randomvalue(color) is the same as playedcolor => win
     if(roulettecolor===playedcolor) {
       outresult='win;'+roulettecolor+';;'+result;
       mmi['bankroll'].value = Number(mmi['bankroll'].value) +
        Number(mmi['bet'].value);
     } else {
       outresult='lost;'+roulettecolor+';;'+result;
       mmi['bankroll'].value = Number(mmi['bankroll'].value)
        - Number(mmi['bet'].value);
     }

     return outresult;
   }

   /**
    * Function that creates outputdata.
    * @param {String} indata
    * @param {String} result
    * @return {String}
    */
   function makeOutput(indata,output) {
     var resultcolor, resultwinlost, resultnumber, outtxt;
     resultwinlost=output.substring(0,output.indexOf(";"));
     resultcolor=output.substring(output.indexOf(";")+1,output.indexOf(";;"));
     resultnumber=output.substring(output.indexOf(";;")+2,output.length);
     outtxt='Bet is&nbsp;'+ mmi['bet'].value +'&nbsp;spinning the wheel... ';
     outtxt+='Stopped at '+resultcolor+' '+ resultnumber+'. you '+resultwinlost;
     out(log, outtxt);
     return 'Output is ok';
   }

  /**
   * Function to get color for a specific roulette number
   * @param {Number} n
   * @return {String } color for the number n
   */
  function getColor (n) {
    var colors = ['green', 'black', 'red'],
    table = [0,2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2];
    return colors[table[n]];
  }

  /**
   * Function to create roulette table gui
   */
  function createRouletteGui () {
    var i, e;
    for(i = 0; i <= 36; i++) {
      e = document.createElement('div');
      e.innerHTML = i;
      e.className = 'number ' + getColor(i);
      e.id = 'n' + i;
      table.appendChild(e);
    }
  }

  /**
   * Function to clear roulette table gui
   */
  function clearRouletteGui () {
    var i, e;
    for(i = 0; i <= 36; i++) {
      e = document.getElementById('n' + i);
      e.className = 'number ' + getColor(i);
    }
  }

   /**
    * Function to output text
    * @param {string} e where to send output
    * @param {string} s with output string
    * @return {string}
    */
   out = function (e, s) {
     var el = document.createElement('p');
     el.innerHTML = s;
     return e.insertBefore(el, e.firstChild);
   };

 });
