
var series = function(k, a, N){
	var fn = k;
	while(fn < N){
		console.log(fn);
		fn = fn + a;
	}
};

series(-2000, 47, 100)