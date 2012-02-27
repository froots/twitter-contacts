class window.AppView extends Backbone.View
  initialize: (options) ->
    @bgPage = options.bgPage

  register: (name, object) ->
    @[name] = object