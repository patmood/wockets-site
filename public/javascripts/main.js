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
