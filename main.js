// class Student {
//     constructor(firstName, lastName, year){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//         this.tardies = 0;
//         this.scores = [];
//     }
//     fullName(){
//         return `Your full name is ${this.firstName} ${this.lastName}`;
//     }
//     markLate(){
//         this.tardies += 1;
//         if(this.tardies >= 3) {
//             return "YOU ARE EXPELLED!!!!"
//         }
//         return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
//     }
//     addScore(score){
//         this.scores.push(score);
//         return this.scores
//     }
//     calculateAverage(){
//         let sum = this.scores.reduce(function(a,b){return a+b;})
//         return sum/this.scores.length;
//     }  
// }

// let firstStudent = new Student("Colt", "Steele",1);
// let secondStudent = new Student("Blue", "Steele",2);
// /////////////////////////////////////////////////////////////////

// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     static distance(a, b) {
//       const dx = a.x - b.x;
//       const dy = a.y - b.y;
  
//       return Math.hypot(dx, dy);
//     }
//   }
  
//   const p1 = new Point(5, 5);
//   const p2 = new Point(10, 10);
  
//   console.log(Point.distance(p1, p2)); // 7.0710678118654755

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Single Liked List // BIG O NOTATION O(1) to O(N)

//   class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
// class SingleLinkedList {
//     constructor() {
//         this.length = 0;
//         this.head = null;
//         this.tail = null;
//     }
//     push(val) {
//         var newNode = new Node(val)
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++
//         return this;
//     }
//     pop(){
//         if(!this.head) return undefined;
//         var current = this.head;
//         var newTail = current;
//         while(current.next) {
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if(this.length === 0) {
//             this.head = null;
//             this.tsil = null;
//         }
//         return current;
//     }
//     shift(){
//         if(!this.head) return undefined;
//         var currentHead = this.head;
//         this.head = currentHead.next;
//         this.length--;
//         if(this.length === o) {
//             this.tail = null;
//         }
//         return currentHead;
//     }
//     unshift(val){
//         var newNode = new Node(val);
//         if(!this.head) {
//             this.head = new Node;
//             this.tail = this.head;
//         } else {
//         newNode.next = this.head;
//         this.head = newNode;
//         }
//         this.length++
//         return this;
//     }
//     get(index) {
//         if(index < 0 || index >= this.length) return null;
//         var count = 0;
//         var current = this.head;
//         while(count !== index) {
//             current = current.next;
//             count++ 
//         }
//         return current;
//     }
//     set(index, val) {
//         var foundNode = this.get(index);
//         if(foundNode){
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }
//     insert(index, val) {
//         //!!something <---- equals true(bollean)
//         if(index < 0 || index > this.length) return false;
//         if(index === this.length) return !!this.push(val);
//         if(index === 0) return !!this.unshift(val);
//         var newNode = new Node(val);
//         var prev = this.get(index - 1);
//         var temp = prev.next;
//         prev.next = newNode;
//         newNode.next = temp;
//         this.length++
//         return true;
//     }
//     remove(index) {
//         if(index < 0 || index >= this.length) return undefined;
//         if(index === 0) return this.shift();
//         if(index === this.length - 1) return this.pop();
//         var prevNode = this.get(index - 1);
//         var removed = prevNode.next;
//         prevNode.next = removed.next;
//         this.length--;
//         return removed;
//     }
//     reverse() {
//         var node = this.head;
//         this.head = this.tail;
//         this.tail = node;
//         var prev = null;
//         var next;
//         for(var i = 0; i < this.length; i++) {
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }
//         return this;
//     }
//  }

// var list = new SingleLinkedList()
// list.push('Zero')
// list.push('One')
// list.push('Two')
// list.push('Three')

// var first = new Node("First")
// first.next = new Node("Second")
// first.next.next = new Node("Third")
// first.next.next.next = new Node("Fourth")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Double Liked List // BIG O NOTATION ===  O(1) to O(N) O(N/2)

// class Node{
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }
// class DoubleLinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val) {
//         var newNode = new Node(val);    
//         if(this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++
//         return this;
//     }
//     pop() {
//         if(!this.head) return undefined;
//         var poppedNode = this.tail;
//         if(this.length === 1) {
//             this.head === null;
//             this.tail === null;
//         } else {
//             this.tail = poppedNode.prev;
//             this.tail.next = null;
//             poppedNode.prev = null;
//         }
//         this.length--;
//         return poppedNode;
//     }
//     shift() {
//         if(this.length === 0) return undefined;
//         var oldHead = this.head;
//         if(this.length === 1) {
//             this.head === null;
//             this.tail === null;
//         } else {
//         this.head = oldHead.next;
//         this.head.prev = null;
//         oldHead.next = null;
//         }
//         this.length--;
//         return oldHead;
//     }
//     unshift(val) {
//         var newNode = new Node(val);
//         if(this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.head.prev = newNode;
//             newNode.next = this.head;
//             this.head = newNode
//         }
//         this.length++
//         return this;
//     }
//     get(index) {
//         if(index < 0 || index >= this.length) return null;
//         if(index <= this.length/2) {
//             console.log('Working from front')
//         var count = 0;
//         var current = this.head;
//         while(count !== index) {
//             current = current.next;
//             count++;
//         }
//       } else {
//         console.log('Working from end')
//           var count = this.length -1;
//           var current = this.tail;
//           while(count !== index) {
//               current = current.prev;
//               count--;
//           }
//       }
//       return current;
//     }
//     set(index, val) {
//         var foundNode = this.get(index);
//         if(foundNode !== null) {
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }
//     insert(index, val) {
//         if(index < 0 || index > this.length) return false;
//         if(index === 0) return this.unshift(val);
//         if(index === this.length) return this.push(val);
//         var newNode = new Node(val);
//         var beforeNode = this.get(index - 1);
//         var afterNode = beforeNode.next;
//         beforeNode.next = newNode, newNode.prev = beforeNode;
//         newNode.next = afterNode, afterNode.prev = newNode;
//         this.length++;
//         return true;
//     }
//     remove(index) {
//         if(index < 0 || index >= this.length) return false;
//         if(index === 0) return this.shift();
//         if(index === this.length - 1) return this.pop();
//         var removedNode = this.get(index);
//         removedNode.prev.next = removedNode.next;
//         removedNode.next.prev = removedNode.prev;
//         removedNode.next = null;
//         removedNode.prev = null;
//         this.length--;
//         return removedNode;
//     }
//     //Reverse method test
//     // reverse(){
//     //     for(let node = this.head; node !== null;){
//     //           const nextNode = node.next
//     //           node.next = node.prev
//     //           node.prev = nextNode
//     //           node = nextNode
//     //     }
//     //       [this.head, this.tail] = [this.tail, this.head]
//     //       return this
//     //     }
// }

// var list = new DoubleLinkedList()
// list.push(1)
// list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// list.push(6)
// list.push(7)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Using basic methods for stack method (LIFO) "last in first out"
// var stack = [];

//PUSH AND POP ARE BETTER OPTIONS BECSAUSE YOU DONT NEED TO REDIRECT INDEXS

// stack.push("google");
// stack.push("Youtube");
// stack.push("Twitch");

//stack.pop() 

// stack.unshift("Instagram")
// stack.unshift("Games")
// stack.unshift("Github")

//stack.shift()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Stacks BIG O NOTATION// O(1) LIFO

// class Node1 {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     push(val) {
//         var newNode = new Node1(val);
//         if(!this.first) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             var temp = this.first;
//             this.first = newNode;
//             this.first.next = temp;
//         }
//         return ++this.size;
//     }
//     pop() {
//         if(!this.first) return null;
//         var temp = this.first;
//         if(this.first === this.last) this.last = null;
//         this.first = this.first
//         .next;
//         this.size--;
//         return temp.value;
//     }
// }

// var stack = new Stack()

//  stack.push("google");
//  stack.push("Youtube");
//  stack.push("Twitch");

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUEUE FIFO - first in first out

// var q = [];
// //two ways of creating qeues 

// Not optimal
// q.push("First")
// q.push("Second")
// q.push("Third")
// q.shift()

// Optimal
// q.unshift("First1")
// q.unshift("Sec1")
// q.unshift("Third1")
// q.pop()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Creating a Qeue and using methods FIFO BIG O NOTATION O(1)

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class Queue {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     enqueue(val) {
//         var newNode = new Node(val);
//         if(!this.first) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             this.last.next = newNode;
//             this.last = newNode;
//         }
//         return this.size++;
//     }
//     dequeue() {
//         if(!this.first) return null;
//         var temp = this.first;
//         if(this.first === this.last) {
//             this.last  = null;
//         }
//         this.first = this.first.next;
//         this.size--
//         return temp.value;
//     }
// }

// var q = new Queue()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Binary Search Trees
//-Parent/child relationship
//-Child nodes can only have 0-1-2 nodes under it
//-Child nodes to the left are less than the parent / Child nodes to the right are greater than the parent node

// Big O notation = Insertion O(log n)
// Big O notation = Searching O(log n)

                //             9
                //          /     \
                //        2         12
                //     /   \      /    \
                //    1     3    10     14

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }
//     insert(value) {
//         var newNode = new Node(value);
//         if(this.root === null) {
//             this.root = newNode;
//             return this;
//         } else {
//             var current = this.root;
//             while(true) {
//                 if(value === current.value) return undefined;
//                 if(value < current.value) {
//                     if(current.left === null) {
//                         current.left = newNode;
//                         return this;
//                     } else {
//                         current = current.left;
//                     }
//                 }
//                 else if(value > current.value) {
//                     if(current.right === null) {
//                         current.right = newNode;
//                         return this;
//                     } else {
//                         current = current.right;
//                     }
//                 }
//             }
//         }
//     }
//     find(value) {
//         if(this.root ===  null) return false;
//         var current = this.root;
//         var found = false;
//         while(current && !found){
//             if(value < current.value) {
//                 current = current.left;
//             }
//             else if( value > current.value) {
//                 current = current.right
//             }
//             else {
//                 found = true;
//             }
//         }
//         if(!found) return undefined;
//         return current;
//     }

//     BFS() {
//         var data = [];
//         var queue = [];
//         var node = this.root
//         queue.push(this.root);
//         while(queue.length) {
//             node = queue.shift();
//             data.push(node.value);
//             if(node.left) queue.push(node.left);
//             if(node.right) queue.push(node.right);
//         }
//         return data;
//     }

//     DFSPreorder() {
//         var data = [];
//         var current = this.root;
//         function traverse(node) {
//             data.push(node.value);
//             if(node.left) traverse(node.left);
//             if(node.right) traverse(node.right);
//         }
//         traverse(current);
//         return data;
//     }
//     DFSPostorder() {
//         var data = [];
//         var current = this.root;
//         function traverse(node) {
//             if(node.left) traverse(node.left);
//             if(node.right) traverse(node.right);
//             data.push(node.value);
//         }
//         traverse(current);
//         return data;
//     }
//     DFSInorder() {
//         var data = [];
//         var current = this.root;
//         function traverse(node) {
//             if(node.left) traverse(node.left);
//             data.push(node.value);
//             if(node.right) traverse(node.right);
//         }
//         traverse(current);
//         return data;
//     }
// }

// // Manual Insert 
//  var tree = new BST();
//  tree.root = new Node(9);
//  tree.root.left = new Node(2);
//  tree.root.right = new Node(12);
//  tree.root.left.right = new Node(3);
//  tree.insert(1);
//  tree.insert(10);
//  tree.insert(14);

// BFS OUTPUT: [9,2,12,1,3,10,14]
// DFS Preorder OUTPUT: [9,2,1,3,12,10,14]
// DFS Postorder OUTPUT: [1,3,2,10,14,12,9]
// DFS Inorder OUTPUT: [1,2,3,9,10,12,14]

//Tree Traversal
//Two Methods: BFS && DFS

//-BFS(Breath First Search) (LEFT TO RIGHT) Output: [9,2,12,1,3,10,14]
// Use Case: Goes from parent to child allowing you to see parental inhertiance over child

//-DFS(Depth First Search PreOrder) Output: [9,2,1,3,12,10,14]
// Use Case: good for duplicating a tree the output with create another tree

//-DFS(Depth First Search PostOrder) Output: [1,3,2,10,14,12,9]

//-DFS(Depth First Search InOrder) Output: [1,2,3,9,10,12,14]
// Use Case: Goes from lowest to highest(if you want to order the items least to greatest)

                //             9
                //          /     \
                //        2         12
                //     /   \      /    \
                //    1     3    10     14

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Binary heaps 
//  Two Heaps:
//  MaxBinaryHeap - parent nodes are larger than child nodes
                //          41
                //        /    \
                //     39       33
                //    /  \     /   \
                // 18     27  12    1


//  MinBinaryHeap - parent nodes are smaller than child nodes
                //          1
                //        /    \
                //      9        2
                //    /  \     /   \
                // 18     27  12    16


// class MaxBinaryHeap {
//     constructor() {
//         this.values = [41,39,33,18,27,12,1];
//     }
//     insert(element) {
//         this.values.push(element);
//         this.bubbleUp();
//     }
//     bubbleUp() {
//         let idx = this.values.length -1;
//         const element = this.values[idx];
//         while(idx > 0) {
//             let parentIdx = Math.floor((idx -1)/2);
//             let parent = this.values[parentIdx];
//             if(element <= parent) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }
//     extractMax() {
//         const max = this.values[0];
//         const end = this.values.pop();
//         if(this.values.length > 0) {
//             this.values[0] = end;
//             //trickle down
//             this.sinkDown();
//         }
//         return max;
//     }
//     sinkDown(){
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while(true){
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild, rightChild;
//             let swap = null;

//             if(leftChildIdx < length) {
//                 leftChild = this.values[leftChildIdx];
//                 if(leftChild > element) {
//                     swap = leftChildIdx;
//                 }
//             }

//             if(rightChildIdx < length) {
//                 rightChild = this.values[rightChildIdx];
//                 if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild )) {
//                     swap = rightChildIdx;
//                 }
//             }
//             if(swap === null) break;
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }
// let heap = new MaxBinaryHeap();
// heap.insert(55)




// Insert method: 
// BIG O: O(log n)
//[41,39,33,18,27,12,1,55]
//         |
//         v
//[41,39,55,18,27,12,1,33]
//         |
//         v
//[55,39,41,18,27,12,1,33]

// Remove method removes the root node on Max heaps and lowest value for Min Heaps 
// BIG O: O(log n)
// extraxt max = OUTPUT: [41, 39, 33, 18, 27, 12, 1]

// HEAPS ARE GREAT WITH MAKING A PRORITY QUEUE!!!!
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WHAT IS A PRIORITY QUEUE?
// - a data structure where each element has a priority. 
//   Elements with higher priorites are served over those 
//   with lower priorites

// Priorty queues are usually made with MinHeaps

// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }
//     enqueue(val, priority) {
//         let newNode = new Node(val, priority);
//         this.values.push(newNode);
//         this.bubbleUp();
//     }
//     bubbleUp() {
//         let idx = this.values.length -1;
//         const element = this.values[idx];
//         while(idx > 0) {
//             let parentIdx = Math.floor((idx -1)/2);
//             let parent = this.values[parentIdx];
//             if(element.priority >= parent.priority) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }
//     dequeue() {
//         const min = this.values[0];
//         const end = this.values.pop();
//         if(this.values.length > 0) {
//             this.values[0] = end;
//             //trickle down
//             this.sinkDown();
//         }
//         return min;
//     }
//     sinkDown(){
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while(true){
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild, rightChild;
//             let swap = null;

//             if(leftChildIdx < length) {
//                 leftChild = this.values[leftChildIdx];
//                 if(leftChild.priority < element.priority) {
//                     swap = leftChildIdx;
//                 }
//             }

//             if(rightChildIdx < length) {
//                 rightChild = this.values[rightChildIdx];
//                 if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority )) {
//                     swap = rightChildIdx;
//                 }
//             }
//             if(swap === null) break;
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }

// class Node {
//     constructor(val, priority){
//         this.val = val;
//         this.priority = priority;
//     }
// }
// let ER = new PriorityQueue();
// ER.enqueue("common cold", 5);
// ER.enqueue("Gunshot wound", 1);
// ER.enqueue("Cracked head", 2);
// ER.enqueue("Broken Arm", 2);
// ER.enqueue("High Fever", 4);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//HASH TABLE or HASH MAP      BIG O NOTATION: Insert O(1), Deletion O(1), Get O(1)
// - hash tables are used to store key-value pairs 
// - they are like arrays, but the keys are not ordered 
// - fast for finding, adding, and removing 
// - Very fast

// HASH FUNCTIONS
// - must be fast
// -doesnt cluster values, but evenly spreads out values
// -same input yeailds same output

//PRIME NUMBERS
//Prime numbers help a ton when making hash functions
// - prime numbers helps spread the keys out evenly 
// - also helpful if the array you put values into has a prime length

//DEALING WITH COLLISIONS
//Seprate chaining
// - if keys are the same values we can saperate them with a nested array
//Linear probing
// - When there is a collison we search through array and find next empty slot


// console.log("p".charCodeAt(0))
// console.log("pi".charCodeAt(0))

// //Gives alphabetic ranking for alphabet when subtracting 96
// console.log("Letter of alphabet order A =", "a".charCodeAt(0) -96)
// console.log("Letter of alphabet order B =","b".charCodeAt(0) -96)
// console.log("Letter of alphabet order Z =","z".charCodeAt(0) -96)



// //Basic hash function using charCodeAt for alphabet
// function hash(key, arrayLen) {
//     let total = 0;
//     let WEIRD_PRIME = 31;
//     for(let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i]
//         //map "a" to 1, "b" to 2, "c" to 3, etc.
//         let value = char.charCodeAt(0) - 96
//         total = (total * WEIRD_PRIME + value) % arrayLen;
//     }
//     return total;
// }
 
// console.log(hash("pink", 13))
// console.log(hash("red", 13))
// console.log(hash("blue", 13))
// console.log(hash("orange", 13))
// console.log(hash("green", 13))


// class HashTable {
//     constructor(size=53){
//       this.keyMap = new Array(size);
//     }
  
//     _hash(key) {
//       let total = 0;
//       let WEIRD_PRIME = 31;
//       for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96
//         total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//       }
//       return total;
//     }
//     set(key,value){
//       let index = this._hash(key);
//       if(!this.keyMap[index]){
//         this.keyMap[index] = [];
//       }
//       this.keyMap[index].push([key, value]);
//     }
//     get(key){
//       let index = this._hash(key);
//       if(this.keyMap[index]){
//         for(let i = 0; i < this.keyMap[index].length; i++){
//           if(this.keyMap[index][i][0] === key) {
//             return this.keyMap[index][i][1]
//           }
//         }
//       }
//       return undefined;
//     }
//     values(){
//         let valuesArr = [];
//         for(let i = 0; i < this.keyMap.length; i++){
//             if(this.keyMap[i]){
//                 for(let j = 0; j < this.keyMap[i].length; j++){
//                     if(!valuesArr.includes(this.keyMap[i][j][1]))
//                     //getting the value of arrays
//                     valuesArr.push(this.keyMap[i][j][1])
//                 }
//             }
//         }
//         return valuesArr;
//     }
//     keys(){
//         let keysArr = [];
//         for(let i = 0; i < this.keyMap.length; i++){
//             if(this.keyMap[i]){
//                 for(let j = 0; j < this.keyMap[i].length; j++){
//                     if(!keysArr.includes(this.keyMap[i][j][0]))
//                     //getting the keys of arrays
//                     keysArr.push(this.keyMap[i][j][0])
//                 }
//             }
//         }
//         return keysArr;
//     }
//   }
  
//   let ht = new HashTable(17);
//   ht.set("maroon","#800000")
//   ht.set("yellow","#FFFF00")
//   ht.set("olive","#808000")
//   ht.set("salmon","#FA8072")
//   ht.set("lightcoral","#F08080")
//   ht.set("mediumvioletred","#C71585")
//   ht.set("plum","#DDA0DD")
//   ht.set("plum","#DDA0DD")

//   ht.keys().forEach((key) => console.log(ht.get(key)))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GRAPHS  
//-Collections of nodes and a connections between them
// -social media connections(friends connected to other friends)
// -google maps
// -recommendations

// BIG O NOTATION  (V = number of Vertices, E = number of edges)
// Adjacency Matrix :
//       Add Vertex:O(V^2) 
//       Add Edge:O(1)
//       Remove Vertex:O(v^2)   
//       Remove Edge:O(1)  
//       Query:O(1) 
//       Storage: O(v^2) 
// Adjacency List: 
//       Add Vertex: O(1) 
//       Add Edge: O(1) 
//       Remove Vertex: O(V + E)  
//       Remove Edge: O(E)  
//       Query:  O(V + E)   
//       Storage: O(V + E)  

// GRAPH TERMS
// Vertex - a Node
// Edge - connection between Nodes 
// Weighted/Unweighted - values assigned to distances between vertices
// Directed/Undirected - directions assigned to distances betweeen vertices

// TYPES OF GRAPHS
// Weighted-when you assign a value to the connection(edge)
//Unweighed-when you have no value assigned to an edge
//Directed- there is a certain direction assigned to the edge
//Undtirected- when there is no direction connecting nodes

// Adjacancy Matrix- 2d structure used to store nested array values in a table
// -Pros:Faster to look up specific edge
// -Cons:Takes up more space, slower to iterate over all edges

// Adjaceny list- uses array or list to store the edges or you can use a hash table
// -Pros: Can take up less space, faster to intergrate over all edges 
// -Cons: Can be slower to look up specific edge

class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1,v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1
    );
  }
  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
  }
  depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor=> {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      })
    })(start)
    return result;
  }
  depthFirstItteritave(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length) {
      console.log(stack)
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }
    return result;
  }

  breathFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}


var g = new Graph();
// g.addVertex('Tokyo')
// g.addVertex('Seoul')
// g.addVertex('America')
// g.addVertex('Hawaii')
// g.addEdge('Tokyo', 'Hawaii')
// g.addEdge('Tokyo', 'Seoul')
// g.addEdge('Hawaii', 'America')
// g.addEdge('Seoul', 'Hawaii')
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")                           
g.addVertex("D")                       
g.addVertex("E")                       
g.addVertex("F")                       
                    //      A
                    //    /   \
                    //   B     C
                    //  /       \
                    // D---------E
                    // \         /
                    //  \       /
                    //      F                       
g.addEdge("A","B")                    
g.addEdge("A","C")                     
g.addEdge("B","D")                         
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////