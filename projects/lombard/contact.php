<?php

$post = (!empty($_POST)) ? true : false;

if ($post) {
    $email = trim($_POST['email']);
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $tel = htmlspecialchars($_POST["tel"]);
    $mailf = htmlspecialchars($_POST["mailf"]);
    $error = '';

    if (!$name) {
        $error .= 'Введите имя<br />';
    }
    if (!$mailf) {
        $error .= 'Введите email<br />';
    }
// Проверка телефона
    function ValidateTel($valueTel)
    {
        $regexTel = "/^[0-9]{7,12}$/";
        if ($valueTel == "") {
            return false;
        } else {
            $string = preg_replace($regexTel, "", $valueTel);
        }
        return empty($string) ? true : false;
    }

    if (!$tel) {
        $error .= "Введите телефон<br />";
    }
    if ($tel && !ValidateTel($tel)) {
        $error .= "Введите телефон<br />";
    }
    if (!$error)

//// Проверка email
//    function ValidateMailf($valueMailf)
//     {
//         $regexMailf = "/^[0-9]{7,12}$/";
//            if($valueMailf == "") {
//                return false;
//            } else {
//                $string = preg_replace($regexMailf, "", $valueMailf);
//            }
//            return empty($string) ? true : false;
//        }
//    if(!$mailf)
//    {
//        $error .= "Пожалуйста введите телефон.<br />";
//    }
//    if($mailf && !ValidateMailf($mailf))
//    {
//        $error .= "Введите корректный email<br />";
//    }
//    if(!$error)


// Проверка сообщения (length)
        if (!$message || strlen($message) < 1) {
            $error .= "Введите ваше сообщение.<br />";// В этой строчке ставиться минимальное ограничение на написание букв.
        }
    if (!$error) {


        $name_tema = "=?utf-8?b?" . base64_encode($name) . "?=";

        $subject = "message horohorina";
        /*
        $message ="\n\nСообщение: ".$message."\n\nИмя: " .$name."\n\nТелефон: ".$tel."\n\n";
        */
        $message = "\n\nИмя: " . $name . "\n\nTel number: " . $tel . "\n\nEmail: " . $mailf . "\n\nСообщение: " . $message . "\n\n";
        $mail = mail("sveta.horohorina@yandex.ru", $subject, $message,

            "From: " . $name_tema . " <" . $tel . ">  " . "Reply-To: " . $email . " " . " X-Mailer: PHP/" . phpversion());


        if ($mail) {
            echo 'OK';
        }

    } else {
        echo '<div style="color: #ffb049;  text-align: center;" class="notification_error">' . $error . '</div>';
    }

}
?>