
import style from './main.css'
import axios from "axios";
import $ from "jquery";
var spokeInterval;

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
console.log(string)
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

var mockResponse = ['cat', 'cst', 'abc', 'caty', 'act', 'tba', 'bat', 'tab', 'ats', 'bats', 'sta', 'bas', 'sba', 'abs', 'cyst', 'bay', 'say', 'acts', 'sty', 'cyb', 'cbs', 'stacy', 'stab', 'tabs', 'cay', 'tbs', 'cab', 'scat', 'sac', 'bsa', 'cabs', 'bays', 'sat', 'cats', 'cast', 'stay', 'bast', 'cays', 'scab'];


  // Using util.promisify would look nicer, but there is a lolex issue
  // blocking this at the moment: https://github.com/sinonjs/lolex/pull/227


const getWords = async function(input){
console.log("getting words");
console.log(input);
  const setTimeoutPromise = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  await setTimeoutPromise(5000);
  return mockResponse;



mainFunction2(input).then((resultArray)=>{
    resultArray.forEach(result=>{
        var variant = $("<div>")
        $(variant).html(result)
        $("body").push(variant);
    })
// console.log(resultArray)
//temporarily disabled to test the front end
// axios.post("/api/getSpellCheck",resultArray).then(res=>{
//     if(res.data!==null){
//         console.log(res.data);
//     }
// }) .catch((err) => {
// console.log(err);
// })
})
  
};
var gunThrottle = "off";

const constructButton = ()=>{
var fireButton = $(".fireButton");
$(fireButton).addClass("fireButtonStart");
}

$(".fireButton").on("click",(e)=>{
    console.log("shoot gun")
    e.stopPropagation();
    e.preventDefault();
    shootGun($(".bullet"))
})

const shootGun = function(array){
    console.log(array)
    
gunThrottle = "on";
var bulletItem = array[0]
console.log($(bulletItem).attr("letter"));
console.log($(bulletItem).css("background-color"))
 var bulletReady = $("<div>");
 $(bulletReady).addClass("bulletReady");
 $(bulletReady).html($(bulletItem).attr("letter"))
 $(bulletReady).css("color", $(bulletItem).css("background-color"))
 $(".barrel").append(bulletReady);
 //finally add the animation that shoots the bullet out of the barrel
 $(".bulletReady").addClass("bulletShot");
 $(array[0]).remove();
 setTimeout(() => {
    gunThrottle="off"
 }, 2000);
}

const constructGun= ()=>{
console.log("constructing gun")
setTimeout(() => {
    $(".barrel").addClass("moveBarrel")
    constructButton()
    
}, 5000);
$(".gunContainer").addClass("moveGun")
var wheel = $("<div>")
$(wheel).addClass("wheel");
for(let i=0; i<20; i++){
    let spoke = $("<div>")
    $(spoke).addClass("spoke")
    $(spoke).css("transform","rotate("+ 13*i+"deg)")
    wheel.append(spoke);
    if(i==19){
        $('body').append(wheel);
    spokeSetColors() 
     spokeInterval = setInterval(() => {
     spokeSetColors() 
     },400);


    }
  }
}

 var newTitleColors = [
    'blue','rgb(244, 170, 42)',
    'rgb(255, 10, 247)','rgb(204, 255, 51)','rgb(242, 115, 208)',
    'rgb(255, 51, 0)',"green"
  ]

//use the async gotten words from the array to use as an array to create
//bullets for the gun 


function spokeSetColors(){
var spokes = $(".wheel .spoke");
console.log(spokes)
for(let i = 0; i<spokes.length; i++){
    setTimeout(() => {
    var randNumber = Math.floor(Math.random()*newTitleColors.length)
    var randColor = newTitleColors[randNumber];
    $(spokes[i]).css("background-color",randColor);
        
    }, 100*i);
}
}








//jquer input start
var inputForm = $(".inputForm");
$(inputForm).on("submit",(e)=>{
    e.stopPropagation();
    e.preventDefault();
    $(".warnMessage").html("")

    //use the letter to call the API to get the list of words back
    submitNewLetter();

    

}
)
function createBullets(response){
    console.log("createBullets")
    // make the wheel dissapear
    $(".wheel").remove()
    clearInterval(spokeInterval)
    for(let i=0; i<response.length; i++){
    setTimeout(() => {
     var bullet = $("<div>")
    var randNumber = Math.floor(Math.random()*newTitleColors.length)
    var randColor = newTitleColors[randNumber];
    $(bullet).addClass("bullet");
    $(bullet).css("background-color",randColor);
    $(bullet).css("height",Math.floor(300/response.length)+"px")
    $(bullet).attr("letter",response[i])
    $(".magazine").append(bullet);

     }, i*100);

    }

}

function submitNewLetter(){
var input = $(".typeInput")

var value= $(input).val();
console.log(value);
if(value.length<=5){
$('input').css("display","none");
constructGun();
getWords(value).then(response=>{
    console.log("got response");
    console.log(response);
createBullets(response)

});

mainFunction2(value).then((resultArray)=>{
    console.log(resultArray)
    resultArray.forEach(result=>{
        var variant = $("<div>")
        $(variant).html(result)
        $(variant).addClass("variant")
        $("body").append(variant);
    })
// console.log(resultArray)
//temporarily disabled to test the front end
// axios.post("/api/getSpellCheck",resultArray).then(res=>{
//     if(res.data!==null){
//         console.log(res.data);
//     }
// }) .catch((err) => {
// console.log(err);
// })
})
}
else{
    $(".warnMessage").html("Please use less than 5 letters, else the browser can't handel it")
}
}
