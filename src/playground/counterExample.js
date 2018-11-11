// 3.17
let count = 0;
const addOne = () => {
  count+=1;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

// job done of 3.13
// let userName = "XC";
// let userAge = 29;
// let userLocation = "Buffalo";
// const user = {
//   //name: "XC",
//   age: 29,
//   location: "Buffalo"
// };
// function getLocation(location){
//   return location ? "Location: " + location : undefined;
// }
//
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     { (user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
