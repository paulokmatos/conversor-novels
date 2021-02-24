<?php ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <title>Wuxia Convertor</title>
</head>
<body>

  <div class="container">
      <h1 class="titulo">Wuxia Conversor</h1>


      

        <div class="item">
          <input type="text" id="input" placeholder="Medida" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>
          <div class="seletor">
            <select id="medida1" onchange="esconderKm()">
              <option value="default" selected disabled>Escolha a Medida</option>
              <option value="mt">Metro</option>
              <option value="km">Km</option>
              <option value="cm">Centímetro</option>
              <option value="li">Li</option>
              <option value="zg">Zhang</option>
            </select>
          </div>
        </div>
        
        <div class="item">
          <input type="text" id="result" placeholder="Equivale" readonly>
          <div class="seletor">
          <select id="medida2">
            <option value="default" selected disabled>Escolha a Medida</option>
            <option value="mt">Metro</option>
            <option value="km" id="quilometro">Km</option>
            <option value="cm">Centímetro</option>
            <option value="li" id="lis">Li</option>
            <option value="zg" id="zhang">Zhang</option>
          </select>
        </div>
        </div>
     
        

        <button onclick="converterMedida()" > = </button>

        


    


    </div>

  </div>
  <script src="./js/script.js"></script>
</body>
</html>