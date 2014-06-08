$('#sms').on('submit', function(e) {
  e.preventDefault()
  $.ajax({
    url: '/sms'
  , type: 'POST'
  , data: $(this).serialize()
  , success: function(res) {
      $('#message').text(res).show().addClass('success')
    }
  , error: function(err) {
      $('#message').text(err.responseText).show().addClass('error')
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



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48445639-2', 'wobblewockets.com');
ga('send', 'pageview');

