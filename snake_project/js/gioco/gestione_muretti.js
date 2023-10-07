//------------- creazione muretto------------------------------


let muretti=[];

function crea_mattone(i,j){

        let riga=coordCasella(i);

        let colonna=coordCasella(j);

        let mattone=new casellaOggetto(riga,colonna);

        muretti.push(mattone);

        let casella=document.querySelector('#casella'+riga+colonna);
        casella.style.backgroundColor='rgb(94, 5, 5)';
        casella.setAttribute('class','mattone');
}

function crea_muretto(){

        let i=Math.floor(Math.random()*grandezza_campo);           

        let j=Math.floor(Math.random()*grandezza_campo);

                for(let t=0;t<4;t++){

                        if(evita_altri_oggetti(i,j,0)==0){  //evitare che compaia sul serpente o su un altro muretto
                                
                                //console.log(evita_altri_oggetti(i,j,0));
                                
                                crea_mattone(i,j);
                        }

                        let direzione=Math.floor(Math.random()*4);

                        switch(direzione){
                                case 0:
                                        if(i>0)
                                                i=i-1;
                                        break;
                                case 1:
                                        if(j<grandezza_campo-1)
                                                j=j+1;
                                        break;

                                case 2:
                                        if(i<grandezza_campo-1)
                                                i=i+1;
                                        break;
                                case 3:
                                        if(j>0)
                                                j=j-1;
                                        break;
                        }
                        
                }
}