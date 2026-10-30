---
title: "Tool calling explicado: cómo un LLM aprende a usar tus funciones"
description: "Los modelos no ejecutan código mágicamente: tú defines herramientas, el modelo elige cuál usar y tú corres la función. Así funciona el ciclo completo de tool calling."
pubDate: 2026-10-21
category: ia
tags: [agentes, llm, tool-calling, api]
featured: true
---

Cada vez que un agente consulta tu base de datos o envía un correo, hay un contrato de tres partes por medio: **tú describes las herramientas**, **el modelo decide cuál usar** y **tu código ejecuta la llamada**. Nada de esto es magia, y entender el ciclo completo te quita el miedo a construir agentes.

## El ciclo de tool calling

```text
1. Tú envías: prompt + definición de herramientas (JSON Schema)
2. El modelo responde: "quiero llamar a get_weather({city: 'Popayán'})"
3. Tú ejecutas la función de verdad
4. Devuelves el resultado como mensaje 'tool'
5. El modelo genera la respuesta final con esos datos
```

El modelo **nunca** toca tus funciones. Solo produce un objeto JSON que tú interpretas.

## Definiendo una herramienta

```ts
const tools = [
  {
    name: 'buscarPedidos',
    description: 'Busca pedidos de un cliente por su identificación',
    parameters: {
      type: 'object',
      properties: {
        clienteId: { type: 'string', description: 'ID del cliente' },
        estado: { type: 'string', enum: ['pendiente', 'enviado'] },
      },
      required: ['clienteId'],
    },
  },
];
```

La `description` no es decorativa: es lo único que el modelo lee para decidir si la herramienta sirve o no. Escribe como si le explicaras el caso de uso a otro humano.

## El error más común

```ts
// ❌ Devolver errores crudos al modelo
throw new Error('ECONNREFUSED 10.0.0.5:5432');

// ✅ Devolver información accionable
return { ok: false, error: 'base_datos_offline', retry: true };
```

El modelo no puede arreglar un stack trace, pero sí puede reintentar o avisar al usuario si le das **estado semántico**.

> Regla práctica: la salida de tu herramienta también es un prompt. Escríbela para que otra IA la entienda.

## Checklist antes de poner un agente en producción

- **Valida la entrada** del modelo antes de ejecutar nada (un LLM puede inventar parámetros).
- **Pon timeouts** a cada herramienta: un agente colgado es un agente caro.
- **Registra cada llamada**: herramienta, argumentos, duración y resultado. Sin logs no hay evals.
- **Limita el alcance**: el modelo debe poder leer, no borrar en su primera versión.

En el [laboratorio del canal](/#lab) voy armando un agente completo con estas piezas, con su repositorio para clonar y romper.
