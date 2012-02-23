class window.LoadContactsView extends Backbone.View

  tagName: 'div',

  template: _.template '<input type="text" name="screen_name"><input type="submit" value="Load Contacts">'
  
  # events:
  #   "form submit": "loadContacts"
  
  # loadContacts: ->

  render: ->
    @$el.html @template @model.toJSON()
    @el
