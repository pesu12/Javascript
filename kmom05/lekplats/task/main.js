/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';

  // Function to update shopping cart
  var updateCart = function(data) {
  	$('#content').html(data.content);
    $('#numitems').html(data.numitems);
    $('#sum').html(data.sum);
		$('#status').html('Kundvagn rensad.');

		$.each(data.items, function(){
			console.log('item.');
		});

		setTimeout(function(){
			$('#status').fadeOut(function(){
				$('#status').html('').fadeIn();
			});
		}, 1000);

		console.log('Shopping cart updated with sum '+data.sum);
  };


  // Init the shopping cart
  var initCart = function() {
    $.ajax({
      type: 'post',
      url: 'shop.php',
      dataType: 'json',
      success: function(data){
        updateCart(data);
        console.log('Ajax request returned successfully. Shopping cart initiated.');
      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);
      }
    });
  };
  initCart();


  /**
   * Function for successful ajax requests
   */
  var success = function(data) {
    $('#output').removeClass().addClass(data.outputClass).html('<p>' + data.output + '</p>');
    console.log("log output:" + data.output);
    var outputcheck=data.output;
    var n = outputcheck.search("Lyckad login");
    console.log("n=" + n);
    if(n===0) {
      window.location.assign("doshopping.php")
    }
    var out = outputcheck.search("Lyckad utloggning");
    console.log("out=" + out);
    if(out===0) {
      window.location.assign("index.php")
    }
    //window.location.assign("doshopping.php")
  };

  /**
   * Check if form is valid
   *
   */
  var theForm = $('#form1');
  theForm.on('submit', function(event) {
    var formData = theForm.serialize();
    //formData.push({ name: 'doPay', value: true });

    console.log("Form: " + theForm.serialize());
    console.log('form submitted, preventing default event');
    event.preventDefault();

    $('#output').removeClass().addClass('working').html('<img src="http://dbwebb.se/img/loader.gif"/> Doing payment, please wait and do NOT reload this page...');



    $.ajax({
      type: 'post',
      url: 'checkout.php?action=pay',
      data: theForm.serialize(),
      dataType: 'json',
      success: function(data){
        var errors = '';

        $.each(data.errors || [], function(index, error) {
          errors += '<p>' + error.label + ' ' + error.message + '</p>';
        });

        $('#output').removeClass().addClass(data.outputClass).html('<p>' + data.output + '</p>' + errors);
        $('#sum').html(data.sum);

        console.log('Ajax request returned successfully. ' + data);
      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);
      }
    });


    console.log('Form submitted, lets wait for a response.');
  });


  /**
   * Eventhandler for #login
   */
  $('#login').on('click', function(event) {

    $('#output').removeClass().addClass('working').html('<img src="http://dbwebb.se/img/loader.gif"/> Performing login...');

    $.ajax({
      type: 'post',
      url: 'login.php?do=login',
      data: $('#form1').serialize(),
      dataType: 'json',
      success: success
    });

    console.log('Form submitted, lets wait for a response.');
  });



  /**
   * Eventhandler for #logout
   */
  $('#logout').on('click', function(event) {

    $('#output').removeClass().addClass('working').html('<img src="http://dbwebb.se/img/loader.gif"/> Performing logout...');

    $.ajax({
      type: 'post',
      url: 'login.php?do=logout',
      dataType: 'json',
      success: success
    });

    console.log('Form submitted, lets wait for a response.');
  });



  /**
   * Eventhandler for #status
   */
  $('#status').on('click', function(event) {

    $('#output').removeClass().addClass('working').html('<img src="http://dbwebb.se/img/loader.gif"/> Checking current status...');

    $.ajax({
      type: 'post',
      url: 'login.php?do=status',
      dataType: 'json',
      success: success
    });

    console.log('Form submitted, lets wait for a response.');
  });

  /**
   * Eventhandler for .purchase
   */
  $('#purchase').click(function() {
  	var id = $(this).attr('id');
  	$.ajax({
  		type: 'post',
			url: 'shop.php?action=add',
			data: {
				itemid: id
			},
			dataType: 'json',
			success: function(data){
				updateCart(data);
				console.log('Ajax request returned successfully.');
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);
			},
  	});
  	console.log('Clicked to buy id: ' + id)
  });

  /*
  * Eventhandler for .purchase
  */
 $('#topay').click(function() {
   var id = $(this).attr('sum')
   $.ajax({
     type: 'post',
     url: 'shop.php?action=topay',
     data: {
       itemid: id
     },
     dataType: 'json',
     success: function(data){
       updateCart(data);
       console.log('Ajax request returned successfully.');
     },
     error: function(jqXHR, textStatus, errorThrown){
       console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);
     },
   });
   console.log('Clicked to buy id: ' + id)
 });


  /**
   * Eventhandler for #clear
   */
	$("#clear").click(function() {
  	$.ajax({
  		type: 'post',
			url: 'shop.php?action=clear',
			dataType: 'json',
			success: function(data){
				updateCart(data);
				console.log('Ajax request returned successfully.');
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);
			},
  	});
  	console.log('Clearing shopping cart.')
  });


  console.log('Everything is ready.');

  console.log('Ready to roll.');
});
