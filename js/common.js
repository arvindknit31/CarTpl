function doesExist(selector) {
    var length = jQuery(selector).length;
    if (length) {
        return true;
    } else {
        return false;
    }
}

function scrollIdMatch(selector){
    locationUrl = window.location.href;
    selectorIndex = locationUrl.indexOf(selector);
    if(selectorIndex > 0){
        return true;
    }else{
        return false;                    
    }
}

/*
function setBodyHeight(){
    setTimeout(
        function(){
            var headerMainOH = jQuery(".header-main").outerHeight();
            var moodOH = jQuery(".mood").outerHeight();
            var caseOH = jQuery(".desc-client").outerHeight();
            var footerOH = jQuery(".footer").outerHeight();         

            headerMainOH = parseInt(headerMainOH);
            moodOH = parseInt(moodOH);
            caseOH = parseInt(caseOH);
            footerOH = parseInt(footerOH);  
            
            bodyH = headerMainOH + moodOH + caseOH + footerOH + 150;

            jQuery("body").css({'height':bodyH});
        }
        , 1000);
}
*/

function setFeatureImageSize(){
    setTimeout(
        function(){
            winHeight = (jQuery(window).height());
            winWidth = jQuery(window).width();  
            
            if(doesExist(jQuery('.feature-image-resize'))){
               jQuery('.feature-image-resize').css({'height':winHeight, 'width':winWidth});    
            }
            
            if(doesExist(jQuery('.slidesjs-container,.slidesjs-control'))){
                jQuery('.slidesjs-container,.slidesjs-control').css({'height':winHeight, 'width':winWidth});    
            }
            
            
        },10);
};

jQuery("document").ready(function(){
  setFeatureImageSize();
});

jQuery(window).resize(function(){
  setFeatureImageSize();
});


function pageScroll(ghH,target){
    jQuery('html, body').stop().animate({
        'scrollTop': jQuery(target).offset().top-ghH 
        }, 10, 'swing', function () {
    });
}
/*
jQuery(document).ready(function() {
    var ghH = jQuery('#global-header').height();
    jQuery('.button_About a').bind('click',function(e){
        e.preventDefault();        
        target = jQuery('#aboutus');
        pageScroll(ghH,target);
    });
    jQuery('.button_Products a').bind('click',function(e){
        e.preventDefault();        
        target = jQuery('#products');
        pageScroll(ghH,target);
    });
    jQuery('.button_Solutions a').bind('click',function(e){
        e.preventDefault();        
        target = jQuery('#solutions');
        pageScroll(ghH,target);
    });
});
*/
    jQuery(function(){
        var ghObj = jQuery('#global-header');        
        idArray = new Array("#solutions",
                            "#about",
                            "#products",
                            "#mproducts"
                            );

        jQuery(idArray).each(function(i,selector){
            if(doesExist(selector)){
                if(selector == "#solutions"){
                    jQuery('.button_Solutions a, .resp-nav a.mo-subnav.Solutions').bind('click',function(e){
                        e.preventDefault();        
                        var ghH = jQuery(ghObj).height();                                        
                        target = jQuery(selector);
                        pageScroll(ghH,target);
                    });
                }else if(selector == "#about"){
                    jQuery('.button_About a, .resp-nav a.mo-subnav.About').bind('click',function(e){
                        e.preventDefault();  
                        var ghH = jQuery(ghObj).height();                                        
                        target = jQuery(selector);
                        pageScroll(ghH,target);
                    });
                }else if(selector == "#products"){                    
                    jQuery('.button_Products a').bind('click',function(e){
                        e.preventDefault();  
                        var ghH = jQuery(ghObj).height();                                        
                        target = jQuery(selector);
                        pageScroll(ghH,target);
                    });
                }else if(selector == "#mproducts"){                    
                    jQuery('.resp-nav a.mo-subnav.Products').bind('click',function(e){
                        e.preventDefault();        
                        var ghH = jQuery(ghObj).height();                                                                
                        target = jQuery(selector);
                        pageScroll(ghH,target);
                    });
                }    
            }
        })

        jQuery(idArray).each(function(i,selector){
            if(doesExist(selector) && scrollIdMatch(selector)){
                var timeInt = 500;
                if(selector == "#solutions"){
                    setTimeout(function(){
                        jQuery(".button_Solutions a").trigger("click");
                    },timeInt);
                }else if(selector == "#about"){
                    setTimeout(function(){
                        jQuery(".button_About a").trigger("click");                        
                    },timeInt);                    
                }else if(selector == "#products"){
                    setTimeout(function(){
                        jQuery(".button_Products a").trigger("click");                        
                    },timeInt);                    
                }
            };
        });
    });

    jQuery(function(){
        //Check to see if the window is top if not then display button
        jQuery(window).scroll(function(){
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.scrollToTop').fadeIn();
            } else {
                jQuery('.scrollToTop').fadeOut();
            }
        });
        
        //Click event to scroll to top
        jQuery('.scrollToTop').click(function(){
            jQuery('html, body').animate({scrollTop : 0},800);
            return false;
        });
    });

/* Mobile Nav Link Title Start */

jQuery(function(){
    navTObj = jQuery('#navTitle');
    setTimeout(function(){
        var linkText = jQuery('#mmc a.selected').attr('title');
        jQuery(navTObj).html(linkText);
    },1000);
});

jQuery('html').on('click','#mmc .resp-nav a',function(){
    var linkText = jQuery(this).attr('title');    
    jQuery(navTObj).html(linkText);    
});

/* Mobile Nav Link Title End */

jQuery('html').on('click','.MobileMenuClose',function(){
    mmcObj = jQuery('#mmc');        
    if(jQuery(mmcObj).offset().left){
        jQuery('#mmClose').trigger('click');
    }    
});

jQuery(function() {
      jQuery('#slides').slidesjs({
/*
		width: 1440,
		height: 900,
*/
		play: {
          active: true,
          auto: true,
          interval: 5000,
          swap: true,
          pauseOnHover: true,
          restartDelay: 1000	
        }  
      });
    });	