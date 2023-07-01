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

  
  //3 find the majority element in an array (an element that appears more than n/2 times)?

  function findMajorityElement(arr) {
    const countMap = {}; // Hash map to store element counts
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      countMap[element] = (countMap[element] || 0) + 1; // Increment count for each element
      if (countMap[element] > arr.length / 2) {
        return element; // Found majority element
      }
    }
  
    return -1; // No majority element found
  }
  
  // Example usage
  const array = [2, 4, 3, 4, 4, 2, 4, 4, 6];
  const majorityElement = findMajorityElement(array);
  console.log("Majority element:", majorityElement);
  

  //4 find the median of two sorted arrays?

  function findMedianSortedArrays(nums1, nums2) {
    const merged = [];
    let i = 0;
    let j = 0;
  
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
        merged.push(nums1[i]);
        i++;
      } else {
        merged.push(nums2[j]);
        j++;
      }
    }
  
    // Add the remaining elements from nums1
    while (i < nums1.length) {
      merged.push(nums1[i]);
      i++;
    }
  
    // Add the remaining elements from nums2
    while (j < nums2.length) {
      merged.push(nums2[j]);
      j++;
    }
  
    const middle = Math.floor(merged.length / 2);
  
    if (merged.length % 2 === 0) {
      // If the merged array has an even length, return the average of the middle two elements
      return (merged[middle - 1] + merged[middle]) / 2;
    } else {
      // If the merged array has an odd length, return the middle element
      return merged[middle];
    }
  }
  
  // Example usage
  const nums1 = [1, 3];
  const nums2 = [2, 4, 5];
  const median = findMedianSortedArrays(nums1, nums2);
  console.log("Median:", median);

  //5 sort an array of 0s, 1s, and 2s (also known as the Dutch National Flag problem)?

      //To sort an array of 0s, 1s, and 2s (also known as the Dutch National Flag problem), you can use the "Dutch partitioning" algorithm. It involves maintaining three pointers to divide the array into three regions: the low region for 0s, the mid region for 1s, and the high region for 2s. Here's an example implementation in JavaScript:

      function sortColors(nums) {
        let low = 0;        // Pointer for the low region (0s)
        let mid = 0;        // Pointer for the mid region (1s)
        let high = nums.length - 1;   // Pointer for the high region (2s)
      
        while (mid <= high) {
          if (nums[mid] === 0) {
            // Swap the current element with the element at the low pointer
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
          } else if (nums[mid] === 1) {
            // Move the mid pointer forward
            mid++;
          } else if (nums[mid] === 2) {
            // Swap the current element with the element at the high pointer
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
          }
        }
      }
      
      // Example usage
      const nums = [2, 0, 1, 2, 1, 0];
      sortColors(nums);
      console.log("Sorted Array:", nums);



 //5  rotate an array to the right by a given number of steps----------------------------------------------------------------------
 
      //Method 1: Using Array Slicing

      function rotateArrayRight(arr, steps) {
        const rotated = arr.slice(); // Create a copy of the original array
      
        // Perform the rotation steps
        for (let i = 0; i < steps; i++) {
          const lastElement = rotated.pop();
          rotated.unshift(lastElement);
        }
      
        return rotated;
      }
      
      const array = [1, 2, 3, 4, 5];
      const steps = 2;
      const rotatedArray = rotateArrayRight(array, steps);
      console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
      

      //Method 2: Using Array.prototype.splice()---------------------------

      function rotateArrayRight(arr, steps) {
        const rotated = arr.slice(); // Create a copy of the original array
      
        // Perform the rotation steps
        for (let i = 0; i < steps; i++) {
          const lastElement = rotated.splice(-1, 1)[0];
          rotated.unshift(lastElement);
        }
      
        return rotated;
      }
      
      const arrayy = [1, 2, 3, 4, 5];
      const stepss = 2;
      const rotatedArrayy = rotateArrayRight(arrayy, stepss);
      console.log(rotatedArrayy); // Output: [4, 5, 1, 2, 3]
      