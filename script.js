


jQuery(function(){
  jQuery('#payment-solution').click(function(){
       
        jQuery('.list-default-content').hide();
        jQuery('.sol-payments').show();

 });
});

//functions for media query for mobile(320px - 767px)

var window_size = window.matchMedia('(max-width: 768px)');

jQuery(function(){
    jQuery('#btn').click(function(){
          jQuery('.main-nav').show();
          jQuery('#cancel').show();
          jQuery('#btn').hide();
        //   jQuery('.angleft1').hide();

        //   jQuery('.login').show();

        //   jQuery('.sol-payments').hide();

   });
});

//header level two

// function mediaQuery(){
//   let screenWidth = $(document).width();
//   console.log("hwllo");
//   if(screenWidth<767){
//  console.log("hwllo1");
//     $('.menu-list-content').show();
//     $('.menu-list1').hide();
//     $('.menu-list2').hide();
//     $('.menu-list3').hide();
//     $('.menu-list4').hide();

//   }
//   $('.menu-list').click(mediaQuery)

// }
if (window.matchMedia('(max-width: 768px)').matches)
{
    jQuery(function(){
        jQuery('.menu-list').click(function(){
            jQuery('.menu-list-content').show();
            
            jQuery('.menu-list1').hide();
            jQuery('.menu-list2').hide();
            jQuery('.menu-list3').hide();
            jQuery('.menu-list4').hide(); 
            jQuery('.list-default-content').hide();
            // jQuery('.sol-payments').hide();
       });
    });
}
else{
    jQuery('.menu-list').show();
    jQuery('.menu-list1').show();
            jQuery('.menu-list2').show();
            jQuery('.menu-list3').show();
            jQuery('.menu-list4').show(); 
}



