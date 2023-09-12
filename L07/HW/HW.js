// Test the function
const nums1 = [3, 2, 3, 1];
const nums2 = [1, 2, 1, 3, 5, 6, 4];
const nums3 = [1, 2, 1, 4, 5, 6, 4, 7];

function findPeaksIndices(nums) {
    const peakIndices = [];

    if (nums[0] > nums[1]){
        peakIndices.push(0)
    }

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            peakIndices.push(i);
        }
    }

    if (nums[nums.length -1] > nums[nums.length -2]){
        peakIndices.push(nums.length -1)
    }
    return peakIndices;
}

console.log(`Peak element index of : ${nums1.join(',')} -> ${findPeaksIndices(nums1).join(',')}`);
console.log(`Peak element index of : ${nums2.join(',')} -> ${findPeaksIndices(nums2).join(',')}`);
console.log(`Peak element index of : ${nums3.join(',')} -> ${findPeaksIndices(nums3).join(',')}`);