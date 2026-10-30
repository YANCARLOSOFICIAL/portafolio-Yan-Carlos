---
title: Chatbot Uniputumayo
description: Asistente virtual "Guaca" con IA para la Universidad del Putumayo. Sistema RAG con soporte de voz y chat.
descriptionEn: '"Guaca" AI virtual assistant for Universidad del Putumayo. RAG system with voice and chat support.'
tech: [Next.js, FastAPI, Python, PostgreSQL, Docker, Ollama]
category: fullstack
github: https://github.com/YANCARLOSOFICIAL/chatbot-uniputumayo
demo: https://github.com/YANCARLOSOFICIAL/chatbot-uniputumayo
featured: true
---

- **RAG sobre documentación oficial**: el asistente responde citando los documentos de la universidad, no con conocimiento genérico del modelo.
- **Voz y chat**: entrada por voz (STT) y respuesta hablada (TTS) para usuarios que no quieren escribir.
- **Modelo local con Ollama**: sin costo por token en inferencia; el modelo corre en el servidor de la institución.
- **Despliegue con Docker**: `docker compose up` levanta backend, base de datos y frontend.
