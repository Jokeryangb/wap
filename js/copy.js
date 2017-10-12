var timer;
function copyEmail()
{
    var copy = document.getElementById("copy");
    copy.select();
    document.execCommand("Copy");
    clearTimeout(timer)
    $('.toast').fadeIn(500);
    timer = setTimeout(function () {
        $('.toast').fadeOut(500);
    },2000)
}