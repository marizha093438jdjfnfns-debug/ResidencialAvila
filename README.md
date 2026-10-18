# 🌿 Residencial Avila - Sitio Web Oficial

Sitio web simple, elegante y tropical para **Residencial Avila**, ubicado en el municipio de **Ivirgarzama**, Trópico de Cochabamba, Bolivia.

---

## 🎨 Identidad de Marca y Paleta de Colores Oficial

El diseño integra fielmente la paleta de colores y el logotipo oficial del colibrí tropical:

- 🟡 **Dorado Sol Tropical:** `#F8B229` (Acentos de lujo, botones dorados y bordes refinados)
- 🔴 **Rojo Anaranjado / Coral:** `#EA4630` (Acentos florales, badges de climatización)
- 🍷 **Rojo Rubí Floral:** `#BB2528` (Detalles de contraste y estados activos)
- 🍃 **Verde Esmeralda Tropical:** `#146B3A` (Botones primarios, iconos y naturaleza viva)
- 🌲 **Verde Selva Profundo:** `#0B3D2E` (Fondos hero, tarjetas elegantes y pie de página)
- 🏛️ **Marfil Cálido / Lino:** `#FAF7EE` (Fondo orgánico para lectura confortable)

---

## 🌟 Características y Secciones del Sitio

1. **Barra Superior & Cabecera Sticky:**
   - Logotipo horizontal adaptado y transparente.
   - Navegación fluida por secciones con efecto cristal (*backdrop-filter*).
   - Menú móvil interactivo con botón hamburguesa.
   - Acceso directo a reservas por WhatsApp.

2. **Hero Principal de Impacto:**
   - Logotipo circular oficial del colibrí en relieve con aro dorado.
   - Eslogan y propuesta de valor enfocada en el buen descanso y la naturaleza.
   - Píldoras de servicios destacados (+30 habitaciones, climatización, garaje con 2 accesos, ubicación).

3. **Cotizador / Calculadora Rápida de Reservas:**
   - Permite al cliente seleccionar tipo de habitación, fecha de check-in, check-out y número de personas.
   - Genera automáticamente un mensaje estructurado y formal listo para enviar por WhatsApp al residencial con un solo clic.

4. **Sobre Residencial Avila:**
   - Narrativa de hospitalidad y armonía con el trópico.
   - Contador visual destacado de **+30 Habitaciones Climatizadas**.
   - Tarjetas de puntos fuertes (climatización total, naturaleza, accesos seguros, cercanía a Av. Santa Cruz).

5. **Catálogo de Habitaciones con Filtros Dinámicos:**
   - Filtro interactivo en tiempo real (*Todas*, *Familiares*, *Matrimoniales*, *Individuales*).
   - **Habitación Familiar:** Diseñada con camas dobles y simples para grupos familiares o delegaciones.
   - **Habitación Matrimonial:** Cama doble de buen descanso para parejas o ejecutivos.
   - **Habitación Individual:** Cama simple confortable para viajeros de negocios o turismo individual.
   - Todas equipadas con **Aire Acondicionado**, **Baño Privado**, **TV Cable** y **Wi-Fi Gratis**.
   - **Modal emergente interactivo** con galería y lista detallada de comodidades por habitación.

6. **Comodidades y Servicios de Primer Nivel:**
   - Cuadrícula con iconos de diseño sobre climatización, duchas con agua fluida, conectividad, garaje y cabaña.

7. **Cabaña para Eventos, Seminarios y Talleres:**
   - Sección dedicada a la cabaña multiuso rodeada de naturaleza.
   - Presentación de opciones para recepciones sociales, eventos corporativos, seminarios y talleres.
   - Botón directo para cotizar alquiler de la cabaña.

8. **Garaje Privado Seguro con 2 Accesos:**
   - Destaca los dos ingresos vehiculares independientes:
     * **Entrada 1:** Por Calle Punata
     * **Entrada 2:** Por Calle Montero
   - Garantiza espacio seguro para camionetas, vagonetas y vehículos particulares.

9. **Ubicación Estratégica en Ivirgarzama:**
   - Indicador de cercanía inmediata a la **Av. Santa Cruz**.
   - Integración de mapa interactivo de Google Maps de Ivirgarzama.
   - Enlace directo para abrir la ruta en el mapa de Google o Waze.

10. **Preguntas Frecuentes (FAQ):**
    - Acordeón interactivo con respuestas rápidas sobre climatización, garaje, tipos de camas y reservas.

11. **Formulario de Contacto y Botón Flotante de WhatsApp:**
    - Botón flotante siempre visible con tooltip interactivo y animación pulsante.
    - Formulario de consulta directa que envía los datos del huésped vía WhatsApp.

---

## 📁 Estructura del Proyecto

```text
ResidencialAvila/
│
├── index.html                  # Página web principal completa y responsive
├── serve.js                    # Servidor local ligero en Node.js
├── README.md                   # Documentación del proyecto
│
└── assets/
    ├── css/
    │   └── styles.css          # Estilos CSS con variables, fuentes y animaciones
    ├── js/
    │   └── main.js             # Lógica interactiva (WhatsApp, filtros, modal, fechas, FAQ)
    └── images/
        ├── logo-original.png   # Logotipo original enviado
        ├── color-palette.png   # Paleta de colores enviada
        ├── logo-circle.png     # Sello circular recortado
        ├── logo-circle-transparent.png # Sello circular con fondo transparente
        ├── logo-horizontal.png # Isologotipo horizontal recortado
        ├── logo-horizontal-transparent.png # Logo horizontal con fondo transparente
        ├── favicon.png         # Icono de pestaña para navegadores
        ├── hero-banner.jpg     # Fotografía de portada estilo lodge tropical
        ├── room-familiar.jpg   # Fotografía para habitación familiar
        ├── room-matrimonial.jpg# Fotografía para habitación matrimonial
        ├── room-individual.jpg # Fotografía para habitación individual
        ├── cabana-eventos.jpg  # Fotografía para cabaña de eventos
        ├── garage-parking.jpg  # Fotografía para garaje y seguridad
        ├── nature-tropical.jpg # Fotografía de entorno natural y jardines
        └── colibri-nature.jpg  # Fotografía de colibrí y flora tropical
```

---

## 🚀 Cómo Visualizar o Publicar la Página Web

### 1. Visualización Rápida Directa:
Puedes hacer doble clic en el archivo `index.html` para abrirlo directamente en cualquier navegador web (Google Chrome, Edge, Firefox, Safari).

### 2. Con Servidor Local:
Abre una terminal en esta carpeta y ejecuta:
```bash
node serve.js
```
Luego abre tu navegador en: `http://localhost:8080`

### 3. Personalización del Número de WhatsApp:
En el archivo `assets/js/main.js` (línea 7) y en los enlaces de `index.html`, cambia el número `59170000000` por el número de WhatsApp oficial del residencial (anteponiendo el código `591` de Bolivia sin el signo `+`).
"# ResidencialAvila" 
