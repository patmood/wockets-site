var express = require('express')
  , router = express.Router()

var accountSid = process.env.TWILIO_SID
  , authToken = process.env.TWILIO_TOKEN
  , twilio = require('twilio')(accountSid, authToken)

router.get('/', function(req, res) {
  res.render('index', { title: 'Wobble Wockets' })
})

router.post('/sms', function(req, res) {

  console.log(req.body)

  twilio.sendMessage({
    body: 'Download Wobble Wockets for iOS: http://wobblewockets.com'
  , to: '+13127140629' // req.body.phone
  , from: '+13314818220'
  }, function(err, responseBody) {
    console.log(err)
    if (err) return res.send('Error:' + err)
    console.log('SMS sent!', responseBody)
    return responseBody
  })
})

module.exports = router
