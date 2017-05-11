<?php //Title  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/header.php'); ?>

<div id='box3' class='box'>
<div class='minimize'>x</div>
<img class='example' src='image/me.jpg?w=900' alt='' width='400px' />
<h1>Mitt liv ute i naturen</h1>
<p>Det här var intressant, kul med olika färger</br>Per</p>
<p>Hälsningar</br>Per</p>
<p><form>
<label>Färgkod i hex (#eee or #0000FF): <input id='box3_color' type='text' name='color' /></label>
<input id='boxCreate' type='button' value='Add color' />
</form></p>
<p id='palette'>Färgpalett:</p>
</div>
<?php //Footer  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
