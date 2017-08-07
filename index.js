function add(a, b){
    return a+b;
} //adds two numbers and returns the result:

function subtract(a, b){
    return a-b;
} // subtracts b from a and returns the result:

function multiply(a, b){
    return a*b;
} //multiplies two numbers and returns the result:

function divide(a, b){
    return a/b;
} 
function inc(n){
    return n+=1;
} //increments n and returns the result:

function dec(n){
    return n-=1
} //decrements n and returns the result:

function makeInt(n){
    return parseInt(n, 10);
} //parses n as an integer and returns the parsed integer:
// assumes base 10:
// returns NaN as appropriate:

function preserveDecimal(n){
    return parseFloat(n);
} //preserves n's decimals (it parses n as a floating point number) and returns the parsed number:
// returns NaN as appropriate:
