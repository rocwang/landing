"use strict";!function(){document.getElementById("print").addEventListener("click",function(e){e.preventDefault(),window.print()});var e=document.getElementById("hire-me");e.addEventListener("touchstart",function(){document.getElementById("hire-me__popover").classList.toggle("hire-me__popover--js-visible")}),e.addEventListener("mouseenter",function(){document.getElementById("hire-me__popover").classList.add("hire-me__popover--js-visible")}),e.addEventListener("mouseleave",function(){document.getElementById("hire-me__popover").classList.remove("hire-me__popover--js-visible")}),window.addEventListener("load",function(){setTimeout(function(){document.getElementById("hire-me__popover").classList.add("hire-me__popover--js-visible"),setTimeout(function(){document.getElementById("hire-me__popover").classList.remove("hire-me__popover--js-visible")},3e3)},3e3)}),window.addEventListener("load",function(){function e(e){var t=document.createElement("script");t.src=e,t.async=!0,document.body.appendChild(t)}e("js/vendor.3df0ec29.js")})}();