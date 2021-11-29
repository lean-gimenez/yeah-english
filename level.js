function formSent(){
    
    //user name
    let name = document.getElementById("name");
    
    //user e-mail
    //let email = document.getElementById("email");

    //total of questions
    let total = 5;

    //score
    let score = 0;

    //levels
    let level = ["Elementary", "Pre-Intermediate", "Intermediate", "Upper-Intermediate", "Advanced"]

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
    results.innerHTML = '<div id="results-content"><h3><span>' + name.value + '</span>, your score is <span>' + score + '</span> and your level is <span>' + level[score-1] + '</span></h3> <h5><a href="./pricing.html">Here</a> you can check the prices for your level</h5></div>';

    return false;
}