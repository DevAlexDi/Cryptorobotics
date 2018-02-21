$(document).ready(function () {

    $('.plus').click(function(){
        
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //==============================================





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
