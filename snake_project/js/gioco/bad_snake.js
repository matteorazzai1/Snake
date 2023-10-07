//-----da qui comprese le due prossime funzioni servono all' entrata del serpente all'interno della mappa------------------------

let bad_snake=new Serpente([],0,[255,0,0],'',200);
function cambia_direzione(direction){

        //console.log(direction);

        switch(direction){
                case 0:
                                if(bad_snake.direzione!='su'){
                                        clearInterval(bad_snake.intervallo);
                                        bad_snake.intervallo=setInterval(vai_giu,bad_snake.tempo,bad_snake);
                                }
                                break;
                case 1:
                                if(bad_snake.direzione!='giu'){
                                        clearInterval(bad_snake.intervallo);
                                        bad_snake.intervallo=setInterval(vai_su,bad_snake.tempo,bad_snake);
                                }
                                break;
                case 2:
                                if(bad_snake.direzione!='sinistra'){
                                        clearInterval(bad_snake.intervallo);
                                        bad_snake.intervallo=setInterval(vai_destra,bad_snake.tempo,bad_snake);
                                }
                                break;
                case 3:         
                                if(bad_snake.direzione!='destra'){
                                        clearInterval(bad_snake.intervallo);
                                        bad_snake.intervallo=setInterval(vai_sinistra,bad_snake.tempo,bad_snake);
                                }
                                break;
        }

        vita_bad_snake();

}

function vita_bad_snake(){       

                        let tempo_variazione=Math.floor(Math.random()*6);

                        while(tempo_variazione<3){
                                tempo_variazione=Math.floor(Math.random()*6);
                        }

                                tempo_variazione=tempo_variazione*1000;

                        let svolta=Math.floor(Math.random()*4);

                        timeout=setTimeout("cambia_direzione("+svolta+")",tempo_variazione);
}

