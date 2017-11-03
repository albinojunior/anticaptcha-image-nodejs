# anticaptcha-image-nodejs

```
$ npm install bluebird --save
$ npm install anticaptcha-nodejs --save
```
## Example: 
```js
anticaptcha
.getResult("YOUR_CLIENT_KEY_HERE", "IMAGE_BASE64_HERE")
.then(function(result){
	console.log(result);
});
```
[See more examples...](https://github.com/albinojunior/anticaptcha-image-nodejs/blob/master/example.js)
