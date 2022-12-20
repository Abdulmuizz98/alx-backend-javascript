export default function appendToEachArrayValue(array, appendString) {
    // for (const idx in array) {
    // //   let value = array[idx];
    //   array[idx] = appendString + array[idx]; //value;
    // }
    for (let item of array){
        let value = item; 
        item = appendString + value;
    }
  
    return array;
  }