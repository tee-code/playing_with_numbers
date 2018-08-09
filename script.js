var result = document.querySelector("#screen");
var input = document.querySelector("#userInput");
var first = document.querySelector("#from");
var second = document.querySelector("#to");
var isPrime = document.querySelector("#prime");
var isEven = document.querySelector("#even");
var isOdd = document.querySelector("#odd");
var generatePrime = document.querySelector("#Gprime");
var generateEven = document.querySelector("#Geven");
var generateOdd = document.querySelector("#Godd");
function clearScreen(){
	result.innerHTML = " ";
	input.value = " ";
}
function clearGenerate(){
	result.innerHTML = " ";
	first.value = " ";
	second.value =  " ";
}
function ifPrime(number){
	var check = true;
	for(var i = 2; i < number; i++){
		if(number % i != 0){
				
		}
		else{
			check = false;
		}
	}
	if(check){
		return "yes";
	}
	else{
		return "no";
	}
}
function calculate(number){
	number = eval(input.value);
	var check = true;
	if(isNaN(eval(input.value))){
		alert("Invalid input. Please enter a number");
	}
	else{
		if(isPrime.checked){
			for(var i = 2; i < number; i++){
				if(number % i != 0){
					
				}
				else{
					check = false;
				}
			}
			if(check){
				result.innerHTML = "It is a prime number";
			}
			else{
				result.innerHTML = "It is not a prime number";
			}
		}
		if(isEven.checked){
			if(number%2 != 0){
				result.innerHTML = "It is not an even number";
			}
			else{
				result.innerHTML = "It is an even number";
			}
		}
		if(isOdd.checked){
			if(number%2 != 0){
				result.innerHTML = "It is an odd number";
			}
			else{
				result.innerHTML = "It is not an odd number";
			}
		}
	}
}
function generate(start, end){
	start = eval(first.value);
	end = eval(second.value);
	var check = true;
	var array = "";
	if(isNaN(eval(first.value)) || isNaN(eval(second.value))){
		alert("Invalid input. Please enter a number");
	}
	else{
		if(generateEven.checked){
			for(var i = start; i <= end; i++){
				if(i % 2 == 0){
					array += i + " ";
				}
			}
			result.innerHTML = array;
		}
		if(generateOdd.checked){
			for(var i = start; i <= end; i++){
				if(i % 2 != 0){
					array += i + " ";
				}
			}
			result.innerHTML = array;
		}
		if(generatePrime.checked){
			for(var i = start; i <= end; i++){
				if(ifPrime(i) == "yes"){
					array += i + " ";
				}
			}
			result.innerHTML = array;
		}
	}
}
