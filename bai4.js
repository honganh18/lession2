

/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
function count_element_in_array(array, x){
    let count = 0;
    for(let i=0;i<array.length;i++){
      if(array[i]==x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
        count ++;
    }
    console.log( "Phan tu " +  x  + " xuat hien " + count +  " lan");
}

let array= [5, 2, 3, 5, 2, 3, 2, 4];

/*Xóa phần tử trùng nhau và lấy các phần tử duy nhất*/
let arrayWithNoDuplicates = array.reduce(function (accumulator, element) {
  if (accumulator.indexOf(element) === -1) {
    accumulator.push(element)
  }
  return accumulator
}, [])


/*đếm số lần xuất hiện của các phần tử duy nhất*/
for (let i = 0; i < arrayWithNoDuplicates.length; i++) 
    count_element_in_array(array, arrayWithNoDuplicates[i]);
