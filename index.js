// 1-masala
// for(let i = 1; i<=5;i++){
//     console.log(i);
// }

// 2-masala
// for(let i = 1; i<=20;i++){
//     console.log(i);
// }

// 3-masala
// let num = +prompt('Sonni kiriting')
// for(let i = 1; i<=num;i++){
//     console.log(i+(i*i));
// }

// 4-masala
// for(let i = 0; i<=10;i+=2){
//     console.log(i);
// }

// 5-masala
// for(let i = 1; i<=15;i+=2){
//     console.log(i);
// }

// 7-masala
// for(let i = 15; i>=5;i--){
//     console.log(i);
// }

// 8-masala
// let son = +prompt('Sonni kiriting:'); 
// let num = 1;
// for (let i = 1; i <= son; i++) {
//     num = num * i; 
//     console.log(i + '-gacha kopaytma:' +  num); 
// }

// 9-masala
// let sum = 0;
// for(let i= 1; i<=10;i++){
//     let son = +prompt('${i}-sonni kirirting')
//     sum +=son
// }
// console.log(sum);

// 10-masala
// for(let i =1;i<=50;i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }
// 11-masala

// for(let i = 1; i<=100;i++){
//     console.log(i);
// }

// 12-masala
// let sum = 0;
// for(let i = 1; i<=100; i++){
//     sum = sum + i
//     console.log(sum);
// }

// 13-masala
// let num1 = +prompt('1-son')
// let num2 = +prompt('2-son')
// for(let i = num1; i<=num2; i++){
//     console.log(i);
// }

// 14-masala
// let num =+prompt('Sonni kiriting')
// for(let i =1;i<=num;i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }

// 15-masala
// for(let i = 1; i <=20;i++){
//     console.log(i*i);
// }
// 16-masala
// for(let i = 1; i <=100;i++){
//     if(i % 7 == 0){
//         console.log(i);
//     }
// }

// 17-masala
// for(let i = 1 ; i <= 10 ; i++){
//  for(let a = 1; a <= 10 ; a++){
    
//     console.log(i +' * ' + a + ' = ' +(a*i));
//  }
// }

// 18-masala
// let num = +prompt('Sonni kiriting');
// let sum = 0;
// for(let i = 1 ; i <= num ;i++){
//     if(num % i == 0){
//         console.log(i);
//         sum+=i
//     }
// }
// console.log(sum);

// 19-masala

// let sum = 0;
// for(let i=1; i <=50; i++){
//     if (i % 2 == 1) {
//         sum = sum + i
//     }
//     console.log(sum);
// }

// 20-masala
// let num1 =+prompt('1-son')
// let num2 =+prompt('2-son')
// for(let i = num1; i<=num2;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// 21-masala
// let sum = 0;
// for(let i = 1; i <=100;i+=2){
//   sum=sum+i
//   console.log(sum);
// }
// 22-masala
// let num =+prompt('Sonni kiriting')
// let faktor = 1;
// for(let i = 1; i <=num;i++){
//     faktor *=i
//     console.log(faktor);
// }
// 23-masala
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       continue; 
//     }
//     console.log(i); 
//   }

// 24-masala

// for(let i = 1; i<=30; i++){
//     if(i % 4 == 0 || i % 6 == 0){
//         continue;
//     }
//     console.log(i);
// }

// 25-masala
let num =+prompt('Sonni kiriting')
let sum = 0;
for(let i = 1; i<= num ; i++){
    if( i % 2 == 1){
        console.log(i +(sum+i));
    }
}