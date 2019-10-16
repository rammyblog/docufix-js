
$('#compare').on('click', function (e) {


    e.preventDefault();
    console.log('Hello');
    let separators = [' ', '\\\+', '-', '\\\(', '\\\)','\\*', '/', '\\\.', '\\\?'];
    let firstString = $('#input1').val()
    let secondString = $('#input2').val()
    let firstStringSet = new Set(firstString.split(new RegExp(separators.join('|'), 'g')))
    let secondStringSet = new Set(secondString.split(new RegExp(separators.join('|'), 'g')))

    console.log(secondStringSet);
    

    let firstStringArray = firstString.split(new RegExp(separators.join('|'), 'g'))
    console.log(firstStringArray);
    
    let secondStringArray = secondString.split(new RegExp(separators.join('|'), 'g'))
    
    secondStringSet.forEach( word => {
        let resultA = firstStringArray.filter(newWord => newWord === word  );
        let resultB = secondStringArray.filter( newWord => newWord === word );
        if (resultB != 0 && resultA != 0 ){
        console.log( `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times`);
      
      
        $('#result').append(
            
            `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times <br>`)
    
    }
    })


    

})




// console.log(splitedFirstString);




