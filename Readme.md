# Encriptador de Texto

## Descripción

Este proyecto es un encriptador y desencriptador de texto simple que convierte letras específicas en cadenas de texto según reglas predeterminadas. Está diseñado como una aplicación web que permite al usuario ingresar un texto, encriptarlo o desencriptarlo, y copiar el resultado al portapapeles.

## Reglas de Encriptación

- `e` se convierte en `enter`
- `i` se convierte en `imes`
- `a` se convierte en `ai`
- `o` se convierte en `ober`
- `u` se convierte en `ufat`

El encriptador convierte las letras de acuerdo con estas reglas, mientras que el desencriptador revierte el proceso.

## Características

- **Encriptación y Desencriptación:** Convierte texto normal en texto encriptado y viceversa.
- **Interfaz de Usuario Simple:** Incluye un área de texto para ingresar el contenido y botones para encriptar, desencriptar y copiar el texto encriptado.
- **Compatibilidad con diferentes resoluciones:** La interfaz se ajusta para diferentes tamaños de pantalla, ocultando elementos innecesarios en pantallas más pequeñas.
- **Estilos Personalizados:** Se puede cambiar el estilo de los elementos, incluyendo el color, fuente y tamaño del texto.

## Estructura del Proyecto

```
/Imagenes
  └── Muñeco.png      # Imagen utilizada en la interfaz

/css
  └── styles.css      # Archivo CSS con los estilos del proyecto

/js
  └── script.js       # Archivo JavaScript con la lógica de encriptación y desencriptación

index.html            # Archivo HTML principal
README.md             # Documentación del proyecto
```

## Instalación

1. **Clona el repositorio:**

```bash
git clone https://github.com/tu-usuario/encriptador-de-texto.git
```

2. **Navega al directorio del proyecto:**

```bash
cd encriptador-de-texto
```

3. **Abre `index.html` en tu navegador:**

Puedes abrirlo directamente desde tu explorador de archivos o ejecutar un servidor local.

## Uso

1. **Ingresa el texto en el área de texto.**
2. **Haz clic en "Encriptar" para encriptar el texto.**
3. **Haz clic en "Desencriptar" para revertir el texto encriptado.**
4. **Haz clic en "Copiar" para copiar el texto encriptado al portapapeles.**

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## Mejoras Futuras

- **Agregar soporte para más caracteres especiales.**
- **Mejorar la accesibilidad de la aplicación.**
- **Implementar pruebas unitarias para la lógica de encriptación y desencriptación.**

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue los siguientes pasos:

1. **Haz un fork del proyecto.**
2. **Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).**
3. **Haz commit de tus cambios (`git commit -am 'Agregar nueva funcionalidad'`).**
4. **Haz push a la rama (`git push origin feature/nueva-funcionalidad`).**
5. **Abre un Pull Request.**
