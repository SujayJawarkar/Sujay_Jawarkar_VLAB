function twoSum(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

function findTwoSum() {
    // Get the value from the input fields
    let numsInput = document.getElementById("nums").value;
    let target = parseInt(document.getElementById("target").value);

    // Convert the input string into an array of numbers
    let nums = numsInput.split(',').map(Number);

    // Get the indices of the two numbers that add up to the target
    let result = twoSum(nums, target);

    // Display the result
    document.getElementById("result").textContent = result.length ? `Indices: [${result[0]}, ${result[1]}]` : "No solution found.";
}
