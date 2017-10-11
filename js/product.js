
$('.toggle').click(function () {
    console.log($(this).data('toggle'))
    var flag = $(this).data('toggle');
    if (flag == "open") {
        $(this).data('toggle','close')
        $(this).parents('li').find('.detail').removeClass('short')
        $(this).text("收起").removeClass('btn-open').addClass('btn-close')
    }else if (flag == "close") {
        $(this).data('toggle','open')
        $(this).parents('li').find('.detail').addClass('short');
        $(this).text("展开").removeClass('btn-close').addClass('btn-open')
    }

})



