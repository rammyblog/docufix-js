function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}



     // let separators = [' ', '\\\+', '-', '\\\(', '\\\)','\\*', '/', '\\\.', '\\\?'];
    // let firstString = $('#input1').val()
    // let secondString = $('#input2').val()
    // let firstStringSet = new Set(firstString.split(new RegExp(separators.join('|'), 'g')))
    // let secondStringSet = new Set(secondString.split(new RegExp(separators.join('|'), 'g')))

    // console.log(secondStringSet);
    

    // let firstStringArray = firstString.split(new RegExp(separators.join('|'), 'g'))
    // console.log(firstStringArray);
    
    // let secondStringArray = secondString.split(new RegExp(separators.join('|'), 'g'))
    
    // secondStringSet.forEach( word => {
    //     let resultA = firstStringArray.filter(newWord => newWord === word  );
    //     let resultB = secondStringArray.filter( newWord => newWord === word );
    //     if (resultB != 0 && resultA != 0 ){
    //     console.log( `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times`);
      
      
    //     $('#result').append(
            
    //         `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times <br>`)
    
    // }

    $('#uploadForm').submit(function(e) {
        var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
    
          e.preventDefault();
    
          $form = $(this)
          var formData = new FormData(this);
          console.log(formData);
          formData.append('file', $('#upload1')[0].files[0]);
          formData.append('file', $('#upload2')[0].files[0]);
    
    
    
          $.ajax({
            url: "http://docufix.pythonanywhere.com/upload/",
            type: "POST",
            data: formData,
            beforeSend: function(xhr, settings) {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", csrftoken);
                }
            },
            success: function(response){
                console.log('success');
                console.log(response);
                $('#input1').val(response.file1)
                $('#input2').val(response.file2)
                toastr.success("Content Loaded Successfully");
                
            },
            error: function(){
                toastr.error("An Error Occured");
                console.log("Error Occured");
                
            },
            cache: false,
            contentType: false,
            processData: false
            
        })
    })
        
       
    
    $('#compare').on('click', function (e) {
    e.preventDefault()
     let separators = [' ', '\\\+', '-', '\\\(', '\\\)','\\*', '/', '\\\.', '\\\?'];
    let firstString = $('#input1').val()
    let secondString = $('#input2').val()
    let firstStringSet = new Set(firstString.split(new RegExp(separators.join('|'), 'g')))
    let secondStringSet = new Set(secondString.split(new RegExp(separators.join('|'), 'g')))

    console.log(secondStringSet);
    

    let firstStringArray = firstString.split(new RegExp(separators.join('|'), 'g'))
    console.log(firstStringArray);
    
    let secondStringArray = secondString.split(new RegExp(separators.join('|'), 'g'))
    $('#result').html(' ')
        
    secondStringSet.forEach( word => {

        let resultA = firstStringArray.filter(newWord => newWord === word  );
        let resultB = secondStringArray.filter( newWord => newWord === word );
        if (resultB != 0 && resultA != 0 ){
        console.log( `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times`);
      
      
        $('#result').append(
            
            `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times <br>`)
    
    }
    

  
    });
  

    

})







