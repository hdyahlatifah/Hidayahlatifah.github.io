
// $('#change-content-btn').click(function(){

    var slideCount = $(".slider div.slides div.slide").length;
    var slideWidth = $(".slider div.slides div.slide").width();
    var slideHeight = $(".slider div.slides div.slide").height();
    var totalWidth = slideCount * slideWidth

    $(".slider").css({width : slideWidth, height : slideHeight})
    $(".slider div.slides").css({width : totalWidth, marginLeft : -slideWidth})
    $(".slider div.slides div.slide:last-child").prependTo(".slider div.slides")

    $("#left-btn").click(() => {
        $(".slider div.slides").animate(
            1000, function(){
            $(".slider div.slides div.slide:last-child").prependTo(".slider div.slides")
            $(".slider div.slides").css({left : ''})
        })
    })

    $("#right-btn").click(() => {
        $(".slider div.slides").animate(
            1000, function(){
            $(".slider div.slides div.slide:first-child").appendTo(".slider div.slides")
            $(".slider div.slides").css({left : ''})
        })
    })


// var slideIndex =1;
// showSlides(slideIndex);

// function plusSlides(n){
//     showSlides(slideIndex+=n);
// }

// function currentSlide(n){
//     showSlides(slideIndex=n);
// }
