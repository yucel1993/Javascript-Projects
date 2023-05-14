// console.log("Hello Word")

// const name1="Hello"
// const name2="Burhan !"
// console.log(name1 + " " + name2)
// const name3=` ${name1} ${name2} . Today is a good day `
// console.log(name3)

// const x="5"
// const y=8
// console.log(x+y)
// console.log(typeof (x+y))
// console.log(y-x)
// console.log(typeof (y-x))
// console.log(y*x)
// console.log(typeof (y*x))
// console.log(y/x)
// console.log(typeof (y/x))
// const myNumber=962
// const myOne=962%10
// console.log("This is my last number  :",myOne)
// const myTen=(myNumber%100)/10
// console.log("This is my second number :",Math.trunc(myTen))
// const myHundred=myNumber/100
// console.log("This is my first number : ",Math.trunc(myHundred))

// const myList=["Car","apple","Namae"]
// const option=(Math.random()*6)+1
// console.log(Math.trunc(option))

// let num=5
// let myNew=++num
// console.log(myNew)
// console.log(num)
// let second=num++
// console.log(second)
// console.log(second)

// let vize = Number(prompt("Lütfen vize notunuzu giriniz ?"));
// let final = Number(prompt("Lütfen final notunuzu giriniz ?"));
// let canEgrisi = 65;
// let result=Math.trunc((vize+final)/2);
// if (result>=canEgrisi) {
//     console.log("Gectin");
// }   else {
//     console.log("Kaldin"); 
// }

// let number=Number(prompt("Please enter a number between 0-100"))
// let random=Math.trunc((Math.random()*100))
// console.log(random)
// if (number<random) {
//     console.log("Computer has a big number than you. Computer has :",random)
// }
// else {
//     console.log("You have big number than computer. Computer has :",random)

// }

// let email="alpagut1993@gmail.com"
// let firstName="burhan"
// let lastName="YUCEL"

// console.log(email.length)
// console.log(email[0])
// console.log(email.charAt(1))
// console.log(firstName.toUpperCase())
// console.log(email.search("@"))
// console.log(email.slice(11+1))
// console.log(email.slice(10,40))

// let url = "www.kodluyoruz.org";
// let language = "Java";
// language =language.replace("Java","Javascript")
// console.log(language)
// newUrl=url.slice(url.indexOf("k"))
// console.log(newUrl)

// document.getElementById("domain").innerHTML = "DOM Manipülasyonu yaptık!";
// document.getElementById("btnClick").addEventListener("click", clicked);
// function clicked(){
//        alert("Butona Tıklandı");
//        } 



// let x = 'hello' && 123;
// console.log(typeof (x))




// let number=+prompt("Kacinci fiboyu gir")
// let numb0=0;
// let numb1=1;
// let overall=0;
// let k=0;
// let text=overall + ' '

// while (k<number-1){
//        numb0=numb1
//        numb1=overall
//        overall=numb0 + numb1
//        text += overall + ' '
//        k++
// }

// console.log(overall)
// console.log(text)






// let sayi = prompt("Sayinizi giriniz")
// let sayac=1
// for(let i = 0;; i++){
//     if(sayi/10>=1){
//         sayac++
//         sayi = Math.floor(sayi/10)
//     }else if(sayi/10<1){
//         break
//     }
// }
// console.log(`Sayinizin basamak sayisi: ${sayac}`);









// let number=prompt("Enter a number")


// let count=1

// for(let i=1;;i++){
//        if (number/10>=1){
//               count++
//               number=Math.floor(number/10)
//        } else if(number/10<1) {
//               break
//        }
// }


// console.log(`sayinizin basamak degeri ${count}`)

// function evenOdd(number) {
//        if (number%2===0) {
//               return console.log(number,"even")
//        } else {
//               return console.log(number,"odd")

//        }

// }


// let number=+prompt("enter a number")

// evenOdd(number)

// console.log(evenOdd)


// let person=prompt("Enter your name")


// console.log(document.location)
// console.log(document.head)
// console.log(document.body)
// document.body.style.backgroundColor="deeppink"




// function updateTime() {
//        const now = new Date();
//        const options = {
//          weekday: 'long',
//          month: 'long',
//          day: 'numeric',
//          hour: 'numeric',
//          minute: 'numeric',
//          second: 'numeric'
//        };
//        const dateString = now.toLocaleDateString(undefined, options);
//        const timeString = now.toLocaleTimeString();
//        const fullString = timeString + ' - ' + dateString;
//        document.getElementById("time").textContent = fullString;
//      }
     
//      setInterval(updateTime, 1000);

//      let intro=document.getElementById("intro")
//      intro.innerHTML = "Welcome to Website " + person

// let number=7

// if (number===1){
//        console.log("asal degil")
// }else if(number===2){
//        console.log("asal")

// }else{
//        for(let i=2;i<number;i++){
//               if(number%i!==0){
//                      console.log("Asal  ")
                     
//               }else{
//                      console.log("asal degil ")
//                      break
//               }
//        }
// }

// let number=+prompt("which number")
// let numb0=0
// let numb1=1
// let k=0
// let overall=0
// let total=0

// while (k<number-1){
//        numb0=numb1
//        numb1=overall
//        overall=numb0+numb1
//        total +='--' +overall 
// k++
// }
// console.log(overall)
// console.log(total)

// <<<<==============================>>>>>>

// let numb=+prompt("enter a number")
// let space=' '
// let sign='*'
// for(let i=1; i<=numb; i++) {
// var new2=sign.repeat(i)
// var new1=space.repeat(numb-i)
// console.log(new1 +new2)
// }

// for(let i=numb-1; 0<i; i--){
//        var new1=space.repeat(numb-i)
//        var new2=sign.repeat(i)
//        console.log(new1 +new2)

// }


// ==========================__________________




// let num = +prompt("Enter a number");
// let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let str = '';

// for(let i = 1, j = 0; j < num; i += 2, j++) {
//   str += alphabet[j];
//   console.log(str);
//   for(let k = 1; k < i; k++) {
//     str += alphabet[j+1];
//     console.log(str);
//     j++;
//     if(j == 25) break;
//   }
//   if(j == 25) break;
// }

// ------------------------------------

// let number=+prompt("enter a number")
// let x='*'
// let space=' '

// for(var i=0; i<number; i++){
//        var sign1=x.repeat(number)
//        console.log(sign1+" ")
//        console.log("\n")
// }

let number =+prompt("enter a number")

let zero='0'

for(let i=1; i<=number; i++){
       var zero1=zero.repeat(i)
       console.log(zero1)
       console.log("\n")
}


