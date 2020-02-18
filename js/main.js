//   sticky navbar

$(document).ready(function(){
    $(window).scroll(function(){
        var navbar = $(window).scrollTop();
        if(navbar > 10) {
            $(".navbar").css("background" , "#0970e6")
        }
        else{
            $(".navbar").css("background" , "transparent");
        }
    })
})
// numbersss
let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });
  
   

