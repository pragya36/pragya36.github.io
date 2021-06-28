
const selectionSortBtn = document.querySelector(".selectionSort");
selectionSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    enResetBtn();
    await selection(); // wait until selection sort is not completed
    // then enable the buttons
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
    disResetBtn();

  });
async function selection() {
  //get the array
  const array = document.querySelectorAll(".bar");
  //loop from 0 to n-2
  for(let i=0;i<array.length-1;i++){
    //assume min number is at ith index
    let min_idx=i;
    //change its color
    array[i].style.background='crimson';
    //loop from i+1 to n-1
    for(let j=i+1;j<array.length;j++){
      //change to visited color
      array[j].style.background='rgb(9, 89, 194)';
      //delay for colors for visualization
      await waitToComplete(delay-10);
      //compare
      if(parseInt(array[j].style.height)<parseInt(array[min_idx].style.height)){
        
        if(j!=min_idx && min_idx!=i){
          //change to comparing color
          array[min_idx].style.background='rgb(9, 89, 194)';
          //min index color
          array[j].style.background='crimson';
          await waitToComplete(delay-10);
        }
        else if(j!=min_idx && min_idx==i){
          //min index color
          array[j].style.background='crimson';
          await waitToComplete(delay-10);
        }
        min_idx=j;

      }
    }
    //swap the min from i+1 to n-1 with i
    swap(array[min_idx],array[i]);
    //change to sorted color
    array[i].style.background='rgb(88, 88, 233)';

    //change all visited colors to non visited
    for(let k=i+1;k<array.length;k++){
      array[k].style.background='rgb(26, 191, 224)';
    }

  }
  //change color of last bar
  array[array.length-1].style.background='rgb(88, 88, 233)';
}
