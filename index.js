//get permutations

// var depo = [];


// const parentFunction = function(string){
//     depo.push(string);
    
//     var array = string.split('');
//       //
    
// }
// // going with the open windows one
// //slowly move to the right and for each step;
// //find all the variations that can be obtained by trading the place of the queued element with every one else
// //move the variation into the array collection
// //then for each of the arrays in the collection, 
// //move on to the next in queue and recurse 

// const childLoop = function(){
//     //for each array in the depo
//        for(i=0; i<depo.length;i++){
//         let array = depo[i].split('')
//         //start with the first letter and then switch with every one in the current array
//         for(j=0;j<array.length;j++){
//             //each item after the first array will switch with the first to form a new array
//             for(r=j+1;r<depo[i].length;r++){
                

//             }

//  };
//  }
// }


// <script src="https://apps.elfsight.com/p/platform.js" defer></script>
// <div class="elfsight-app-93e1ebf1-288e-4d21-8f12-0d59c4fd3202"></div>

// <script src="https://apps.elfsight.com/p/platform.js" defer></script>
// <style>
//   .BadgeContainer__Inner-sc-pa6z2-0.jWTMpU{
//     padding:0px ! important;

//   }

//   .Main__Container-sc-1n4ud0o-0{

//         height: 100px ! important;
//     overflow: hidden ! important;
//   }

//   .LayoutSidebar__Inner-sc-oejpsz-1{

//     display:block ! important
//   }

//   .BadgeContainer__Inner-sc-pa6z2-0{
//     padding:0px ! important
//   }

// </style>


// function anagram(str) {
//   var arr = [];
//   var strArr = str.split('');
//   console.log(strArr)
//   var len = strArr.length;
//   var anagrams = {};
//   var temp = '';
//   function swap(a, b) {
//     temp = strArr[a];
//     strArr[a] = strArr[b];
//     strArr[b] = temp;
//   }
//   function generate(n) {
//     var ch;
//     var i;
//     //if it is the last character of the string, see if
//     if (n >= len) {
//       console.log(strArr)
//       strArr = strArr.join('');
//       if (!anagrams[strArr]) {
//         arr.push(strArr);
//         anagrams[strArr] = true;
//         console.log(anagrams)
//       }
//     } else
//     //else
//     {
//       for (i = 0; i <n; i++) {
//         //for the given length, recussively find the all of the variations 
//         //and check if its in the Anagrams collection
        
//         //recurse and move forward
//         generate(n -1);
//         //findinf the anagram
//          for(j=i+1; j<n; j++){
//           swap(i, j);
//         if (!anagrams[strArr]) {
//           arr.push(strArr);
//           anagrams[strArr] = true;
//           console.log(anagrams)
//       }

//          }

//         }

//       }

//     }



//     for(let i = 0; i<len+1; i++){
//       var count =0
//       generate(i)
//       count ++
//       if(count >=10000){
//         console.log(anagrams)
//       }
//     }

//   }

//   anagram('bastard')


//start


function swap(a, b, array) {
    newArray = array
    if(a !== b){
    temp = newArray[a];
    newArray[a] = newArray[b];
    newArray[b] = temp;
    console.log("swap "+ newArray)
    return newArray

  }
}

const mainFunction = function(string){

permutationArray = [];
var originalStep= 0;

var StringToArray = string.split('');

recursionFunction(originalStep, StringToArray, permutationArray);


}

const recursionFunction = function(step, array, permutationArray){
    if(permutationArray.indexOf(array.join(''))===-1){
         permutationArray.push(array.join(''));
    }
    
    for(var i = step; i<array.length; i++ ){
        console.log(permutationArray)
        console.log( step )
        for(j = 0; j<array.length; j++){
            console.log("array" + array)
            console.log("1 i " + array[i])
            console.log("2 j " + array[j])
            
            var newArray = swap(i, j, array);
            if(newArray == null){
                break;
            }
            else if(step<array.length){
                 step += 1;
                recursionFunction(step, newArray,permutationArray)
            }
            else if (step=array.length-1){
                console.log("permarray;")
                console.log(permutationArray)
            }
        }
    }
}


mainFunction("call");