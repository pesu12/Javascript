<?php //Title  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
<h2><b><u>Pers Web ChatClient</u></b></h2>

<form id='form1'>
  </br>
  <p>
    <label>Add a username to connect with: </label></br><input id='user_name'/>
    <input id='broadcastconnect' type='button' value='Connect'/>
    <input id='broadcastclose' type='button' value='Disconnect'/>
  </p>
    
   <p>
    <label>To All Users Send Message: </label></br><input id='message'/>
    <input id='send_message' type='button' value='Send message'/>
  </p>
  
  <p>
    <label>Log: </label>
    <input id='clearlog' type='button' value='Clear the log'/>
    </br><div id='output' class='output'></div>
  </p>

</form> 

</div>


<p><em>"Hey Luke, use the <a href='../source.php?dir=get-going-with-jquery-ajax&amp;file=index.php#file'>source</a>."</em></p>
<?php //Footer  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
