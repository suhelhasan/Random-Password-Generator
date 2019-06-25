var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
var tmp=''
function generatepass(plength){
    tmp=''
    for(i=0;i<plength;i++){
       tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return tmp
}
function populateform(enterlength) {
    document.passGen.output.value=generatepass(enterlength)
}







