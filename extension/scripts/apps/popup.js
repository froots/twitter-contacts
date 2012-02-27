(function() {

  (function(window, document, $, chrome) {
    var init;
    init = function() {
      var appView, bgPage;
      bgPage = chrome.extension.getBackgroundPage();
      appView = new AppView({
        bgPage: bgPage,
        el: $('#app')
      });
      appView.loadContactsView = new LoadContactsView;
      return appView.$el.append(appView.loadContactsView.render());
    };
    return $(init);
  })(this, this.document, jQuery, this.chrome);

}).call(this);
