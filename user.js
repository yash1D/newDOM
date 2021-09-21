let user1 = {
    name :"jhon",
    age : 45
};
let user2 = JSON.stringify(user1);
localStorage.setItem("user1",user2);
let user3 = JSON.parse(localStorage.getItem("user1"));
console.log(user3);