/**
 * RESIDENCIAL AVILA - Script Principal
 * Municipio de Ivirgarzama, Trópico de Cochabamba, Bolivia
 */

// Teléfono oficial de WhatsApp para reservas (editable por el usuario o personalizable)
const RESIDENCIAL_PHONE = "59170000000"; // Número en formato internacional Bolivia (+591)

document.addEventListener("DOMContentLoaded", () => {
  initDateDefaults();
  initMobileMenu();
  initHeaderScroll();
  initBookingEstimator();
  initRoomFilters();
  initRoomModal();
  initFaqAccordion();
  initContactForm();
});

/* -------------------------------------------------------------
   1. Fechas por defecto en los selectores
------------------------------------------------------------- */
function initDateDefaults() {
  const checkinInput = document.getElementById("booking-checkin");
  const checkoutInput = document.getElementById("booking-checkout");

  if (checkinInput && checkoutInput) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatYMD = (d) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    checkinInput.value = formatYMD(today);
    checkinInput.min = formatYMD(today);
    checkoutInput.value = formatYMD(tomorrow);
    checkoutInput.min = formatYMD(tomorrow);

    checkinInput.addEventListener("change", () => {
      if (checkinInput.value >= checkoutInput.value) {
        const nextDay = new Date(checkinInput.value);
        nextDay.setDate(nextDay.getDate() + 1);
        checkoutInput.value = formatYMD(nextDay);
      }
      checkoutInput.min = checkinInput.value;
    });
  }
}

/* -------------------------------------------------------------
   2. Menú móvil
------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    const isOpen = navMenu.classList.contains("open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      navMenu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

/* -------------------------------------------------------------
   3. Cabecera con efecto al hacer Scroll
------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* -------------------------------------------------------------
   4. Cotizador / Motor de Reserva por WhatsApp
------------------------------------------------------------- */
function initBookingEstimator() {
  const bookingForm = document.getElementById("quick-booking-form");
  if (!bookingForm) return;

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const roomType = document.getElementById("booking-room-type")?.value || "Habitación General";
    const checkin = document.getElementById("booking-checkin")?.value || "Por definir";
    const checkout = document.getElementById("booking-checkout")?.value || "Por definir";
    const guests = document.getElementById("booking-guests")?.value || "1";

    let message = `¡Hola *Residencial Avila*! 🌿🌺\n`;
    message += `Me gustaría consultar disponibilidad y tarifas para hospedarme en Ivirgarzama:\n\n`;
    message += `🏨 *Tipo de Habitación:* ${roomType}\n`;
    message += `📅 *Fecha de Llegada:* ${checkin}\n`;
    message += `📅 *Fecha de Salida:* ${checkout}\n`;
    message += `👥 *Número de Personas:* ${guests}\n`;
    message += `🚗 *Consulta de Garaje:* Requiero información de estacionamiento seguro (accesos Calle Punata / Montero).\n\n`;
    message += `Quedo atento a su respuesta para confirmar mi reserva. ¡Muchas gracias!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${RESIDENCIAL_PHONE}?text=${encoded}`, "_blank");
  });
}

/* -------------------------------------------------------------
   5. Filtros de Habitaciones
------------------------------------------------------------- */
function initRoomFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const roomCards = document.querySelectorAll(".room-card");

  if (!filterBtns.length || !roomCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      roomCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.4s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* -------------------------------------------------------------
   6. Modal de Detalles de Habitación
------------------------------------------------------------- */
const roomData = {
  familiar: {
    title: "Habitación Familiar Confort",
    category: "Familiar / Grupal",
    capacity: "4 a 6 Personas",
    beds: "Combinación de Camas Dobles y Camas Simples",
    image: "assets/images/room-familiar.jpg",
    description: "Diseñada especialmente para familias y grupos de viaje que visitan Ivirgarzama o el Trópico de Cochabamba. Ofrece un espacio amplio, fresco y acogedor para un descanso reparador después de un día de turismo o trabajo.",
    amenities: [
      "Aire acondicionado split de alta eficiencia",
      "Baño privado completo e impecable",
      "TV por cable con canales HD",
      "Wi-Fi gratis de alta velocidad",
      "Camas ortopédicas confortables",
      "Acceso directo al garaje cerrado",
      "Servicio de limpieza diario",
      "Ambiente tranquilo y fresco"
    ]
  },
  matrimonial: {
    title: "Habitación Matrimonial Superior",
    category: "Parejas / Matrimonial",
    capacity: "1 a 2 Personas",
    beds: "1 Cama Doble Matrimonial Queen/2 Plazas",
    image: "assets/images/room-matrimonial.jpg",
    description: "El espacio ideal para parejas o personas que buscan máxima comodidad, privacidad y frescura en el clima cálido tropical de Ivirgarzama.",
    amenities: [
      "Aire acondicionado split regulable",
      "Baño privado con ducha confortable",
      "TV pantalla plana con señal de cable",
      "Wi-Fi de alta cobertura",
      "Mesa de trabajo y ropero",
      "Sábanas y toallas frescas de primera calidad",
      "Estacionamiento privado con doble entrada",
      "Vistas hacia el entorno natural"
    ]
  },
  individual: {
    title: "Habitación Individual Ejecutiva",
    category: "Individual / Viajero de Negocios",
    capacity: "1 Persona",
    beds: "1 Cama Simple Amplia",
    image: "assets/images/room-individual.jpg",
    description: "Ideal para comerciantes, profesionales en comisión de servicio, transportistas o viajeros independientes que requieren un descanso impecable, silencioso y seguro en Ivirgarzama a pocos pasos de la Av. Santa Cruz.",
    amenities: [
      "Aire acondicionado para el clima tropical",
      "Baño privado higiénico e independiente",
      "TV Cable con control remoto",
      "Conexión Wi-Fi gratuita",
      "Mesa de apoyo y toma corrientes accesibles",
      "Seguridad las 24 horas",
      "Garaje seguro con 2 ingresos (Punata y Montero)"
    ]
  }
};

function initRoomModal() {
  const modal = document.getElementById("room-modal");
  const modalClose = document.getElementById("modal-close-btn");
  const detailButtons = document.querySelectorAll(".view-room-details");

  if (!modal) return;

  detailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-room");
      const data = roomData[type];

      if (data) {
        document.getElementById("modal-room-img").src = data.image;
        document.getElementById("modal-room-title").textContent = data.title;
        document.getElementById("modal-room-capacity").textContent = data.capacity;
        document.getElementById("modal-room-beds").textContent = data.beds;
        document.getElementById("modal-room-desc").textContent = data.description;

        const listContainer = document.getElementById("modal-room-amenities");
        listContainer.innerHTML = "";
        data.amenities.forEach((item) => {
          const li = document.createElement("li");
          li.style.display = "flex";
          li.style.alignItems = "center";
          li.style.gap = "0.5rem";
          li.style.fontSize = "0.92rem";
          li.style.marginBottom = "0.4rem";
          li.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#146B3A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${item}</span>
          `;
          listContainer.appendChild(li);
        });

        // Configurar botón de reserva directa en el modal
        const reserveBtn = document.getElementById("modal-reserve-btn");
        if (reserveBtn) {
          reserveBtn.onclick = () => {
            const text = encodeURIComponent(`¡Hola Residencial Avila! 👋 Deseo reservar la *${data.title}* en Ivirgarzama. ¿Tienen disponibilidad para próximas fechas?`);
            window.open(`https://wa.me/${RESIDENCIAL_PHONE}?text=${text}`, "_blank");
          };
        }

        modal.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------
   7. Acordeón de Preguntas Frecuentes (FAQ)
------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Cierra los demás para efecto acordeón limpio
      faqItems.forEach((other) => other.classList.remove("active"));

      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}

/* -------------------------------------------------------------
   8. Formulario de Contacto
------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById("direct-contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name")?.value || "";
    const phone = document.getElementById("contact-phone")?.value || "";
    const reason = document.getElementById("contact-reason")?.value || "Consulta General";
    const msg = document.getElementById("contact-message")?.value || "";

    let text = `¡Hola *Residencial Avila*! 👋\n`;
    text += `Mi nombre es *${name}*.\n`;
    if (phone) text += `📞 Mi contacto: ${phone}\n`;
    text += `📌 *Motivo:* ${reason}\n`;
    text += `📝 *Mensaje:* ${msg}\n\n`;
    text += `Enviado desde su página web oficial.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${RESIDENCIAL_PHONE}?text=${encoded}`, "_blank");
  });
}
