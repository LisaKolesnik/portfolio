jQuery(document).ready(function ($) {

    $("#ajax-contact-form").submit(function () {
        var str = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "contact.php",
            data: str,
            success: function (msg) {
                if (msg == 'OK') {
                    result = '<div class="flex"><div class="notification_ok"><h3 class="text-center">Thanks, we will callback</h3></div><div class="padding-top-2"><p class="text-center"></div></div>';
                    $("#fields").hide();
                } else {
                    result = msg;
                }
                $('#note').html(result);
            }
        });
        return false;
    });
});



