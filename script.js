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
var vid = document.querySelector(".video");
var v = document.getElementById("video");
var l = document.getElementById("lw");
var lw = document.querySelector(".lw");
var ofs = document.getElementById("ofs");
var video_holder_holder = document.getElementById('video-holder-holder');
var link;
var title;
var id;

submit.onclick = () => {
	if(document.getElementById('instructions')) {
		document.getElementById('instructions').remove();
	}
	vid.style.display = "";
	link = url.value;
	id = link.replace(strip_timestamps, "");
	id = id.substr(id.length - 11, 11);
	video_holder = document.getElementById('video-holder');
	video_holder.style.display = 'block';
	v.src = base + id + end;
	video_holder_holder.appendChild(video_holder);
	var oembed = "https://www.youtube.com/oembed?url=" + base2 + watch +  id + "&format=json";
	// t.innerHTML = oembed
	loadJSON(oembed, myData);
	setCookie("lwv", id, 60);
	url.value = "";
	ofs.addEventListener("click", () => {
		var fs = `<title>Fullscreen Video</title> <iframe frameborder="0" scrolling="no" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" src="` + base + id + end + `"></iframe>` + `<style>iframe {width: 100%; height: 100%;} * {padding: 0; margin: 0;}</style>`;
		var w = window.open();
		w.document.body.innerHTML = fs;
	});
}

function loadJSON(path, success, error) {
	var xhr = new XMLHttpRequest;
	xhr.onreadystatechange = function () {
	  if (xhr.readyState === 4) {
		if (xhr.status === 200) {;
		  success(JSON.parse(xhr.responseText));
		}
		else {
		  t.innerHTML = "Video not found.";
		  u.innerHTML = "Channel not found.";
		  document.title = "zyu!";
		  vid.style.display = "none";
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
	setCookie("lwvt", Data.title, 60);
  }

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }

  function checkCookie() {
	let lwv = getCookie("lwv");
	let lwvt = getCookie("lwvt");
	if (lwvt != "") {
	  lw.style.display = "";
	  l.innerHTML = lwvt;
	  l.addEventListener("click", () => {
		if(document.getElementById('instructions')) {
			document.getElementById('instructions').remove();
		}
		vid.style.display = "";
		id = lwv;
		video_holder = document.getElementById('video-holder');
		video_holder.style.display = 'block';
		v.src = base + id + end;
		video_holder_holder.appendChild(video_holder);
		var oembed = "https://www.youtube.com/oembed?url=" + base2 + watch +  id + "&format=json";
		// t.innerHTML = oembed
		loadJSON(oembed, myData);
		setCookie("lwv", id, 60);
		url.value = "";
		ofs.addEventListener("click", () => {
			var fs = `<title>Fullscreen Video</title> <iframe frameborder="0" scrolling="no" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" src="` + base + id + end + `"></iframe>` + `<style>iframe {width: 100%; height: 100%;} * {padding: 0; margin: 0;}</style>`;
			var w = window.open();
			w.document.body.innerHTML = fs;
		});
		lw.style.display = "none";
	  });
	} else {
		lw.style.display = "none";
		l.innerHTML = "Unavailable";
	}
  }
