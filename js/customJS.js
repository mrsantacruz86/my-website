/*jQuery methods*/

/*Set the active tab in the navigation menu*/
$(function(){
		$('.nav li').filter(function(){return this.href==location.href}).parent().addClass('active').siblings().removeClass('active')
		$('.nav li').click(function(){
			$(this).parent().addClass('active').siblings().removeClass('active')	
		})
	})

/*Set the Copyright year */
$(function(){
		$(function(){$("#crYear").text(new Date().getFullYear())});	
})
	
<!-- Script to load the images -->
    var text = "";
    var i;
    for (i = 1; i < 67; i++) {
        text += '<img src="gallery/img-' + i +'.jpg">';
    }

    document.getElementById("gallery-1").innerHTML = text;
