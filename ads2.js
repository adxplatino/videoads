var count = 5;
function countDown() {
    if (count <= 0) {
        $('.btn-close-ads').html('Click para continuar >');
        $('.btn-close-ads').click(function () {
            $('.ads').fadeOut();
         });
    } else {
        $('.btn-close-ads').html('Cargando... (' + count-- + ')');
        setTimeout(countDown, 2000);
    }
}
$(document).ready(function () {
    $('.btn-close-ads').fadeIn();
    countDown();
});
