
import style from './main.css'
import axios from "axios";

function swap(a, b, array) {
    newArray = array
    if(a !== b){
    temp = newArray[a];
    newArray[a] = newArray[b];
    newArray[b] = temp;

    return newArray

  }
}


const mainFunction = async function(string){

permutationArray = [];
var originalStep= 0;

var StringToArray = string.split('');

recursionFunction(originalStep, StringToArray, permutationArray);
// console.log("permutation array")
return(permutationArray);
}

const recursionFunction = function(step, array, permutationArray){
    
    
    if(permutationArray.indexOf(array.join(''))===-1){
         permutationArray.push(array.join(''));
          }

    for(let i = step; i<array.length; i++ ){
        step += 1;
        
        for(let j = 0; j<array.length; j++){
            
                   
            var newArray = swap(i, j, array);
           
            if(newArray==null){
                newArray=array
            }

            if( 
                step<=array.length){

                recursionFunction(step,newArray,permutationArray)
            }
            // else if(step>=array.length){
            //      console.log("tempArray")
            //     console.log(permutationArray)
            // }
           }
        }
    }

// create a subarray without the step variable so that it stops when the main loop stops 
// and prints only if all steps are done with subfunctions if both level and step 


function swap2(a, b, array) {
   
    var newArray = array
    if(a !== b){
    var temp = newArray[a];
    newArray[a] = newArray[b];
    newArray[b] = temp;

    return newArray
  }
}




const mainFunction2 = async function(string){

var permutationArray = [];
var originalStep= 0;

var StringToArray = string.split('');

recursionFunction2(originalStep, StringToArray, permutationArray);
return(permutationArray)


}

const recursionFunction2 = function(step, array, permutationArray){

    if(permutationArray.indexOf(array.join(''))===-1){
      permutationArray.push(array.join(''));
    }
  
    for(let i = step; i<array.length; i++ ){
        step += 1;

        for(let j = 0; j<array.length; j++){
            var newArrayPre= [...array]
            if(i<j){
                newArrayPre=newArrayPre.slice(i, j+1) }
                
                else if (j<i){
                
                newArrayPre=newArrayPre.slice(j, i+1) 
               }
               if(permutationArray.indexOf(newArrayPre.join(''))===-1 && newArrayPre.length>2){

                 permutationArray.push(newArrayPre.join(''));
                }
            var newArray = swap2(i, j, array);
            
            if(newArray == null){
                newArray = array
            }
            else if(step<=array.length){
                // console.log(step)
                // console.log(newArray)
                var newArrayCut = [...newArray]

                if(i<j){
                newArrayCut=newArrayCut.slice(i, j+1) 
                 }
                else if (j<i){
                newArrayCut=newArrayCut.slice(j, i+1) 
                 }
               if(permutationArray.indexOf(newArrayCut.join(''))===-1 && newArrayCut.length>2){
                 permutationArray.push(newArrayCut.join(''));
                }
                 recursionFunction2(step,newArray,permutationArray)
            }

        }
    }
}



mainFunction2("catsby").then((resultArray)=>{
console.log(resultArray)

axios.post("/api/getSpellCheck",resultArray).then(res=>{
    if(res.data!==null){
        console.log(res.data);
    }
}) .catch((err) => {
console.log(err);
})
// resultArray.forEach(element => {
// setTimeout(() => {
    

// console.log(element);
// if(element !== null){
// axios.get("/api/getSpellCheck",{word:element}).then(res=>{
//         console.log(res.data);
    
// }) .catch((err) => {
// console.log(err);

// })
// }
// }, 1800);    
});
// }
// )