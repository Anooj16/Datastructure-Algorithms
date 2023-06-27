// 1 . find the smallest missing positive integer in an unsorted array


const findSmallestMissingPositive = (nums) => {
    const n = nums.length;
  
    // Step 1: Move all positive integers to the left side of the array
    let i = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] > 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
  
    // Step 2: Mark the presence of positive integers by negating corresponding indices
    for (let j = 0; j < i; j++) {
      const num = Math.abs(nums[j]);
      if (num <= i) {
        nums[num - 1] = -Math.abs(nums[num - 1]);
      }
    }
  
    // Step 3: Find the first positive index (smallest missing positive)
    for (let j = 0; j < i; j++) {
      if (nums[j] > 0) {
        return j + 1;
      }
    }
  
    // If no positive integer found, the smallest missing positive is i + 1
    return i + 1;
  };
  




  //2.  find the peak element in an array (an element greater than its neighbors)
  
  
  const findPeakElement = (nums) => {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[mid + 1]) {
        // Peak element is in the left half
        right = mid;
      } else {
        // Peak element is in the right half
        left = mid + 1;
      }
    }
  
    // 'left' or 'right' represents the peak element index
    return left;
  };
  