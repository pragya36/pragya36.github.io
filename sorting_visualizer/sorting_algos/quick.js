const quickSortBtn = document.querySelector(".quickSort");
quickSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    let array = document.querySelectorAll('.bar');
    let start = 0;
    let end = parseInt(array.length) - 1;
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    enResetBtn();
    await quickSort(array, start, end); // wait until quick sort is not completed
    // then enable the buttons
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
    disResetBtn();
  });

//Recursive merge sort function
async function quickSort(array,start,end){
  console.log("Quicksort");
  if(start<end){
      let pivot=await partition(array,start,end);
      //Separately sort elements
      await quickSort(array,start,pivot-1);
      await quickSort(array,pivot+1,end);
  }
  else if(start==end){
    array[start].style.background='rgb(88, 88, 233)';
    await waitToComplete(delay);
  }
}

//Partition function
async function partition(array,low,high){
    let pivot = parseInt(array[high].style.height); // pivot
    await waitToComplete(delay);
    //change color
    array[high].style.background='crimson';
    let i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
   
    for (let j = low; j <= high - 1; j++)
    {
        await waitToComplete(delay);
        //change color
        array[j].style.background='darkorchid';
        // If current element is smaller than the pivot
        if (parseInt(array[j].style.height) < pivot)
        {
            i++; // increment index of smaller element
            swap(array[i],array[j]);
            await waitToComplete(delay);
            //change color
            array[i].style.background='rgb(9, 89, 194)';
        }
        if(i!=j){
            await waitToComplete(delay);
            //change color
            array[j].style.background='rgb(26, 191, 224)';
        }
    }
    //change color
    swap(array[i + 1],array[high]);
    array[i+1].style.background='rgb(88, 88, 233)';
    if(high!=(i+1)){
        array[high].style.background='rgb(26, 191, 224)';
    }
    await waitToComplete(delay);
    for(let j=low;j<=i;j++){
          //change color
        array[j].style.background='rgb(26, 191, 224)';
        await waitToComplete(delay-20); 
    }
    return (i + 1);
}
