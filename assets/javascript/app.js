$(document).ready(function () {
    console.log("hi")

$('.sidenav').sidenav();

var modal = $(".modal");

//close the modal if the x is clicked on
$(document.body).on("click", ".close", function () {
    modal.hide();
});

//close the modal if the anywhere but the modal is clicked on
$(document.body).on("click", function (event) {
    modal.hide();
});

});