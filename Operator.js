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

// let number =+prompt("enter a number")

// let zero='0'

// for(let i=1; i<=number; i++){
//        var zero1=zero.repeat(i)
//        console.log(zero1)
//        console.log("\n")
// }

// var pow=


// var mathe=funtion(a,b){
       
//        for(let i=0;i<b; i++){
//         pow * = a
//        }
// return pow
// }

// mathe(2,3)


// let pow = 1;

// function math(a, b) {
//   for(let i = 0; i < b; i++) {
//     pow *= a;
//   }
//   return pow;
// }

// console.log(math(2, 3)); // Output: 8
// console.log(typeof math(2, 3))

// let math = (a, b) => {
//        let pow = 1;
//        for(let i = 0; i < b; i++) {
//          pow *= a;
//        }
//        return pow;
//      };
     
//      console.log(math(3, 3)); // Output: 8
     

// let math1=(a,b)=>{
//        let pow=1
//        for(i=0; i<b; i++){
//               pow *=a
//        }
//        return pow
// }

// console.log(math1(3,3))

// let experince11=+prompt("How many years")

// const developer=experince11<5 ? () => alert("You are not eligible"): ()=> alert("You are eligible")

// developer()


// let toplam=(a,b)=>{
//        let toplam1=a+b
//        return toplam
// }
// let message
// if (true) {
//        let message = 'Merhaba';
//        console.log(message);
//      }
//      console.log(message);

// let firstName="Lorem"

// function greetings(firstName="",lastName='mac'){
//        console.log(`Merhaba ${firstName}${lastName}`)
// }

// greetings("Burhan")



function greetings(A,B){
       let info=` Hello ${A} ${B}`
       return info
}

function domIdWrite(id,text){
       let domInfo=document.querySelector(`#${id}`)
       domInfo.innerHTML=text
}

domIdWrite("title",greetings("Burhan","Yucel"))



// -------------------------------------

// function number(n){
//        var overall=1       
//            for(let i=1 ;i<n ; i++){
            
//            overall *=i
//        }
//        return overall
       
//    }
   
//    number(5)


   function number(n) {
       var overall = 1;       
       for (let i = 1; i < n+1; i++) {           
         overall *= i;
       }
       console.log(overall); // Print the result to the console
     }
     
number(5); // Output: 24


let operators=document.querySelector("#operators")

operators.addEventListener("mouseover",domClick)

function domClick(){
       console.log(this.innerHTML="Bilgi degisti")
       console.log(this.style.color=="white" ? this.style.color="black" : this.style.color="white")
       document.getElementById("title").innerHTML=="HAy it's working" ? document.getElementById("title").innerHTML="Woooooooooo" :document.getElementById("title").innerHTML="HAy it's working"

       
}
     
let counter=0
let numb=document.getElementById("number")
let increase=document.getElementById("increase")
let decrease=document.getElementById("decrease")
numb.innerHTML=counter

increase.addEventListener("click",clickEvent)
decrease.addEventListener("click",clickEvent)

function clickEvent(){
       console.log(this.id)
       this.id=="increase" ? counter +=1 : counter -=1
       numb.innerHTML=counter
}


