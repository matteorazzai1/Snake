
//stampa la classifica

function stampa_classifica(){

    fetch('../../php/gioco_php/classifica.php',{
            method:'POST',
          
    })
    .then(response=> response.json())
    .then(data=>{
                    classifica=data;
                    //console.log(data);

                    let tabella=`
                    <table id="tabella_classifica">
                            <thead>
                            <tr>
                                    <th>  </th>
                                    <th>Giocatore</th>
                                    <th>Punteggio</th>
                                    <th>   </th>
                            </tr>
                    
                            </thead>
                            <tbody>
                                    ${generaRighe(data)}
                            </tbody>
                    </table>
                    
                    `;

            
                    
                    tabellaContainer.insertAdjacentHTML('beforeend',tabella);
                  

    })
    .catch((error)=>{
                    console.error('Errore:',error);
    });


    riazzera_mappa();
}

function generaRighe(classifica){
    let rows='';
    classifica.forEach(elemento=>{
            let riga=`
                    <tr>
                            <td id="righe_classifica">${elemento.postazione}</td>
                            <td id="righe_classifica">${elemento.username}</td>
                            <td id="righe_classifica">${elemento.punteggio}</td>
                            <td id="righe_classifica">${elemento.data_partita}</td>
                    
                    </tr>
            `;
            rows+=riga;
    });
    return rows;
}

//Ripulisci mappa alla fine------------------

function riazzera_mappa(){
        //riazzero tutto sulla mappa per poter rigiocare (questa parte qui sotto va bene)

        punteggio=0;

        clearInterval(snake.intervallo);

        
          snake.corpo_serpente=[];
          snake.intervallo=0;
          snake.direzione='';

          bad_snake.corpo_serpente=[];
          bad_snake.intervallo=0;
          bad_snake.direzione='';

          muretti=[];

        let game_over=document.querySelector('#gameOver');
        game_over.setAttribute('class','game_over');


        for(let i=0;i<grandezza_campo;i++){
                
                  riga=coordCasella(i);

                for(let j=0;j<grandezza_campo;j++){
                        
                        colonna=coordCasella(j);


                       let casella=document.querySelector('#casella'+riga+colonna);
                       casella.style.backgroundColor='rgb(227, 250, 212)';
                       casella.setAttribute('class','ripristina_casella');
                }
        }

        button.textContent='RIPROVA';
        button.disabled=false;

}
