
function validate_password(){

            let pass=document.querySelector('#password');
            let stringa_password=pass.value;

            const caratteri_speciali=['!','@','#','$','%','^','&','?','/'];
            
            let cont_car_spec=0;

            let cont_maiuscole=0;

            let cont_numeri=0;

            for(let i=0;i<stringa_password.length;i++){
                        if(caratteri_speciali.includes(stringa_password[i]))
                                cont_car_spec++;

                        if(stringa_password[i].charCodeAt()>=65 && stringa_password[i].charCodeAt()<=90)
                                cont_maiuscole++;

                        if(stringa_password[i].charCodeAt()>=48 && stringa_password[i].charCodeAt(0)<=57)
                                cont_numeri++;
            }


            if(cont_maiuscole>0 && cont_car_spec>0 && cont_numeri>0){
                        //tutto ok
                        pass.setCustomValidity("");
            }
            else{
                    let msg="Utilizzare almeno una lettera maiuscola, un numero e un carattere speciale(!,@,#,$,%,^,&,?,/)";
                    pass.setCustomValidity(msg);
            }

}

function validate_confermaPassword(){
            let pass=document.querySelector('#password');
            let conferma_password=document.querySelector('#conferma_password');

            if(pass.value==conferma_password.value){
                        conferma_password.setCustomValidity("");
            }
            else{
                let msg="conferma password non corretta";
                conferma_password.setCustomValidity(msg);
            }

}


function init(){
            const control_password=document.querySelector('#password');
            control_password.addEventListener('input', validate_password);

            const control_conferma=document.querySelector('#conferma_password');
            control_conferma.addEventListener('input',validate_confermaPassword);
}


window.onload=init;