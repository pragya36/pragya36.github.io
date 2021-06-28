// jab bubble sort button ko press kiya to ye sb functions honge
const bubbleSortBtn = document.querySelector(".bubbleSort")
bubbleSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    enResetBtn();
    await bubble(); // wait until bubble sort is not completed
    // then enable the buttons
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
    disResetBtn();
  });

  async function bubble(){
  //get the array
  const array = document.querySelectorAll(".bar");

  for(let i=0;i<array.length-1;i++){

    for(let j=0;j<array.length-i-1;j++){
      //change the color of those bars which are being compared
      array[j].style.background='rgb(9, 89, 194)';
      array[j+1].style.background='rgb(9, 89, 194)';

      //check the height of the bars
      if(parseInt(array[j].style.height)>parseInt(array[j+1].style.height)){
        //delay to change color while comparing
        await waitToComplete(delay);
        //swap the bars
        swap(array[j],array[j+1]);
      }
      //change the bars which were compared to original color
      array[j].style.background='rgb(26, 191, 224)';
      array[j+1].style.background='rgb(26, 191, 224)';
      
    }
    //set the last sorted bar to the sorted color
    array[array.length-i-1].style.background='rgb(88, 88, 233)';
   
  }
  //after all are sorted
  //set the bar 0 color to sorted color
  array[0].style.background='rgb(88, 88, 233)'

}
