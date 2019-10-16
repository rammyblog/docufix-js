$('#compare').on('click', function (e) {


    e.preventDefault();
    console.log('Hello');
    
    let firstString = $('#input1').val()
    let secondString = $('#input2').val()

let firstStringSet = new Set(firstString.split(' '))
let secondStringSet = new Set(secondString.split(' '))


    let firstStringArray = firstString.split(' ')
    let secondStringArray = secondString.split(' ')
    
    secondStringSet.forEach( word => {
        let resultA = firstStringArray.filter(newWord => newWord === word  );
        let resultB = secondStringArray.filter( newWord => newWord === word );
        if (resultB == 0 || resultA == 0 ){
        console.log( `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times`);
        }
    })


    

})




// console.log(splitedFirstString);




