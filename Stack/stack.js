class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }

        const node = new _Node(data, this.top)
        this.top = node
    }

    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }
}

const starTrek = new Stack()

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
display(starTrek)

function peek(stack) {
    console.log(stack.top.data)
}

function isEmpty(stack) {
    if(stack.top){
      console.log(false)
    }
  else console.log(true)
}

function display(stack) {
    let node = stack.top
    while (node.next !== null) {
        console.log(node.data)
        node = node.next
    }
    console.log(node.data)
    console.log()
}

starTrek.pop()
starTrek.pop()
isEmpty(starTrek)
peek(starTrek)
display(starTrek)