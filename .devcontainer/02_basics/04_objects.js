//const tinderUser = new Object () singletone
const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name = "nikita"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularname ={
    email : 'nr@123',
    FullName :{
        userName :{
            firstName: "nikita",
            LastName: "rathore"
        }
    }
}
//console.log(regularname.FullName.userName);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}
//console.log(Object.assign(obj1,obj2));
const obj3 = {...obj1,...obj2}
//console.log(obj3);

const user = [
    {

    },
    {
        id: "123",
        email:"np@123"
    },
    {
        name:"nikita"
    }
]
//console.log(user[2].name);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "JS",
    price: 999,
    courseInstructor: "hitesh"
}
//console.log(course.courseInstructor);
const {courseInstructor:instruct} =course
//console.log(courseInstructor);
console.log(instruct);












