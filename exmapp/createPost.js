import { exmInstance } from './exm.js';
import { functionId } from './functionId.js'
import { v4 as uuid } from 'uuid';

const id = uuid();

const inputs = [{
    type: 'createPost',
    post: {
        id,
        title: "Hello World",
        content: "Caser wept in tears when there were no more worlds to conquer",
        author: "raaj.eth"
    }
}]


const data = await exmInstance.functions.write(functionId, inputs);
console.log({ data })