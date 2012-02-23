(function() {

  describe('LoadContactsView', function() {
    beforeEach(function() {
      this.user = new Backbone.Model();
      return this.view = new LoadContactsView({
        model: this.user
      });
    });
    return describe('rendering', function() {
      beforeEach(function() {
        return this.view.render();
      });
      it('shows an input field', function() {
        return expect(this.view.$('input[name=screen_name]').length).toEqual(1);
      });
      return it('shows a submit button', function() {
        return expect(this.view.$('input[type=submit]').length).toEqual(1);
      });
    });
  });

}).call(this);
