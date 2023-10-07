let table=document.querySelector('#tabella');

let grandezza_campo=40;

let timeout;

let punteggio=0;

let tabellaContainer=document.querySelector('#classifica');

document.querySelector('#punteggio').innerHTML=punteggio;

class casellaOggetto{
                constructor(riga,colonna){
                                this.i=riga;
                                this.j=colonna;
                }
}

class Serpente{
            constructor(corpo_serpente,intervallo,colore,direzione,tempo){
                        this.corpo_serpente=corpo_serpente;
                        this.intervallo=intervallo;
                        this.colore=colore;
                        this.direzione=direzione;
                        this.tempo=tempo;
            }
}

//---serpente buono----
let snake=new Serpente([],0,[0,128,0],'',100);

//-------------------


function coordCasella(coordinata){
            let coordReale;
            
        if(coordinata<10){
                coordReale='0'+coordinata;
        }
        else{
                        coordReale=coordinata;
        }

        return coordReale;
}

//-------CREAZIONE TABELLA-----------------

for(let i=0;i<grandezza_campo;i++){
        let row=document.createElement('tr');

        for(let j=0;j<grandezza_campo;j++){
                let casella=document.createElement('td');
                
                casella.setAttribute('id','casella'+coordCasella(i)+coordCasella(j));

                row.appendChild(casella);
        }
        table.appendChild(row);
}

//------QUANDO PREMI TASTO START------------

let button=document.querySelector('#start');

button.addEventListener('click',function(){

                //
                        for(let i=0;i<grandezza_campo;i++){
                                for(let j=0;j<grandezza_campo;j++){
                                                let riga=coordCasella(i);
                                                let colonna=coordCasella(j);
                                                let casella=document.querySelector('#casella'+riga+colonna);
                                                casella.setAttribute('class','');
                                }
                        }
                        
                //

        document.querySelector('#punteggio').innerHTML=punteggio;

                    button.disabled=true;

                    crea_serpente(snake);

                    crea_mela();


});
//---------- creazione serpente----------------------
function prima_casella(serpente,direzione){
                
        let riga=coordCasella(serpente.corpo_serpente[0].i);
        let colonna=coordCasella(serpente.corpo_serpente[0].j);


        document.querySelector('#casella'+riga+colonna).style.backgroundColor='rgb('+serpente.colore[0]+','+serpente.colore[1]+','+serpente.colore[2]+')';

        serpente.direzione=direzione;

        serpente.intervallo=setInterval(uscita_serpente,serpente.tempo,serpente);

}

function crea_serpente(serpente){

                let dir=Math.floor(Math.random()*2);
                let dir2=Math.floor(Math.random()*2);

                let casella_serpente;

                if(dir==0){
                                if(dir2==0){
                                                let i=0;
                                                let j=Math.floor(Math.random()*(grandezza_campo));
                                                casella_serpente=new casellaOggetto(i,j);
                                                serpente.corpo_serpente.push(casella_serpente);
                                                
                                                prima_casella(serpente,'giu');

                                }
                                else{
                                                let i=grandezza_campo-1;
                                                let j=Math.floor(Math.random()*(grandezza_campo));
                                                casella_serpente=new casellaOggetto(i,j);
                                                serpente.corpo_serpente.push(casella_serpente);
                                                
                                                prima_casella(serpente,'su');
                                }
                }
                else{
                                if(dir2==0){
                                                let j=0;
                                                let i=Math.floor(Math.random()*(grandezza_campo));
                                                casella_serpente=new casellaOggetto(i,j);
                                                serpente.corpo_serpente.push(casella_serpente);
                                                
                                                prima_casella(serpente,'destra');

                                }
                                else{
                                                let j=grandezza_campo-1;
                                                let i=Math.floor(Math.random()*(grandezza_campo));
                                                casella_serpente=new casellaOggetto(i,j);
                                                serpente.corpo_serpente.push(casella_serpente);
                                                
                                                prima_casella(serpente,'sinistra');
                                }
                }

}


function uscita_serpente(serpente){

        let casella_serpente;

        switch(serpente.direzione){
                case 'giu':
                                serpente.corpo_serpente[0].i++; 
                                for(let w=1;w<serpente.corpo_serpente.length;w++){
                                        serpente.corpo_serpente[w].i++;
                                }
                                casella_serpente=new casellaOggetto(0,serpente.corpo_serpente[0].j);
                                serpente.corpo_serpente.push(casella_serpente);

                                break;
                case 'su':

                                serpente.corpo_serpente[0].i--; 
                                for(let w=1;w<serpente.corpo_serpente.length;w++){
                                        serpente.corpo_serpente[w].i--;
                                }
                                casella_serpente=new casellaOggetto((grandezza_campo-1),serpente.corpo_serpente[0].j);
                                serpente.corpo_serpente.push(casella_serpente);


                                break;
                
                case 'destra':

                                serpente.corpo_serpente[0].j++; 
                                for(let w=1;w<serpente.corpo_serpente.length;w++){
                                        serpente.corpo_serpente[w].j++;
                                }
                                casella_serpente=new casellaOggetto(serpente.corpo_serpente[0].i,0);
                                serpente.corpo_serpente.push(casella_serpente);


                                break;

                case 'sinistra':
                                serpente.corpo_serpente[0].j--; 
                                for(let w=1;w<serpente.corpo_serpente.length;w++){
                                        serpente.corpo_serpente[w].j--;
                                }
                                casella_serpente=new casellaOggetto(serpente.corpo_serpente[0].i,(grandezza_campo-1));
                                serpente.corpo_serpente.push(casella_serpente);


                                break;

        }
        let riga=coordCasella(serpente.corpo_serpente[0].i);
        let colonna=coordCasella(serpente.corpo_serpente[0].j);

        document.querySelector('#casella'+riga+colonna).style.backgroundColor='rgb('+serpente.colore[0]+','+serpente.colore[1]+','+serpente.colore[2]+')';


                if(serpente.corpo_serpente.length==10){
                        
                        clearInterval(serpente.intervallo);

                        switch(serpente.direzione){
                                        case 'giu':
                                                        serpente.intervallo=setInterval(vai_giu,serpente.tempo,serpente);
                                                        break;
                                        case 'su':
                                                        serpente.intervallo=setInterval(vai_su,serpente.tempo,serpente);
                                                        break;
                                        case 'destra':
                                                        serpente.intervallo=setInterval(vai_destra,serpente.tempo,serpente);
                                                        break;
                                        case 'sinistra':         
                                                        serpente.intervallo=setInterval(vai_sinistra,serpente.tempo,serpente);
                                                        break;
                        }
                }             
}

//------crea mela----------------------------------------


let casella_mela;

function evita_altri_oggetti(riga,colonna,errore){  // evitare che la mela compaia sul serpente o su un muretto
        for(let i=0;i<snake.corpo_serpente.length;i++){
                if(riga==snake.corpo_serpente[i].i && colonna==snake.corpo_serpente[i].j){  
                                errore=1;
                        }
        }

        for(let i=0;i<muretti.length;i++){
                        if(riga==muretti[i].i && colonna==muretti[i].j){  
                                        errore=1;
                        }
        }
        return errore;
}


function crea_mela(){

        let i=Math.floor(Math.random()*grandezza_campo);           

        let j=Math.floor(Math.random()*grandezza_campo);

        let errore=0;


        let riga=coordCasella(i);


        let colonna=coordCasella(j);


                        if(evita_altri_oggetti(riga,colonna,errore)==1){
                                        //console.log(evita_altri_oggetti(riga,colonna,errore));
                                        crea_mela();
                        }
                        else{

                                let casella=document.querySelector('#casella'+riga+colonna);

                                casella_mela=new casellaOggetto(riga,colonna);

                                casella.setAttribute('class','casella_mela');
                        }

}

// fine creazione mela----------------------------------------

//--------------------------------------------------------------


document.addEventListener('keyup',function(e){

        
    
                if(e.key=="ArrowUp"){
                    if(snake.direzione!='giu'){
                            clearInterval(snake.intervallo);
                            snake.intervallo=setInterval(vai_su,snake.tempo,snake);
                    }
                }
                else{
                    if(e.key=="ArrowRight"){
                            if(snake.direzione!='sinistra'){
                                    clearInterval(snake.intervallo);
                                    snake.intervallo=setInterval(vai_destra,snake.tempo,snake);
                            }
                    }
                    else{
                            if(e.key=="ArrowLeft"){
                                    if(snake.direzione!='destra'){
                                            clearInterval(snake.intervallo);
                                            snake.intervallo=setInterval(vai_sinistra,snake.tempo,snake);
                                    }
                            }
                            else if(e.key=="ArrowDown"){
    
                                    if(snake.direzione!='su'){
                                            clearInterval(snake.intervallo);
                                            snake.intervallo=setInterval(vai_giu,snake.tempo,snake);
                                    }
                            }
                            
                    }
                }
        
});

//----controllo per vedere se il serpente si sia morso o abbia preso un muro----------

function controllo(){
        for(let t=1;t<snake.corpo_serpente.length;t++){
                        if(snake.corpo_serpente[0].i==snake.corpo_serpente[t].i  &&  snake.corpo_serpente[0].j==snake.corpo_serpente[t].j){

                                        fine_partita();
                                                      
                        }
        }

        for(let w=0;w<muretti.length;w++){
                if(snake.corpo_serpente[0].i==muretti[w].i  &&  snake.corpo_serpente[0].j==muretti[w].j){

                                fine_partita();             
                                      
                }
        }

        //----se invece c'è un contatto tra i due serpenti-------------

        for(let t=0;t<snake.corpo_serpente.length;t++){
                        for(k=0;k<bad_snake.corpo_serpente.length;k++){
                                                if(snake.corpo_serpente[t].i==bad_snake.corpo_serpente[k].i && snake.corpo_serpente[t].j==bad_snake.corpo_serpente[k].j){
                                                        
                                                        fine_partita();
                                                }
                        }
        }

}

function fine_partita(){

        clearInterval(snake.intervallo);
        clearInterval(bad_snake.intervallo);
        clearTimeout(timeout);

        
        document.querySelector('#gameOver').setAttribute('class','game_over_transition');
        setTimeout(gestione_classifica,3000);
}

