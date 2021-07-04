const insertionSortBtn = document.querySelector(".insertionSort");
insertionSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    enResetBtn();
    await insertion(); // wait until insertion sort is not completed
    // then enable the buttons
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
    disResetBtn();
  });

async function insertion(){
  //get the array
  const array = document.querySelectorAll(".bar");
  //first loop
  for(let i=1;i<array.length;i++){
    let j=i-1;
    //value which is to be compared with others
    let key=array[i].style.height;
    //second loop
    /* Move elements of arr[0..i-1], that are
    greater than key, to one position ahead
    of their current position */
    while(j>=0 && parseInt(array[j].style.height)>parseInt(key)){
      array[j+1].style.height=array[j].style.height;
      //change the color of those bars which are being compared
      array[j].style.background='rgb(9, 89, 194)';
      array[j+1].style.background='rgb(9, 89, 194)';
      //delay to change color while comparing
      await waitToComplete(delay);
      //decrease j
      j--;
      console.log("changing");
    }
    array[j+1].style.height=key;
    //change the color of all bars
    //that were compared 
    //to original color
    for(let k=0;k<=i;k++){
      if(array[k].style.background=='rgb(26, 191, 224)'){
        break;
      }
      array[k].style.background='rgb(26, 191, 224)';
    }
  }
  //after all are sorted
  //change all bar's color to sorted color
  for(let i=array.length-1;i>=0;i--){
    array[i].style.background='rgb(88, 88, 233)';
    await waitToComplete(delay);
  }
  console.log("done");
}
