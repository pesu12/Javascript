<?php $title='Roulette'; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
  <p id='text' class='red'>Hi this text should be replaced when page and DOM is loaded.</p>
  <div id='table'></div>
  <div id='status'>
    <form id='inoutput'>
    <p>
      <label>Bankroll: <input id='bankroll' type='number' /></label>
      <label>Bet: <input id='bet' type='number' /></label>
      <label>Color: <select name="color">
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select></label>
      <input id='roll' type='button' value='Roll' />
    </p>
    </div>
    <div id='log'></div>
</div>

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
