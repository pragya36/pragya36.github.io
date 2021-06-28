
const heapSortBtn = document.querySelector(".heapSort");
heapSortBtn.addEventListener('click',
  async () => { // async function to enable wait for heap sort to complete
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    enResetBtn();
    await heap(); // wait until selection sort is not completed
    // then enable the buttons
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
    disResetBtn();

  });
async function heap(){
  console.log("Heap");
  //get the array
  const array = document.querySelectorAll(".bar");
  //get the size of array
  const n=array.length;

  //find the mid
  const mid=Math.floor(n/2)-1;

  //apply heapify from mid to 0
  for(let i=mid;i>=0;i--){
      await heapify(array,n,i);
  }

  //swap largest element with index 0 element
  for(let i=n-1;i>0;i--){
      array[0].style.background='crimson';
      array[i].style.background='crimson';
      await waitToComplete(delay);
      swap(array[0],array[i]);
      array[i].style.background='rgb(88, 88, 233)';
      array[0].style.background='rgb(26, 191, 224)';
      await waitToComplete(delay);
      await heapify(array,i,0);
  }
  array[0].style.background='rgb(88, 88, 233)';
}
async function heapify(array,n,i){
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2
    array[i].style.background='crimson';
    array[largest].style.background='crimson';
    await waitToComplete(delay);
    // If left child is larger than root
    if (l < n && parseInt(array[l].style.height) > parseInt(array[largest].style.height)){
        array[largest].style.background='rgb(26, 191, 224)';
        array[l].style.background='crimson';
        await waitToComplete(delay);
        largest = l;
        
    }
 
    // If right child is larger than largest so far
    if (r < n && parseInt(array[r].style.height) > parseInt(array[largest].style.height)){
        array[largest].style.background='rgb(26, 191, 224)';
        array[r].style.background='crimson';
        await waitToComplete(delay);
        largest = r;
    }
 
    // If largest is not root
    if (largest != i) {
        swap(array[i], array[largest]);
        array[i].style.background='rgb(26, 191, 224)';
        array[largest].style.background='rgb(26, 191, 224)';
        await waitToComplete(delay);
        // Recursively heapify the affected sub-tree
        await heapify(array, n, largest);
    }
    else{
        array[i].style.background='rgb(26, 191, 224)';
        await waitToComplete(delay);
    }
}