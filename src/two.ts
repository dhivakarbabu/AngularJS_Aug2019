let user:string = "DHIVAKAR"; //post colon datatype declarations
let user1:(string | Array<String>) = ["DHIVAKAR"];
let user2:(string | Array<String>) = "DHIVAKAR";
let num:(String | number |boolean);

function adder(num1:number = 0,num2:number = 0 , num3?:number,num4?:number):number{
    return num1+num2
    //Mandatory arguments can be given default values (num1 , num2)
    //optional arguments donot have default values (num3,num4)
    //
};