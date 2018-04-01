//----------------------------------------------------------------------
//----------------------------------------------------------------------
// Linked Lists - Push & BuildOneTwoThree
//----------------------------------------------------------------------
//----------------------------------------------------------------------

// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

// Here's an example of push() usage:

// var chained = null
// chained = push(chained, 3)
// chained = push(chained, 2)
// chained = push(chained, 1)
// push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
// The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.

// The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null


function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let nd = new Node(data)
  nd.next = head
  return nd
}



function buildOneTwoThree() {
  let test = null
  test = push(test, 3)
  test = push(test, 2)
  test = push(test, 1)
  return test
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
// Linked Lists - Length & Count //----------------------------------------------------------------------
//----------------------------------------------------------------------

// Implement Length() to count the number of nodes in a linked list.

// length(null) === 0
// length(1 -> 2 -> 3 -> null) === 3
// Implement Count() to count the occurrences of an integer in a linked list.

// count(null, 1) === 0
// count(1 -> 2 -> 3 -> null, 1) === 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) === 4

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if(!head) return 0;
  let current = head;
  let count = 0;

  while(current) {
  count++
  current = current.next
  }
  return count
}

function count(head, data) {
  if(!head) return 0;
  let current = head;
  let result = 0;

  while(current) {
  if (current.data === data) {
  result++
  }
  current = current.next
  }

  return result
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
// Linked Lists - Get Nth Node
//----------------------------------------------------------------------
//----------------------------------------------------------------------
function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(head, index) {
  let count = 0;
  let current = head;
  while(current !== null){
  if (count === index) return current
  count++
  current = current.next
  }
  if (count !== index || !current) { throw "error"; }


//----------------------------------------------------------------------
//----------------------------------------------------------------------
// Linked Lists - Insert Nth Node
//----------------------------------------------------------------------
//----------------------------------------------------------------------
// Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

// InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

// insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  function insertNth(head, index, data) {
   let newNode = new Node();
      newNode.data = data;
      newNode.next = null;

      if (head === null) {
          return newNode;
      }
      if (index === 0) {
          newNode.next = head;
          head = newNode;
          return head;
      }
   let prev = null;
   let current = head;
   let counter = 0;
      while (current !=null && counter < index) {
          prev = current;
          current = current.next;
          counter++;
      }
      if (counter !== index) throw "error"
      newNode.next = prev.next;
      prev.next = newNode;
      return head;
  }
