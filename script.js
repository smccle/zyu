//https://www.youtube.com/watch?v=dQw4w9WgXcQ
//https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?wmode=transparent&amp;iv_load_policy=3&amp;autoplay=1&amp;html5=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=0&amp;theme=light
const base = "https://www.youtube-nocookie.com/embed/";
const base2 = "https://www.youtube.com/";
const watch = "watch?v=";
const end = "?wmode=transparent&amp;iv_load_policy=3&amp;autoplay=0&amp;html5=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=0&amp;theme=light";
const strip_timestamps = /\?t=\d+/;
var submit = document.getElementById('submit');
var download = document.getElementById('download');
var url = document.getElementById('url');
var t = document.querySelector("#title");
var u = document.querySelector("#user");
var video_holder;
var vid = document.getElementById("video");
var video_holder_holder = document.getElementById('video-holder-holder');
var link;
var title;
var id;

submit.onclick = () => {
	if(document.getElementById('instructions')) {
		document.getElementById('instructions').remove();
	}
	link = url.value;
	id = link.replace(strip_timestamps, "");
	id = id.substr(id.length - 11, 11);
	video_holder = document.getElementById('video-holder');
	video_holder.style.display = 'block';
	video_holder.children[1].src = base + id + end;
	video_holder_holder.appendChild(video_holder);
	var oembed = "https://www.youtube.com/oembed?url=" + base2 + watch + id + "&format=json";
	// t.innerHTML = oembed
	loadJSON(oembed, myData);
	url.value = "";
}

function loadJSON(path, success, error) {
	var xhr = new XMLHttpRequest;
	xhr.onreadystatechange = function () {
	  if (xhr.readyState === 4) {
		if (xhr.status === 200) {;
		  success(JSON.parse(xhr.responseText));
		}
		else {
		  t.innerHTML = "";
		  u.innerHTML = "";
		  document.title = "zyu!";
		}
	  }
	};
	xhr.open('GET', path, true);
	xhr.send();
  }
  
  function myData(Data)
  {
	t.innerHTML = Data.title;
	u.innerHTML = Data.author_name;
	document.title = Data.title + " - " + Data.author_name;
  }
