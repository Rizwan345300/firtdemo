const file = () =>{
    console.log("File uploaded successfully");
}
const fun1 = () => {
    console.log("Function 1 executed");
    fun2();
}
const fun2 = () =>{
    console.log("Function 2 executed");
}
const fun3 = () =>{
    console.log("Function 3 executed");
    fun4();
}