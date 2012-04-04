describe("UserIds", function() {
  beforeEach(function() {
    this.model = new UserIds({ screenName: "froots101" });
  });

  describe("when fetching ids", function() {
    beforeEach(function() {
      this.server = sinon.fakeServer.create();
      this.server.respondWith("GET", API_ROOT + "friends/ids.json?screen_name=froots101", 
        [200, { "Content-Type": "application/json" }, '{ "ids": [1,2,3] }']);
    });

    afterEach(function() {
      this.server.restore();
    });

    it("makes the expected request", function() {
      this.model.fetch();
      this.server.respond();
      expect(this.model).toHaveModelAttributes({
        "ids": [1,2,3],
        "screenName": "froots101"
      });
    });
  });

  describe("when splitting up into blocks to allow for separate twitter requests", function() {
    describe("when there are multiple blocks", function() {
      beforeEach(function() {
        this.model.set({ ids: [100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116] }, { silent: true });
        this.blocks = this.model.getBlocks(5);
      });

      it("creates the correct number of blocks", function() {
        expect(this.blocks.length).toEqual(4);
      });

      it("creates the correct blocks", function() {
        expect(this.blocks[0]).toEqual([100,101,102,103,104]);
        expect(this.blocks[3]).toEqual([115,116]);
      });
    });
    
    describe("when there is only one block", function() {
      beforeEach(function() {
        this.model.set({ ids: [100,101,102] }, { silent: true });
        this.blocks = this.model.getBlocks(5);
      });

      it("creates the correct number of blocks", function() {
        expect(this.blocks.length).toEqual(1);
      });

      it("creates the correct blocks", function() {
        expect(this.blocks[0]).toEqual([100,101,102]);
      });
    });
  });
});