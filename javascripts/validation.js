function emailValidation() {
    const texto_alerta = document.getElementById("texto_alerta")
    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (form.email.value !== form.email_confirm.value) {
            const alerta_footer = document.getElementById("alerta_footer")
            alerta_footer.classList.remove("oculto")
            setTimeout(() => {
                form.removeChild(element)
                alerta_footer.classList.add("oculto")
            }, 3000)
        } else {
            form.submit();
        }
    });

const contenido = document.getElementsByTagName("tr")[3];
const email_conf = document.getElementById("email_confirm");
const error_correo = document.createElement("p");
error_correo.innerText = "El correo electrónico no coincide!";
error_correo.style.color= "#d14539";
document.getElementsByTagName("tbody")[0].insertBefore(error_correo, contenido);
error_correo.style.display = "none";



    email_conf.addEventListener("keyup", ()=>{
        console.log("cambio")
        if (form.email.value !== form.email_confirm.value){
            email_conf.style.backgroundColor = "rgba(230,169,171,.5"
            error_correo.style.display = "block";
        }
        else if(form.email.value == form.email_confirm.value){
            email_conf.style.backgroundColor = "#fff"
            error_correo.style.display = "none";
        }
    })


};

window.onload = emailValidation;