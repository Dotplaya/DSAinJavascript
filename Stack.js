<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linked List Example</title>
</head>
<body>
    <script>
        class Stack{
            constructor() {
                this.items = [];
                this.top = -1;
             }

             isEmpty() {
                return this.top === -1;
                
             }

             push(item) {
               this.top++;
               this.items[this.top] = item; 
             }

             pop() {
                if(this.isEmpty()) {
                    return null;
                }

                const poppedItem = this.items[this.top];
                this.top--;
                return poppedItem;
             }

             printStack() {
                return this.items;
             }

             peek() {
                if(this.isEmpty()) {
                    return null;
                }

                return this.items[this.items.length -1];
             }

             size() {
                return this.items.length;
             }

             clear() {
                return this.items = [];
             }
        }

        const myStack = new Stack()
        myStack.push(3)
        myStack.push(6)
        myStack.push(8)
        myStack.pop()
        document.write(`<br /> ${myStack.clear()}`);
        document.write(myStack.printStack())
        document.write(`<br /> ${myStack.peek()}`);
        document.write(`<br /> ${myStack.size()}`);
        
    </script>
</body>
</html>
