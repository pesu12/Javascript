<?php //Title  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
<h1>Pers Echo-client</h1>
<p>Check the console to see what actually happens.</p>

<form id='form1'>
  
  <p>
    <label>Connect to echo-server: </label></br><input id='connect_url'/>
    <input id='connect' type='button' value='Connect'/>
    <input id='close' type='button' value='Close connection'/>
  </p>
  
   <p>
    <label>Connect to broadcast-server: </label></br><input id='broadcastconnect_url'/>
    <input id='broadcastconnect' type='button' value='Connect'/>
    <input id='broadcastclose' type='button' value='Close connection'/>
  </p>
 
   <p> 
 	</br>
    <label>Send message: </label></br><input id='message'/>
    <input id='send_message' type='button' value='Send message'/>
  </p>
  
  <p>
    <label>Log: </label><input id='clearlog' type='button' value='Clear Log'/></br>
	</br><div id='output' class='output'></div>
  </p>

</form> 

</div>


<p><em>"Hey Luke, use the <a href='../source.php?dir=get-going-with-jquery-ajax&amp;file=index.php#file'>source</a>."</em></p>
<?php //Footer  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
