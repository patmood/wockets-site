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
    body: 'Download Wobble Wockets: http://play.wobblewockets.com'
  , to: req.body.phone //'+13127140629'
  , from: '+13314818220'
  }, function(err, responseBody) {
    console.log(err)
    if (err) return res.status(err.status).send(err.message)
    console.log('SMS sent!')
    res.send('Success')
  })
})

module.exports = router
