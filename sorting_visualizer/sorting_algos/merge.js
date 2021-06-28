
const mergeSortBtn = document.querySelector(".mergeSort");
mergeSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    let array = document.querySelectorAll('.bar');
    let start = 0;
    let end = parseInt(array.length) - 1;
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    enResetBtn();
    await mergeSort(array, start, end); // wait until merge sort is not completed
    // then enable the buttons
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
    disResetBtn();
  });

//Recursive merge sort function
async function mergeSort(array,start,end){
  console.log("Mergesort");
  //only one element left
  if(start>=end)
    return;
  //calculate mid
  const mid= start + Math.floor((end-start)/2);
  /*await can be put in front of any async promise-based function to 
  pause your code on that line until the promise fulfills, then return 
  the resulting value. */
  //call merge sort for left part
  await mergeSort(array,start,mid);
  //call merge sort for right part
  await mergeSort(array,mid+1,end);
  //merge left and right part
  await merge(array,start,mid,end);

}


//Merge function
async function merge(array,left,mid,right){
  //size of leftpart
  const m=mid-left+1;
  //size of right part
  const n=right-mid;

  let left_array=new Array(m);
  let right_array=new Array(n);

  //form the left_array
  for(let i=0;i<m;i++){
    await waitToComplete(delay);
    //change color
    array[i+left].style.background='crimson';
    left_array[i]=array[i+left].style.height;
  }

  //form the right array
  for(let j=0;j<n;j++){
    await waitToComplete(delay);
    //change color
    array[mid+j+1].style.background='limegreen';
    right_array[j]=array[mid+j+1].style.height;
   
  }

  await waitToComplete(delay);

  let i=0,j=0;
  let k=left;
  //merge
  while(i<m && j<n){
    await waitToComplete(delay);

    if(parseInt(left_array[i])<=parseInt(right_array[j])){
      await waitToComplete(delay);
      //if it is the last merge call
      //then change to final sorted color
      if((n+m)==array.length){
        array[k].style.background='rgb(88, 88, 233)';
      }
      //change to sorted color
      else{
        array[k].style.background='darkorchid';
      }
      array[k].style.height=left_array[i];
      i++;
      k++;
    }
    else{
      await waitToComplete(delay);
      //if it is the last merge call
      //then change to final sorted color
      if((n+m)==array.length){
        array[k].style.background='rgb(88, 88, 233)';
      }
       //change to sorted color
      else{
        array[k].style.background='darkorchid';
      }
      array[k].style.height=right_array[j];
      j++;
      k++;
    }
  }
  while(i<m){
    await waitToComplete(delay);
    //if it is the last merge call
    //then change to final sorted color
    if((n+m)==array.length){
      array[k].style.background='rgb(88, 88, 233)';
    }
     //change to sorted color
    else{
      array[k].style.background='darkorchid';
    }
    array[k].style.height=left_array[i];
    i++;
    k++;
  }
  while(j<n){
    await waitToComplete(delay);
    //if it is the last merge call
    //then change to final sorted color
    if((n+m)==array.length){
      array[k].style.background='rgb(88, 88, 233)';
    }
     //change to sorted color
    else{
      array[k].style.background='darkorchid';
    }
    
    array[k].style.height=right_array[j];
    j++;
    k++;
  }


}
