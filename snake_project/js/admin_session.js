


let tabellaContainer=document.querySelector('#tabella_utenti');

let num_utenti=0;

fetch('./utenti.php',{
    method:'POST'
   
})
.then(response=> response.json())
.then(data=>{
            
            //console.log(data);

            let tabella=`
            <table id="tabella">
                    <thead>
                    <tr>
                            <th>Utente</th>
                            <th>BAN</th>
                            <th>UNBAN</th>
                    </tr>
            
                    </thead>
                    <tbody>
                            ${generaRighe(data)}
                    </tbody>
            </table>
            
            `;

            
            
            tabellaContainer.insertAdjacentHTML('beforeend',tabella);
          

})
.then(function(){


                    let button_ban=document.querySelectorAll('#ban');

                    let button_unban=document.querySelectorAll('#unban');

                    controllo_ban();

                    for(let i=0;i<num_utenti;i++){

                            button_ban[i].addEventListener('click',function(){
                                            let username=document.querySelectorAll('#righe_utenti');

                                            const user= new FormData();
                                            user.append('username',username[i].textContent);
                                            
                                            fetch('./ban.php',{
                                                        method:'POST',
                                                        body:user
                                            })
                                            .then(data=>{
                                                    console.log(data);
                                                    button_ban[i].disabled=true;
                                                    button_unban[i].disabled=false;

                                            })
                                            .catch((error)=>{
                                                    console.error('Errore:', error);
                                            });
                            });

                            button_unban[i].addEventListener('click',function(){
                                        let username=document.querySelectorAll('#righe_utenti');

                                        const user= new FormData();
                                        user.append('username',username[i].textContent);
                                        
                                        fetch('./unban.php',{
                                                    method:'POST',
                                                    body:user
                                        })
                                        .then(data=>{
                                                console.log(data);
                                                button_ban[i].disabled=false;
                                                button_unban[i].disabled=true;

                                        })
                                        .catch((error)=>{
                                                console.error('Errore:', error);
                                        });
                });

                    }

})
.catch((error)=>{
            console.error('Errore:',error);
});




function generaRighe(lista_utenti){
    let rows='';
    lista_utenti.forEach(elemento=>{
            let riga=`
                    <tr>
                            <td id="righe_utenti">${elemento.username}</td>
                            <td class="button_ban"><button id="ban">BAN</button></td>
                            <td class="button_unban"><button id="unban" disabled>UNBAN</button></td>
                    
                    </tr>
            `;
            rows+=riga;
            num_utenti++;
    });
    return rows;
}


function controllo_ban(){

                    
                    fetch('./controllo_ban.php',{
                                method:'POST',
                    })
                    .then(response=>response.json())
                    .then(data=>{
                            //console.log(data);
                            let username=document.querySelectorAll('#righe_utenti');
                           
                            let button_ban=document.querySelectorAll('#ban');
                            let button_unban=document.querySelectorAll('#unban');

                            data.forEach(elemento=>{

                                    for(let i=0;i<num_utenti;i++){
                                            if(elemento.username==username[i].textContent){

                                                        //console.log(username[i].textContent);

                                                        button_ban[i].disabled=true;
                                                        button_unban[i].disabled=false;
                                            }

                                    }
                                            

                            });

                    })
                    .catch((error)=>{
                            console.error('Errore:', error);
                    });
}
