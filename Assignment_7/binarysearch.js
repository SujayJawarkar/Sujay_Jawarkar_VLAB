const arr = [];
var no_of_elements = prompt("How Many Numbers: ");

for (let i = 0; i < no_of_elements; i++) {
    var n = prompt("Enter Number: ");
    arr.push(n); 
    
}

var target = prompt("What Number You Want to Find: ")

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      }
  
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

const resultIndex = binarySearch(arr, target);

if (resultIndex !== -1) {
  console.log(`Element found at index ${resultIndex}`);
} else {
  console.log("Element not found in the array");
}

