function show() {
	var b=1; 
	var c=0;
	var fib = "1, 1, ";
	for (a=1; a+b<=500; a=b, b=c) {
		c=a+b;
		fib += c +", ";
	}

	document.getElementById("thisIs").innerHTML = fib;
	console.log(fib);
}
