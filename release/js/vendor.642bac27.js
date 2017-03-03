(function(){"use strict";var t=this,i=t.Chart,e=function(t){this.canvas=t.canvas,this.ctx=t;var i=function(t,i){return t["offset"+i]?t["offset"+i]:document.defaultView.getComputedStyle(t).getPropertyValue(i)};this.width=i(t.canvas,"Width")||t.canvas.width,this.height=i(t.canvas,"Height")||t.canvas.height;return this.aspectRatio=this.width/this.height,n.retinaScale(this),this};e.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,maintainAspectRatio:!0,showTooltips:!0,customTooltips:!1,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipTitleTemplate:"<%= label%>",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= datasetLabel %>: <%= value %>",multiTooltipKeyBackground:"#fff",segmentColorDefault:["#A6CEE3","#1F78B4","#B2DF8A","#33A02C","#FB9A99","#E31A1C","#FDBF6F","#FF7F00","#CAB2D6","#6A3D9A","#B4B482","#B15928"],segmentHighlightColorDefaults:["#CEF6FF","#47A0DC","#DAFFB2","#5BC854","#FFC2C1","#FF4244","#FFE797","#FFA728","#F2DAFE","#9265C2","#DCDCAA","#D98150"],onAnimationProgress:function(){},onAnimationComplete:function(){}}},e.types={};var n=e.helpers={},s=n.each=function(t,i,e){var n=Array.prototype.slice.call(arguments,3);if(t)if(t.length===+t.length){var s;for(s=0;s<t.length;s++)i.apply(e,[t[s],s].concat(n))}else for(var o in t)i.apply(e,[t[o],o].concat(n))},o=n.clone=function(t){var i={};return s(t,function(e,n){t.hasOwnProperty(n)&&(i[n]=e)}),i},a=n.extend=function(t){return s(Array.prototype.slice.call(arguments,1),function(i){s(i,function(e,n){i.hasOwnProperty(n)&&(t[n]=e)})}),t},h=n.merge=function(t,i){var e=Array.prototype.slice.call(arguments,0);return e.unshift({}),a.apply(null,e)},l=n.indexOf=function(t,i){if(Array.prototype.indexOf)return t.indexOf(i);for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1},r=(n.where=function(t,i){var e=[];return n.each(t,function(t){i(t)&&e.push(t)}),e},n.findNextWhere=function(t,i,e){e||(e=-1);for(var n=e+1;n<t.length;n++){var s=t[n];if(i(s))return s}},n.findPreviousWhere=function(t,i,e){e||(e=t.length);for(var n=e-1;n>=0;n--){var s=t[n];if(i(s))return s}},n.inherits=function(t){var i=this,e=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return i.apply(this,arguments)},n=function(){this.constructor=e};return n.prototype=i.prototype,e.prototype=new n,e.extend=r,t&&a(e.prototype,t),e.__super__=i.prototype,e}),c=n.noop=function(){},u=n.uid=function(){var t=0;return function(){return"chart-"+t++}}(),d=n.warn=function(t){window.console&&"function"==typeof window.console.warn&&console.warn(t)},p=n.amd="function"==typeof define&&define.amd,f=n.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},g=n.max=function(t){return Math.max.apply(Math,t)},m=n.min=function(t){return Math.min.apply(Math,t)},v=(n.cap=function(t,i,e){if(f(i)){if(t>i)return i}else if(f(e)&&t<e)return e;return t},n.getDecimalPlaces=function(t){if(t%1!==0&&f(t)){var i=t.toString();if(i.indexOf("e-")<0)return i.split(".")[1].length;if(i.indexOf(".")<0)return parseInt(i.split("e-")[1]);var e=i.split(".")[1].split("e-");return e[0].length+parseInt(e[1])}return 0}),x=n.radians=function(t){return t*(Math.PI/180)},y=(n.getAngleFromPoint=function(t,i){var e=i.x-t.x,n=i.y-t.y,s=Math.sqrt(e*e+n*n),o=2*Math.PI+Math.atan2(n,e);return e<0&&n<0&&(o+=2*Math.PI),{angle:o,distance:s}},n.aliasPixel=function(t){return t%2===0?0:.5}),b=(n.splineCurve=function(t,i,e,n){var s=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),o=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),a=n*s/(s+o),h=n*o/(s+o);return{inner:{x:i.x-a*(e.x-t.x),y:i.y-a*(e.y-t.y)},outer:{x:i.x+h*(e.x-t.x),y:i.y+h*(e.y-t.y)}}},n.calculateOrderOfMagnitude=function(t){return Math.floor(Math.log(t)/Math.LN10)}),C=(n.calculateScaleRange=function(t,i,e,n,o){var a=2,h=Math.floor(i/(1.5*e)),l=a>=h,r=[];s(t,function(t){null==t||r.push(t)});var c=m(r),u=g(r);u===c&&(u+=.5,c>=.5&&!n?c-=.5:u+=.5);for(var d=Math.abs(u-c),p=b(d),f=Math.ceil(u/(1*Math.pow(10,p)))*Math.pow(10,p),v=n?0:Math.floor(c/(1*Math.pow(10,p)))*Math.pow(10,p),x=f-v,y=Math.pow(10,p),C=Math.round(x/y);(C>h||2*C<h)&&!l;)if(C>h)y*=2,C=Math.round(x/y),C%1!==0&&(l=!0);else if(o&&p>=0){if(y/2%1!==0)break;y/=2,C=Math.round(x/y)}else y/=2,C=Math.round(x/y);return l&&(C=a,y=x/C),{steps:C,stepValue:y,min:v,max:v+C*y}},n.template=function(t,i){function e(t,i){var e=/\W/.test(t)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):n[t]=n[t];return i?e(i):e}if(t instanceof Function)return t(i);var n={};return e(t,i)}),S=(n.generateLabels=function(t,i,e,n){var o=new Array(i);return t&&s(o,function(i,s){o[s]=C(t,{value:e+n*(s+1)})}),o},n.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var i=1.70158,e=0,n=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),n<Math.abs(1)?(n=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/n),-(n*Math.pow(2,10*(t-=1))*Math.sin((1*t-i)*(2*Math.PI)/e)))},easeOutElastic:function(t){var i=1.70158,e=0,n=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),n<Math.abs(1)?(n=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((1*t-i)*(2*Math.PI)/e)+1)},easeInOutElastic:function(t){var i=1.70158,e=0,n=1;return 0===t?0:2==(t/=.5)?1:(e||(e=1*(.3*1.5)),n<Math.abs(1)?(n=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/n),t<1?-.5*(n*Math.pow(2,10*(t-=1))*Math.sin((1*t-i)*(2*Math.PI)/e)):n*Math.pow(2,-10*(t-=1))*Math.sin((1*t-i)*(2*Math.PI)/e)*.5+1)},easeInBack:function(t){var i=1.70158;return 1*(t/=1)*t*((i+1)*t-i)},easeOutBack:function(t){var i=1.70158;return 1*((t=t/1-1)*t*((i+1)*t+i)+1)},easeInOutBack:function(t){var i=1.70158;return(t/=.5)<1?.5*(t*t*(((i*=1.525)+1)*t-i)):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},easeInBounce:function(t){return 1-S.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):t<2/2.75?1*(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return t<.5?.5*S.easeInBounce(2*t):.5*S.easeOutBounce(2*t-1)+.5}}),w=n.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),P=(n.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),n.animationLoop=function(t,i,e,n,s,o){var a=0,h=S[e]||S.linear,l=function(){a++;var e=a/i,r=h(e);t.call(o,r,e,a),n.call(o,r,e),a<i?o.animationFrame=w(l):s.apply(o)};w(l)},n.getRelativePosition=function(t){var i,e,n=t.originalEvent||t,s=t.currentTarget||t.srcElement,o=s.getBoundingClientRect();return n.touches?(i=n.touches[0].clientX-o.left,e=n.touches[0].clientY-o.top):(i=n.clientX-o.left,e=n.clientY-o.top),{x:i,y:e}},n.addEvent=function(t,i,e){t.addEventListener?t.addEventListener(i,e):t.attachEvent?t.attachEvent("on"+i,e):t["on"+i]=e}),F=n.removeEvent=function(t,i,e){t.removeEventListener?t.removeEventListener(i,e,!1):t.detachEvent?t.detachEvent("on"+i,e):t["on"+i]=c},L=(n.bindEvents=function(t,i,e){t.events||(t.events={}),s(i,function(i){t.events[i]=function(){e.apply(t,arguments)},P(t.chart.canvas,i,t.events[i])})},n.unbindEvents=function(t,i){s(i,function(i,e){F(t.chart.canvas,e,i)})}),A=n.getMaximumWidth=function(t){var i=t.parentNode,e=parseInt(T(i,"padding-left"))+parseInt(T(i,"padding-right"));return i?i.clientWidth-e:0},M=n.getMaximumHeight=function(t){var i=t.parentNode,e=parseInt(T(i,"padding-bottom"))+parseInt(T(i,"padding-top"));return i?i.clientHeight-e:0},T=n.getStyle=function(t,i){return t.currentStyle?t.currentStyle[i]:document.defaultView.getComputedStyle(t,null).getPropertyValue(i)},k=(n.getMaximumSize=n.getMaximumWidth,n.retinaScale=function(t){var i=t.ctx,e=t.canvas.width,n=t.canvas.height;window.devicePixelRatio&&(i.canvas.style.width=e+"px",i.canvas.style.height=n+"px",i.canvas.height=n*window.devicePixelRatio,i.canvas.width=e*window.devicePixelRatio,i.scale(window.devicePixelRatio,window.devicePixelRatio))}),R=n.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},z=n.fontString=function(t,i,e){return i+" "+t+"px "+e},I=n.longestText=function(t,i,e){t.font=i;var n=0;return s(e,function(i){var e=t.measureText(i).width;n=e>n?e:n}),n},O=n.drawRoundedRectangle=function(t,i,e,n,s,o){t.beginPath(),t.moveTo(i+o,e),t.lineTo(i+n-o,e),t.quadraticCurveTo(i+n,e,i+n,e+o),t.lineTo(i+n,e+s-o),t.quadraticCurveTo(i+n,e+s,i+n-o,e+s),t.lineTo(i+o,e+s),t.quadraticCurveTo(i,e+s,i,e+s-o),t.lineTo(i,e+o),t.quadraticCurveTo(i,e,i+o,e),t.closePath()};e.instances={},e.Type=function(t,i,n){this.options=i,this.chart=n,this.id=u(),e.instances[this.id]=this,i.responsive&&this.resize(),this.initialize.call(this,t)},a(e.Type.prototype,{initialize:function(){return this},clear:function(){return R(this.chart),this},stop:function(){return e.animationService.cancelAnimation(this),this},resize:function(t){this.stop();var i=this.chart.canvas,e=A(this.chart.canvas),n=this.options.maintainAspectRatio?e/this.chart.aspectRatio:M(this.chart.canvas);return i.width=this.chart.width=e,i.height=this.chart.height=n,k(this.chart),"function"==typeof t&&t.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:c,render:function(t){if(t&&this.reflow(),this.options.animation&&!t){var i=new e.Animation;i.numSteps=this.options.animationSteps,i.easing=this.options.animationEasing,i.render=function(t,i){var e=n.easingEffects[i.easing],s=i.currentStep/i.numSteps,o=e(s);t.draw(o,s,i.currentStep)},i.onAnimationProgress=this.options.onAnimationProgress,i.onAnimationComplete=this.options.onAnimationComplete,e.animationService.addAnimation(this,i)}else this.draw(),this.options.onAnimationComplete.call(this);return this},generateLegend:function(){return n.template(this.options.legendTemplate,this)},destroy:function(){this.stop(),this.clear(),L(this,this.events);var t=this.chart.canvas;t.width=this.chart.width,t.height=this.chart.height,t.style.removeProperty?(t.style.removeProperty("width"),t.style.removeProperty("height")):(t.style.removeAttribute("width"),t.style.removeAttribute("height")),delete e.instances[this.id]},showTooltip:function(t,i){"undefined"==typeof this.activeElements&&(this.activeElements=[]);var o=function(t){var i=!1;return t.length!==this.activeElements.length?i=!0:(s(t,function(t,e){t!==this.activeElements[e]&&(i=!0)},this),i)}.call(this,t);if(o||i){if(this.activeElements=t,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),t.length>0)if(this.datasets&&this.datasets.length>1){for(var a,h,r=this.datasets.length-1;r>=0&&(a=this.datasets[r].points||this.datasets[r].bars||this.datasets[r].segments,h=l(a,t[0]),h===-1);r--);var c=[],u=[],d=function(t){var i,e,s,o,a,l=[],r=[],d=[];return n.each(this.datasets,function(t){i=t.points||t.bars||t.segments,i[h]&&i[h].hasValue()&&l.push(i[h])}),n.each(l,function(t){r.push(t.x),d.push(t.y),c.push(n.template(this.options.multiTooltipTemplate,t)),u.push({fill:t._saved.fillColor||t.fillColor,stroke:t._saved.strokeColor||t.strokeColor})},this),a=m(d),s=g(d),o=m(r),e=g(r),{x:o>this.chart.width/2?o:e,y:(a+s)/2}}.call(this,h);new e.MultiTooltip({x:d.x,y:d.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:c,legendColors:u,legendColorBackground:this.options.multiTooltipKeyBackground,title:C(this.options.tooltipTitleTemplate,t[0]),chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else s(t,function(t){var i=t.tooltipPosition();new e.Tooltip({x:Math.round(i.x),y:Math.round(i.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:C(this.options.tooltipTemplate,t),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),e.Type.extend=function(t){var i=this,n=function(){return i.apply(this,arguments)};if(n.prototype=o(i.prototype),a(n.prototype,t),n.extend=e.Type.extend,t.name||i.prototype.name){var s=t.name||i.prototype.name,l=e.defaults[i.prototype.name]?o(e.defaults[i.prototype.name]):{};e.defaults[s]=a(l,t.defaults),e.types[s]=n,e.prototype[s]=function(t,i){var o=h(e.defaults.global,e.defaults[s],i||{});return new n(t,o,this)}}else d("Name not provided for this chart, so it hasn't been registered");return i},e.Element=function(t){a(this,t),this.initialize.apply(this,arguments),this.save()},a(e.Element.prototype,{initialize:function(){},restore:function(t){return t?s(t,function(t){this[t]=this._saved[t]},this):a(this,this._saved),this},save:function(){return this._saved=o(this),delete this._saved._saved,this},update:function(t){return s(t,function(t,i){this._saved[i]=this[i],this[i]=t},this),this},transition:function(t,i){return s(t,function(t,e){this[e]=(t-this._saved[e])*i+this._saved[e]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return f(this.value)}}),e.Element.extend=r,e.Point=e.Element.extend({display:!0,inRange:function(t,i){var e=this.hitDetectionRadius+this.radius;return Math.pow(t-this.x,2)+Math.pow(i-this.y,2)<Math.pow(e,2)},draw:function(){if(this.display){var t=this.ctx;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.fillStyle=this.fillColor,t.fill(),t.stroke()}}}),e.Arc=e.Element.extend({inRange:function(t,i){var e=n.getAngleFromPoint(this,{x:t,y:i}),s=e.angle%(2*Math.PI),o=(2*Math.PI+this.startAngle)%(2*Math.PI),a=(2*Math.PI+this.endAngle)%(2*Math.PI)||360,h=a<o?s<=a||s>=o:s>=o&&s<=a,l=e.distance>=this.innerRadius&&e.distance<=this.outerRadius;return h&&l},tooltipPosition:function(){var t=this.startAngle+(this.endAngle-this.startAngle)/2,i=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(t)*i,y:this.y+Math.sin(t)*i}},draw:function(t){var i=this.ctx;i.beginPath(),i.arc(this.x,this.y,this.outerRadius<0?0:this.outerRadius,this.startAngle,this.endAngle),i.arc(this.x,this.y,this.innerRadius<0?0:this.innerRadius,this.endAngle,this.startAngle,!0),i.closePath(),i.strokeStyle=this.strokeColor,i.lineWidth=this.strokeWidth,i.fillStyle=this.fillColor,i.fill(),i.lineJoin="bevel",this.showStroke&&i.stroke()}}),e.Rectangle=e.Element.extend({draw:function(){var t=this.ctx,i=this.width/2,e=this.x-i,n=this.x+i,s=this.base-(this.base-this.y),o=this.strokeWidth/2;this.showStroke&&(e+=o,n-=o,s+=o),t.beginPath(),t.fillStyle=this.fillColor,t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.moveTo(e,this.base),t.lineTo(e,s),t.lineTo(n,s),t.lineTo(n,this.base),t.fill(),this.showStroke&&t.stroke()},height:function(){return this.base-this.y},inRange:function(t,i){return t>=this.x-this.width/2&&t<=this.x+this.width/2&&i>=this.y&&i<=this.base}}),e.Animation=e.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),e.Tooltip=e.Element.extend({draw:function(){var t=this.chart.ctx;t.font=z(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var i=this.caretPadding=2,e=t.measureText(this.text).width+2*this.xPadding,n=this.fontSize+2*this.yPadding,s=n+this.caretHeight+i;this.x+e/2>this.chart.width?this.xAlign="left":this.x-e/2<0&&(this.xAlign="right"),this.y-s<0&&(this.yAlign="below");var o=this.x-e/2,a=this.y-s;if(t.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case"above":t.beginPath(),t.moveTo(this.x,this.y-i),t.lineTo(this.x+this.caretHeight,this.y-(i+this.caretHeight)),t.lineTo(this.x-this.caretHeight,this.y-(i+this.caretHeight)),t.closePath(),t.fill();break;case"below":a=this.y+i+this.caretHeight,t.beginPath(),t.moveTo(this.x,this.y+i),t.lineTo(this.x+this.caretHeight,this.y+i+this.caretHeight),t.lineTo(this.x-this.caretHeight,this.y+i+this.caretHeight),t.closePath(),t.fill()}switch(this.xAlign){case"left":o=this.x-e+(this.cornerRadius+this.caretHeight);break;case"right":o=this.x-(this.cornerRadius+this.caretHeight)}O(t,o,a,e,n,this.cornerRadius),t.fill(),t.fillStyle=this.textColor,t.textAlign="center",t.textBaseline="middle",t.fillText(this.text,o+e/2,a+n/2)}}}),e.MultiTooltip=e.Element.extend({initialize:function(){this.font=z(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=z(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.titleHeight=this.title?1.5*this.titleFontSize:0,this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+this.titleHeight,this.ctx.font=this.titleFont;var t=this.ctx.measureText(this.title).width,i=I(this.ctx,this.font,this.labels)+this.fontSize+3,e=g([i,t]);this.width=e+2*this.xPadding;var n=this.height/2;this.y-n<0?this.y=n:this.y+n>this.chart.height&&(this.y=this.chart.height-n),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(t){var i=this.y-this.height/2+this.yPadding,e=t-1;return 0===t?i+this.titleHeight/3:i+(1.5*this.fontSize*e+this.fontSize/2)+this.titleHeight},draw:function(){if(this.custom)this.custom(this);else{O(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var t=this.ctx;t.fillStyle=this.fillColor,t.fill(),t.closePath(),t.textAlign="left",t.textBaseline="middle",t.fillStyle=this.titleTextColor,t.font=this.titleFont,t.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),t.font=this.font,n.each(this.labels,function(i,e){t.fillStyle=this.textColor,t.fillText(i,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(e+1)),t.fillStyle=this.legendColorBackground,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize),t.fillStyle=this.legendColors[e].fill,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),e.Scale=e.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}));this.yLabelWidth=this.display&&this.showLabels?I(this.ctx,this.font,this.yLabels)+10:0},addXLabel:function(t){this.xLabels.push(t),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var t,i=this.endPoint,e=this.endPoint-this.startPoint;for(this.calculateYRange(e),this.buildYLabels(),this.calculateXLabelRotation();e>this.endPoint-this.startPoint;)e=this.endPoint-this.startPoint,t=this.yLabelWidth,this.calculateYRange(e),this.buildYLabels(),t<this.yLabelWidth&&(this.endPoint=i,this.calculateXLabelRotation())},calculateXLabelRotation:function(){this.ctx.font=this.font;var t,i,e=this.ctx.measureText(this.xLabels[0]).width,n=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=n/2+3,this.xScalePaddingLeft=e/2>this.yLabelWidth?e/2:this.yLabelWidth,this.xLabelRotation=0,this.display){var s,o=I(this.ctx,this.font,this.xLabels);this.xLabelWidth=o;for(var a=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>a&&0===this.xLabelRotation||this.xLabelWidth>a&&this.xLabelRotation<=90&&this.xLabelRotation>0;)s=Math.cos(x(this.xLabelRotation)),t=s*e,i=s*n,t+this.fontSize/2>this.yLabelWidth&&(this.xScalePaddingLeft=t+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=s*o;this.xLabelRotation>0&&(this.endPoint-=Math.sin(x(this.xLabelRotation))*o+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:c,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(t){var i=this.drawingArea()/(this.min-this.max);return this.endPoint-i*(t-this.min)},calculateX:function(t){var i=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),e=i/Math.max(this.valuesCount-(this.offsetGridLines?0:1),1),n=e*t+this.xScalePaddingLeft;return this.offsetGridLines&&(n+=e/2),Math.round(n)},update:function(t){n.extend(this,t),this.fit()},draw:function(){var t=this.ctx,i=(this.endPoint-this.startPoint)/this.steps,e=Math.round(this.xScalePaddingLeft);this.display&&(t.fillStyle=this.textColor,t.font=this.font,s(this.yLabels,function(s,o){var a=this.endPoint-i*o,h=Math.round(a),l=this.showHorizontalLines;t.textAlign="right",t.textBaseline="middle",this.showLabels&&t.fillText(s,e-10,a),0!==o||l||(l=!0),l&&t.beginPath(),o>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),h+=n.aliasPixel(t.lineWidth),l&&(t.moveTo(e,h),t.lineTo(this.width,h),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(e-5,h),t.lineTo(e,h),t.stroke(),t.closePath()},this),s(this.xLabels,function(i,e){var n=this.calculateX(e)+y(this.lineWidth),s=this.calculateX(e-(this.offsetGridLines?.5:0))+y(this.lineWidth),o=this.xLabelRotation>0,a=this.showVerticalLines;0!==e||a||(a=!0),a&&t.beginPath(),e>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),a&&(t.moveTo(s,this.endPoint),t.lineTo(s,this.startPoint-3),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(s,this.endPoint),t.lineTo(s,this.endPoint+5),t.stroke(),t.closePath(),t.save(),t.translate(n,o?this.endPoint+12:this.endPoint+8),t.rotate(x(this.xLabelRotation)*-1),t.font=this.font,t.textAlign=o?"right":"center",t.textBaseline=o?"middle":"top",t.fillText(i,0,0),t.restore()},this))}}),e.RadialScale=e.Element.extend({initialize:function(){this.size=m([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(t){var i=this.drawingArea/(this.max-this.min);return(t-this.min)*i},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var t,i,e,n,s,o,a,h,l,r,c,u,d=m([this.height/2-this.pointLabelFontSize-5,this.width/2]),p=this.width,g=0;for(this.ctx.font=z(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),i=0;i<this.valuesCount;i++)t=this.getPointPosition(i,d),e=this.ctx.measureText(C(this.templateString,{value:this.labels[i]})).width+5,0===i||i===this.valuesCount/2?(n=e/2,t.x+n>p&&(p=t.x+n,s=i),t.x-n<g&&(g=t.x-n,a=i)):i<this.valuesCount/2?t.x+e>p&&(p=t.x+e,s=i):i>this.valuesCount/2&&t.x-e<g&&(g=t.x-e,a=i);l=g,r=Math.ceil(p-this.width),o=this.getIndexAngle(s),h=this.getIndexAngle(a),c=r/Math.sin(o+Math.PI/2),u=l/Math.sin(h+Math.PI/2),c=f(c)?c:0,u=f(u)?u:0,this.drawingArea=d-(u+c)/2,this.setCenterPoint(u,c)},setCenterPoint:function(t,i){var e=this.width-i-this.drawingArea,n=t+this.drawingArea;this.xCenter=(n+e)/2,this.yCenter=this.height/2},getIndexAngle:function(t){var i=2*Math.PI/this.valuesCount;return t*i-Math.PI/2},getPointPosition:function(t,i){var e=this.getIndexAngle(t);return{x:Math.cos(e)*i+this.xCenter,y:Math.sin(e)*i+this.yCenter}},draw:function(){if(this.display){var t=this.ctx;if(s(this.yLabels,function(i,e){if(e>0){var n,s=e*(this.drawingArea/this.steps),o=this.yCenter-s;if(this.lineWidth>0)if(t.strokeStyle=this.lineColor,t.lineWidth=this.lineWidth,this.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,s,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var a=0;a<this.valuesCount;a++)n=this.getPointPosition(a,this.calculateCenterOffset(this.min+e*this.stepValue)),0===a?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y);t.closePath(),t.stroke()}if(this.showLabels){if(t.font=z(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=t.measureText(i).width;t.fillStyle=this.backdropColor,t.fillRect(this.xCenter-h/2-this.backdropPaddingX,o-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.fontColor,t.fillText(i,this.xCenter,o)}}},this),!this.lineArc){t.lineWidth=this.angleLineWidth,t.strokeStyle=this.angleLineColor;for(var i=this.valuesCount-1;i>=0;i--){var e=null,n=null;if(this.angleLineWidth>0&&i%this.angleLineInterval===0&&(e=this.calculateCenterOffset(this.max),n=this.getPointPosition(i,e),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(n.x,n.y),t.stroke(),t.closePath()),this.backgroundColors&&this.backgroundColors.length==this.valuesCount){null==e&&(e=this.calculateCenterOffset(this.max)),null==n&&(n=this.getPointPosition(i,e));var o=this.getPointPosition(0===i?this.valuesCount-1:i-1,e),a=this.getPointPosition(i===this.valuesCount-1?0:i+1,e),h={x:(o.x+n.x)/2,y:(o.y+n.y)/2},l={x:(n.x+a.x)/2,y:(n.y+a.y)/2};t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(h.x,h.y),t.lineTo(n.x,n.y),t.lineTo(l.x,l.y),t.fillStyle=this.backgroundColors[i],t.fill(),t.closePath()}var r=this.getPointPosition(i,this.calculateCenterOffset(this.max)+5);t.font=z(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),t.fillStyle=this.pointLabelFontColor;var c=this.labels.length,u=this.labels.length/2,d=u/2,p=i<d||i>c-d,f=i===d||i===c-d;0===i?t.textAlign="center":i===u?t.textAlign="center":i<u?t.textAlign="left":t.textAlign="right",f?t.textBaseline="middle":p?t.textBaseline="bottom":t.textBaseline="top",t.fillText(this.labels[i],r.x,r.y)}}}}}),e.animationService={frameDuration:17,animations:[],dropFrames:0,addAnimation:function(t,i){for(var e=0;e<this.animations.length;++e)if(this.animations[e].chartInstance===t)return void(this.animations[e].animationObject=i);this.animations.push({chartInstance:t,animationObject:i}),1==this.animations.length&&n.requestAnimFrame.call(window,this.digestWrapper)},cancelAnimation:function(t){var i=n.findNextWhere(this.animations,function(i){return i.chartInstance===t});i&&this.animations.splice(i,1)},digestWrapper:function(){e.animationService.startDigest.call(e.animationService)},startDigest:function(){var t=Date.now(),i=0;this.dropFrames>1&&(i=Math.floor(this.dropFrames),this.dropFrames-=i);for(var e=0;e<this.animations.length;e++)null===this.animations[e].animationObject.currentStep&&(this.animations[e].animationObject.currentStep=0),this.animations[e].animationObject.currentStep+=1+i,this.animations[e].animationObject.currentStep>this.animations[e].animationObject.numSteps&&(this.animations[e].animationObject.currentStep=this.animations[e].animationObject.numSteps),this.animations[e].animationObject.render(this.animations[e].chartInstance,this.animations[e].animationObject),this.animations[e].animationObject.currentStep==this.animations[e].animationObject.numSteps&&(this.animations[e].animationObject.onAnimationComplete.call(this.animations[e].chartInstance),this.animations.splice(e,1),e--);var s=Date.now(),o=s-t-this.frameDuration,a=o/this.frameDuration;a>1&&(this.dropFrames+=a),this.animations.length>0&&n.requestAnimFrame.call(window,this.digestWrapper)}},n.addEvent(window,"resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(function(){s(e.instances,function(t){t.options.responsive&&t.resize(t.render,!0)})},50)}}()),p?define("Chart",[],function(){return e}):"object"==typeof module&&module.exports&&(module.exports=e),t.Chart=e,e.noConflict=function(){return t.Chart=i,e}}).call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers;i.Type.extend({name:"Radar",defaults:{scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,angleLineInterval:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span class="<%=name.toLowerCase()%>-legend-icon" style="background-color:<%=datasets[i].strokeColor%>"></span><span class="<%=name.toLowerCase()%>-legend-text"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'},initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,
display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(t),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var n={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(n),e.each(i.data,function(e,s){var o;this.scale.animation||(o=this.scale.getPointPosition(s,this.scale.calculateCenterOffset(e))),n.points.push(new this.PointClass({value:e,label:t.labels[s],datasetLabel:i.label,x:this.options.animation?this.scale.xCenter:o.x,y:this.options.animation?this.scale.yCenter:o.y,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this)},this),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=e.getRelativePosition(t),n=e.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},i),s=2*Math.PI/this.scale.valuesCount,o=Math.round((n.angle-1.5*Math.PI)/s),a=[];return(o>=this.scale.valuesCount||o<0)&&(o=0),n.distance<=this.scale.drawingArea&&e.each(this.datasets,function(t){a.push(t.points[o])}),a},buildScale:function(t){this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backgroundColors:this.options.scaleBackgroundColors,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,angleLineInterval:this.options.angleLineInterval?this.options.angleLineInterval:1,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:t.labels,valuesCount:t.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(t.datasets),this.scale.buildYLabels()},updateScaleRange:function(t){var i=function(){var i=[];return e.each(t,function(t){t.data?i=i.concat(t.data):e.each(t.points,function(t){i.push(t.value)})}),i}(),n=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,n)},addData:function(t,i){this.scale.valuesCount++,e.each(t,function(t,e){var n=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(t));this.datasets[e].points.push(new this.PointClass({value:t,label:i,datasetLabel:this.datasets[e].label,x:n.x,y:n.y,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.labels.push(i),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),e.each(this.datasets,function(t){t.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(t){var i=t||1,n=this.chart.ctx;this.clear(),this.scale.draw(),e.each(this.datasets,function(t){e.each(t.points,function(t,e){t.hasValue()&&t.transition(this.scale.getPointPosition(e,this.scale.calculateCenterOffset(t.value)),i)},this),n.lineWidth=this.options.datasetStrokeWidth,n.strokeStyle=t.strokeColor,n.beginPath(),e.each(t.points,function(t,i){0===i?n.moveTo(t.x,t.y):n.lineTo(t.x,t.y)},this),n.closePath(),n.stroke(),n.fillStyle=t.fillColor,this.options.datasetFill&&n.fill(),e.each(t.points,function(t){t.hasValue()&&t.draw()})},this)}})}.call(this),document.addEventListener("DOMContentLoaded",function(){var t={animation:!1,scaleOverride:!0,scaleSteps:10,scaleStepWidth:10,scaleStartValue:0,scaleBeginAtZero:0,scaleLineColor:"#374140",scaleFontFamily:'"proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif',scaleFontColor:"#d9cb9e",responsive:!0,tooltipFillColor:"#2a2c2b",tooltipFontFamily:'"proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif',tooltipFontColor:"#d9cb9e",angleLineColor:"#374140",pointLabelFontFamily:'"proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif',pointLabelFontColor:"#d9cb9e"},i=document.querySelectorAll(".js-bar-chart");Array.prototype.forEach.call(i,function(i){var e=i.getAttribute("data-label"),n=i.querySelectorAll(".js-bar-chart__bar"),s=[],o=[];Array.prototype.forEach.call(n,function(t){s.push(t.textContent),o.push(t.getAttribute("aria-valuenow"))});var a=document.getElementById("skills__chart--"+e).getContext("2d"),h={labels:s,datasets:[{label:e,data:o,fillColor:"rgba(217,203,158,0.2)",strokeColor:"#d9cb9e",pointColor:"#d9cb9e",pointStrokeColor:"#d9cb9e",pointHighlightFill:"#db3522",pointHighlightStroke:"#db3522"}]};new Chart(a).Radar(h,t)})});