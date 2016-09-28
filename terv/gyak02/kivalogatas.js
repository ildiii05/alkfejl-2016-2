"use strict";
//ctrl+ö terminál ablak megnyitása
//node kivalogatas.js
//ctrl shift p / b / u
//p tasks.jsonben átírni node és ${file}
//b outputot futtatja, u eltűnteti

//var, let, const
const szamok=[7, 16, 5, -5, 10, -200];

function kivalogatas(arr) {
    const result=[]; //tömbök és objektumok cím szerint tárolódnak, a hivatkozásuk ezért lehet konstans
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<0){
           result.push(arr[i]); 
        }
    }
    return result;
}

function kivalogatas2(arr, tulFn) {
    const result=[]; //tömbök és objektumok cím szerint tárolódnak, a hivatkozásuk ezért lehet konstans
    for (let i = 0; i < arr.length; i++) {
        if(tulFn(arr[i])){
           result.push(arr[i]); 
        }
    }
    return result;
}

//negatív számok kiválogatása
console.log(kivalogatas(szamok));

//tulajdonság megadása függvényben
function negativE(p){
    return p<0;
}

console.log(kivalogatas2(szamok, negativE));

console.log(kivalogatas(szamok, function(p){
    return p<0;
}) );

//array metódussal (filter)
console.log(szamok.filter(negativE));
console.log(szamok.filter(function(p){
    return p<0;
}))
console.log(szamok.filter(p => p < 0) );
