$('html, body').animate({
    scrollTop: $("#target-element").offset().top
}, 1000);
This will scroll the page down to #target-element over a period of one second (1,000 milliseconds = 1 second).

Scroll to the selected anchor

You can take things a bit further and animate scrolling for all anchors on your page. The following snippet will watch for clicks on any link that points to an anchor and smoothly scroll down to it:

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 2000);
    }
});