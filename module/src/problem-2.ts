{


    const removeDuplicates = (numbers:number[]):number[] => {
        return numbers.filter((number, index)=> index === numbers.indexOf(number))

    }
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5,99, 23, 99])
//    console.log(result)



}