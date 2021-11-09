
const func_prog = require('./FunctionalProgramming');

const add = func_prog.add;
describe('Add', () => {

    it('Sum of 0 and 0 is 0', () => {
        expect(add(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(add(1, 0)).toEqual(1);
    });
})

const head = func_prog.head

describe('Head', () => {
    it('Head of Array is 1', () =>{
        expect(head([1,2,3])).toEqual(1);
    });
})

describe('Head', () => {
    it('Head of Array is undefined', () =>{
        expect(head([])).toEqual(undefined);
    });
})

const tail = func_prog.tail

describe('Tail', () => {
    it('Tail of Array is undefined', () =>{
        expect(tail([])).toEqual([]);
    });
})

describe('Tail', () => {
    it('Returns everything from array except first element', () =>{
        expect(tail([1,2,3])).toEqual([2,3]);
    });
})

const identity = func_prog.identity

describe('Identity', () =>{
    it('Returns the identity of the array', () =>{
        expect(identity([1,2,3])).toEqual([1,2,3]);
    });
})

const cube = func_prog.cube

describe('Cube', () =>{
    it('Returns the Cube of the array', () =>{
        expect(cube([1,2,3])).toEqual([1,8,27]);
    });
})

describe('Cube', () =>{
    it('Returns the Cube of the array', () =>{
        expect(cube([])).toEqual([]);
    });
})

const doFilter = func_prog.doFilter

describe('Filter', () =>{
    it('Returns the elements greater than 1', () =>{
        expect(doFilter([1,2,3])).toEqual([2,3]);
    });
})

const doReduce = func_prog.doReduce

describe('Reduce', () =>{
    it('Returns the sum of all the elements in the array', () =>{
        expect(doReduce([1,2,3])).toEqual(6);
    });
})

const findMax = func_prog.getMax

describe('Maximum', () =>{
    it('Returns the maximum of all the elements in the array', () =>{
        expect(findMax([1,8,3])).toEqual(8);
    });
})


const findMin = func_prog.getMin

describe('Minimum', () =>{
    it('Returns the miniimum of all the elements in the array', () =>{
        expect(findMin([1,8,3])).toEqual(1);
    });
})
