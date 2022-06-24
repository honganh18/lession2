function check(obj){
    if(obj==''){
        return console.log('opject rỗng')
    }
    else {
        return console.log('opject không rỗng')
    }
}
check(obj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  })