/**
 * A websocket client.
 */
$(document).ready(function(){
  'use strict';

  //For the echo-server
  var url = 'ws://nodejs1.student.bth.se:8127/',
    websocket,
    form = $('#form1'),
    output = $('#output');

  // Display the url in form field for the user to change
  $('#connect_url').val(url);
  
   //For the broadcast-server
  var broadcasturl = 'ws://nodejs1.student.bth.se:8127/',
    websocket,
    form = $('#form1'),
    output = $('#output');

  // Display the url in form field for the user to change
  $('#broadcastconnect_url').val(broadcasturl);


  // Event handler to create the braodcast websocket connection
  // using broadcast-protocol
  $('#broadcastconnect').on('click', function(event) {
    broadcasturl = $('#broadcastconnect_url').val();
    console.log('Connecting to: ' + broadcasturl);
    websocket = new WebSocket(broadcasturl, 'broadcast-protocol');

    websocket.onopen = function() {
      console.log('Connection is now up.');
      console.log(websocket);
      outputLog('Connection is now up');
    }

    websocket.onmessage = function(event) {
      console.log('Message received: ' + event.data);
      console.log(event);
      console.log(websocket);
      outputLog('Message from broadcastserver: ' + event.data);
    }

    websocket.onclose = function() {
      console.log('Connection closed.');
      console.log(websocket);
      outputLog('Websocket closed.');
    }
  });
  
  // Event handler to create the websock connection
  $('#connect').on('click', function(event) {
    url = $('#connect_url').val();
    console.log('Connecting to: ' + url);
    websocket = new WebSocket(url, 'echo-protocol');

    websocket.onopen = function() {
      console.log('Connection is now up.');
      console.log(websocket);
      //websocket.send('Thanks for letting me connect to you.');
      outputLog('Connection is now up');
    }

    websocket.onmessage = function(event) {
      console.log('Message received: ' + event.data);
      console.log(event);
      console.log(websocket);
      outputLog('Message from server: ' + event.data);
    }

    websocket.onclose = function() {
      console.log('Connection closed.');
      console.log(websocket);
      outputLog('Websocket closed.');
    }
  });


  // Add the message to the log
  function outputLog(message) {
    var now = new Date();
    $(output).append(now.toLocaleTimeString() + ' ' + message + '<br/>').scrollTop(output[0].scrollHeight);
  }


  // Send a message to the server
  $('#send_message').on('click', function(event) {
    var msg = $('#message').val();

    if(!websocket || websocket.readyState === 3) {
      console.log('The websocket is not connected to a server.');
	  outputLog('The client is not connected to a server, please connect');
    } else {
      websocket.send(msg);      
      outputLog('Per: ' + msg);
    }
  });


  // Close the connection to the server
  $('#close').on('click', function() {
      if(!websocket || websocket.readyState === 3) {
      console.log('The websocket is not connected to a server.');
	  outputLog('The client is not connected to a server, please connect');
	  } else {
		console.log('Closing websocket.');
		websocket.send('Client closing connection by intention.');
		websocket.close();
		console.log(websocket);
	   }
	});
  
  // broadcastclose the connection to the server
  $('#broadcastclose').on('click', function() {
    if(!websocket || websocket.readyState === 3) {
      console.log('The websocket is not connected to a server.');
	  outputLog('The client is not connected to a server, please connect');
    } else {
		console.log('Closing websocket.');
		websocket.send('Client closing connection by intention.');
		websocket.close();
		console.log(websocket);
	}
  }); 

  // clear the log
  $('#clearlog').on('click', function() {
     $(output).text("");
  });  


  console.log('Everything is ready.'); 
});
