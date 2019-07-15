for(let m = 1; m <= 100; m++) {
		switch(true) {
			case (m % 3) === 0 && (m % 5) === 0:
				console.log("FizzBuzz");
				break;
			case (m % 3) === 0:
				console.log("Fizz");
				break;
			case (m % 5) === 0:
				console.log("Buzz");
				break;
			default :
				console.log(m);
		}
	}
