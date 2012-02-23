(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.LoadContactsView = (function(_super) {

    __extends(LoadContactsView, _super);

    function LoadContactsView() {
      LoadContactsView.__super__.constructor.apply(this, arguments);
    }

    LoadContactsView.prototype.tagName = 'div';

    LoadContactsView.prototype.template = _.template('<input type="text" name="screen_name"><input type="submit" value="Load Contacts">');

    LoadContactsView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this.el;
    };

    return LoadContactsView;

  })(Backbone.View);

}).call(this);
