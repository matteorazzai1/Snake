
//inserimento ultima partita in classifica

function gestione_classifica(){


    const punt= new FormData();
    punt.append('punteggio',punteggio);

    fetch('../../php/gioco_php/insert.php',{
                    method:'POST',
                    body:punt
    })
    .then(data=>{
                    console.log(data);
                    if(button.textContent=='RIPROVA'){
                            let tabella_da_cancellare=document.querySelector('#tabella_classifica');

                            tabellaContainer.removeChild(tabella_da_cancellare);
                    }
                    stampa_classifica();

    })
    .catch((error)=>{
                    console.error('Errore:',error);
    });

}