function elementPeak(nums) {
    let result = [];
    if (nums[0] > nums[1]){
        result.push(0)
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]  ) {
            result.push(i);
        }
    }

    if (nums[nums.length -1] > nums[nums.length -2]){
        result.push(nums.length -1)
    }
    return console.log('Peak element index of :' ,nums.join(',') ,'->', result.join(','));
}

elementPeak([3, 2, 3, 1])
elementPeak([1, 2, 1, 3, 5, 6, 4])
elementPeak([1, 2, 1, 4, 5, 6, 4, 7])