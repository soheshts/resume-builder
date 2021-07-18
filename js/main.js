$(document).ready(function () {
    console.log("ready!");
    initDialog();
    datepicker = $(function () {
        $(".datepicker").datepicker();
    });
    $('#dialogPersonal').position({
        of: $(window)
    });
});

function initDialog() {
    dialog = $("#dialogPersonal").dialog({
        title: "Personal Details",
        autoOpen: true,
        height: 450,
        width: 400,
        draggable: false,
        dialogClass: "no-close",
        closeOnEscape: false,
        buttons: {
            "Next": function () {
                dialog.dialog("close");
            },
            Cancel: function () {
                dialog.dialog("close");
            }
        },

    });
}
