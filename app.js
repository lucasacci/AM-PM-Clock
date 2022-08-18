function obtenerFecha (){

    let fechaActual = new Date();
    
    // console.log(fechaActual.getDate())
    // console.log(fechaActual.getDay())
    // console.log(fechaActual.getMonth())
    // console.log(fechaActual.getFullYear());
    
    
    
    let parrafoNuevo = document.getElementById('fecha');
    
    
    let diaSemanas = ['Domingo', 'Lunes', 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado'];
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'] 
    
    parrafoNuevo.innerHTML = `${diaSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()} `

    let parrafoHora = document.getElementById('hora');

    let segundos = fechaActual.getSeconds();
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();

    if(segundos<10){
        segundos = '0' + segundos;
    }

    if(horas <10){
        horas = '0' + horas;
    }
    if(minutos <10){
        minutos = '0' + minutos;
    }

    let x = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12; 

    parrafoHora.innerHTML = `${horas}:${minutos}:${segundos} ${x}`



}
setInterval(obtenerFecha, 1);

function nightMode(){
    let btn = document.getElementById('boton');
    let body = document.getElementById('body');
    let texto = document.getElementById('texto')
    let icono = document.getElementById('icono')

    if(icono.className === 'fa-solid fa-sun'){

        body.className = 'body2'
        texto.className = 'titulo2 azul'
        btn.className = 'btn btn-dark'
        icono.className = 'fa-solid fa-moon'

    }else{
        
        body.className = 'body'
        texto.className = 'titulo azul'
        btn.className = 'btn btn-outline-light'
        icono.className = 'fa-solid fa-sun'
    }

    
}