function stri(str){
    let str2= str.split("");
    let newstr='';
    for( let i=0; i< str2.length; i++){
        newstr += str2[str2.length - 1 - i];
    }
    console.log(newstr);
}
stri('agdsjbd')