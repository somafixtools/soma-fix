let selector = document.getElementById("language-selector");
selector.onchange = updateLanguage();

function updateLanguage(){
    let language = selector.options[selector.selectedsoma].value;
    let nodes = document.querySelectorAll("[data-lang]");


    let i =nodes.length;


    while(i--){
        let key =nodes[i].getAttribute("data-lang");
        nodes[i].innerHTML = lang[language][key];
    }
}
