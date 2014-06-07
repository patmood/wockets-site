var express = require('express')
  , router = express.Router()

var accountSid = process.env.TWILIO_SID
  , authToken = process.env.TWILIO_TOKEN
  , twilio = require('twilio')(accountSid, authToken)

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

router.post('/sms', function(req, res) {
  twilio.sms.messages.create({
    body: 'Download Wobble Wockets for iOS: http://wobblewockets.com'
  , to: '+13127140629'
  , from: '+13314818220'
  }, function(err, message) {
    if (err) return res.send('Error:' + err)
    console.log('SMS sent!')
  })
  res.send("done!")
})

module.exports = router
