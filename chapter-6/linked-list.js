import { defaultEquals } from "../utils/default-equals.js";
import { Node } from "./node.js";

// O último nó da lista sempre terá um valor undefined ou null como o próximo elemento

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node();
    let current;

    if (!node) return;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }

    this.count++;
  }
}

const list1 = new LinkedList();
list1.push(10);
list1.push(12);
