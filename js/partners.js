(function ($) {
  'use strict';
  
  $(".partners").each(function () {
    var parent = $(this);
    var kids = parent.children(".member");
    while(kids.length) {
      parent.append(kids.splice(Math.floor(Math.random() * kids.length), 1)[0]);
    }
  });
  
}(window.jQuery || {}));