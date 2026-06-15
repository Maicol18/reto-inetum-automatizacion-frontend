# 🎯 Reto Inetum - Automatización Frontend QA

[![🧪 Reto QA - Test Automation](https://github.com/Maicol18/reto-inetum-automatizacion-frontend/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/Maicol18/reto-inetum-automatizacion-frontend/actions/workflows/test.yml)
[![Node.js 22.x](https://img.shields.io/badge/Node.js-22.x-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Cucumber BDD](https://img.shields.io/badge/Cucumber-BDD-brightgreen)](https://cucumber.io/)
[![Playwright](https://img.shields.io/badge/Playwright-1.57-9945FF)](https://playwright.dev/)

**Framework de Automatización de Pruebas de UI** para aplicación e-commerce SauceDemo usando **Cucumber BDD** con **Playwright** en **TypeScript**.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Casos de Prueba](#casos-de-prueba)
- [Estrategia y Patrones](#estrategia-y-patrones)
- [Reportes](#reportes)
- [CI/CD](#cicd)
- [Contribuir](#contribuir)

---

## 📝 Descripción

Este proyecto automatiza pruebas end-to-end del flujo de compra en la aplicación **SauceDemo**, validando:

✅ Autenticación de usuarios (login exitoso y fallido)  
✅ Gestión del carrito de compras  
✅ Flujo completo de checkout  
✅ Confirmación de órdenes  

### **Target URL:** https://www.saucedemo.com/

---

## 🔧 Requisitos

| Requisito | Versión | Descripción |
|-----------|---------|-------------|
| **Node.js** | 22.20.0 | Runtime de JavaScript |
| **npm** | 10.x+ | Gestor de paquetes |
| **Git** | 2.x+ | Control de versiones |
| **Navegador** | Chrome/Chromium | Requerido por Playwright |

### **Verificar Instalación:**

```bash
node --version    # Debe mostrar v22.20.0 o superior
npm --version     # Debe mostrar 10.x o superior
git --version     # Debe mostrar 2.x o superior
```

---

## ⚙️ Instalación

### **1. Clonar el repositorio**

```bash
git clone https://github.com/Maicol18/reto-inetum-automatizacion-frontend.git
cd reto-inetum-automatizacion-frontend
```

### **2. Instalar dependencias**

```bash
# Instalar todas las dependencias del proyecto
npm install

# Instalar navegadores de Playwright (Chromium, Firefox, WebKit)
npx playwright install chromium
```

### **3. Verificar instalación**

```bash
npx playwright --version
npx cucumber-js --version
```

---

## 🚀 Ejecución

### **Ejecutar todas las pruebas**

```bash
npm test
```

Esta acción ejecutará:
- ✅ Lanzará navegador Chromium con interfaz visible
- ✅ Ejecutará todos los escenarios en `.feature` files
- ✅ Generará reporte HTML en `reports/cucumber-report.html`

### **Ejecutar un archivo de features específico**

```bash
npx cucumber-js src/features/automatizacion_login_usuario.feature
npx cucumber-js src/features/automatizacion_productos_carrito.feature
```

### **Ejecutar con opciones avanzadas**

```bash
# Modo headless (sin interfaz gráfica)
npx cucumber-js --publish-quiet

# Solo escenarios con tag específico
npx cucumber-js --tags "@login"

# Generar reporte JSON
npx cucumber-js --format json:reports/cucumber-result.json
```

---

## 📁 Estructura del Proyecto

```
reto-inetum-automatizacion-frontend/
├── src/
│   └── features/
│       ├── pages/                           # Page Object Model
│       │   ├── LoginPage.ts
│       │   ├── ProductosPage.ts
│       │   ├── CarritoPage.ts
│       │   ├── InformacionContactoPage.ts
│       │   ├── ResumenPage.ts
│       │   └── ConfirmacionOrdenPage.ts
│       │
│       ├── steps/                           # Step Definitions
│       │   ├── login_steps.ts
│       │   ├── productos_steps.ts
│       │   ├── carrito_steps.ts
│       │   ├── informacion_contacto_steps.ts
│       │   ├── resumen_steps.ts
│       │   └── confirmacion_orden_steps.ts
│       │
│       ├── support/                         # Configuración
│       │   ├── world.ts                     # Contexto compartido
│       │   └── hooks.ts                     # Setup/Teardown
│       │
│       └── features/                        # Scenarios BDD
│           ├── automatizacion_login_usuario.feature
│           └── automatizacion_productos_carrito.feature
│
├── .github/
│   └── workflows/
│       └── test.yml                         # Pipeline CI/CD
│
├── reports/
│   └── cucumber-report.html                 # Reporte de ejecución
│
├── cucumber.js                              # Configuración Cucumber
├── tsconfig.json                            # Configuración TypeScript
├── package.json                             # Dependencias NPM
├── README.md                                # Este archivo
└── .gitignore                               # Archivos ignorados por Git
```

---

## ✅ Casos de Prueba

### **Feature: Autenticación de Usuario**

| Escenario | Descripción |
|-----------|-------------|
| Login Válido | Verificar inicio de sesión con credenciales válidas (`standard_user` / `secret_sauce`) |
| Login Bloqueado | Verificar mensaje de error con usuario bloqueado (`locked_out_user`) |

### **Feature: Productos y Carrito**

| Escenario | Descripción |
|-----------|-------------|
| Agregar Producto | Agregar múltiples productos al carrito |
| Ver Carrito | Verificar que los productos aparezcan en el carrito |
| Flujo Completo | Completar compra desde selección hasta confirmación |

---

## 🎨 Estrategia y Patrones

### **Behavior-Driven Development (BDD)**
- Escenarios escritos en lenguaje Gherkin (Given-When-Then)
- Facilita comunicación entre stakeholders y desarrolladores
- Trazabilidad clara de requisitos

### **Page Object Model (POM)**
- Encapsulación de elementos UI por página
- Fácil mantenimiento ante cambios de selectores
- Reutilización de código

### **TypeScript**
- Type-safety para prevenir errores en tiempo de compilación
- Mejor autocompleción en IDE
- Documentación autodescriptiva

### **Hooks**
- `BeforeAll/AfterAll`: Gestión de navegador (launch/close)
- `Before/After`: Setup/teardown de contexto (new page/close)
- Limpieza automática de recursos

---

## 📊 Reportes

Después de ejecutar las pruebas, se genera un reporte HTML en:

```
reports/cucumber-report.html
```

**Para visualizar el reporte:**

```bash
# En Windows
start reports/cucumber-report.html

# En macOS
open reports/cucumber-report.html

# En Linux
xdg-open reports/cucumber-report.html
```

El reporte incluye:
- ✅ Resumen de ejecución (passed/failed)
- ✅ Duración de cada scenario
- ✅ Detalles de pasos ejecutados
- ✅ Mensajes de error (si aplica)

---

## 🔄 CI/CD

Este proyecto incluye un **pipeline de GitHub Actions** que ejecuta las pruebas automáticamente en cada push.

### **Workflow: Test Automatizado**

**Ubicación:** `.github/workflows/test.yml`

**Triggers:**
- ✅ Push a rama `main`
- ✅ Pull Requests
- ✅ Ejecución manual (workflow_dispatch)

**Pasos del Pipeline:**
1. Checkout del código
2. Setup de Node.js v22
3. Instalación de dependencias
4. Instalación de navegadores Playwright
5. Ejecución de pruebas Cucumber
6. Publicación del reporte

**Ver resultados:**
1. Ve a tu repositorio en GitHub
2. Click en **"Actions"**
3. Selecciona el workflow ejecutado
4. Revisa el status y logs

---

## 🛠️ Desarrollo

### **Agregar nuevas pruebas**

1. **Crear archivo `.feature`** en `src/features/`
   ```gherkin
   Feature: Nueva funcionalidad
     Scenario: Nuevo caso de prueba
       Given un paso inicial
       When una acción del usuario
       Then una verificación
   ```

2. **Implementar steps** en `src/features/steps/`
   ```typescript
   import { Given, When, Then } from '@cucumber/cucumber';
   import { World } from '../support/world';
   
   Given('un paso inicial', async function (this: World) {
       // Implementación
   });
   ```

3. **Crear Page Object** en `src/features/pages/` (si es necesario)
   ```typescript
   export class MiPage {
       constructor(page: Page) {
           // Inicializar elementos
       }
       
       async miAccion() {
           // Implementación
       }
   }
   ```

### **Ejecutar pruebas localmente**

```bash
npm test                    # Todas las pruebas
npm test -- --tags @login  # Solo pruebas con tag @login
```

---

## 🐛 Troubleshooting

### **Problema: Pruebas fallan en CI/CD pero pasan localmente**

**Soluciones:**
- Verificar zona horaria: `Sys.timezone` debe ser UTC
- Viewport: Configurar 1920x1080
- Aumentar timeouts en CI/CD
- Revisar logs en GitHub Actions

### **Problema: Timeout en selectors**

**Solución:**
- Aumentar espera en `world.ts`:
  ```typescript
  page.setDefaultTimeout(30000); // 30 segundos
  ```

### **Problema: Navegador no se lanza**

**Solución:**
```bash
# Reinstalar Playwright
npx playwright install
npx playwright install-deps
```

---

## 📞 Soporte

Para reportar issues o sugerencias:

1. Abre un **Issue** en GitHub
2. Describe el problema detalladamente
3. Incluye:
   - SO (Windows/macOS/Linux)
   - Versión de Node.js
   - Logs de error
   - Screenshot/video si es posible

---

## 👨‍💻 Autor

**Maicol Aguilar**  
📧 macaguilar1998@gmail.com  
🔗 https://github.com/Maicol18

---

## 📜 Licencia

ISC

---

## 📚 Recursos Adicionales

- [Cucumber.js Documentation](https://github.com/cucumber/cucumber-js)
- [Playwright Documentation](https://playwright.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!**