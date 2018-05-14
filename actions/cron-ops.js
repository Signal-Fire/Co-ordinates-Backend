var cron = require('node-cron');
var queries = require('./queries');
var config = require('../Config');
var moment = require('moment');
var nodemailer = require('nodemailer');

//My horrendous CronOps class..

class CronOps { 
    constructor() {
        
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: config.cronEmail,
            pass: config.cronPass
            }
        });

        var mailOptions = {
            from: 'notifications@tracker.com',
            to: '',
            subject: 'Please ensure you are using your Tracker App!',
            text: 'We have been unable to find your location for over an hour now! Please make sure you are tracking correctly!'
          };

        var task = cron.schedule('*/60 * * * *', function() {
            queries.DisplayDevices()
            .then(function(result) {
                for (var i = 0; i < result.length; i++) {
                    queries.FindPositionByDeviceId(result[i]._id)
                    .then(function(result) {
                        if (result.length > 0) {   
                            var timeToNotify = moment().add(-60, 'minutes');

                            var tooLate = moment().add(-24, 'hours');

                            var lastLog = moment(result[result.length - 2].time);

                            if (!lastLog.isValid()) {
                                lastLog = moment(result[result.length - 2].time, 'DD-MM-YYYY hh:mm:ss').format();    
                                lastLog = moment(lastLog);
                            }

                            if ((timeToNotify > lastLog) && (lastLog > tooLate)) {
                                queries.FindByDeviceId(result[i].device).then(function(result) {
                                    mailOptions.to = result.email;
                                    transporter.sendMail(mailOptions, function(error, info){
                                        if (error) {
                                            console.log(error);
                                        } else {
                                            console.log('Email sent: ' + info.response);
                                        }
                                    });
                                }).catch(function(err) {
                                    console.log(err);
                                });
                            }                      
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            }).catch(function(err) {

            });
        }, false);
        task.start();
    }
}

module.exports = CronOps;