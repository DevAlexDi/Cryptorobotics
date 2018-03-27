<?php

$email = $_POST['email'];
if ($email) {
    mail('info@cryptorobotics.io', 'Подписка на новости | Cryptorobotics', 'Пользователь хочет получать новости на email: '.$email);
}

?>