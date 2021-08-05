
// -------------------- mission one --------------------

// var numOne =+prompt("type your first number");
// var numTwo=+prompt("type your second number");

// // console.log(`number one is ${numOne}`);
// // console.log(`number two is ${numTwo}`);

// var result = numOne+numTwo;
// if (result>13){
//     console.log("bar-mitzvah");
// } else if (result==12){
//     console.log("bat-mitzvah");
// } else {
//     console.log("this is a kid");
// }

// --------------------------------------------------




// -------------------- mission two --------------------


// var i= 0;
// while ( i<=100){
//     console.log("yes");
//     i++
// }

// var numFromUser = Number (prompt ("select a number"));
// var i =0;
// while (i<numFromUser){
//     console.log("no");
//     i++;
// }


// --------------------------------------------------



// -------------------- mission three --------------------

// for (var i =0; i <1000 ; i++ ) {
//     console.log(i,"javascript is not JAVA");
// }

// --------------------------------------------------




// -------------------- mission four --------------------

// var UserName = prompt ("what your name?");
// var userNum = Number (prompt ("what your age?"));

// for (var i=0; i<userNum; i++){
//     console.log(UserName);
// }

// --------------------------------------------------


// -------------------- mission five --------------------

// var UserName = prompt ("what your name?");
// var ageNum = Number (prompt ("what your age?"));
// var email = prompt ("what your email?");

// // console.log(`my first name is ${UserName}.\n my email is ${email}.\n my age is ${ageNum}.\n`);

// var numTwo = Number (prompt ("type second number"));
// if (ageNum>18){
// for (var i=0 ; i<numTwo;i++){
//     console.log(i, `my first name is ${UserName}.\n my email is ${email}.\n my age is ${ageNum}.\n`);
// }}


// // --------------------------------------------------


// -------------------- mission six --------------------

// var userName
// myName= "lior"
// num = Number (prompt( "select number "));

// for (var i=0; i<num ; i++){
//     userName=prompt("select name")
//     if (userName==myName){
//         console.log(`hi boss ${myName}`)
//     }
// }



// // --------------------------------------------------




// -------------------- mission seven --------------------


// var numOne , numTwo

// numOne = Number (prompt("Select number one"));
// numTwo = Number (prompt("Select number two"));

// for (var i=0 ; i<numOne; i++){
// for (var p=0; p<numTwo; p++)
// console.log (i*p);
// }


// // --------------------------------------------------




// -------------------- mission eight --------------------

// var numArray = [ 5,4,2,6,9] ;

// for (var i=0; i<numArray.length ; i++) {
//     console.log( numArray[i]);
// }


// ----------------------------------------------------------


// -------------------- mission nine --------------------


// var userName =[ "lior","avi","ori","or","jon"];
// for ( var i=0; i<userName.length ; i++){
//     console.log(userName [i]);
// }


// ----------------------------------------------------------



// -------------------- mission tan --------------------

// var userNum = [ 30,43,45,76,77,98,12,33];
// for (var i=0; i<userNum.length ; i++){
//     if(userNum[i]%2==0){
//         console.log(userNum[i]);
//     }
// }

// ----------------------------------------------------------




// // -------------------- mission eleven --------------------

// userName =[];

// for(var i=0; i<5; i++){
//     userName [i]=prompt  ( "give me name");{
//         console.log(userName);
//     }
// }
    
// ----------------------------------------------------------



// // -------------------- mission Twelve --------------------



// userNum =[];

//  for (var i=0; i<7; i++){
//      userNum[i]=Number(prompt("give me seven numbers"));{
//          if ( userNum[i]%2!=0 ){
//              console.log(userNum[i]);
//          }
//      }
//  }

    
// ----------------------------------------------------------



// // -------------------- mission Thirteen --------------------


//   var words = ["yoni", 25, "oshri", 24,"lior" , 24];
//   for(var i=0; i<words.length;i++){
//       if(words[i]*0==0){
//          words[i]= "not a number"
//       }
//   }
//  console.log(words);

 // ----------------------------------------------------------





 // // -------------------- mission fourteen --------------------


//   var numberUser = [];
//   var contter =0 ;

//   while (contter<10){
//       var numFromUser = Number (prompt("give me ten numbers"))
//       if(numFromUser%2==0){
//          numberUser[contter]=numFromUser
//          contter++
//      }
//  }
//  console.log(numberUser); 
 

// // --------------------------------------------------




 // // -------------------- mission fifteen --------------------



 var height, width , resultArea, resultScope,numOne ,numTwo,numThree

 height = Number(prompt("select the height"));
 width = Number(prompt("select the width"));

 resultArea = height*width
 console.log(`result area is ${resultArea}`);

 resultScope = (height*2)+(width*2);
 console.log (`result scope is ${resultScope}`);

numOne = Number(prompt("select a number"));
numTwo = Number(prompt("select a number"));
numThree = Number(prompt("select a number"));

if(numOne<numTwo&&numTwo<numThree){
    console.log("ascending order")
}else if (numOne>numTwo&&numTwo>numThree){
    console.log ("Descending")
}
else {
    console.log ("no result")
}