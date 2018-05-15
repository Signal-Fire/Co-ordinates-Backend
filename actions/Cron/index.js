var cron = require('node-cron'),
    moment = require('moment'),
    nodemailer = require('nodemailer'),
    DeviceFinder = require('../Find/Devices'),
    PositionFinder = require('../Find/Positions'),
    config = require('../../config');

//My horrendous CronOps class..
let timeFormat = 'MM-DD-YYYY hh:mm:ss';

module.exports = new class CronOps { 
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

        var task = cron.schedule('*/10 * * * * *', function() {
            DeviceFinder.All()
            .then(devices => {
                for (var i = 0; i < devices.length; i++) {    
                    PositionFinder.OnePositionByDeviceId(devices[i].email, devices[i]._id)
                    .then((position) => {
                        var earliestToNotify = moment().add(-60, 'minutes').format(timeFormat);
                        var latestToNotify = moment().add(-24, 'hours').format(timeFormat);
                        var lastUserLog = moment(position.time, timeFormat).format();

                        if ((lastUserLog < latestToNotify) && (lastUserLog > earliestToNotify)) {
                            mailOptions.to = position.email;

                            transporter.sendMail(mailOptions, function(error, info) {
                                if (error)
                                    return reject("Issue sending mail");

                                return resolve("Sending email success!");
                            })
                        }
                    }).catch(error => {
                        
                    });
                }
            }).catch(function(err) {

            });
        }, false);
        task.start();
    }
}