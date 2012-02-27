((window, document, $, chrome) ->
  
  init = ->
    bgPage = chrome.extension.getBackgroundPage()
    appView = new AppView bgPage: bgPage, el: $('#app')
    appView.loadContactsView = new LoadContactsView
    appView.$el.append appView.loadContactsView.render()

  $ init
    
)( this, this.document, jQuery, this.chrome )