var dominantIndex = function(nums) {
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] > nums[maxIndex]) {
     maxIndex = i;
    }
  }
  for(let i = 0; i < nums.length; i++) {
    if (maxIndex !== i && nums[maxIndex] < 2 * nums[i]) {
      return -1
    } 
  }
  return maxIndex;
}
