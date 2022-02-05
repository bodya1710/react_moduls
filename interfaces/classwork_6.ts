const user:{name:string,age:number,gender:string} = {
    name:"Max",
    age:18,
    gender:'male'
}

function sum(a:number,b:number):number{
    return a+b
}
function showSum(a:number,b:number){
    console.log(a + b);
}
interface IsomeUser{
    age:number
}
function incAge(someUser:IsomeUser, inc:number):IsomeUser{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)