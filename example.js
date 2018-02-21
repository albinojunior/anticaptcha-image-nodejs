"use strict";

const Anticaptcha = require('./index.js');

var anticaptcha = new Anticaptcha();

anticaptcha
.getResult(clientKey, imageBase64)
.then(function(res){
	 console.log(res);
});
