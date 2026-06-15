# reto-inetum-automatizacion-frontend
Reto de Automatización QA – FrontEnd

## Ejecución del proyecto

Pre-requisitos:
- NodeJS v22.20.0:Tener instalado y configurado en el PATH del sistema.
- ejecutar en powershell 
  ```bash
  npm install @playwright/test @cucumber/cucumber ts-node typescript
  npx playwright install
  ```
Ejecución de pruebas:
- Ubicarse en la raíz del proyecto y ejecutar el siguiente comando en la terminal para ejecutar todos los casos de prueba:
  ```bash
  npm test
  ```
## Estrategia de automatización y patrones utilizados.
La estrategia esta centrada en lograr la cobertura especificada en los criterios de aceptacion .

Alcance: Se definieron casos de prueba para validar los siguientes criterios de aceptacion
1. El usuario puede iniciar sesión con credenciales válidas.
2. El usuario no puede iniciar sesión con credenciales inválidas.
3. El usuario puede agregar un producto al carrito desde la página de
productos.
4. El usuario puede ver los productos agregados en el carrito de compras.
5. El usuario puede completar el proceso de compra hasta la
confirmación.

Cobertura: Modulos cubiertos login, catalogo de productos, formularios de confirmacion de orden

Patrones utilizados:
Behavior-Driven Development
Page Object Model (POM)