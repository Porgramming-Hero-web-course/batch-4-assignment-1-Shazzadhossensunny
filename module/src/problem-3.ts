{


    const countWordOccurrences = (sentence:string, word:string):number =>{
        const punctuation = /[\.,?!]/g;
        const newSentence = sentence.replace(punctuation, '').split(" ");
        let count = 0;
        for (let i = 0; i < newSentence.length; i++) {
           if(newSentence[i].toLowerCase() === word.toLowerCase()){
             count = count + 1;
           }
        }

      return count;


    }

    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "Great")
    // console.log(result)

}