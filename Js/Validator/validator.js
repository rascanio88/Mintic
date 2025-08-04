function loadpage(){
    Swal.fire({
    title: "Bienvenido",
    text: "A mi sitio",
    icon: "success",
    showConfirmButton: false,
    timer: 3800
    });
}
//declaracion de variables
const toggle_password = document.getElementById("toggle_password");
const password = document.getElementById("password");

// logica del show/hide password
toggle_password.addEventListener("click", ()=>{
    const type = password.type === "password"? "text" : "password";
    password.type = type;
    toggle_password.classList.toggle("fa-eye")
    toggle_password.classList.toggle("fa-eye-slash")
});

function validar(){ 
    
    let password = document.getElementById("password").value;
    let lowercase = /[a-z]/.test(password);
    let upercase = /[A-Z]/.test(password);
    let number = /\d/.test(password);
    let specialchar = /[\W_]/.test(password);

    if(password.length < 8){
            swal.fire(
            "Error", 
            "La contraseña debe tener 8 caracteres",
            "error"
        );
        return
    }
        if(lowercase && upercase && number && specialchar){
        swal.fire(
            "Correcto", 
            "La contraseña cumple con las condiciones", 
            "success"
        );
    }else{
        Swal.fire({
            icon: "error",
            title: "Contraseña invalida",
            html: `
                <ul style: "text-aling: center">
                    <li>${number ? "✅" : "✖️"} Al menos un numero</li>
                    <li>${lowercase ? "✅" : "✖️"} Al menos una minuscula</li>
                    <li>${upercase ? "✅" : "✖️"} Al menos una mayuscula</li>
                    <li>${specialchar ? "✅" : "✖️"} Al menos una caracteristica especial</li>
                </ul>
            
            `
            
        });
    }
}