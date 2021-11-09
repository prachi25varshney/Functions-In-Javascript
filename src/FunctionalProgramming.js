const add = (first,second) => {
    return first + second;   
}

const head = (params) => {
    return params[0];
}

const tail = (params) =>{
    if(params!=null){
        params.shift();
    }
    return params;
}

const identity = (params) =>{
    return params.map(i => i);
}

const cube = (params) =>{
    return params.map(i=>i*i*i);
}

const doFilter = (params) =>{
    return params.filter(i => i>1);
}

const doReduce = (params) =>{
    return params.reduce(add,0);
}

const getMax = (params) =>{
    return Math.max(...params);
}

const getMin = (params) =>{
    return Math.min(...params);
}

module.exports = {
    add,
    head,
    tail,
    identity,
    cube,
    doFilter,
    doReduce,
    getMax,
    getMin,
}