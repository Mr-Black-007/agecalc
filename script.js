//* - important			*** - imperative



// current day month  *
const today = new Date();

let date = today.getDate();
let month = today.getMonth() +1;
let year = today.getFullYear();


// current date in combined (mostly not used)
let currentDay = `${year}${month}${date}`








// variables to declare returns
let outDate;
let outMonth;
let outYear;


			

// function to find age ***

function accurateAge() {


// users input date (mostly not used)


let dob= document.getElementById('date').value;
let dobArr = [...dob];
let dobArr1 = [dobArr[0],dobArr[1],dobArr[2],dobArr[3],dobArr[5],dobArr[6],dobArr[8],dobArr[9]];


// users input date individual variables *

const userDate =`${dobArr1[6]}${dobArr1[7]}` ;
const userMonth =`${dobArr1[4]}${dobArr1[5]}` ;
const userYear =`${dobArr1[0]}${dobArr1[1]}${dobArr1[2]}${dobArr1[3]}`; 




		 if ((document.getElementById('date').value == '') || (userYear>year)) { alert
		 	(`Your request is invalid.
Please enter a valid date.`); return;}


		 if ((userYear==year && userMonth>month) || ((userYear==year && userMonth==month) && userDate>date)) { alert
		 	(`Your request is invalid.
Please enter a valid date.`); return;}



			if(date>userDate){
									outDate = date - userDate;



			}

			else if(date==userDate){
									outDate = date - userDate;
			}


			else if(userDate>date && month == (01||05||07||08||10||12)){

						outDate = (date+30) - userDate;
						month = month -1;



								
			}


			else if(userDate>date && month == (02||04||06||09||11)){

						outDate = (date+31) - userDate;
						month = month -1;


						
			}


			else if(userDate>date && ((month == 03) && (year%4==0))){

						outDate = (date+29) - userDate;
						month = month -1;


						

			}


			else {

						outDate = (date+28) - userDate;
						month = month -1;



						
																									//if(userDate>date && (month == 03 && (year%4)=0)
			}







			if(month<userMonth){

						outMonth = (month+12) - userMonth;
						year = year - 1;
						outYear = year - userYear;
						displayResult(outYear, outMonth, outDate);
						const outeddddddYear = outYear;
						return;


			}
			else if(month==userMonth){

						outMonth = month - userMonth;
						outYear = year - userYear;
			}

			

			else if (month>userMonth) {

						outMonth = month - userMonth;
						outYear = year - userYear;
						
			}



			

			displayResult(outYear, outMonth, outDate);

}


const btn = document.getElementById("btn");

function displayResult(resultYear, resultMonth, resultDate){

			document.getElementById('years').textContent = resultYear;
			document.getElementById('months').textContent = resultMonth;
			document.getElementById('days').textContent = resultDate;


			document.getElementById('date').style.fontWeight = "bold";


			const outputArr = [`${resultYear}`,`${resultMonth}`,`${resultDate}`];
			const arrYear = outputArr[0];
			const arrMonth = outputArr[1];
			const arrDate = outputArr[2];



			let	outputted = `${arrYear}-${arrMonth}-${arrDate}`;

			
			console.log(outputted);


			return;
			//const para = document.createElement("p");
			//document.getElementById("age-sent").appendChild(para);
			//para.innerHTML = "Age = "+outYear+" Years";
			//console.log(outYear);
}


function empty(){
	       var getValue= document.getElementById("date");
        	if (getValue.value !="") {
            		getValue.value = "";
            		document.getElementById('date').style.fontWeight = "normal";

            		document.getElementById('years').textContent = 0;
					document.getElementById('months').textContent = 0;
					document.getElementById('days').textContent = 0;

       		 }
       		 window.location.reload();
       		 return;
}

