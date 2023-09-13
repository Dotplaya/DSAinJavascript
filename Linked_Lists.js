<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linked List Example</title>
</head>
<body>
    <script>
        class Node {
            constructor(data) {
                this.data = data;
                this.next = null;
            }
        }

        class LinkedList {
            constructor() {
                this.head = null;
            }

            insertAtBeginning(data) {
                const newNode = new Node(data);
                newNode.next = this.head;
                this.head = newNode;
            }

            insertAtEnd(data) {
                const newNode = new Node(data);

                if (!this.head) {
                    this.head = newNode;
                    return;
                }

                let currentNode = this.head;
                while (currentNode.next) {
                    currentNode = currentNode.next;
                }

                currentNode.next = newNode;
            }

            deleteByValue(value) {
                if (!this.head) {
                    return;
                }

                if (this.head.data === value) {
                    this.head = this.head.next;
                    return;
                }

                let currentNode = this.head;
                while (currentNode.next) {
                    if (currentNode.next.data === value) {
                        currentNode.next = currentNode.next.next;
                        return;
                    }
                    currentNode = currentNode.next;
                }
            }

            searchNode(value) {
                let currentNode = this.head;
                while (currentNode) {
                    if (currentNode.data === value) {
                        return true;
                    }
                    currentNode = currentNode.next;
                }
                return false;
            }

            traverseAllNodes() {
                let currentNode = this.head;
                while (currentNode) {
                    document.write(currentNode.data);
                    currentNode = currentNode.next;
                }
            }

            findLinkedListLength() {
                let currentNode = this.head;
                let length = 0;

                while(currentNode !== null) {
                    length++;
                    currentNode = currentNode.next;
                }

                return length;
            }

            reversedLinkedList() {
                let prev = null;
                let currentNode = this.head;
                let next = null;

                while(currentNode !== null) {
                    next = currentNode.next;
                    currentNode.next = prev;
                    prev = currentNode;
                    currentNode = next
                }

                this.head = prev;
            }

            detectLoop() {
                let slowPointer = this.head;
                let fastPointer = this.head;

                while(fastPointer !== null && fastPointer.next !== null) {
                    slowPointer = slowPointer.next;
                    fastPointer = fastPointer.next.next;

                    if(slowPointer === fastPointer) {
                        return true;
                    }
                }
                return false;
            }

            findmiddleNode() {
                let slowPointer = this.head;
                let fastPointer = this.head;

                while(fastPointer !== null &&  fastPointer.next !== null) {
                    slowPointer = slowPointer.next;
                    fastPointer = fastPointer.next.next;
                }

                return slowPointer;
            }

            removeDuplicates(head) {
                let seenValues = {};
                let currentNode = this.head;
                let prevNode =  null;

                while(currentNode !== null) {
                    if(seenValues[currentNode.data]) {
                        prevNode.next = currentNode.next
                    }else{
                        seenValues[currentNode.data] = true;
                        prevNode = currentNode;
                    }
                    currentNode = currentNode.next;
                }

                return this.head;
              
            }

            findNthNodeInList(n) {
                if(n < 0 || !this.head) {
                    return null;

                }

                let first = this.head;
                let second = this.head;

                for(let i = 0; i < n; i++) {
                    if(first === null) {
                        return null;
                    }
                    first = first.next;
                }


                while(first !== null) {
                    first = first.next;
                    second = second.next;
                }

                return second;
            }
        }

        // Create a new linked list instance
        const linkedList = new LinkedList();

        // Insert elements at the beginning
        linkedList.insertAtBeginning(5);
        // linkedList.insertAtBeginning(5);
        linkedList.insertAtBeginning(4);
        linkedList.insertAtBeginning(3);

        // Insert elements at the end
        linkedList.insertAtEnd(6);
        linkedList.insertAtEnd(7);

        // Delete a node by value
        linkedList.deleteByValue(4);

        // Search for a node
        const isValueFound = linkedList.searchNode(3);
        
        // Traverse and print all nodes
        // linkedList.reversedLinkedList();
        linkedList.traverseAllNodes();
        document.write("<br/>");
        document.write(isValueFound);
        document.write("<br/>");
        document.write(linkedList.findLinkedListLength());
        document.write("<br/>");
        document.write(linkedList.detectLoop());
        document.write("<br/>");
        const middleNode = linkedList.findmiddleNode();
        document.write("<br/>");

            if (middleNode !== null) {
                document.write("Middle Node Data:", middleNode.data);
            } else {
                document.write("The linked list is empty.");
            }
        let unique = linkedList.removeDuplicates({"Data":linkedList.head});
        document.write(unique.data);
        const n = 2;
        const nthNode = linkedList.findNthNodeInList(n);
        document.write("<br/>");
        if (nthNode !== null) {
            document.write(`The ${n}th node from the end is: ${nthNode.data}`);
        } else {
            document.write(`Invalid input or node not found.`);
        }
    </script>
</body>
</html>
