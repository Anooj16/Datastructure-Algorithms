// 1. check if a linked list is a palindrome or not

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const isPalindrome = (head) => {
    // Base case: Empty list or single node is considered a palindrome
    if (!head || !head.next) {
      return true;
    }
  
    // Step 1: Find the middle of the linked list using the slow and fast pointer approach
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let curr = slow;
    while (curr) {
      const nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
  
    // Step 3: Compare the reversed second half with the first half of the linked list
    let left = head;
    let right = prev;
    while (right) {
      if (left.val !== right.val) {
        return false;
      }
      left = left.next;
      right = right.next;
    }
  
    return true;
  };
  






  // 2. remove duplicates from a sorted linked list



  class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const deleteDuplicates = (head) => {
    let current = head;
  
    while (current !== null && current.next !== null) {
      if (current.val === current.next.val) {
        // Duplicate found, skip the next node
        current.next = current.next.next;
      } else {
        // Move to the next node
        current = current.next;
      }
    }
  
    return head;
  };
  


  //3.  detect if a linked list has a cycle or is circular


  class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const hasCycle = (head) => {
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      // If there is a cycle, the slow and fast pointers will eventually meet
      if (slow === fast) {
        return true;
      }
    }
  
    return false;
  };
  

  