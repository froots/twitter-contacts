describe("User", function() {
  describe("defaults", function() {
    beforeEach(function() {
      this.model = new User();
    });

    it("sets the screen name", function() {
      expect(this.model).toHaveModelAttribute("screenName", "");
    });
  });

  describe("storing and retrieving", function() {
    beforeEach(function() {
      this.storeStub = sinon.stub(window, 'Store');
      this.storeMethodSpy = sinon.spy();
      this.retrieveStub = sinon.stub();
      this.storeStub.returns({
        store: this.storeMethodSpy,
        retrieve: this.retrieveStub
      });
      this.model = new User({ screenName: "froots101" });
    });

    afterEach(function() {
      window.Store.restore();
    });

    describe("when the model changes", function() {
      beforeEach(function() {
        this.model.set({ ids: [1,2,3] });
      });

      it("creates a store object", function() {
        expect(this.storeStub).toHaveBeenCalledWith('user');
      });

      it("stores the user object", function() {
        expect(this.storeMethodSpy).toHaveBeenCalledWith(this.model.toJSON());
      });
    });

    describe("when retrieving the model from the store", function() {
      describe("and the model exists", function() {
        beforeEach(function() {
          this.attributes = {
            screenName: "froots101",
            ids: [1,2,3]
          };
          this.retrieveStub.returns(this.attributes);
          this.model.fetchFromLocal();
        });

        it("sets the model attributes", function() {
          expect(this.model).toHaveModelAttributes(this.attributes);
        });
      });

      describe("and the model does not exist", function() {
        beforeEach(function() {
          this.retrieveStub.returns(false);
        });

        it("does nothing to the model", function() {
          expect(this.model).toHaveModelAttributes({ screenName: "froots101" });
        });
      });
    });
  });
});