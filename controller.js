let gereneratorFunc = ( x,y,z) =>  {
let arr = [];
arr.push("hello")
arr.push(x);
if(Math.pow(x,y)> z){
    arr.push("higher than expected")
}
else{
    let powerOfNum = Math.pow(x,y)
    arr.push(powerOfNum)

}
arr.push("done");
return arr;

}


exports.gereneratorFunc = gereneratorFunc
// gereneratorFunc(6,2,50)


// SELECT name from Employee where salary > 2000 and months < 10;