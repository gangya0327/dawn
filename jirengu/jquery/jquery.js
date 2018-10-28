window.jQuery = function(selector) {
  var element = document.querySelector(selector)
  return {
    on: function(eventType, fn){
      element.addEventListener(eventType, fn)
    },
    addClass: function(){},
    removeClass: function(){},
    toggleClass: function(){},
    text: function(){},
    html: function(){}
  }
}
window.$ = window.jQuery