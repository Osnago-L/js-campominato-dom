function difficultyStart(){
    let bombs = [];
    let difficulty = document.getElementById("difficulty").value;
    document.querySelector(".maingrid").innerHTML = "";
    if(difficulty == "easy"){
        for (let i = 1; i <= 100; i++) {
            let square = `<div id="item-${i}" class="grid10 item"><h1 id="numitem-${i}" class="numbox">${i}</h1></div>`;
            document.querySelector(".maingrid").innerHTML += square;
        }
    }else if(difficulty == "medium"){
        for (let i = 1; i <= 81; i++) {
            let square = `<div id="item-${i+1}" class="grid9 item"><h1 id="numitem-${i+1}" class="numbox">${i}</h1></div>`;
            document.querySelector(".maingrid").innerHTML += square;
        }
    }else{
        for (let i = 1; i <= 49; i++) {
            let square = `<div id="item-${i+1}" class="grid7 item"><h1 id="numitem-${i+1}" class="numbox">${i}</h1></div>`;
            document.querySelector(".maingrid").innerHTML += square;
        }
    }
        const listItem = document.querySelectorAll(".item");
        
        functionBombs();
        
        function functionBombs() {  
            for (let i = 0; i < 16; i++) {
                let randomBombs = Math.floor(Math.random()*listItem.length +1);
                let truetest = bombs.includes(randomBombs);
                    if(truetest==false){
                        bombs.push(randomBombs);
                    }else{
                        i--;
                    }
            }
        }     
        for(let i = 0; i < listItem.length; i++) {
            listItem[i].addEventListener("click", function() {
                let numtest= parseInt(document.getElementById('numitem-'+(i+1)).textContent);
                if (bombs.includes(numtest)==true) {
                    this.style.backgroundColor = "#DC143C";
                }else{
                    this.style.backgroundColor = "#6495ED";
                }
            });
        }
}

