<?php

  if ((isset($_POST['Имя']) != "") && (isset($_POST['Телефон']) != "") && (isset($_POST['Почта']) == "")) {
    $to = 'makskirclaw@gmail.com';
    $subject = 'Обратная связь';
    $message = '
      <html>
        <head>
          <title>'.$subject.'</title>
        </head>
        <body>
          <p>Имя: '.$_POST['Имя'].'</p>
          <p>Телефон: '.$_POST['Телефон'].'</p>
        </body>
      </html>';
    mail($to, $subject, $message);
  };

  if ((isset($_POST['Имя']) != "") && (isset($_POST['Телефон']) != "") && (isset($_POST['Почта']) != "")) {
    $to = 'makskirclaw@gmail.com';
    $subject = 'Обратная связь';
    $message = '
      <html>
        <head>
          <title>'.$subject.'</title>
        </head>
        <body>
          <p>Имя: '.$_POST['Имя'].'</p>
          <p>Телефон: '.$_POST['Телефон'].'</p>
          <p>Электронная почта: '.$_POST['Почта'].'</p>
        </body>
      </html>';
    mail($to, $subject, $message);
  };

?>