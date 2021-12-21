function difficultyStart(){
    let bombs = [];
    let score = 0;
    let difficulty = document.getElementById("difficulty").value;
    document.querySelector(".maingrid").innerHTML = "";
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
            listItem[i].addEventListener("click", checkBombs(listItem[i]));
        }

        function checkBombs(test){
            console.log(test)
            let numtest= parseInt(test.innerHTML);
            if (bombs.includes(numtest)==true) {
                test.style.backgroundColor = "#DC143C";
                // gameLost();
            }else{
                test.style.backgroundColor = "#6495ED";
                score += 100;
            }
        }

        // function gameLost(){
        //     for(let i = 0; i < listItem.length; i++) {
        //         listItem[i].removeEventListener("click", checkBombs());
        //             let numtest= parseInt(this.innerHTML);
        //             if (bombs.includes(numtest)==true) {
        //                 this.style.backgroundColor = "#DC143C";
        //             }
                
        //     }
        // }

        
}



// for( let t = 0; t < 10; t++ )
//             {
//                 setTimeout( function(){
//                     console.log("wait");
//                 }, 1000 * a )
//             }