<?php //Title  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/header.php'); ?>


<div id='flash'>
<h1>Setting up a client for a websocket broadcast server.</h1>
<p>Check the console to see what actually happens.</p>

<form id='form1'>
  
  <p>
    <label>Connect: </label></br><input id='connect_url'/>
    <input id='connect' type='button' value='Connect'/>
    <input id='close' type='button' value='Close connection'/>
  </p>

  <p>
    <label>Send message: </label></br><input id='message'/>
    <input id='send_message' type='button' value='Send message'/>
  </p>

  <p>
    <label>Log: </label></br><div id='output' class='output'></div>
  </p>

</form> 

</div>


<p><em>"Hey Luke, use the <a href='../source.php?dir=get-going-with-jquery-ajax&amp;file=index.php#file'>source</a>."</em></p>
<?php //Footer  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
