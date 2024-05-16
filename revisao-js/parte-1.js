console.log("Hello World!")


// o console funciona - comportamente "estranho"
// if(true) {
    //     var idade = 32
    // }
    //console.log(idade)
    
    //Comportamento "estranho"
    // for (var index = 0; index < 3; index++) {
        //     setTimeout(() => {
            //         console.log(index)  
            //     }, 1000)
            // }
            
            //usar let ou const sempre
            
//Tipos Primitivos
let nome = "João Felipe" //string
let idade = 32  //number
let dev = true //boolean
let ehRico = null;
let naoDefinido; //undefined

//Tipos por Referência
const hobbies = ['Esporte', 'trilha']
const hobbies2 = hobbies.map((item)=>{
    return {"hobb": item}
})
// console.log(hobbies2)

//Tipos de funções

function minhaFunc(){}

//Função Anônima
const add = function(a,b){
    return a+b
}

//Arrow Function
const add1 = () => {
    return a+b
}
const add2 = (a, b) => a+b
const addOne = a => a + 1

//Spread e Rest Operator

const hobbiesCopia = hobbies.slice()
const hobbiesCopia2 = [...hobbies]

function toArray(arg1, arg2, arg3){
    return [arg1, arg2, arg3]
}

function toArray2(...args){
    return args
}

console.log(toArray2(1,2,4,5,6))

