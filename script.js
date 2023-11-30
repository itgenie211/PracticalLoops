//1.Loop through all numbers from 1 to 100.
for(let i=1;i<=100;i++){
  if((i % 3 === 0) && (i % 5 === 0)){
      console.log("FIZZBUZZ");
  }else if( i % 3 === 0){
      console.log("FIZZ");
  }else if (i % 5 === 0){
      console.log("BUZZ");
  }else
  console.log(i);
}

// 2.Prime Time
for (let i = 1; i < 200; i++) {
  let isPrime = true;
  let n = 84;
 for (let j = 2; j < i; j++) {
   if (i % j === 0) {
     // if this is true, it is NOT a prime number
     isPrime = false;
     break;
    }
 }
 if (isPrime === true && i > n) {
    console.log(i);
    break;
 }
}

//3.Feeling Loopy
let data="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let ID ="";
let Name="";
let Occupation="";
let Age="";
//let counter=1;
//for(i=0;i<data.length;i++){
//console.log(data[i]);
//if(data[i]=="\n"){
//  counter++;
//}
//if(counter==1){
  //ID += data[i];
//}else if(counter==2){
 // Name += data[i];
//}else if(counter==3){
  //Occupation += data[i];
//}else{
  //Age += data[i]
//}
//}
//console.log(ID,Name,Occupation,Age);

//3. Feeling Loopy - Second table
let data2 ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let Index ="";
let Mass ="";
let Spring1 ="";
let Spring2 ="";
let counter=1;
for(i=0;i<data2.length;i++){
//console.log(data[i]);
if(data2[i]=="\n"){
    counter++;
}
if(counter==1){
    Index += data2[i];
}else if(counter==2){
    Mass += data2[i];
}else if(counter==3){
    Spring1 += data2[i];
}else{
    Spring2 += data2[i]
}
}
console.log(Index,Mass,Spring1,Spring2);