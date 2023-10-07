
// colorazione serpente durante movimento------------------

function colora_testaSerpente(serpente){
    

        let riga=coordCasella(serpente.corpo_serpente[0].i);

        let colonna=coordCasella(serpente.corpo_serpente[0].j);


        document.querySelector('#casella'+riga+colonna).style.backgroundColor='rgb('+serpente.colore[0]+','+serpente.colore[1]+','+serpente.colore[2]+')';;  
        
        //presa la mela-----------------------------------
        if(casella_mela.i==coordCasella(snake.corpo_serpente[0].i) && casella_mela.j==coordCasella(snake.corpo_serpente[0].j)){
                document.querySelector('#casella'+riga+colonna).setAttribute('class','mela_mangiata');
                punteggio++;
                                //si allunga il serpente---------------------------
                                        let casella_serpente=new casellaOggetto(serpente.corpo_serpente[(serpente.corpo_serpente.length-1)].i,serpente.corpo_serpente[(serpente.corpo_serpente.length-1)].j);
                                        serpente.corpo_serpente.push(casella_serpente);

                document.querySelector('#punteggio').innerHTML=punteggio;

                //allocazione muretto------------------------
                if(punteggio%4==0){
                        crea_muretto();
                }

                //creazione serpente cattivo------------------
                if(punteggio==10){
                                crea_serpente(bad_snake,bad_snake.intervallo);
                                vita_bad_snake();
                }
                
                crea_mela();
        }
        else{
                if(punteggio>=10){
                        if(casella_mela.i==coordCasella(bad_snake.corpo_serpente[0].i) && casella_mela.j==coordCasella(bad_snake.corpo_serpente[0].j)){
                                document.querySelector('#casella'+riga+colonna).setAttribute('class','mela_mangiata');
                                        punteggio-=5;
                                        document.querySelector('#punteggio').innerHTML=punteggio;
                                        crea_mela();
                        }
                }
        }
}

function colora_passaggioSerpente(serpente,k){

        let riga=coordCasella(serpente.corpo_serpente[k].i);

        let colonna=coordCasella(serpente.corpo_serpente[k].j);

        document.querySelector('#casella'+riga+colonna).style.backgroundColor='rgb(227, 250, 212)';
        //document.querySelector('#casella'+riga+colonna).setAttribute('class','ripristina_casella'); 
}


function ricolora_muretti(){

        for(let i=0;i<muretti.length;i++){

                let casella_muretto=document.querySelector('#casella'+muretti[i].i+muretti[i].j);
                casella_muretto.style.backgroundColor='rgb(94, 5, 5)';
                casella_muretto.setAttribute('class','mattone');
        }
}



//--------SPOSTAMENTI SERPENTE------------------------------

function vai_su(serpente){

        ricolora_muretti();

        serpente.direzione='su';

        controllo();
        
        for(let k=serpente.corpo_serpente.length-1;k>=0;k--){

                        if(k==0){
                                        
                                        if(serpente.corpo_serpente[0].i==0){
                                                serpente.corpo_serpente[0].i=(grandezza_campo-1);
                                        }
                                        else{
                                                serpente.corpo_serpente[0].i--;
                                        }
                                       
                                        colora_testaSerpente(serpente);
    

                        }
                        else{
                               
                                if(k==(serpente.corpo_serpente.length-1)){
                                                
                                        colora_passaggioSerpente(serpente,k);

                                }
                                
                                serpente.corpo_serpente[k].i=serpente.corpo_serpente[k-1].i;
                                serpente.corpo_serpente[k].j=serpente.corpo_serpente[k-1].j;
                                
                        }
        }
}

function vai_sinistra(serpente){

        ricolora_muretti();

        serpente.direzione='sinistra';

        controllo();

        for(let k=serpente.corpo_serpente.length-1;k>=0;k--){

                        

                                if(k==0){
                                                
                                                if(serpente.corpo_serpente[0].j==0){
                                                        serpente.corpo_serpente[0].j=(grandezza_campo-1);
                                                }
                                                else{
                                                        serpente.corpo_serpente[0].j--;
                                                }
                                                
                                                colora_testaSerpente(serpente);

                                }
                                else{
                                        
                                        if(k==(serpente.corpo_serpente.length-1)){
                                                
                                                colora_passaggioSerpente(serpente,k);

                                        }
                                        
                                        serpente.corpo_serpente[k].i=serpente.corpo_serpente[k-1].i;
                                        serpente.corpo_serpente[k].j=serpente.corpo_serpente[k-1].j;
                                        
                                                
                                }
                }
}

function vai_destra(serpente){

        ricolora_muretti();

        serpente.direzione='destra';

        controllo();

                for(let k=serpente.corpo_serpente.length-1;k>=0;k--){

                                if(k==0){
                                                
                                                if(serpente.corpo_serpente[0].j==(grandezza_campo-1)){
                                                        serpente.corpo_serpente[0].j=0;
                                                }
                                                else{
                                                        serpente.corpo_serpente[0].j++;
                                                }
                                        
                                                colora_testaSerpente(serpente);

                                }
                                else{
                                                if(k==(serpente.corpo_serpente.length-1)){
                                                
                                                        colora_passaggioSerpente(serpente,k);

                                                }
                                                
                                                serpente.corpo_serpente[k].i=serpente.corpo_serpente[k-1].i;
                                                serpente.corpo_serpente[k].j=serpente.corpo_serpente[k-1].j;
                                                
                                }
                }
}

function vai_giu(serpente){

        ricolora_muretti();

        serpente.direzione='giu';

        controllo();

                for(let k=serpente.corpo_serpente.length-1;k>=0;k--){

                        

                                if(k==0){
                                                
                                                if(serpente.corpo_serpente[0].i==(grandezza_campo-1)){
                                                        serpente.corpo_serpente[0].i=0;
                                                }
                                                else{
                                                        serpente.corpo_serpente[0].i++;
                                                }
                                                
                                                colora_testaSerpente(serpente);

                                }
                                else{
                                
                                                if(k==(serpente.corpo_serpente.length-1)){
                                                
                                                        colora_passaggioSerpente(serpente,k);

                                                }
                                                
                                                serpente.corpo_serpente[k].i=serpente.corpo_serpente[k-1].i;
                                                serpente.corpo_serpente[k].j=serpente.corpo_serpente[k-1].j;
                                                
                                }
                }
}