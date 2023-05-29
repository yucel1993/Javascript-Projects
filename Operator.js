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
// ------------------------------------------------------------
// Second Part  of simple questions

// const fakto=(n)=>{
//     if (n<=1){
//         return 1
//     }else{
//         return n*fakto(n-1)
//     }
// }

// let numb=+prompt("enter number")
// console.log(fakto(4))
// -------------------------------------------
//  onlly var definition can call up outside of block
// but let and const can not be called up
// So if you want to define something then use var inside of block
//  then you can show in console



// var number3
// console.log(number3)
// number3 = 101 //? Hoisted degiskendir
// console.log(number3)

// // var result
// if (number3 === 101) {
//   const result = "Hi"
//   console.log(result)
// } else {
//   var result = "Hello"
//   console.log(result)
// }
// console.log(result)
// ---------------------------------------------



//   function sayi(){
//     let x=12
//      y=23
// console.log("here is local",x)
//   }
//   sayi()
//   console.log(x)
//   console.log(y)

// ------------------------------
// reverse string funktion

// let reverse= function(s){
//   let word=''
//   for(let i=s.length-1; i>-1 ;i--){
//     word +=s[i]
//   }
//   return word

// }

// console.log(reverse("Burhan"))

// let compare=function(word){
//   if(word==reverse(word)){
//     return 'Its iluminate'
//   }else{
//     return 'Not illuminate'
//   }
// }

// console.log(compare("HassaH"))
// --------------------------------------
// VOVEL FINDER APPLICATION



// let my_string=function(word){
// let letter=''
// for(let i=0 ; i<word.length ; i++){
// if(word[i]=="a"){
//   letter +='a'
// }else if(word[i]=="e"){
//   letter +='e'
// }else if(word[i]=="o"){
//   letter +='o'
// }else if(word[i]=="ö"){
//   letter +='ö'
// }else if(word[i]=="u"){
//   letter +='u'
// }else if(word[i]=="ü"){
//   letter +='ü'
// }else if(word[i]=="i"){
//   letter +='i'
// }

// }
// return letter
// }
// console.log(my_string("kitaplerimiz"))


// -------------------------------------------
// Numberswhoese reminders are 0 function

// let division=function(number){
//   let my_list=[]
//   let sum=0
//   for(let i=1;i<=number;i++){
//     if(number%i==0){
//       my_list.push(i)
//       sum +=i

//     }
//   }
//   return sum
  
  
// }

// console.log(division(12))

// -------------------------------------

// let prime=function(number){
//   let result=''
//   if(number===0){
//     result='0 or is not prime'
//   }else if(number===1){
//     result='1 is not prime'
//   }else if(number===2){
//     result="2 is prime"
//   }else{
//     for(let i=2;i<number;i++){
//       if(number%i==0){
//         result="This number is not prime"
//         break
//       }else{
//         result="this number is prime"
//       }
//     }
//   }
//   return result
// }
// console.log(prime(1))


// -----------------------------------
// let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9]

// let bigger=function(numb){
//   let max=null
//   for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>max){
//       max=numbers[i]
//     }
//   }
//   return max
// }

// console.log(bigger(numbers))
// -------------------------------------------

// let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9]

// let add=function(number){
//   let overall=0
//   for(let i=0;i<number.length;i++){

//     overall +=number[i]
//   }
//   return overall
// }

// console.log(add(numbers))

// --------------------------------------------

// let sentence='Hello word today is nice'

// let length=(sentence.split('')).length
// console.log(`this is sentence----> ${sentence.split(' ')} and length of his sentence ---->${(sentence.split(' ')).length}`)


// ------------------------------------------------

// let multi=function(number){
//   let overall=[]
//   for(i=1;i<=number;i++){
//     if(number%i===0){
//       overall.push(i)
//     }
//   }
//   return overall
// }

// console.log(multi(12))












// --------------------------------------------------------------


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


// Nesneler


const carData = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Silver',
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 300,
      cylinders: 6
    }
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Accord',
    year: 2019,
    color: 'White',
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 140,
      cylinders: 4
    }
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2018,
    color: 'Red',
    mileage: 15000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8
    }
  },
  {
    id: 4,
    make: 'Chevrolet',
    model: 'Camaro',
    year: 2017,
    color: 'Black',
    mileage: 10000,
     engine: {
      type: "V4",
      horsepower: 200,
      cylinders: 4
    }
  },
  {
    id: 5,
    make: 'Dodge',
    model: 'Challenger',
    year: 2016,
    color: 'Blue',
    mileage: 5000,
     engine: {
      type: "V6",
      horsepower: 250,
      cylinders: 6
    }
  },
  {
    id: 6,
    make: 'BMW',
    model: '3 Series',
    year: 2015,
    color: 'Silver',
    mileage: 35000,
     engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8
    }
  },
  {
    id: 7,
    make: 'Audi',
    model: 'A4',
    year: 2014,
    color: 'Black',
    mileage: 30000,
     engine: {
      type: "V4",
      horsepower: 220,
      cylinders: 4
    }
  },
  {
    id: 8,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2013,
    color: 'White',
    mileage: 25000,
     engine: {
      type: "V6",
      horsepower: 280,
      cylinders: 6
    }
  },
  {
    id: 9,
    make: 'Volkswagen',
    model: 'Golf',
    year: 2012,
    color: 'Red',
    mileage: 20000,
     engine: {
      type: "V4",
      horsepower: 180,
      cylinders: 4
    }
  },
  {
    id: 10,
    make: 'Tesla',
    model: 'Model S',
    year: 2011,
    color: 'Silver',
    mileage: 15000,
     engine: {
      type: "V4",
      horsepower: 260,
      cylinders: 4
    }
  },
]



// 1- Rengi gümüş olan arabaları bir listeye ata.


// let silverCar=[]
// let silverAllInfo=[]
// carData.forEach(x=>{

//   let {id,make,model,year,color,mileage,engine} =x
//   if(color=="Silver"){
//     silverCar.push(make)
//     silverAllInfo.push(x)
    
//   }
// })
// console.log(silverCar)
// console.log("****************")
// console.log(silverAllInfo)

// 2- 2015 yılından sonra üretilmiş arabaları bir listeye ata.

// let after2015=[]

// carData.forEach(x=>{

//   let {id,make,model,year,color,mileage,engine} =x
//   if(year>2015){
//     after2015.push(make)
//   }
// })
// console.log(after2015)


// -------------------------------------------
// Alternative
// let after2015=carData.filter(x=>x.year>2015)
// console.log(after2015)

// --------------------------------------------------
// 3- Arabaların ortalama kilometre değerini hesapla.

// let value=carData.map(x=>x.mileage).reduce((accumulator,x)=>accumulator+x,0)
// console.log("Avarage mileu :",value/carData.length)


// ------------------------------------------------------------------------------------------
// 4- 8 silindirli araçları listele



// let circle=carData.filter(x=>x.engine.cylinders>6).map(x=>x.engine.cylinders)
// console.log(circle)
// -------------------------------------------------------------------------------------------

// 5- Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.
// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
// let result={}
// let assign= (keyFirst,valueFirst)=>{
//   for(let i=0;i<keyFirst.length;i++){
//       if(i<valueFirst.length){
//         result[keyFirst[i]]=valueFirst[i]
//       }else{
//         result[keyFirst[i]]=0
//       }
//     }
//     return

// }
// -----------------------------------------------------------------
// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
//     console.log(result)
// assign(keys,values)
// 6- Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve value'lar key'ler olmalıdır.
// Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
// Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.



// let myOb={a: 1, b: 2, c: 3,d:2,} 
// let myKeys=Object.keys(myOb)
// let myValues=Object.values(myOb)

// let newOb={}
// for(let i=0;i<myKeys.length;i++){
//   if(i<myValues.length){
//     newOb[myValues[i]]=myKeys[i]
//    }else{
//       newOb[myValues[i]]=0
//     }
//  -----------------------------------------------------------
// console.log(newOb)
// 7-  Size bazı dilleri ve verilen dillerdeki test sonuçlarınızı içeren bir dictionarj obj verilir. Test puanınızın en az 60 olduğu dillerin listesini sonuçların azalan sırasına göre döndürün.
// Not: puanlar her zaman benzersiz olacaktır (bu nedenle yinelenen değerler olmayacaktır)
// örnekler
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// let results = {"Java": 10, "Ruby": 80, "Python": 95}




// ----------------------------------------------------------------------------------------



// 8-  Soru: Bir restoranın menüsündeki yemekleri temsil eden bir nesne dizisi olduğunu düşünelim. Her yemek nesnesi, yemek adı ve fiyatı gibi özelliklere sahiptir. Bu nesne dizisini kullanarak menüdeki her yemeğin adını ve fiyatını ekrana yazdıran bir JavaScript kodu nasıl yazılır?




// 9-  Bir alışveriş sepetindeki ürünlerin listesini içeren bir dizi verilmiştir. Her bir ürün bir nesne olarak temsil edilmektedir ve her bir ürünün adı, fiyatı ve stok durumu bilgilerini içermektedir. Aşağıdaki gibi bir dizi verilmiştir:
// let sepet = [
//   { ad: 'Kalem', fiyat: 5, stok: 10 },
//   { ad: 'Defter', fiyat: 10, stok: 5 },
//   { ad: 'Silgi', fiyat: 2, stok: 3 },
//   { ad: 'Kalemtraş', fiyat: 3, stok: 2 }
// ];
// Bu sepetin içindeki ürünlerin fiyatlarının toplamını bulmak için hangi array methodlarını kullanırsınız?




// 10  Her kitap bir nesne olarak temsil edilmekte ve kitap adı, yazarı ve yayın tarihi gibi özelliklere sahip. Bu kitap koleksiyonunu kullanarak yayın tarihi 1950'dan önce olan kitapların listesini eski tarihten başlayarak sıralayıp ekrana yazdırın?



// const library = [
//   { title: "The Hunger Games", author: "Suzanne Collins", published: 2007 },
//   { title: "Jane Eyre", author: "Charlotte Brontë", published: 1847 },
//   { title: "A Christmas Carol", author: "Charles Dickens", published: 1843 },
//   { title: "Steve Jobs", author: "Walter Isaacson", published: 2009 },
//   { title: "Pride and Prejudice", author: "Jane Austen", published: 1813 },
//   { title: "The Call of the Wild", author: "Jack London", published: 1903 },
//   { title: "Bill Gates", author: "The Road Ahead", published: 2005 },
//   { title: "Animal Farm", author: "George Orwell", published: 1945 },
// ];

// let myBook=library.filter(x=>x.published<1950).sort((a,b)=>a.published-b.published).forEach(x=>console.log(x))

// let myTime=()=>{

// let time=new Date()
// let hour=time.getHours()
// let minutes=time.getMinutes()
// let seconds=time.getSeconds()

// hour=hour.toString().padStart(2,"0")
// minutes=minutes.toString().padStart(2,"0")
// seconds=seconds.toString().padStart(2,"0")
// let watch=hour+':'+minutes+':'+seconds
// console.log(watch)

// console.log(watch)

// }

// setInterval(myTime,1000)


// let numbers=[1,2,3,4,5,6,7,8,9]

// let user=+prompt("enter the number you want to multiply")
// for(let x of numbers){
//   console.log(x,".Number of ",x,'*',user,'=',user*x)
// }

// let number=+prompt("enter the number that you are looking for")
// number=number.toString().split('').reverse().map(x=>{
//    return x=parseInt(x)
// })
// let n=0
// let arr=[]
// for(let i=0;i<number.length;i++){
  
//   arr.push(number[i]**3)
// }
// arr=arr.reduce((top,x)=>top+x,0)
// console.log(arr)
// // arr=parseInt(arr.join(''))
// number=number.reverse().join('')
// console.log(number)
// if(number==arr){
//   console.log("True .This number is amstrong")
// }else{
//   console.log("false .This number is not amstrong")

// }

// while(true){
//   let user=+prompt("Enter the number between 0-100")
//   if(user<0 || user>100){
//     alert("You did not enter the right number")
//   }else if(/[!@#$%^&*()\-=_+{}[\]|\\;:'",.<>/?]/.test(user)){

//     alert("You have entered caracter /(9=?). try again")
//   }else if(/a+/.test(user)){
//     alert("You have entered caracter. try again")
//   }else{
//     alert("You have entered right number",user)
//     break

//   }
// }

// let myNumber=[]
// while (true) {
//   let note = prompt("Enter the notes, or 'q' or 'Q' to quit");
//   if (note !== 'q' && note !== 'Q') {
//     let parsedNote = parseFloat(note);
//     if (isNaN(parsedNote)) {
//       console.log("Invalid input. Please enter a number or 'q' to quit.");
//       break
//     } else {
//       myNumber.push(parsedNote);
//     }
//   } else {
//     break;
//   }
// }
// // console.log(myNumber)
// let divider=myNumber.length

// let new1=myNumber.reduce((accumulator,x)=>accumulator+x,0)

// console.log("Avarage numbers entered :", new1/divider)



// let id="Jackal1790"
// let password="Jackal1790?"

// let n=3

// while(n!=0){
//   let idUser=prompt("enter Id")
//   if(id!==idUser){
//     console.log("Wrong Id")
//     n--
//   }else{
//     console.log("Right Id")
//     break
//   }
// }

// n=3

// while(n!=0){
//   let idPassword=prompt("enter password")
//   if(idPassword!==password){
//     console.log("wrong Password")
//     n--
//   }else{
//     console.log("Right Password")
//     break
//   }
// }


// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const [Fin,Es,Sw,Den,No]=countries
// console.log(Fin,Es,Sw,Den,No)

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }
// let {width,height,area,perimeter}=rectangle
// width=width-10
// console.log(width,height,area,perimeter)


// const users = [
// {
//   name:'Brook',
//   scores:75,
//   skills:['HTM', 'CSS', 'JS'],
//   age:16
// },
// {
//   name:'Alex',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'David',
//   scores:75,
//   skills:['HTM', 'CSS'],
//   age:22
// },
// {
//   name:'John',
//   scores:85,
//   skills:['HTML'],
//   age:25
// },
// {
//   name:'Sara',
//   scores:95,
//   skills:['HTM', 'CSS', 'JS'],
//   age: 26
// },
// {
//   name:'Martha',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'Thomas',
//   scores:90,
//   skills:['HTM', 'CSS', 'JS'],
//   age:20
// }
// ]

// let checker=(info)=>{
//   for(let element of info){
// const {name,scores,skills,age}=element
// // console.log(name)
// // console.log(scores)
// // console.log(skills)
// // console.log(age)
// // console.log("**************")
// if(skills.length<2){
//   console.log(name)
// }
//   }

// }
// checker(users)

// const countries = [
//   { name: 'Finland', capital: 'Helsinki', population: 5500000, languages: ['Finnish', 'Swedish'] },
//   { name: 'Estonia', capital: 'Tallinn', population: 1326000, languages: ['Estonian'] },
//   { name: 'Sweden', capital: 'Stockholm', population: 10340000, languages: ['Swedish'] },
//   { name: 'Denmark', capital: 'Copenhagen', population: 5814461, languages: ['Danish'] },
//   { name: 'Norway', capital: 'Oslo', population: 5367580, languages: ['Norwegian'] }
// ];

// for(let{name,capital,population,languages} of countries){
//   console.log("name :",name)
//   console.log("capital :",capital)
//   console.log("population :",population)
//   console.log("Lnaguages :",languages)
// }

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// const [name,skills,[,,jsScore,reactScore]]=student

// console.log(name,skills,jsScore,reactScore)

// const students = [
//   ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//   ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]
// let convertedArray = students.map(([name, skills, scores]) => ({
//   name,
//   skills,
//   scores
// }));

// console.log(convertedArray);

// for(let [name,skills,scores] of students){

// console.log(name)
// console.log(skills)
// console.log(scores)
// }


//     const student = {
//       name: 'David',
//       age: 25,
//       skills: {
//         frontEnd: [
//           { skill: 'HTML', level: 10 },
//           { skill: 'CSS', level: 8 },
//           { skill: 'JS', level: 8 },
//           { skill: 'React', level: 9 }
//         ],
//         backEnd: [
//           { skill: 'Node',level: 7 },
//           { skill: 'GraphQL', level: 8 },
//         ],
//         dataBase:[
//           { skill: 'MongoDB', level: 7.5 },
//         ],
//         dataScience:['Python', 'R', 'D3.js']
//       }
//     }
  
// new arr1={...student,skills:{...student.skills,frontEnd:
//   [...student.skills.frontEnd,{ skill: 'Bootstrap', level: 9 }]}}

// console.log(arr1)
