// //array
// // const person = ["John",24,"programmer",true];

// //object
// const person = {
//     name: "John",
//     age: 24,
//     job: "programmer",
//     isMarried: true,

//     //method = fungsi dalam object (fungsinya untuk menghindari bentrok nama sama)
//     sayhello: function(){
//         console.log("Hello World");
//     },

// };

// //menambah dan mengubah properti  
// person.age=26;
// person.address="manado";

// //menghapus properti
// delete person.address;

// //dot
// console.log(person.age);
// //bracket
// console.log(person["job"]);

// //method
// person.sayhello(); 


//DOM
 let title=document.getElementsByTagName('h1')[0].innerText;
 console.log(title);

title = document.getElementById('h2').innerText;
console.log(title);

let umur=document.getElementById('umur').value;
console.log(umur); 

function helloworld() {
    let value=document.getElementById("umur").value;
    document.getElementsByTagName("p")[1].innerText=value; 
}
function warna(color){
    document.body.style.background=color;
}




