---
title: "Mi flujo de Git para proyectos personales: ramas, commits y releases"
description: "Un workflow simple que no necesita Git Flow ni once ramas: trunk principal, ramas cortas y commits que cuentan la historia del proyecto."
pubDate: 2026-10-08
category: dev
tags: [git, workflow, convenciones]
---

La mayoría de proyectos personales mueren por **complejidad de proceso**, no por falta de ideas. Si eres uno o dos developers, Git Flow es una losa. Esto es lo que uso y funciona:

## El esqueleto

```text
main          ← siempre desplegable, pasa por CI
 ├── feat/blog-collections
 ├── fix/navbar-scroll
 └── chore/deps-bump
```

- **Una rama = una intención.** `feat/`, `fix/`, `chore/`. Nada de `wip-2`, `nuevo-final-2`.
- **Ramas cortas**: si dura más de tres días, ábrela en una PR aunque no haya equipo. La PR es tu revisión.
- **`main` siempre desplegable**: si está roto, no se trabaja encima.

## Commits que cuentan la historia

```bash
git log --oneline

a91c2f3 feat(blog): añade colección de entradas con schema Zod
4d0b8aa fix(nav): scroll suave al volver desde /blog
77e1c50 chore(ci): refresca vídeos de YouTube cada 6 horas
```

Conventional Commits no es burocracia: es **para tu yo de dentro de seis meses** que va a buscar "¿cuándo rompí el dark mode?".

```bash
git commit -m "fix(darkmode): evita parpadeo blanco aplicando tema antes del render"
```

## Commits atómicos: la regla de oro

> Si no puedes describir el cambio en una línea, son dos commits.

Pregunta de prueba: **¿podrías hacer `git revert` de este commit sin romper nada más?** Si la respuesta es no, estaba mezclado.

## Alias que sí uso

```bash
git config --global alias.last 'log -1 --stat'
git config --global alias.undo 'reset --soft HEAD~1'
git config --global alias.wip '!git add -A && git commit -m "wip"'
```

`git undo` deshace el último commit **sin borrar tu trabajo** (queda todo en el staging). Es el alias que más miedo le quita a la gente.

## Release sin drama

```bash
git tag -a v1.2.0 -m "blog con content collections"
git push --follow-tags
```

Las tags son historial legible. Cuando el sitio cambie mucho, sabrás exactamente en qué punto estaba.
