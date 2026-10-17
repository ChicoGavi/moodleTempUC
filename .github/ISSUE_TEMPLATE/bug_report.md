---
name: 🐛 Bug report
about: Reporta un error o comportamiento inesperado en el sistema
title: '[BUG] <Descripción breve y clara del problema>'
labels: 'bug, needs-triage'
assignees: ''
---

## 📌 Resumen del problema
<!-- Describe en 1 o 2 frases qué está fallando y cuál es el impacto básico -->

## 🔁 Pasos para reproducir
<!-- Sigue un formato secuencial detallado. Si requiere credenciales o datos específicos, inclúyelos (sin información sensible) -->
1. Ir a `[URL, pantalla o vista]`
2. Hacer clic en `[Nombre del botón/elemento]`
3. Ingresar el valor `[Dato de prueba utilizado]`
4. Ejecutar `[Acción realizada]`
5. **Resultado observado:** [Explicación del fallo]

## 🎯 Comportamiento esperado
<!-- Describe claramente qué debería haber sucedido según los requerimientos o la lógica de negocio -->

## ❌ Comportamiento actual
<!-- Qué ocurrió realmente. Incluye mensajes de error exactos si aparecen en la UI -->

## 📸 Evidencia
<!-- Adjunta capturas de pantalla, GIFs o videos que muestren el problema (arrastra y suelta aquí) -->

## 🖥️ Entorno de prueba
- **Ambiente:** [ej. Desarrollo / Staging / Producción]
- **Sistema Operativo:** [ej. Windows 11 / macOS Sonoma / Ubuntu 22.04 / iOS 17 / Android 14]
- **Navegador / App:** [ej. Chrome 122.0 / Safari 17.2 / App Móvil v2.4.1]
- **Dispositivo:** [ej. Desktop / iPhone 15 Pro / Samsung Galaxy S23]
- **Versión/Commit:** [ej. v1.2.0 o commit hash]

## ⚡ Impacto y Severidad
<!-- Selecciona el nivel adecuado según el impacto en la operación -->
- [ ] **P0 - Bloqueante:** Sistema caído, pérdida crítica de datos o falla total de seguridad sin workaround.
- [ ] **P1 - Alta:** Funcionalidad principal rota (ej. Checkout, Login) con alto impacto en usuarios.
- [ ] **P2 - Media:** Fallo en funcionalidad secundaria o flujo con workaround disponible.
- [ ] **P3 - Baja:** Error visual, tipográfico o problema menor de UX.

## 🛠️ Logs y Diagnóstico Técnico (Opcional pero recomendado)

Logs de consola y red (Network tab) / Dev Tools

```json
// Pega aquí los errores de la consola del navegador, respuestas HTTP de la API (4xx/5xx) o stacktraces