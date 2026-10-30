---
title: API Facturas IA
description: Extracción de datos estructurados de facturas PDF usando GPT-4o y FastAPI.
descriptionEn: Structured data extraction from PDF invoices using GPT-4o and FastAPI.
tech: [FastAPI, Python, OpenAI, Docker, JWT]
category: backend
github: https://github.com/YANCARLOSOFICIAL/api-facturas-2
demo: https://github.com/YANCARLOSOFICIAL/api-facturas-2
---

- **Extracción estructurada**: JSON validado con Pydantic (cliente, NIT, totals, IVA) a partir del PDF.
- **Lotes y reintentos**: sube 100 facturas a la vez; los fallos se reencolan con backoff exponencial.
- **Autenticación JWT**: por usuario, con límites de rate por plan.
- **Docker**: imagen de ~200 MB con worker de cola incluido.
