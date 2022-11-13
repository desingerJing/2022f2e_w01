import $ from 'jquery';





// ----- Week
const week = document.querySelector('.topic');
week.addEventListener('click', function(e){

    // 抓取箭頭
    let getWeekClass = e.target.getAttribute('class');

    if (getWeekClass !== 'arrow-next' && getWeekClass !== 'arrow-prev') {
        return;
    };

    // 抓取上/下一個 class
    let arrowData = e.target.getAttribute('data-item');

    // 抓取目前 is-active 的人，並移除 is-active
    const weekActive = document.querySelector('.topic-week-item.is-active');
    weekActive.classList.remove("is-active");

    // 對上/下一個對象加入 is-active
    let newWeek = document.querySelector(arrowData);
    newWeek.classList.add("is-active");

});


// ----- mobile menu
const mobileMenuHTML = document.querySelector('.main_menu').outerHTML;
const mobileMenuContent = document.querySelector('.mobile-menu-content');

// 插入選單
mobileMenuContent.innerHTML = mobileMenuHTML;

// ----- mobile menu open
const mobileMenuBtn = document.querySelector('.mobli-menu');

// 判斷，是否打開手機選單
mobileMenuBtn.addEventListener('click', function(e){
    let getMobileMenuClass = e.target.getAttribute('class');
    let getMobileMenuuContentClass = document.querySelector('.mobile-menu-content');
    
    if (getMobileMenuClass.includes('open') == true) {
        mobileMenuBtn.classList.remove("open");
        getMobileMenuuContentClass.setAttribute('class', 'mobile-menu-content');
    }else {
        mobileMenuBtn.classList.add("open");
        getMobileMenuuContentClass.setAttribute('class', 'mobile-menu-content open')
    }
});


$(function () {
    // SVG 
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest   
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG   
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG   
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org   
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.   
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG   
            $img.replaceWith($svg);

        }, 'xml');

    });  
});

