"use strict";

const Anticaptcha = require('./anticaptcha-image.js');

var anticaptcha = new Anticaptcha();

anticaptcha
.execute(clientKey, imageBody64)
.then(function(res){
	 console.log(res);
});
