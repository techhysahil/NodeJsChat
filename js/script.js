$(function() {
    adjustWindowHeight();
});

$( window ).resize(function() {
    adjustWindowHeight();
});

function adjustWindowHeight(){
    var TotalHeight=$(window).outerHeight(),
        HeaderHeight=$('.header').outerHeight( true),
        SubheaderHeight=$('.sub_header').outerHeight( true),
        BreadcrumbHeight=$('.breadcrumb').outerHeight( true),
        WritemsgHeight=$('.write_msg').outerHeight( true );
    $('.chat_body').outerHeight(TotalHeight-(HeaderHeight+SubheaderHeight+BreadcrumbHeight+WritemsgHeight));
}


