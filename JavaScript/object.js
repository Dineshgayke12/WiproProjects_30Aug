const user = {
       firstName:"ram",
       lastName:"kumar",
       emailId:"Ram@gmail.com",
       password: "ram1234",
       mob:"7038528223",

        fullName : function(){
         return this.firstName + "" + this.lastName;
        },
        mySkills :{
            skill : "java",
            skill2: "HTML",
            skill3:"JS"
        }
};


document.getElementById("user").innerHTML=user.firstName();

 console.log(user.fullName() + user.emailId +user.mob);

const user1 = new Object();

user1.firstName="ajit";
user1.lastName="kumar";
user1.emailId="ajit@gmail.com";
user1.password="ajit123";
user1.mob="75983494";

// user1.fullName =fumction(){
//     return(this.firstName + " " + this.lastName).toLocaleUpperCase();
// }



// console.log(user1.fullName() +  user1.firstName +user1.lastName);