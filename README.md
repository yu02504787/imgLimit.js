# imgLimit.js

resize images proportionally

*@param string src

*@param number maxWidth

*@param number maxHeight

*@param function successCallBackFunction

*@param function|null errorCallBackFunction


```javascript
 var src="https://git.com/xx.png"
 ,maxWidth=640
 ,maxHeight=640
 ,successCallBackFunction=function(res){
  console.log(res)
  //If the original width greater than the maximum width or the original height greater than the maximum height of the image,return base64 data URL of resized image: 'data:image/jpg;base64,xxx...'
  //else return original src 
 }
 ,errorCallBackFunction=function(err){
  console.log(err)
 };
 imgLimit(src,maxWidth,maxHeight,successCallBackFunction,errorCallBackFunction);
 ```
