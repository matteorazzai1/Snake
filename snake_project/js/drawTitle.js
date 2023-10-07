function drawTitle(){
    const canvas=document.querySelector('#title');
        const context=canvas.getContext('2d');

        //context.beginPath();
        context.font="100px Comic Sans MS";
        context.fillStyle="rgba(212, 19, 5, 0.856)";
        context.textAlign="center";
        

        context.fillText("SNAKE",520,90);
        //context.stroke();

}

window.addEventListener("load",drawTitle,true);