'use strict']
//a
function isArmstrong(n){
	var temp = n.toString();
	var result = false;
	var temp2 = 0;
	var temp3 = 0;
	for( i =0; i< temp.length; i++){
		temp2= parseInt(temp[i]);
		temp2= Math.pow(temp2,temp.length);
		temp3 += temp2;
	}
	if(n==temp3)
		return true;
	
	else
		return false;
}

//b
function allArmstrong5s(){
	var isArm= false;
	var result = "";
	for(var i=1; i<=99999; i++){
		//console.log(i.toString());
		isArm=isArmstrong(i);	
		//console.log(isArm);	
		if(isArm==true){
			//console.log(i.toString());
			result = result + (" " + i.toString() );

		}
	}
	//console.log(isArmstrong(371));
	return 


	//c

	function allSubstrings1(s){
		var result = "";
		var length = s.length;
		for(var i = 0 ; i< length ; i++){

			for(var j= i ; j<= length ; j++){

				result += s.substring(i, j+ 1) + ",";


			}
		}

		return result;
	}

// d
function allSubstrings2(s){

	var result = "";
	var length = s.length;
	var array = [];
	var c = 0;
	for(var i = 0 ; i< length ; i++){

			for(var j= i ; j<= length ; j++){

				result= s.substring(i, j+ 1) ;
				//console.log(result)

				c=array.push(result);


			}
		}

		return array;
	}


//e 

function maxWord(s){

	var length = 0;
	var split = s.split(" ");
	var bigindex = 0;


	for(var i = 0 ; i < split.length ; i++){

		if (length <= split[i].length){

			length = split[i].length;
			bigindex=i;
//console.log(length)
//console.log(bigindex)
		}
	}

	return split[bigindex];
}