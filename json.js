const user = {id: 1, name:'gorib',job :'actor' }
const stringified = JSON.stringify(user);
// console.log(user)
 console.log(stringified)
const obj = JSON.parse(stringified)
console.log(obj);