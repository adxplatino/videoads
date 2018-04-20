var count = 5;
function countDown() {
    if (count <= 0) {
        $('.btn-close-ads').html('Close ads & play video');
        $('.btn-close-ads').click(function () {
            $('.ads').fadeOut();

         });
    } else {
        $('.btn-close-ads').html('Please wait (' + count-- + ')');
        setTimeout(countDown, 1000);
    }
}


$(document).ready(function () {
    $('.btn-close-ads').fadeIn();
    countDown();
});