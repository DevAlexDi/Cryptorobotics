$(document).ready(function () {

    $('.plus').click(function(){
        if($(this).parents('.flex-form-soc').hasClass('opened')){
            $(this).parents('.flex-form-soc').removeClass('opened');
        }
        else{
            $(this).parents('.flex-form-soc').addClass('opened');
        }
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //==============================================


    $('.news_item').click(function() {
        var url = $(this).find('a').attr('href');
        window.open(url);
    });

    $('#all_news').click(function(e) {
        e.preventDefault();
        $(this).fadeOut(function() {
            $(this).next().fadeIn();
        });
    });


    $('.faq .answer').on('show.bs.collapse', function(){
        $(this).parents('.faq').addClass('opened');
    });
    $('.faq .answer').on('hide.bs.collapse', function(){
        $(this).parents('.faq').removeClass('opened');
    });

    $('#all_faq').click(function(e) {
        e.preventDefault();
        $(this).fadeOut(function() {
            $(this).next('.all_faqs').fadeIn();
        });
    });
    
    
    
    
    
    
    
    
    
    

    
    

});
