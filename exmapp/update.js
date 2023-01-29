import { exmInstance } from './exm.js';
import { functionId } from './functionId.js'


const inputs = [{
    type: 'updatePost',
    post: {
        id: process.argv[2],
        title: "Hello World V2",
        content: "God is Dead",
        author: "raaj.eth"
    }
}]

const data = await exmInstance.functions.write(functionId, inputs);
console.log({ data });