<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linked List Example</title>
</head>
<body>
    <script>
        class Queue {
            constructor() {
                this.items = [];

            }

            isEmpty() {
                return this.items.length === 0;
            }

            enqueue(item) {
                this.items.push(item);
            }

            dequeue() {
                if(isEmpty()) {
                    return null;
                }

                this.items.shift();
            }

            peek() {
                if(isEmpty()) {
                    return null;
                }

                return this.items[0];
            }

            size() {
                return this.items.length;
            }

            clear() {
                this.items = [];
            }
        }

        const myQueue = new Queue();
        myQueue.enqueue(1);
        myQueue.enqueue(1);
        myQueue.enqueue(1);
        document.write(myQueue.dequeue());
        document.write(myQueue.peek());
        document.write(myQueue.size());

    </script>
</body>
</html>
