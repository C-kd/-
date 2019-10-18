var body = $(".body")[0];
var body2 = $(".body2")[0];
var btn = $(".page")[0];
var btn2 = $(".page")[1];

var pre = btn2.children[0];
var one = btn2.children[1];
var two = btn.children[2];
var next = btn.children[3];

animate(body, {
	"left": 0
});

pre.onclick = function() {
	animate(body, {
		"left": 0
	});
	body2.style.left = 1200 + "px";
}
one.onclick = function() {
	animate(body, {
		"left": 0
	});
	body2.style.left = 1200 + "px";
}
two.onclick = function() {
	animate(body2, {
		"left": 0
	});
	body.style.left = 1200 + "px";
}
next.onclick = function() {
	animate(body2, {
		"left": 0
	});
	body.style.left = 1200 + "px";
}


// 
// if(i == 0 || i == 1){
// 			document.getElementsByClassName('btn').onclick = null;
// 		}
