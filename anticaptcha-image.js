"use strict";

const Promise = require('bluebird');
const Anticaptcha = require('anticaptcha-nodejs');

var Captcha = () => {

    let anticaptcha = new Anticaptcha('YOUR_CLIENT_KEY_HERE!'); //You anticaptcha account key 

    /**
     *
     * @param imageBody64
     * @returns {*}
     */
    let getResult = (imageBody64) => {

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
                        body: imageBody64 //IMAGE_BODY64_HERE
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
