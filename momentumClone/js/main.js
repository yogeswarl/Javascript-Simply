const time = document.getElementById("time"),
	greeting = document.getElementById("greeting"),
	userName = document.getElementById("name"),
	focus = document.getElementById("focus");

function showTime() {
	let today = new Date(),
		hour = today.getHours(),
		minutes = today.getMinutes(),
		seconds = today.getSeconds();

	const amPm = hour > 11 ? "PM" : "AM";
	hour = hour % 12 || 12;
	time.innerHTML = `${hour}<span>:</span>${addZero(
		minutes
	)}<span>:</span>${addZero(seconds)} ${amPm}`;
	setTimeout(showTime, 1000);
}

function addZero(n) {
	return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
function setGreet() {
	let today = new Date(),
		hour = today.getHours();

	if (hour < 12) {
		document.body.style.backgroundImage =
			"url('https://i.ibb.co/7vDLJFb/morning.jpg')";
		greeting.textContent = "Good Morning";
	} else if (hour < 18) {
		document.body.style.backgroundImage =
			"url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
		greeting.textContent = "Good Afternoon";
	} else {
		document.body.style.backgroundImage =
			"url('https://i.ibb.co/924T2Wv/night.jpg')";
		greeting.textContent = "Good Evening";
		document.body.style.color = "#fffff";
	}
}
function getName() {
	if (localStorage.getItem("name") === null) {
		userName.textContent = "[Enter name]";
	} else {
		userName.textContent = localStorage.getItem("name");
	}
}
function getFocus() {
	if (localStorage.getItem("focus") === null) {
		focus.textContent = "[Enter focus]";
	} else {
		focus.textContent = localStorage.getItem("focus");
	}
}
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      userName.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

userName.addEventListener("keypress",setName);
userName.addEventListener("blue",setName);
focus.addEventListener("keypress",setFocus);
focus.addEventListener("blue",setFocus);

showTime();
setGreet();
getName();
getFocus();