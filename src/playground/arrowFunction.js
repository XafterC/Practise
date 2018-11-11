//Chapter 3.14 & 3.15

const fullName = 'Mike Smith';
// const getFirstName = function (fullName) {...};
const getFirstName = (fullName) => fullName.split(' ')[0];
const getFirstNameTwo = (fullName) => {
  return fullName.split(' ')[0];
};

console.log(getFirstName(fullName),getFirstNameTwo(fullName));


//auguments obejct - work with regular function declaration,
//but ! no longer bound with arrow function

// const add = function(a, b){
//   console.log(arguments);
//   return a + b;
// }
const add = (a,b) => {
  //console.log(arguments);  not working
  return a + b;
};

console.log(add(5,1,111));

//this keyword no longer bound to the object itself, but the parent object.

const user = {
  name: 'XC',
  cities: ['Buf', 'NY'],
  printPlacesLived() {
  //printPlacesLived: () => { // not working
    this.cities.forEach( (city) => {
        console.log(this.name + ' has lived in ' + city);
    });
  }
};
user.printPlacesLived();

const multiplier = {
  numbers: [1,2,3],
  multiplyBy: 2,
  multiply() {
     return this.numbers.map( (number) => number*this.multiplyBy );
  }
};

console.log(multiplier.multiply());
