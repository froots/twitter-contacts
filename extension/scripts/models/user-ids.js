var UserIds = Backbone.Model.extend({
  url: function() {
    return API_ROOT + "friends/ids.json?screen_name=" + this.get("screenName");
  },

  getBlocks: function(chunkSize) {
    var len = chunkSize || 100,
        ids = this.get('ids'),
        blockLen = Math.ceil(this.get('ids').length / len),
        blocks = [];

    _.times(blockLen, function(i) {
      var start = i * len,
          end = (i + 1) * len;
      end = (end > ids.length) ? ids.length : end;
      blocks.push(ids.slice(start, end));
    });

    return blocks;
  }
});