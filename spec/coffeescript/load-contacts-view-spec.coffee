describe 'LoadContactsView', ->
  beforeEach ->
    @user = new Backbone.Model()
    @view = new LoadContactsView
      model: @user

  describe 'rendering', ->
    beforeEach ->
      @view.render()

    it 'shows an input field', ->
      expect(@view.$('input[name=screen_name]').length).toEqual 1

    it 'shows a submit button', ->
      expect(@view.$('input[type=submit]').length).toEqual 1