import _Node from './_Node'

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        if(this.top === null){
            this.top = new _Node(data, null)
            return this.top
        }

        const node = new _Node(date, this.top)
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