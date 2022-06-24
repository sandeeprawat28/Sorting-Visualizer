// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
var inputArray = [];
var elements;

async function InputArray() {
  console.log("InputArray()");
  elements = prompt("Enter number of elements:");
  for (var i = 0; i < elements; i++) {
    inputArray[i] = prompt(`Enter value ${i + 1}:`);
  }
  for (var i = 0; i < elements; i++) {
    console.log(inputArray[i]);
  }
  console.log(inputArray);
}

const InpArrbtn = document.querySelector(".InputArray");
InpArrbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await InputArray();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});




// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

//Disable InputArray button 
function disableInputArrayBtn(){
    document.querySelector(".InputArray").disabled = true;
}

//Enable InputArray buttons used in conjucion with disable
function enableInputArrayBtn(){
    document.querySelector(".InputArray").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#arr_sz');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// //Event listener to update the bars by user input
// arraySize.addEventListener('userInput', function(){
//     console.log(arraySize.value, typeof(arraySize.value));
//     createNewArray(parseInt(arraySize.value));
// });


// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

// Creating array to store randomly generated numbers

let array = [];



const userarr = [20, 15, 24,60,60, 200, 150, 100, 50, 90, 180, 160, 120, 140,88,56,23,10,46,90];


createInputArray();

function createInputArray(noOfBars = elements){

    deleteChild();

    array=[];
    for (var i = 0; i < noOfBars; i++) {
        userarr[i] = inputArray[i];
        console.log(userarr);
    }

    console.log(userarr);

    for (let i = 0; i < noOfBars; i++) {
    //   array.push(Math.floor(Math.random() * 200) + 1);
        array.push(userarr[i]);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.style.width = `30px`;
        bar.classList.add("bar");
        bar.classList.add("flex-item");
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }


}



// if( arraySize < 20){
//     enableInputArrayBtn();
// }else{
//     disableInputArrayBtn();
// }





// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 60) {
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 200) + 1);
        // array.push(userarr[i]);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray with speed" + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

const userArray = document.querySelector(".InputArray");
userArray.addEventListener("click", function () {
    console.log("From newArray " + userarr.length);
    console.log("From newArray with speed" + delay);
    enableSortingBtn();
    enableSizeSlider();
    createInputArray(arraySize.value);
});



