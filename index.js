function findDuplicate(arr){
    let seen  = new Set()
    let duplicate  = new Set()

    for( num of arr){
        if(seen.has(num)){
            duplicate.add(num)
        }else{
            seen.add(num)
        }
    }
    

    return [...duplicate]
}
console.log(findDuplicate([1,2,8,4,9,6,6,7,8,3,]))

function count(arr){
    let obj = {}

    for(num of arr){
        obj[num] = (obj[num] || 0)+1
    }

    return obj
}

console.log(count([1,2,8,4,9,6,6,7,8,3,]))

function sort(arr){

    let arr2 = new Set(arr)
    arr2 = [...arr2]
    arr2.sort((a,b)=>a-b)

    return arr2

}

console.log(sort([1,2,8,4,9,6,6,7,8,3,]))

function fact(n){
    let factorial = 1
    for(let i = 1;i<=n;i++){
        factorial = i*factorial
    }
    return factorial
}

console.log(fact(5))

function fab(n){
    let a = 0
    let b = 1
    for(let i = 1;i<=n;i++){
        console.log(a)
        let temp = a+b
        a = b
       b = temp
    }


}

console.log(fab(6))

function palindrome(str){
    let rev = str.split('').reverse().join("")

    return  str===rev
}

console.log(palindrome("madan"))

const max = (arr)=>{

    let big = 0;
    for(let i = 0;i<=arr.length;i++){
        if(i>big){
            big = arr[i]
        }
    }

    return big


}
console.log(max([1,2,3,4,5,6,7,66,8,5,9]))

const vowelCount = (str)=>{
        const vowels = "aeiou"
        let count = 0

        for(char of str.toLowerCase()){
            if(vowels.includes(char)){
                count++
            }

        }

        return count

}

console.log(vowelCount("Kaushal"))


const charCount = (str)=>{
    let obj = {}
    for(char of str){
        obj[char] = (obj[char] || 0)+1
    }

    return obj
}

console.log(charCount("kaushal"))

const Capital = (str)=>{
    const newstr = str[0].toUpperCase()+str.slice(1)
    return newstr

}

console.log(Capital("akshay"))

const Flaten = (arr)=>{
    return arr.flat(Infinity)
    
}

console.log(Flaten([123,[45,[678,[34]],7,8,9],[65,9]]))


let arrrr = [1,2,3,4,5,34,14,-65,77,78,93]


let a = 0
let b = arrrr.length-1

while(a !=b){
 let temp = arrrr[a];
 arrrr[a] = arrrr[b]
 arrrr[b] = temp
 a++
 b--
 
}

console.log(arrrr)

let arr2 = [1,0,1,0,0,1,1,0,1,0,1,1];
let i = 0
let j = 0

while(i<arr2.length){
    if(arr2[i]==0){
        let temp = arr2[i]
        arr2[i]= arr2[j]
        arr2[j] = temp
        j++
    }
    i++
}
console.log(arr2)

const Min = (arr)=>{
    let min = arr[0]
    for(let n of arr){
        if(arr[n]<min){
            min = arr[n]
        }
    }
    return min
}

console.log(Min([22,44,22,67,8,2,88,5]))
let numarr = [22,44,22,67,8,2,88,5]

const sdmin = (arr)=>{
    let min = Math.min(arr[0],arr[1]) 
    let smin = Math.max(arr[0],arr[1]) 

    for (let i = 2;i<arr.length;i++){
        if(arr[i]<min){
            smin = min;
            min = arr[i]
        }
        else if(arr[i]<smin && arr[i]>min){
            smin = arr[i]

        }
    }


    console.log(smin)
}
sdmin(numarr)

const smax = (arr)=>{
    let max = Math.max(arr[0],arr[1])
    let smax = Math.min(arr[0],arr[1])

    for(let i = 2;i<arr.length;i++){
        if(arr[i]>max){
            smax = max;
            max = arr[i]
        }
        else if(arr[i]>smax && arr[i]<max){
            smax = arr[i]

        }
    }

    console.log(smax)

}
smax(numarr)

let ak = [1,2,3,4,5]
let ek = [1,2,3,4,5]



let elem = ak[0]
for(let i = 0;i<ak.length-1;i++){
    ak[i] = ak[i+1]
    
}
ak[ak.length-1] = elem
console.log(ak)

let elem2 = ek[ek.length-1]
for(let i = ek.length-1;i>0;i--){
    ek[i] = ek[i-1]
}

ek[0] = elem2
console.log(ek)