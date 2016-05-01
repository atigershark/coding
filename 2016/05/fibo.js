
var fibo = function(N){
	var fn2 = 1, fn1 = 1;
	fn = fn1 + fn2;
	while(fn < N){
	    console.log(fn);
		fn2 = fn1;
		fn1 = fn;
		fn = fn2 + fn1;
	}
};

fibo(1000000000000000000000000000);


