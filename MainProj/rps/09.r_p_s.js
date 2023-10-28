    //object creation and storing it in local storage
        let score = JSON.parse(localStorage.getItem('score')) || {
            Win : 0,
            Lose: 0,
            Tie : 0
        }

        function generateCompMove(){
        const ranNo1 = Math.random();
        let compMove = '';
        if(ranNo1 >= 0 && ranNo1 < 1/3){
            compMove = 'Rock';
        }else if(ranNo1 >= 1/3 && ranNo1 < 2/3){
            compMove = 'Paper';
        }else{
            compMove = 'Scissor';
        }
        return compMove;
    }

    function play(clickedMove){
        const comp = generateCompMove();
        let result = '';
        if(clickedMove==='Paper'){
            if(comp === 'Paper') result = 'Tie';
            else if(comp === 'Rock') result = 'Win';
            else result = 'Lose';
        }

        else if(clickedMove==='Rock'){
            if(comp === 'Rock') result = 'Tie';
            else if(comp === 'Scissor') result = 'Win';
            else result = 'Lose';
        }

        else{
            if(comp === 'Scissor') result = 'Tie';
            else if(comp === 'Paper') result = 'Win';
            else result = 'Lose';
        }

        if(result === 'Win') score.Win +=1;
        else if(result === 'Lose') score.Lose +=1;
        else score.Tie +=1;
        
        const s = JSON.stringify(score);
        localStorage.setItem('score',s);
        
        document.querySelector('.js_wol').innerText = `You ${result}`;
        
        document.querySelector('.js_move').innerHTML = `
        Moves:<br>
        Computer
        <img src="images/${comp}-emoji.png" class="move-icon">
        <br>You
        <img src="images/${clickedMove}-emoji.png" class="move-icon">`;
        updateScore();

    }

    function updateScore(){
        
        document.querySelector('.js_score').innerText = ` Win: ${score.Win}, Lose: ${score.Lose}, Tie: ${score.Tie}`;
    }