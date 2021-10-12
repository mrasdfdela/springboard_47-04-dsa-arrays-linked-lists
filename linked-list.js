/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.setNodes(vals)
  }

  setNodes(vals){
    let prevNode = null;
    vals.forEach( (v,idx)=>{
      let newNode = new Node(v)
      
      if (idx===0) { this.head = newNode }
      if (idx===vals.length-1) { this.tail = newNode }
      if (prevNode) { prevNode.next = newNode }

      prevNode = newNode;
      this.length += 1;
    });
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.head===null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head===null) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let [currentNode, lastNode ] = [this.head, this.tail ];
    while (currentNode) {
      if (currentNode.next === this.tail) { 
        this.tail = currentNode;
        currentNode.next = null;
      } else if (currentNode === this.tail){
        this.tail = this.head = null;
      }
      currentNode = currentNode.next;
    }
    this.length -= 1;
    return lastNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let currentNode = this.head;
    if (currentNode && currentNode.next){
      this.head = currentNode.next;
    } else if (currentNode){
      this.head = this.tail = null;
    }
    this.length -= 1;
    return currentNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    for (let i = 0; i<=idx; i++) {
      if (i===idx) return currentNode.val
      currentNode = currentNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        currentNode.val = val;
        return val;
      }
      currentNode = currentNode.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.head;
    let previousNode = null;
    for (let i=0; i<=idx; i++) {
      if (i===idx) {
        const newNode = new Node(val);

        if (this.length > 0) {
          newNode.next = currentNode;
          previousNode.next = newNode;
        };
        if (this.length===0) { this.head = newNode };
        if (!currentNode) { this.tail = newNode };
        
        this.length += 1;
        return val;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let previousNode = null;
    for (let i=0; i<=idx; i++) {
      if (i===idx){
        if (this.length===1) {
          this.head = this.tail = null;
        } else {
          previousNode.next = currentNode.next;
        }
        
        this.length -= 1;
        return currentNode.val;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let sum = currentNode ? currentNode.val : 0;
    let count = 1;
    while (currentNode !== this.tail) {
      sum += currentNode.next.val;
      count += 1;
      currentNode = currentNode.next;
    }
    return sum / count;
  }
}

module.exports = LinkedList;
