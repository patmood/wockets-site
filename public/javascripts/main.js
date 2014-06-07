$('#sms').on('submit', function(e) {
  e.preventDefault()
  $.ajax({
    url: '/sms'
  , type: 'POST'
  , data: $(this).serialize()
  , success: function(res) {
      console.log(res)
    }
  , error: function(err) {
      console.log(err)
    }
  })
})

function isApple() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false
}

function isAndroid() {
  return navigator.userAgent.match(/Android/g) ? true : false
}

$(document).on('ready', function(){
  if (isApple()) {
    $('#download-android').hide()
    $('#sms').hide()
  } else if (isAndroid()) {
    $('#download-apple').hide()
    $('#sms').hide()
  }

})
