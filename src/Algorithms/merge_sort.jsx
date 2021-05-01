const mergeSortAlgorithm = (array) => {
    const animationArray = [];
    const helperArray = array.slice();   // CREATE A NEW ARRAY, WE WILL DO MERGE SORT ON ONE AND KEEP TRACK OF ANIMATIONS ON THE OTHER      
    mergeSortHelper(array, 0, array.length - 1, helperArray, animationArray);
    doAnimation(animationArray);
    return array;
}
const mergeSortHelper = (originalArray, low, high, helperArray, animationArray) => {
    if(low === high) return;
    const mid = Math.floor((high + low) / 2);
    mergeSortHelper(helperArray, low, mid, originalArray, animationArray); //  SIMPLE MERGE SORT 
    mergeSortHelper(helperArray, mid + 1, high, originalArray, animationArray);
    merge(originalArray, low, mid, high, helperArray, animationArray); // CALLING MERGE FUNCTION
}
const merge = (originalArray, low, mid, high, helperArray, animationArray) => {
    let k = low;
    let i = low;                      // ITERATOR FOR THE FIRST RANGE
    let j = mid + 1;                  // ITERATOR FOR THE SECOND RANGE
    while(i <= mid && j <= high) {
        animationArray.push([i, j]);   // WE ARE PUSHING SAME VALUE TWICE IN THE ANIMATIONS ARRAY (FOR COLOR CHANGE)
        animationArray.push([i, j]);   // SEE THE MERGE SORT FUNCTION IN THE PARENT FILE FOR MORE EXPLAINATION 
        if(helperArray[i] <= helperArray[j]) {
            animationArray.push([k, helperArray[i]]);  // WE ARE PUSHING THE INDEX AND THE HEIGHT THAT SHOULD BE THERE IN THE ANIMATIONS ARRAY
            originalArray[k++] = helperArray[i++];   // AND OBVIOUSLY DOING MERGE SORT 
        }
        else {
            animationArray.push([k, helperArray[j]]);
            originalArray[k++] = helperArray[j++];
        }
    }
    while(i <= mid) {   // JUST FINISHING OFF REMAINING LAST ELEMENTS OF THE RANGE
        animationArray.push([i, i]); 
        animationArray.push([i, i]);
        animationArray.push([k, helperArray[i]]);  // HERE THE ELEMENTS ARE COMPARATIVELY LARGE IF THE RANGE HAS NOT ENDED THATS
        originalArray[k++] = helperArray[i++];    // WHY WE ARE INSERTING THEM AT THIER RIGHT PLACE 
    }
    while(j <= high) {
        animationArray.push([j, j]);
        animationArray.push([j, j]);
        animationArray.push([k, helperArray[j]]);
        originalArray[k++] = helperArray[j++];
    }
  }
    // HERE WE WILL GET OUR ANIMATIONS ARRAY FILLED WITH TOW VALUES
const doAnimation = (animationsArray) => {
    for(let i = 0; i < animationsArray.length; i++) {
        const barClassSelector = document.getElementsByClassName('array-bar-div');  // OUR BAR CLASS GETTING SELECTED
        const shouldColorChange = i % 3 !== 2;  // THATSWHY WE INSERTED THE SAME VALUE TWICE SO THAT FOR ONE WE CAN CHANGE COLOR TO RED AND THE OTHER TO CHANGE COLOR BACK TO TURQUOISE  
        if(shouldColorChange) { // IT WAS THE EASIEST WAY TO COPE UP WITH FOR LOOP WITHOUT LOOSING THIER INDEX AND NOT BEING CLUMSY
            const [first, second] = animationsArray[i];
            const color = i % 3 === 0 ? 'red' : 'turquoise';  // I CAN GIVE THREE REMAINDERS 0 1 2 AND 
            setTimeout(() => {  // FOR 0 WE WILL CHANGE THE COLOR OF BAR TO RED MEANING THE BAR IS BEING CHECKED IN THE ORIGINAL ARRAY
                barClassSelector[first].style.backgroundColor = color;
                barClassSelector[second].style.backgroundColor = color;
            }, i * 20); // FOR 1 WE WILL CHANGE THE COLOR BACK TO TURQUOISE SIGNIFYING THAT IT HAS BEEN EXAMINED FOR MERGE SORT
        }
        else {
            setTimeout(() => { // FOR 2 WE PROVIDE THE DIV WITH ITS CURRENT BEST PLACE  OBVIOUSLY IN THE LAST ITERATION THEY WILL REACH TO THIER DESTINATION  
                const [bar, height] = animationsArray[i];  // IT IS THE WAY HOW MERGE SORTY WORKS(DIVIDE AND CONQUER)
                barClassSelector[bar].style.height = `${height}px`;
            }, i * 20);  // AND I AM DELAYING THE TIME BASED ON THE ITERATION BECAUSE AS WE PROGRESS THE SIZE OF OUR CONQUERNESS INCREASES AND WE HAVE TO INCREASE IT AS WELL FOR THE BEST VISUAL
        }
    }
}
export default mergeSortAlgorithm;