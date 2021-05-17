// construction functions
// class User {
//   constructor(username, email){
//     //set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login(){
//     console.log(`${this.username} just logged in`);
//     return this; // to return value when chaining (userOne.login.logout) the userOne.login will not return undefined.
//   }
//   logout(){
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   inScore(){
//     this.score += 1;
//     console.log(`${this.username} has score of ${this.score}`);
//     return this;
//   }
// }

//create a Subclass which inherits original properties
// Super() so that the Admin will inherits original properties: username, email from User
// class Admin extends User {
//   constructor(username, email, title){
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user){
//     users = users.filter(u => u.username !== user.username);
//   }
// }

// const userOne = new User('mai', 'mai@graceofwomen.com');
// const userTwo = new User('celine', 'celine@littlebabybump.com');
// // userThree inherits the properties of class User
// const userThree = new Admin ('dung', 'dung@stockmarket.com', 'superstar');
// console.log(userOne, userTwo, userThree);
// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);
// // this one does not work because it does not have the deleteUser method
// userTwo.deleteUser(userOne);
// // console.log(users);
// console.log(userThree);


// construction functions = constructor under hood
function User(username, email){
  this.username = username;
  this.email = email;
  // this.login = function(){
  //   console.log(`${this.username} just logged in`);
  // };
};
// prototype

User.prototype.login = function(){
    console.log(`${this.username} just logged in`);
    return this;
  };
User.prototype.logout = function(){
    console.log(`${this.username} just logged out`);
    return this;
  };

// similar to function Super before
function Admin(username, email, title){
  User.call(this, username, email);
  this.title = title;
};
//for Admin to inherit the properties of User methods
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(){

};
const userOne = new User('mai', 'mai@graceofwomen.com');
const userTwo = new User('celine', 'celine@littlebabybump.com');
// userThree inherits the properties of class User
const userThree = new Admin ('dung', 'dung@stockmarket.com', 'superstar');
console.log(userOne, userTwo, userThree);
userOne.login();
userTwo.login();
userOne.login().logout();


// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object
