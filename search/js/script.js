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

function Send() {
	var v = document.getElementById("vLink").value;
	v = v.substr(v.length - 11, 11);
	var url = "watch.html?v=" + encodeURIComponent(v);
	window.location.href = url;
}

function Send2(vID) {
	var v = vID;
	v = v.substr(v.length - 11, 11);
	var url = "watch.html?v=" + encodeURIComponent(v);
	window.location.href = url;
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
		  Send2(lwv)
	  });
	} else {
		lw.style.display = "none";
		l.innerHTML = "Unavailable";
	}
  }