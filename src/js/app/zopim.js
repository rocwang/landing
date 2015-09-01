'use strict';
window.$zopim || (function (d, s) {
  var z = window.$zopim = function (c) {z._.push(c)}, $ = z.s =
    d.createElement(s), e = d.getElementsByTagName(s)[0];
  z.set = function (o) {
    z.set._.push(o)
  };
  z._ = [];
  z.set._ = [];
  $.async = !0;
  $.setAttribute("charset", "utf-8");
  $.src = "//v2.zopim.com/?30UQnl8IlsNF6b8KiziaoIu1k5nLQ4Z2";
  z.t = +new Date;
  $.type = "text/javascript";
  e.parentNode.insertBefore($, e)
})(document, "script");
