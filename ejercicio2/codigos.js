let alumnos = [{
    nombre: "Genaro Sinastra",
    email: "genaro.sianstra@gmail.com",
    materia: "Matematica 1"
},{
    nombre: "marcos gonzales",
    email: "marquino@gmail.com",
    materia: "fisica 1"
},{
    nombre: "clark kent",
    email: "clark@gmail.com",
    materia: "antropologia"
},{
    nombre: "barry alen",
    email: "flash@gmail.com",
    materia: "educacion fisica"
},{
    nombre: "bruce wynne",
    email: "batsi@gmail.com",
    materia: "ciencias sociales"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana1</option>
                <option value="Semana 2">Semana2</option>
            </select>
    </div>`;
    contenedor.innerHTML+= htmlCode;
}


boton.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente quieres confirmar?");
    if (confirmar){
    document.body.removeChild(boton)
    let elementos = document.querySelectorAll("semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;    
    }
    }
})