﻿var base = $('#baseUrl').text();


// Note Modal click
$(".theNoteSaveButton").click(function (e) {
    var comment = $("#noteArea").val();
    e.preventDefault();

    var $form = $("#noteForm");
    var data = $form.serialize();


    $.ajax({
        type: $form.prop("method"),
        url: $form.prop("action"),
        data: data,
        dataType: "json",
        success: function (response) {
            if (checkJsonResponse(response)) {


        },
        error: function (e) {
            console.log(e);
            generateNotify("Something went wrong!", "danger");
        }
    });
});
// Update the note modal
$('#noteModal').on('show.bs.modal', function (event) {


















    e.preventDefault();

    var $form = $("#removeForm");

        $.ajax({
            type: $form.prop("method"),
            url: $form.prop("action"),
            data: $form.serialize(),
            dataType: "json",
            success: function (response) {
                if (checkJsonResponse(response)) {
            },
            error: function (e) {
                console.log(e);
                generateNotify("Something went wrong!", "danger");
            }
        });




