import { Queue } from "./queue-class.js";

export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      // {1}
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      // {2}
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        // {3}
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; // {4}
    }
  }

  addBack(element) {
    const queue = new Queue();
    queue.enqueue(element);
  }

  size() {
    return this.count;
  }
}
