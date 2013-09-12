function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.originalEvent.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    if (files[0]) {
        upload(files[0]);
    }

    $("#drop_zone").css("background-color", "white");
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.originalEvent.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    $("#drop_zone").css("background-color", "lightgray");
}

function handleDragLeave(evt) {
    $("#drop_zone").css("background-color", "white");
}

$("#drop_zone").on("dragover", handleDragOver);
$("#drop_zone").on("drop", handleFileSelect);
$("#drop_zone").on("dragleave", handleDragLeave);

function display() {
    download(function(data) {
        $("#content").text(data);
        clearTimeout();
        console.log(markdown.toHTML(data));
        $("#content").html(markdown.toHTML(data));
        $("#content").addClass("show-border");
        setTimeout(function() {
            $("#content").html("");
            $("#content").removeClass("show-border");
        }, 5000);
    });
}

$("#display").click(display);


var key = "hackme";
