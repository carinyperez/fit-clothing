// returns generator object 
function* gen() {
    console.log('a'); 
    console.log('b'); 
}
const g = gen(); 
console.log(g); 