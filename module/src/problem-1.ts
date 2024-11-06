{

    const sumArray = (numbers:number[]):number =>{
        let sum = 0;
        for (const number of numbers) {
         sum = sum + number;
        }
        return sum;
    }

    const result = sumArray([1, 2, 3, 4, 5])
    // console.log(result)


}