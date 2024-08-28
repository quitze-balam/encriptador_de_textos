const reglas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const revertirReglas = Object.fromEntries(
    Object.entries(reglas).map(([key, value]) => [value, key])
);

function encriptarTexto(event) {
    event.preventDefault(); 
    const texto = document.getElementById('query').value.toLowerCase();
    console.log("Texto a encriptar:",texto);
    const textoEncriptado = texto.split('').map(caracter => reglas[caracter] || caracter).join('');
    console.log("Texto encriptado:", textoEncriptado);

    document.querySelector('.mensaje__encriptado').textContent = textoEncriptado;
    document.querySelector('.mensaje__encriptado').style.display = 'block';
    document.querySelector('.persona__buscando').style.display = 'none';
    document.querySelector('.mensaje__encriptacion').style.display = 'none';
    document.querySelector('.boton__copiar').style.display = 'block';
}

function desencriptarTexto(event) {
    event.preventDefault(); 
    const texto = document.getElementById('query').value.toLowerCase();
    const textoDesencriptado = Object.keys(revertirReglas).reduce((acc, clave) => {
        return acc.replace(new RegExp(clave, 'g'), revertirReglas[clave]);
    }, texto);
    
    document.querySelector('.mensaje__encriptado').textContent = textoDesencriptado;
    document.querySelector('.mensaje__encriptado').style.display = 'block';
    document.querySelector('.persona__buscando').style.display = 'none';
    document.querySelector('.mensaje__encriptacion').style.display = 'none';
    document.querySelector('.boton__copiar').style.display = 'block';
}

function copiarTexto() {
    const texto = document.querySelector('.mensaje__encriptado').textContent;
    if (texto) {
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado al portapapeles!');
        }, err => {
            alert('Error al copiar el texto: ' + err);
        });
    } else {
        alert('No hay texto para copiar.');
    }
}

document.querySelector('.presentacion__enlace__encriptar').addEventListener('click', encriptarTexto);
document.querySelector('.presentacion__enlace__desencriptar').addEventListener('click', desencriptarTexto);
document.querySelector('.boton__copiar').addEventListener('click', copiarTexto);
    