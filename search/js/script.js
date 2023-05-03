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
	var beforeUrl = v.split("?")[1];
	if (beforeUrl.includes("&")) {
		afterUrl = beforeUrl.split("&")[0];
		v = afterUrl.split("v=")[1];
	} else {
		v = beforeUrl.split("v=")[1];
	}
	var url = "watch.html?v=" + encodeURIComponent(v);
	window.location.href = url;
}

function Send2(vID) {
	var v = vID;
	var beforeUrl = v.split("?")[1];
	if (beforeUrl.includes("&")) {
		afterUrl = beforeUrl.split("&")[0];
		v = afterUrl.split("v=")[1];
	} else {
		v = beforeUrl.split("v=")[1];
	}
	var url = "watch.html?v=" + encodeURIComponent(v);
	window.location.href = url;
}

  function checkLWV() {
    if (localStorage.getItem("lwv") != null && localStorage.getItem("lwvt") != null) {
		lw.style.display = "";
		l.innerHTML = localStorage.getItem("lwvt");
		l.addEventListener("click", () => {
			Send2(localStorage.getItem("lwv"));
		})
	} else {
		lw.style.display = "none";
		l.innerHTML = "Unavailable";
	}
  }
