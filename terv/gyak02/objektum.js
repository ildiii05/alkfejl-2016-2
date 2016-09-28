"use strict";

const cim={
    varos: 'Budapest',
    utca: "Pázmány Péter sétány",
    hazszam: `1/c`,
    //toString: function () {
    toString(){
        return `${this.varos}, ${this.utca}`;
    }
};

//objektumliterál: kapcsos zárójellel tudod megadni
//stringet három módon lehet megadni, ` a leghasznosabb (többsoros literálnál stb.)
//az objektum metódusokat is tartalmazhat

cim.iranyitoszam='117';

console.log(cim);
console.log(cim.toString());

//objektumok generálása - konstruktorral

class Point {
    constructor(x,y){
        this._x = x;
        this._y = y;
        //aláhúzás nem kötelező - nem tudjuk befolyásolni a láthatóságot. az adattagok metódusai nyilvánosak
        //aláhúzás: az privátnak van szánva
    }

    setX(value){
        this._x=value;
    }

    set x(value){
        this._x=value;
    }
    get x(){
        return this._x;
    }
};

const p1 = new Point(10,20);
console.log(typeof Point);
console.log(p1);
p1.setX(16);
console.log(p1);
p1.x=100; //settert használja
console.log(p1);

class Circle extends Point {
    constructor(x,y,r){
        super(x,y); // az ősosztály konstruktorát hívja meg
        this._r=r;
    }
};

const c1 = new Circle(20,30,40);
console.log(c1);
