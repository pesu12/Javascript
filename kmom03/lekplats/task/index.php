<?php //Title  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/header.php'); ?>
<div id='boxtaskexplanation' class='box'>
  <h1><u> Uppgift kmom03 Forma visitkort</u></h1>
  <p>
    Här kommer en plugin för att prova ut olika textfonter och olika
    storlekar för logon för ett visitkort.
    Det är viktigt att ett visitkort ser bra ut eftersom visitkortet kan vara avgörande
    för att ge ett företag högt förtroende hos kunder vid affärer.
  </p>
  <p>
  Pluginen anropas med: $(htmlelement).changecardformat({"fontFamily": [fontfamily]},{"width":logo bredd}).
  Om ingen fontFamily anges så är sans-serif default. Om ingen logo-bredd anges så
  är bredd 100px default för logon.
</p>
<p>
Pluginen hittas på följande sida där den kan kopieras:
<a href="http://www.student.bth.se/~pesu12/javascript/kmom03/lekplats/task/main.js">Länk till min plugin</a>
</p>
<p>
Installationsmanual för min plugin:
<a href="http://www.student.bth.se/~pesu12/javascript/kmom03/lekplats/task/Installation.php">Installationsmanual</a>
</p>
<p>
Pluginen fungerar på så sätt att när knappen "Byt text font, stor logo" trycks in så byts
visitkortets fonter ut samtidigt som logon visas med 100 px bredd.
När knappen "Byt text font, liten logo" trycks in så byts visitkortets fonter ut samtidigt
som logon visas med 50 px bredd.
</p>
<a href="http://www.student.bth.se/~pesu12/javascript/kmom03/PsWeb/webroot/me.php">Tillbaka till min me-sida</a>
</div>

<div id='boxvisitcard' class='cardbox'>
  <img class='visitcard' src='image/university.jpg?w=100' alt='' width='100px' />
  <h2><u>Blekinge Tekniska Högskola</u></h2>
  <p>Per Sundberg</p>
  <p>Student</p>
  <p>pesu12@bth.se
  </br>
  Telehpone +46455385000
</br>
Address: Valhallavägen 1, Karlskrona</p>
</div>

<div id='boxchangeformat' class='box'>
  <input id='boxchangeformat_change_font_big_logo' type='button' value='Byt text font, stor logo' />
  <input id='boxchangeformat_change_font_small_logo' type='button' value='Byt text font, liten logo' />
</div>

<p><em>"Hey Luke, use the <a href='../source.php?dir=get-going-with-jquery-ajax&amp;file=index.php#file'>source</a>."</em></p>
<?php //Footer  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
