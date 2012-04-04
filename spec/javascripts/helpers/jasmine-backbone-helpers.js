;(function(window) {
  var document = 'document' in window && window.document;

  window.backboneJasmineHelpers = {
    getMatchers: function(env) {
      var jasmineEnv = env;

      return {
        toHaveModelAttribute: function(attr, expected) {
          return jasmineEnv.equals_(this.actual.get(attr), expected);
        },

        toHaveModelAttributes: function(expected) {
          return jasmineEnv.equals_(this.actual.attributes, expected);
        }
      };
    }
  };
}(this));

beforeEach(function() {
  this.addMatchers(backboneJasmineHelpers.getMatchers(jasmine.getEnv()));
});