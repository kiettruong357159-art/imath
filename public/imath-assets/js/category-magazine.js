(function (){
'use strict';
document.querySelectorAll('.im26-mag-media img').forEach(function (image){
function recoverImage(){
var original=image.getAttribute('data-im26-original');
var failed=image.currentSrc||image.src;
image.removeAttribute('data-im26-original');
if(original&&original!==failed){
image.removeAttribute('srcset');
image.removeAttribute('sizes');
image.src=original;
}else{
image.hidden=true;
}}
image.addEventListener('error', recoverImage);
if(image.complete&&image.naturalWidth===0){
recoverImage();
}});
}());
