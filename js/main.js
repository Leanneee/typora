function alignContent(){for(var n=$(window).height(),e=document.querySelectorAll("section.fullscreen"),t=0;t<e.length;t++)e[t].style.height=n+"px";$(".content-resizer").each(function(){var e=$(this).height();$(this).css("top",n/2-e/2)})}alignContent(),$(window).bind("resize",function(){alignContent()}),function(){var e=$(".slider").unslider({speed:window.innerWidth/2,delay:1e3+4*window.innerWidth},!0).data("unslider");$(".slider").parent().find(".dot>a").click(function(){e.move($(this.parentElement).index()),$("#function-slider .desc-wrapper.active").removeClass("active"),e.stop()}),e.stop(),e.start(),$("#function-slider").on("mouseenter click",".desc-wrapper",function(){this.classList.add("active"),e.stop()}),userSliderController=$(".like-card-slide").unslider({speed:window.innerWidth/2.5,delay:1e3},!0).data("unslider"),$("#likes").addClass("done"),$(".next-user-card").click(function(){userSliderController.next()}),userSliderController.stop();var t=!1,i=!1,o=0;function l(){i=!0,$("html").clearQueue(),$("html").stop(),t=!0,clearInterval(n)}function r(){0==$("html").scrollTop()&&($("html").clearQueue(),$("html").stop(),$("html").animate({scrollTop:50},300,function(){$("html").animate({scrollTop:0},150)}))}var n=setInterval(function(){!t&&r()},1e4);setTimeout(function(){$("#home").on("mousewheel",function(){t=!0,l()}).on("mousemove",function(e){if(!i){t=!0;var n=e.originalEvent;0<(n.movementY||n.mozMovementY||n.webkitMovementY||0)&&function(){s&&(clearTimeout(s),s=null);s=setTimeout(function(){o++,r(),4<o&&l()},50)}()}})},3e3);var s=null}();