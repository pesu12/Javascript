<?php //Title  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
	<div id='cart'>
		<h2><img src="image/cart.png" width="40px">Kundvagn</h2>
		<div id='content'></div>
		<p>
			Antal filmer i kundvagn: <span id="numitems">0</span><br/>
			Totalsumma: <span id="sum">0 kronor</span><br/><br/>

      <input id="topay" type=button name=shop value="Till kassan!">
      <input id="logout" type=button name=logout value="Logga ut">
			<p>
				<input id="clear" type="button" value="Rensa kundvagn" />
				<span id="status">Inget har hänt. Gör ett köp.</span>
			</p>
		</div>
		<h1>Köp dvdfilm online</h1>
		<table>
			<tr><th>Bild</th><th>Titel</th><th>Pris</th><th>Köp</th></tr>
			<tr><td><img src="image/django-unchained.png?w=200&amp;h=100&amp;crop-to-fit"></td><td>Django Unchained</td><td>50 kronor.</td><td><button id='book1' class="purchase">Köp</button></td></tr>
			</<tr><td><img src="image/enders-game_.png?w=200&amp;h=100&amp;crop-to-fit"></td><td>Enders Game</td><td>50 kronor.</td><td><button id='book2' class="purchase">Köp</button></td></tr>
			</<tr><td><img src="image/godzilla.png?w=200&amp;h=100&amp;crop-to-fit"></td><td>Godzilla</td><td>50 kronor.</td><td><button id='book3' class="purchase">Köp</button></td></tr>


		</table>

  <p><output id="output"></output></p>

	</div>


	<?php //Footer  ?>
	<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
