$('.rating label').hover(function () {
    $(this).prevAll('label').andSelf().addClass('rating-sel');
}, function () {
    $(this).siblings('label').andSelf().removeClass('rating-sel');
});
var lastClick;
$('.rating label').click(function () {
        if (lastClick === this) {
            return;
        }
        else {
            lastClick = this;
            var rate = $(this).text();
            $(this).siblings('label').andSelf().removeClass('rating-over');
            $(this).prevAll('label').andSelf().addClass('rating-over');
            $(".rating-result").text("Вы проголосовали: " + rate)
        }

    }
);
$('.radio-group label').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});
$('.mobile-right').click(function () {
    $(this).next('ul').slideToggle('slow');
});
var hmenu = $(".head-menu");
$(window).on("resize", function(){
    if($(window).width() > 767) {
        hmenu.css('display', "table-row");
    }
    else {
        hmenu.css('display', "none");
    }
})