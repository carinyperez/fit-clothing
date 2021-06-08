// returns generator object 
function* gen() {
    console.log('a'); 
    console.log('b'); 
}
const g = gen(); 
// console.log(g); 

const myPromise = new Promise((resolve, reject) => {
    resolve('foo'); 
    reject; 
})

console.log(myPromise.then(val => console.log(val))); 

