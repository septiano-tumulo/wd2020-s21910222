//CONDITIONAL AND JAVASCRIPT FUNCTION

//CONDITIONAL 
console.log("Basic javaScript");

//conditional javascript

let firstName = "John";
let isMarried = true;

if(isMarried === true){
    console.log(firstName + " is married");
}
else{
    console.log(firstName + " is not married");
}

/*
Jika umur < 13 tahun maka tampilkan kategori anak anak
Jika umur 13 sampai 16 tahun tampilkan kategory remaja
jika umur 17 sampai 25 tahun tampilkan kategory pemuda
jika umur 25 sampai 50 tahun tampilkan dewasa
*/

// IF ELSE

// let umur = 25;

// if (umur<13){
//     console.log("kategori anak anak");
// }

// else if (umur>=13 && umur<17){
//     console.log("kategori remaja");
// }

// else if (umur>=17 && umur<26){
//     console.log("kategori pemuda");
// }

// else if (umur>=26 && umur<50){
//     console.log("kategori dewasa");
// }


//SWITCH CASE

// let firstname="john";
// let job = "teacher";

// switch(job){
//     case "teacher":
//         console.log (firstname + " is a teacher");
//     break;
//     case "driver":
//         console.log (firstname + " is a driver");
//     break;
//     case "instructor":
//         console.log (firstname + " is a instructor");
//     break;
//     default:
//         console.log(firstname + " does something else");
//     break;
// }


//IMPLEMENTASI IF ELSE KE SWITCH CASE  

// let firstname="john";
// let umur = 25;

// switch(true){
//     case umur<13:
//         console.log (" kategori anak anak");
//     break;
//     case umur >= 13 && umur <17:
//         console.log (" kategori remaja");
//     break;
//     case umur >=17 && umur<26:
//         console.log (" kategori pemuda");
//     break;
//     case umur >=26 && umur<50:
//         console.log (" kategori dewasa");
//     break;
//     default:
//         console.log(" tidak ada dalam daftar");
//     break;
// }


//JAVASCRIPT FUNCTION


// function helloworld() {
//     console.log("hello world function declaration");
// }

// let helloworld = function(nama) {
//     console.log("hello" + nama);
// };

// LINGKUP LOKAL

// function helloworld(nama) {
//     let age = 33;
//     console.log("hello nama saya " + nama + ". umur saya adalah " + age + "tahun.");
// }

// helloworld("Septiano Tumulo");

// LINGKUP GLOBAL

let age = 33;

function helloworld(nama) {
    console.log("hello nama saya " + nama + ". umur saya adalah " + age + " tahun.");
}

helloworld("Septiano Tumulo");

