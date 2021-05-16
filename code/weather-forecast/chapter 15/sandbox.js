// construction functions
class User {
  constructor(username, email){
    //set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout(){
    console.log(`${this.username} just logged out`);
    return this;
  }
  inScore(){
    this.score += 1;
    console.log(`${this.username} has score of ${this.score}`);
    return this;
  }
}

//create a Subclass which inherits original properties
// Super()
class Admin extends User {
  constructor(username, email, title){
    super(username, email);
    this.title = title;
  }
  deleteUser(user){
    users = users.filter(u => u.username !== user.username);
  }
}

const userOne = new User('mai', 'mai@graceofwomen.com');
const userTwo = new User('celine', 'celin@littlebabybump.com');
// userThree inherits the properties of class User
const userThree = new Admin ('dung', 'dung@stockmarket.com', 'superstar');
// console.log(userOne, userTwo, userThree);
// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);
// // this one does not work because it does not have the deleteUser method
// userTwo.deleteUser(userOne);
// console.log(users);
console.log(userThree);



// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object
