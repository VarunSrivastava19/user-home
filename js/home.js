$("document").ready(()=>{
    // $('.card-deck').html(
    //     '<div class="card" style="width: 18rem;"><img class="card-img-top quiz-img" src="https://syntaxxx.com/wp-content/uploads/2014/08/html5-logo-600-580x580.jpg" alt="Card"><div class="card-body"><h5 class="card-title">HTML Quiz</h5><p class="card-text">HTML Quiz to test ability.</p><a href="#" class="btn btn-success">Load Quiz</a></div></div></div><div class="card" style="width: 18rem;"><img class="card-img-top quiz-img" src="https://syntaxxx.com/wp-content/uploads/2014/08/html5-logo-600-580x580.jpg" alt="Card"><div class="card-body"><h5 class="card-title">HTML Quiz</h5><p class="card-text">HTML Quiz to test ability.</p><a href="#" class="btn btn-success">Load Quiz</a></div></div></div><div class="card" style="width: 18rem;"><img class="card-img-top quiz-img" src="https://syntaxxx.com/wp-content/uploads/2014/08/html5-logo-600-580x580.jpg" alt="Card"><div class="card-body"><h5 class="card-title">HTML Quiz</h5><p class="card-text">HTML Quiz to test ability.</p><a href="#" class="btn btn-success">Load Quiz</a></div></div></div><div class="card" style="width: 18rem;"><img class="card-img-top quiz-img" src="https://syntaxxx.com/wp-content/uploads/2014/08/html5-logo-600-580x580.jpg" alt="Card"><div class="card-body"><h5 class="card-title">HTML Quiz</h5><p class="card-text">HTML Quiz to test ability.</p><a href="#" class="btn btn-success">Load Quiz</a></div></div></div>'
    // );
    let i = 0;    
    let imgUrl = "https://syntaxxx.com/wp-content/uploads/2014/08/html5-logo-600-580x580.jpg";
    //let quizDom = '<div class="card col" style="width: 18rem;"><img class="card-img-top" src='+'${imgUrl}'+'alt="Card image cap"><div class="card-body"><h5 class="card-title">HTML Quiz</h5><p class="card-text">HTML Quiz to test ability.</p><a href="#" class="btn btn-success">Load Quiz</a></div></div>';
    // 
    let quizDom = '<div class="col-xs col-sm-6 col-lg-4"><div class="card-columns"><div class="card text-white bg-primary mb-3" style="width: 18rem;"><img class="card-img-top" src='+imgUrl+' alt="Card image cap"><div class="card-body"><h5 class="card-title">HTML Quiz</h5><p class="card-text">HTML Quiz to test ability.</p><a href="#" class="btn btn-warning">Load Quiz</a></div></div></div></div>';
    $('#test').html();
    /* Fetch from JSON File:-
    1. Total no. of questions
    2. The imgURLs
    */
    /* Loop will run till total number of questions,
    drawing cards for each question and placing imgURLs for them.  */
    var loops = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //Total number of questions
    $.each(loops, function(index, val) {
        $('.row').append(quizDom);
        console.log('Content loaded ' + i++);
    });
});
