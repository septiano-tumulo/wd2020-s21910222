//Array

let nilai = [1,2,3,4,5];

for(let i=0;i<nilai.length;i++){
    console.log("nilai = ",nilai[i]+5);
}

console.log(nilai);

// nilai[2]=90;
// console.log(nilai[nilai.length-1]);

let nama = ["septiano","rivo","chandra","tumulo",true];
// console.log(nama[nama.length-1]);

// toString()
// console.log(nilai.toString());
// console.log(nama.toString());

//join
// console.log(nilai.join(" - "));
// console.log(nama.join(" - "));

//pop
nilai.pop();
console.log(nilai.join(" - "));
//push
nilai.push(true);
nilai.push("hello");
console.log(nilai.join(" - "));

//shift
nilai.shift();
console.log(nilai.join(" - "));

//unshift
nilai.unshift(1);
nilai.unshift("prof");
console.log(nilai.join(" - "));

//exercises ARRAY
console.log(" ");
console.log("Exercises Array");
console.log(" ");

let nilai2=[1,2,3,4,5]
nilai2.splice(3,1,6,7);
console.log("splice = "+nilai2.toString());
console.log(" ");

let nilai_nilai = nilai2.concat(nilai);
console.log("concat"+nilai_nilai);
console.log(" ");

let nilai1_1 = [30,100,10,2,1];
let nilai1_2 = nilai1_1.slice(1,2);
let nilai1_3 = nilai1_1.slice(2);

console.log("slice : ");
console.log(nilai1_2);
console.log(nilai1_3);

console.log(" ");
console.log("Sort : ");
nama.sort();
console.log(nama);

let kecil=function(a,b){
    return a-b;
};
let besar=function(a,b){
    return b-a;
};

console.log("Dari yang terkecil "+nilai1_1.sort(kecil));
console.log("Dari yang terbesar "+nilai1_1.sort(besar));
console.log(" ");

nama.reverse();
console.log("reverse = "+nama);
console.log(" ");

let nama2 = ["Anggur","Jam","Jarum","Mobil"];
nama2.sort().reverse();
console.log("gabungan sort dan reverse = "+nama2);