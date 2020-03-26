function modifyArray(nums) {

    let newArry = nums.map((number) => {

        if (number % 2 === 0) return number * 2

        else return number * 3

    })

    return newArry;
}