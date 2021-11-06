
		var i = 0;
		var images = [];
		var time = 4000;

		images[0] = "images/slide1.jpg";
		images[1] = "images/slide2.jpg";
		images[2] = "images/slide3.jpg";

		function changeImg() {
				document.slide.src = images[i];

				if(i < images.length -1){
					i++;
				} else {
					i = 0;
				}

				setTimeout("changeImg()", time);
		}
	
		window.onload = changeImg;

		var show;

		function hidetxt(type)
		{
			param=document.getElementById(type);
			if(param.style.display == "none") 
			{
			if(show) 
			show.style.display = "none";
			param.style.display = "block";
			show = param;
			}
			else param.style.display = "none"
		}
