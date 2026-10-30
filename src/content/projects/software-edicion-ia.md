---
title: Software de Edición de Imágenes con IA
description: "Editor de imágenes con funciones de IA: frontend en React y backend en FastAPI con MongoDB, autenticación y subida de archivos."
descriptionEn: "Image editor with AI features: React frontend and FastAPI backend with MongoDB, auth and file uploads."
tech: [React, Vite, FastAPI, Python, MongoDB, JWT]
category: ai
github: https://github.com/YANCARLOSOFICIAL/Software-edicion-de-imagenes-con-IA
---

- **Estructura monorepo** `frontend/` + `backend/`: cada parte se desarrolla y despliega por separado.
- **Frontend moderno**: React 19 + Vite + TypeScript con ESLint y hot reload.
- **Backend en FastAPI**: subida de archivos (`python-multipart`) y persistencia en MongoDB con PyMongo.
- **Autenticación propia**: contraseñas con bcrypt y sesiones con JWT (`python-jose`).
