(function() {

  describe('ContactList', function() {
    return describe('when instantiated', function() {
      return it('is empty', function() {
        this.list = new ContactList();
        return expect(this.list.length).toEqual(0);
      });
    });
  });

}).call(this);
