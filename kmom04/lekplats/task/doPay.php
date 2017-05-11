<?php //Title  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>

  <h1>Checkout</h1>

<form id='form1' method='post'>
    <table style="width: 100%;">
      <tr>
        <td>
          <p>
            <label>Namn på kortet:*</label><br>
            <input type="text" required />
          </p>
        </td>
        <td>
          <p>
            <label>Kreditkortstyp:*</label><br>
            <select name="cardtype">
              <option value="visa">Visa</option>
              <option value="mastercard">Mastercard</option>
              <option value="eurocard">Eurocard</option>
              <option value="americanexpress">American Express</option>
            </select>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p><label>Adress:*</label><br>
            <input type=text name=address required />
          </p>
        </td>
        <td>
          <p><label>Kreditkortsnummer:*</label><br>
            <input type=number name=creditcardnumber required />
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p><label>Postkod:*</label><br>
            <input type=number name=zip required />
          </p>
        </td>
        <td>
          <p>
            <label>Utgångsmånad:*</label><br>
            <select name="month">
              <option value="jan">Januari</option>
              <option value="feb">Februari</option>
              <option value="mar">Mars</option>
              <option value="apr">April</option>
              <option value="maj">Maj</option>
              <option value="jun">Juni</option>
              <option value="jul">Juli</option>
              <option value="aug">Agusti</option>
              <option value="sep">September</option>
              <option value="okt">Oktober</option>
              <option value="nov">November</option>
              <option value="dec">December</option>
            </select>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p><label>Ort:*</label><br>
            <input type=text name=city required />
          </p>
        </td>
        <td>
          <p><label>Utgångsår:*</label><br>
            <select name="Year">
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p><label>Land:*</label><br>
            <select name="Country">
              <option value="Sve">Sverige</option>
              <option value="Fin">Finland</option>
              <option value="Nor">Norge</option>
            </select>
          </p>
        </td>
        <td>
          <p><label>CVC:*</label><br>
            <input type=number name=cvc required />
          </p>
        </td>
      </tr>
    </table>

<input type="submit" value="Genomför köp">
<input id="logout" type=button name=logout value="Logga ut">
 </form>

  <div id='output' class=''></div>

</div>
<?php //Footer  ?>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
