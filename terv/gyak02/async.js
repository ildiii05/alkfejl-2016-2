setTimeout(function(){
    console.log(1);
}, 100);

console.log(2);

//asszinkronitás callback függvényekkel dolgozik: átadunk egy függvényt amit majd végrehajtunk
//a második előbb íródik ki. először végig fut a stack, utána teljesíti a hálózati kérést és kiírja az 1-et is