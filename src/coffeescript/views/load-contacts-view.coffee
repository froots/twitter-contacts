class window.LoadContactsView extends Backbone.View

  tagName: 'div',

  template: _.template '<input type="text" name="screen_name"><input type="submit" value="Load Contacts">'

  render: ->
    @$el.html @template
    @el
