import '../css/main.scss';
import { getGif } from './api';

import jquery from 'jquery';
window.$ = jquery;

// jQuery methods
$(function () {
  // handle nav-link active
  $('.nav li').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
  $('.nav li').click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active')
  })

  //add year to the copyright
  $(function () { $("#crYear").text(new Date().getFullYear()) });

  //handle button click event
  $("#alert-btn").on("click", () => {
    getGif("dog")
      .then(res => {
        const src = res.data.images.fixed_height.url;
        // console.log(res.data.images.fixed_height.url);
        const $imgDisplay = $('<div class="img-display">');
        $imgDisplay.append($(`<img src="${src}">`))
        $("#root").append($imgDisplay);
      })
      .catch(err => console.log(err));
  })
});



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

