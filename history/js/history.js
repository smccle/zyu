let h1 = document.getElementById("h1"),
h2 = document.getElementById("h2"),
h3 = document.getElementById("h3"),
h4 = document.getElementById("h4"),
h5 = document.getElementById("h5"),
h6 = document.getElementById("h6"),
h7 = document.getElementById("h7"),
h8 = document.getElementById("h8"),
h9 = document.getElementById("h9"),
h10 = document.getElementById("h10");

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

  function Send2(vID) {
	var v = vID;
	v = v.substr(v.length - 11, 11);
	var url = "watch.html?v=" + encodeURIComponent(v);
	window.location.href = url;
}

  function loadHistory() {
      let history = decodeURIComponent(getCookie("history"));
      let decodedHistory = history.split(":");
      let h1Decoded = decodedHistory[0].split(".");
      h1.innerHTML = h1Decoded[0]
      h1.onclick = function () {
          Send2(h1Decoded[1]);
      }
      let h2Decoded = decodedHistory[1].split(".");
      h2.innerHTML = h2Decoded[0]
      h2.onclick = function () {
          Send2(h2Decoded[1]);
      }
      let h3Decoded = decodedHistory[2].split(".");
      h3.innerHTML = h3Decoded[0]
      h3.onclick = function () {
          Send2(h3Decoded[1]);
      }
      let h4Decoded = decodedHistory[3].split(".");
      h4.innerHTML = h4Decoded[0]
      h4.onclick = function () {
          Send2(h4Decoded[1]);
      }
      let h5Decoded = decodedHistory[4].split(".");
      h5.innerHTML = h5Decoded[0]
      h5.onclick = function () {
          Send2(h5Decoded[1]);
      }
      let h6Decoded = decodedHistory[5].split(".");
      h6.innerHTML = h6Decoded[0]
      h6.onclick = function () {
          Send2(h6Decoded[1]);
      }
      let h7Decoded = decodedHistory[6].split(".");
      h7.innerHTML = h7Decoded[0]
      h7.onclick = function () {
          Send2(h7Decoded[1]);
      }
      let h8Decoded = decodedHistory[7].split(".");
      h8.innerHTML = h8Decoded[0]
      h8.onclick = function () {
          Send2(h8Decoded[1]);
      }
      let h9Decoded = decodedHistory[8].split(".");
      h9.innerHTML = h9Decoded[0]
      h9.onclick = function () {
          Send2(h9Decoded[1]);
      }
      let h10Decoded = decodedHistory[9].split(".");
      h10.innerHTML = h10Decoded[0]
      h10.onclick = function () {
          Send2(h10Decoded[1]);
      }
  }
