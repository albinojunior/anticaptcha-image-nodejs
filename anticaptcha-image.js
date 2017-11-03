"use strict";

const Promise = require('bluebird');
const Anticaptcha = require('anticaptcha-nodejs');

var Captcha = () => {

    /**
     * @param clientKey
     * @param imageBase64
     * @returns {*}
     */
    let getResult = (clientKey, imageBase64) => {
        
    let anticaptcha = new Anticaptcha(clientKey); //YOU ACCOUNT KEY HERE

        return new Promise((resolve, reject) => {

            anticaptcha.getBalance((err, balance) => {
                if (err) {
                    reject(err)
                }
               
                anticaptcha.setMinLength(0);
                anticaptcha.setMaxLength(5);
                
                // check balance first
                if (balance > 0) {
                    anticaptcha.createImageToTextTask({
                        case: true,
                        body: imageBase64 //IMAGE BASE64 HERE
                    },
                    (err, taskId) => {
                        if (err) {
                           reject(err)
                        }
                        anticaptcha.getTaskSolution(taskId, (err, taskSolution) => {
                            if (err) {
                                reject(err);
                            }
                            resolve(taskSolution);
                        });
                    });
                }
            });
        });
    };
    return {
        getResult: getResult
    };
};

module.exports = Captcha;
