let url = "https://api.genderize.io?name=";
let wrapper = document.getElementById("wrapper");
let predictGender = () => {

    let name = document.getElementById("name").value.trim() ;
    let error = document.getElementById("error");
    let finalURL = url + name;
    console.log(name);
    console.log(finalURL);

    wrapper.innerHTML = "";


    // check input

    if (name.length === 0 || !/^[A-Za-z]+$/.test(name)) {
        error.innerHTML = "Enter a valid name with no spaces";
        return;
    }
    error.innerHTML = "";
    fetch(finalURL).then((resp) => resp.json()).then((data) => {
            console.log(data);
            let div = document.createElement("div");
            div.setAttribute("id", "info");
            div.innerHTML = `<h2 id = "result-name">${data.name}</h2> <img src = "" id = "gender-icon"/> <h1 id = "gender">${data.gender} </h1> <h4 id = "prob"> Probability: ${data.probability} </h4> `;

                wrapper.append(div);
                if(data.gender == "female"){
                    div.classList.add("female");
                    document.getElementById("gender-icon").setAttribute("src", "female-symbol.png");
                }
                else{
                    div.classList.add("male");
                    document.getElementById("gender-icon").setAttribute("src", "male-symb.jpg");
                }
                
            });
            document.getElementById("name").value = ""; 
    } 
document.getElementById("submit").addEventListener("click", predictGender);
window.addEventListener("load", predictGender);