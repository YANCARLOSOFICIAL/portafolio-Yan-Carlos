---
title: Tienda Microservicios
description: Plataforma e-commerce con arquitectura de microservicios y autenticación JWT.
descriptionEn: E-commerce platform with microservices architecture and JWT authentication.
tech: [React, Node.js, Express, MongoDB, JWT]
category: fullstack
github: https://github.com/YANCARLOSOFICIAL/tienda-microservicios
demo: https://github.com/YANCARLOSOFICIAL/tienda-microservicios
---

- **Servicios separados**: catálogo, carrito, usuarios y pedidos, cada uno con su base de datos.
- **Auth con refresh tokens**: rotación atómica y revocación por sesión.
- **Patrón de eventos**: los pedidos publican eventos que el servicio de inventario consume.
- **Frontend en React**: carrito persistente y checkout en tres pasos.
