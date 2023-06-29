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
  
  //3 determine if two linked lists intersect? If they do, find the intersection point.

  // Node class for a linked list
class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

// Function to determine if two linked lists intersect and find the intersection point
function getIntersectionNode(headA, headB) {
  // Get the lengths of both linked lists
  let lengthA = getLinkedListLength(headA);
  let lengthB = getLinkedListLength(headB);

  // Calculate the length difference between the two linked lists
  let lengthDiff = Math.abs(lengthA - lengthB);

  // Move the head of the longer list by the length difference
  if (lengthA > lengthB) {
    while (lengthDiff > 0) {
      headA = headA.next;
      lengthDiff--;
    }
  } else {
    while (lengthDiff > 0) {
      headB = headB.next;
      lengthDiff--;
    }
  }

  // Traverse both linked lists in parallel until they intersect or reach the end
  while (headA !== null && headB !== null) {
    if (headA === headB) {
      return headA; // Intersection point found
    }
    headA = headA.next;
    headB = headB.next;
  }

  return null; // No intersection point found
}

// Function to get the length of a linked list
function getLinkedListLength(head) {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
}

// Example usage

// Linked list A: 1 -> 2 -> 3 -> 4
const headA = new ListNode(1);
const nodeA2 = new ListNode(2);
const nodeA3 = new ListNode(3);
const nodeA4 = new ListNode(4);
headA.next = nodeA2;
nodeA2.next = nodeA3;
nodeA3.next = nodeA4;

// Linked list B: 6 -> 7 -> 8 -> 9 -> 3 -> 4
const headB = new ListNode(6);
const nodeB2 = new ListNode(7);
const nodeB3 = new ListNode(8);
const nodeB4 = new ListNode(9);
headB.next = nodeB2;
nodeB2.next = nodeB3;
nodeB3.next = nodeB4;
nodeB4.next = nodeA3;
// The two linked lists intersect at nodeA3

const intersectionNode = getIntersectionNode(headA, headB);
if (intersectionNode !== null) {
  console.log("Intersection Point:", intersectionNode.val);
} else {
  console.log("No Intersection Point Found");
}


//4 find the nth node from the end of a linked list

    // Node class for a linked list
class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

// Function to find the nth node from the end of a linked list
function findNthFromEnd(head, n) {
  let slow = head;
  let fast = head;

  // Move the fast pointer n nodes ahead of the slow pointer
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // Linked list length is less than n
    }
    fast = fast.next;
  }

  // Move both pointers until the fast pointer reaches the end of the list
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

// Example usage

// Linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

const n = 3;
const nthNodeFromEnd = findNthFromEnd(head, n);
if (nthNodeFromEnd !== null) {
  console.log(`The ${n}th node from the end is ${nthNodeFromEnd.val}`);
} else {
  console.log(`The linked list has less than ${n} nodes`);
}


  