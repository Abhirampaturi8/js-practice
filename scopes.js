let globalVariable = "I am global"
console.log(globalVariable);

function testFunction() {
    let functionVariable = "I am in function";
    console.log(globalVariable);      
    console.log(functionVariable);    
}
if (true) {
    let blockVariable = "I am in block";
    const alsoInBlock = "Me too";
    var notActuallyBlocked = "I can escape!";
    console.log(blockVariable);
}    
 //console.log(blockVariable);        
console.log(notActuallyBlocked);