(function ($) {
  "use strict";
  
  var team = $(".team"),
      kids = team.children(".member");
  
  while (kids.length) {
      team.append(kids.splice(Math.floor(Math.random() * kids.length), 1)[0]);
  }
  
}(window.jQuery || {}));