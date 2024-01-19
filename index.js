function myEach(collection, callback){
    const valueArray = Object.values(collection);
    valueArray.map((element)=>{
        callback(element)
    })
    return collection
}

function myMap(collection, callback){
    const valueArray = Object.values(collection);
    console.log(valueArray)
    const newValArray = valueArray.map(callback)
    return newValArray
}
const my = (item)=>{return item+1}
myMap({"One":1,"two":2,"three":3},my)
// myMap([1,2,3],my)

function myReduce(collection,func, acc){
    if(acc!=parseInt(acc)){
        acc=0
    }
    const value = myMap(collection).reduce((element)=>{
        console.log(element)
        return func(element)
    },acc)
    return value
}
myReduce({"One":1,"two":2,"three":3},my,0)