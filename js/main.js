function collapser (e, counterpart, height) {
    var $this = $(e.delegateTarget);
    var $target = $($this.data("target"));

    $this.hide();

    $target.find(counterpart).show();
    $target.css("max-height", height);
}

(function ($) {
  "use strict";

  // Random Sorter
  var team = $(".rsorter"),
      kids = team.children(".sortable");

  while (kids.length) {
      team.append(kids.splice(Math.floor(Math.random() * kids.length), 1)[0]);
  }

  // Gradient + Read more functionality
  var gradientHeight = "220px";

  $(".extendable-content").each(function () {
      var $this = $(this);

      if ($this.height() > 220) {
          $this.css("max-height", gradientHeight); // Set the height here in case JS is not enabled
          $this.find(".readmore").show();
      }
  });

  $(".readmore").click(function (e) {
      collapser(e, ".readless", "none");
  });

  $(".readless").click(function (e) {
      collapser(e, ".readmore", gradientHeight);
  });

}(window.jQuery || {}));
