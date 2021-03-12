
function sayHello() {
    var a = ['dog', 'cat', 'hen'];
    a[100] = 'fox';
   console.log(a.length)
}
sayHello();

function add() {
    const num1 =12; 
    const num2 =12; 

    //add two numbers
    const sum = num1 + num2;

    // display the sum
    console.log("The sum is: " + sum);

}
add();

function difference(){
    const num1 = 20;
    const num2 = 12;
    const diff  = num1-num2;
    console.log("Their difference is: "+ diff);

}
difference();