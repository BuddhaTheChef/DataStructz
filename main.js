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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                }
                else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if(this.root ===  null) return false;
        var current = this.root;
        var found = false;
        while(current && !found){
            if(value < current.value) {
                current = current.left;
            }
            else if( value > current.value) {
                current = current.right
            }
            else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    BFS() {
        var data = [];
        var queue = [];
        var node = this.root
        queue.push(this.root);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreorder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    DFSPostorder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
    DFSInorder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}



// // Manual Insert 
 var tree = new BST();
 tree.root = new Node(9);
 tree.root.left = new Node(2);
 tree.root.right = new Node(12);
 tree.root.left.right = new Node(3);
 tree.insert(1);
 tree.insert(10);
 tree.insert(14);

// BFS OUTPUT: [9,2,12,1,3,10,14]
// DFS Preorder OUTPUT: [9,2,1,3,12,10,14]
// DFS Postorder OUTPUT: [1,3,2,10,14,12,9]
// DFS Inorder OUTPUT: [1,2,3,9,10,12,14]

//Tree Traversal
//Two Methods: BFS && DFS

//-BFS(Breath First Search) (LEFT TO RIGHT) Output: [9,2,12,1,3,10,14]

//-DFS(Depth First Search PreOrder) Output: [9,2,1,3,12,10,14]
//-DFS(Depth First Search PostOrder) Output: [1,3,2,10,14,12,9]
//-DFS(Depth First Search InOrder) Output: [1,2,3,9,10,12,14]


                //             9
                //          /     \
                //        2         12
                //     /   \      /    \
                //    1     3    10     14

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////