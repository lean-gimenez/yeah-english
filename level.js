function formSent(){
    
    //user name
    let name = document.getElementById("name");

    //user e-mail
    let email = document.getElementById("email");

    //total of questions
    let total = 5;

    //score
    let score = 0;

    //reference to form
    let form = document.forms["levelForm"];

    //array of answers
    let answers = ["c", "c", "a", "d", "b"];

    //for: var i se inicializa en 1;
    //debe ser menor que el total;
    //al terminar el loop, incrementa var
    for(let i = 1; i <= total; i++){

        if(form["q" + i].value === null || form["q" + i].value === ""){
            alert("Please, answer question " + i);
            return false;

        } else {

            if(form["q" + i].value === answers[i - 1]){
                score++;
            }
        }
    }

    
    let results = document.getElementById("results");
    results.innerHTML = '<div class="p-4"><h3><span>' + name.value + '</span>, your score is <span>' + score + '</span></h3> </div> <div class="p-2"> <h5>List of levels</h5> <ul><li>1 point = Elementary</li><li>2 points = Pre-Intermediate</li><li>3 points = Intermediate</li><li>4 points = Upper-Intermediate</li><li>5 points = Advanced</li></ul></div>';

    return false;
}