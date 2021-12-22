
function difficultyStart(){
    let bombs = [];
    let score = 0;
    let contwin = 0;
    let difficulty = document.getElementById("difficulty").value;
    document.getElementById("removeclick").className = "";
    document.querySelector(".maingrid").innerHTML = ``;
    document.getElementById("result").innerHTML = `` ;
    if(difficulty == "easy"){
        for (let i = 1; i <= 100; i++) {
            let square = `<div id="item-${i}" class="grid10 item">${i}</div>`;
            document.querySelector(".maingrid").innerHTML += square;
        }
    }else if(difficulty == "medium"){
        for (let i = 1; i <= 81; i++) {
            let square = `<div id="item-${i}" class="grid9 item">${i}</div>`;
            document.querySelector(".maingrid").innerHTML += square;
        }
    }else{
        for (let i = 1; i <= 49; i++) {
            let square = `<div id="item-${i}" class="grid7 item">${i}</div>`;
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
            console.log(bombs)
        }   
        
        for(let i = 0; i < listItem.length; i++) {
            listItem[i].addEventListener("click", function() {
                let numtest= parseInt(this.innerHTML);
                if (bombs.includes(numtest)==true) {
                    this.style.backgroundColor = "#DC143C";
                    document.getElementById("removeclick").classList.add("removeclick");
                    document.getElementById("result").innerHTML = `YOU LOSE! SCORE:${contwin*100}` ;
                    cellView();
                }else{
                    this.style.backgroundColor = "#6495ED";
                    if(contwin<=(listItem.length -16)){
                    contwin = contwin + 1;
                    }else{
                    document.getElementById("result").innerHTML = `YOU WIN! SCORE:${contwin*100}` ;
                    gameWin()
                    }
                    
                }
            });
        }
        function cellView(){
            for(let i = 0; i < listItem.length; i++) {
                
                if (bombs.includes(parseInt(listItem[i].innerHTML))==true) {
                    listItem[i].style.backgroundColor = "#DC143C";
                }else{
                    listItem[i].style.backgroundColor = "#6495ED";
                }
                
            }
            animationRemove()
        }

        function animationRemove(){
            for (let t = 0; t < listItem.length; t++) {
                setTimeout( function(){
                    
                    listItem[t].classList.add("opa-off") 
                    
                }, 30 * t );
            }
            
        }

        
}
