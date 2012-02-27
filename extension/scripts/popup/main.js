(function(window, document, $, chrome) {
  
  var init = function() {
    var bgPage = chrome.extension.getBackgroundPage(),
      app = new App(bgPage);
      app.init();
  };

  $(init);
    
})(this, this.document, jQuery, this.chrome);