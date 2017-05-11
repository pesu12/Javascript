/**
 * A websocket client.
 */
$(document).ready(function(){
  'use strict';
  
   //For the broadcast-server
  var broadcasturl = 'ws://nodejs1.student.bth.se:8127/',
    websocket,
    form = $('#form1'),
    output = $('#output'),
	user = $('#user').val();
	

  // Display the url in form field for the user to change
  $('#broadcastconnect_url').val(broadcasturl);

  $('#user_name').val('Per');
  
  // Event handler to create the braodcast websocket connection
  // using broadcast-protocol
  $('#broadcastconnect').on('click', function(event) {
    broadcasturl = 'ws://nodejs1.student.bth.se:8127/';
	user = $('#user_name').val();
    console.log('Connecting to: ' + broadcasturl);
    websocket = new WebSocket(broadcasturl, 'broadcast-protocol');

    websocket.onopen = function() {
      console.log(user+ ' is now connected');
      console.log(websocket);
      //outputLog(user+ ' is now connected');
	  //Send message to other users that this user is connected
	  websocket.send(user+ ' is now connected'); 
    }

    websocket.onmessage = function(event) {
      console.log('Message received: ' + event.data);
      console.log(event);
      console.log(websocket);
      outputLog(event.data);
    }

    websocket.onclose = function() {
      console.log('Connection closed.');
      console.log(websocket);
      outputLog(user+' is disconnected.');
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
      websocket.send($('#user_name').val() + ' says: '+msg);      
      //outputLog($('#user_name').val() + msg);
    }
  });

  
  // broadcastclose the connection to the server
  $('#broadcastclose').on('click', function() {
    if(!websocket || websocket.readyState === 3) {
      console.log('The websocket is not connected to a server.');
	  outputLog('The client is not connected to a server, please connect');
    } else {
		console.log('Closing websocket.');
		websocket.send($('#user_name').val() + ' is disconnected');
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
