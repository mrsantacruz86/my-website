import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.scss';

import jquery from 'jquery';
window.$ = jquery;

// jQuery methods
$(function () {
  $('.nav li').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
  $('.nav li').click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active')
  })
})
$(function () {
  $(function () { $("#crYear").text(new Date().getFullYear()) });
})


// Script to load the images
function loadImages() {
  var tag = "";
  var i;
  for (i = 1; i < 67; i++) {
    tag += '<img src="gallery/img-' + i + '.jpg">';
  }
  return tag
}

// document.getElementById("gallery-1").innerHTML = loadImages();

$("#root").html("<h2>Executing JS...</h2>");

$("#alert-btn").on("click", ()=>{
  alert("The button has been clicked");
})