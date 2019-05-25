

// Button submit
const submitBtn = document.getElementById('submitBtn');

const materialsObj = [
	{id: 001, code: 'aco', name: 'Aço', value: '7.800' },
	{id: 002, code: 'alu', name: 'Alumínio', value: '2.700' }
];

init();

function onSubmit() {
		GetSelectedValue();

}

// Generate and add select options to html from array
function generateMaterialsSelectOptions(optionsObj) {
	const materialSelect = document.getElementById('materialList');
	
	for(let i = 0; i < optionsObj.length; i++)  {
		const option = document.createElement("option");
    
    option.setAttribute('value', optionsObj[i].value);
    option.text = optionsObj[i].name;
    materialSelect.appendChild(option);
	}

	//let materialChild = materialSelect.children; 
	//console.log('materialChild', materialChild);
  //console.log(materialSelect);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function claculateXYZ(selected) {
	//Get X Y Z values
	let valueX = document.getElementById('valueX').value;
	let valueY = document.getElementById('valueY').value;
	let valueZ = document.getElementById('valueZ').value;


 if (valueZ === '') {

	//calculate
		let calc_xyz = selected * valueX * valueY;
		let displayResult = document.getElementById("result").innerHTML = calc_xyz.toFixed(2); 

	} else if ( valueX=="" || valueY==""){

		//Change html
			let emptyInput = document.getElementById("invalid_input").textContent;
			document.getElementById("submitBtn").innerHTML = emptyInput;
			document.getElementById("submitBtn").style.backgroundColor = 'red';
		//set button back to calculate
			setTimeout(InvalidFeedback, 2000);

	} else {

		//calculate
		let calc_xyz = selected * valueX * valueY * valueZ;
		let displayResult = document.getElementById("result").innerHTML = calc_xyz.toFixed(2);
	}

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get selected option
function GetSelectedValue(){

//get index of selected option
	let element = document.getElementById("materialList");
	let index = element.options[element.selectedIndex].value;	

//	document.getElementById("index").innerHTML = index; DO NOT DELETE

	
// Invalid option selected
if ( document.getElementById("materialList").selectedIndex === 0 ) {

			//	Change html and message
			let invalidFeedback = document.getElementById("invalid-feedback-material").textContent;
			document.getElementById("submitBtn").innerHTML = invalidFeedback;
			document.getElementById("submitBtn").style.backgroundColor = 'red';
		//	document.getElementById("submitBtn").style.borderColor = 'red'; //'.3rem', 
			//document.getElementById("submitBtn").style.lineHeight = 'red';
			//Set button back to normal
			setTimeout(InvalidFeedback, 2000);

			///////////////////////////////////////////////////////////////////////////////////////////////////

		} else if ( document.getElementById("materialList").selectedIndex === 1 ){
			
			// get value of selected option 
			let acoSelect = element.options[element.selectedIndex].value;

			//Calculate
			claculateXYZ(acoSelect);

			//////////////////////////////////////////////////////////////////////////////////////////////////////////////

		} else if ( document.getElementById("materialList").selectedIndex === 2 ) {

			// get value of selected option
			let aluSelect = element.options[element.selectedIndex].value;

			//Calculate
			claculateXYZ(aluSelect);
		}
	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Invalid Feedback
function InvalidFeedback(){
		
  let btn = document.querySelector('#submitBtn');
  
  btn.style.backgroundColor = null;
  
  btn.innerHTML = "Calculate";

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Watch Submit btn click
submitBtn.addEventListener('click', onSubmit);

function init() {
//	window.alert('Initialized');
	generateMaterialsSelectOptions(materialsObj);
}