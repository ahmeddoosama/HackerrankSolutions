function getSecondLargest(nums) {
    let firstNum = 0,
        secondNum = 0;

    for(let i=0; i < nums.length ;i++) {
        if(nums[i] > firstNum){
            secondNum = firstNum;
            firstNum = nums[i];
        }
        else if(nums[i] > secondNum && nums[i] < firstNum) secondNum = nums[i];
    }
    return secondNum;
}