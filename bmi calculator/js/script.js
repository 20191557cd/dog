function calculateBmi() {
	let weight = $("#weight").val(): 
	
	let height = $("#height").val ():

switch(true){
	case(finalBMI<18.5):
	{
		$('meaning').val("that you are too thin")
	}
	case(finalBMI>18.5 && finalBMI <25):
	{
		$('meaning').val("that are healthy")
	}
	default
	{
		$('meaning').val("that are overweight")
	}
		
	
	
}





	if(weight > 0 && height > 0){	
		var finalBmi = weight/(height/100*height/100)
		document.bmiForm.bmi.value = finalBmi
		if(finalBmi < 18.5){
		$('meaning').val("that you are too thin")
		}
		if(finalBmi > 18.5 && finalBmi < 25){
		$('meaning').val("that you are healthy")
		}
		if(finalBmi > 25){
		$('meaning').val("that you are overweight")
		}
		}
		else{
		alert("Please Fill in everything correctly")
		}
}