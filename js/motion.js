"use strict";NexT.motion={},NexT.motion.integrator={queue:[],init:function(){return this.queue=[],this},add:function(e){var t=e();return CONFIG.motion.async?this.queue.push(t):this.queue=this.queue.concat(t),this},bootstrap:function(){CONFIG.motion.async||(this.queue=[this.queue]),this.queue.forEach(function(e){var t=window.anime.timeline({duration:200,easing:"linear"});e.forEach(function(e){e.deltaT?t.add(e,e.deltaT):t.add(e)})})}},NexT.motion.middleWares={header:function(){var o=[];function e(e,t){var n=1<arguments.length&&void 0!==t&&t;o.push({targets:e,opacity:1,top:0,deltaT:n?"-=200":"-=0"})}return e(".header"),"Mist"===CONFIG.scheme&&(".logo-line",o.push({targets:".logo-line",scaleX:[0,1],duration:500,deltaT:"-=200"})),"Muse"===CONFIG.scheme&&e(".custom-logo-image"),e(".site-title"),e(".site-brand-container .toggle",!0),e(".site-subtitle"),"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme||e(".custom-logo-image"),document.querySelectorAll(".menu-item").forEach(function(e){o.push({targets:e,complete:function(){return e.classList.add("animated","fadeInDown")},deltaT:"-=200"})}),o},subMenu:function(){var e=document.querySelectorAll(".sub-menu .menu-item");return 0<e.length&&e.forEach(function(e){e.classList.add("animated")}),[]},postList:function(){var n=[],e=CONFIG.motion.transition,t=e.post_block,o=e.post_header,i=e.post_body,a=e.coll_header;function s(t,e){t&&document.querySelectorAll(e).forEach(function(e){n.push({targets:e,complete:function(){return e.classList.add("animated",t)},deltaT:"-=100"})})}return s(t,".post-block, .pagination, .comments"),s(a,".collection-header"),s(o,".post-header"),s(i,".post-body"),n},sidebar:function(){var e=document.querySelector(".sidebar"),t=CONFIG.motion.transition.sidebar;return!t||"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme?[]:[{targets:e,complete:function(){return e.classList.add("animated",t)}}]},footer:function(){return[{targets:document.querySelector(".footer"),opacity:1}]}};