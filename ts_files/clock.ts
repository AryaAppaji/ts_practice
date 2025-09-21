var clock = document.getElementById("clock");
clock.style.position = "relative";
clock.style.width = "300px";
clock.style.height = "300px";
clock.style.borderRadius = "50%";
clock.style.backgroundColor = "black";
clock.style.margin = "50px auto";

// SECOND HAND
var secondHand = document.getElementById("secondHand");
secondHand.style.position = "absolute";
secondHand.style.bottom = "50%";
secondHand.style.left = "50%";
secondHand.style.transform = "translateX(-50%)";
secondHand.style.transformOrigin = "center bottom";
secondHand.style.width = "3px";
secondHand.style.height = "70px";
secondHand.style.backgroundColor = "red";
secondHand.style.zIndex = "3";

// MINUTE HAND
var minuteHand = document.getElementById("minuteHand");
minuteHand.style.position = "absolute";
minuteHand.style.bottom = "50%";
minuteHand.style.left = "50%";
minuteHand.style.transform = "translateX(-50%)";
minuteHand.style.transformOrigin = "center bottom";
minuteHand.style.width = "5px";
minuteHand.style.height = "100px";
minuteHand.style.backgroundColor = "white";
minuteHand.style.zIndex = "1";

// HOUR HAND
var hourHand = document.getElementById("hourHand");
hourHand.style.position = "absolute";
hourHand.style.bottom = "50%";
hourHand.style.left = "50%";
hourHand.style.transform = "translateX(-50%)";
hourHand.style.transformOrigin = "center bottom";
hourHand.style.width = "5px";
hourHand.style.height = "50px";
hourHand.style.backgroundColor = "yellow";
hourHand.style.zIndex = "2";
// Keep track of angles
let secondAngle = 0;
let minuteAngle = 0;
let hourAngle   = 0;

function moveSecondsHand(hand){
    secondAngle += 6; // 360 / 60
    hand.style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
}

function moveMinutesHand(hand){
    minuteAngle += 6; // 360 / 60
    hand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
}

function moveHoursHand(hand){
    hourAngle += 6; // 360 / 12 (but here it jumps fast, just for demo)
    hand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
}

// Run with intervals
setInterval(() => moveSecondsHand(secondHand), 1* 1000);
setInterval(() => moveMinutesHand(minuteHand), 60 * 1000);
setInterval(() => moveHoursHand(hourHand), 12 * 60 * 1000);