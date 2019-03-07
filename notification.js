var FCM = require('fcm-push');
var appConfig = require('./config')

var serverKey = appConfig.FIREBASE_SERVER_TOKEN;
var fcm = new FCM(serverKey);
/**
 * device_tokens: string array, user_data: json, title: string, body: string, badge_count: number
 * @param {device_token: string array}
 * @param {user_data: json}
 * @param {title: string}
 * @param {body: string}
 * @param {badge_count: number}
 */

exports.send = function(device_tokens, user_data, title, body, badge_count){
    var message = {
        registration_ids: device_tokens, // required fill with device token or topics
        collapse_key: 'smartgaas',
        data: user_data,
        notification: {
            title: title,
            body: body,
            sound: "default",
            badge: badge_count,
        }
    };
    console.log(message)
    fcm.send(message).then(function (response) {
        console.log("Successfully sent with response: ", response);
    }).catch(function (err) {
        console.log("Something has gone wrong!");
        console.error(err);
    })
}