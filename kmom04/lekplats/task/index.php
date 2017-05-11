<?php //Title  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
	<div id='cart'>
<form id="form1" method=post>
  <p><label>Logga in (admin):<br><input type=text name=user></label></p>
  <p><label>Lösenord (admin):<br><input type=password99 name=password></label></p>
  <p>
    <input id="login" type=button name=login value="Logga in">
    <input id="logout" type=button name=logout value="Logga ut">
    <input id="status" type=button name=status value=Status>
  </p>
  <p><output id="output"></output></p>
</form>
		</div>

	<h1><u><b><i>PsWeb dvdshop online</i></b></u></h1>
	<table>
		<tr><th>Bild</th><th>Titel</th></tr>
		<tr><td><img src="image/django-unchained.png?w=200&amp;h=100&amp;crop-to-fit"></td><td>Django Unchained</td></tr>
		</<tr><td><img src="image/enders-game_.png?w=200&amp;h=100&amp;crop-to-fit"></td><td>Enders Game</td></tr>
		</<tr><td><img src="image/godzilla.png?w=200&amp;h=100&amp;crop-to-fit"></td><td>Godzilla</td></tr>
	</table>

</div>


<?php //Footer  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
