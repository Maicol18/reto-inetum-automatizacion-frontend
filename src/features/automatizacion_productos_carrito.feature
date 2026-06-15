Feature: Autenticación de Usuario en Sauce Demo

  Background: Inicio de sesion SauceDemo
    Given ingreso a la pagina de inicio de sesion de SauceDemo
    And ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    And hago click en el boton Login
    And se muestra la página principal de productos

  Scenario: Verificar que se pueda agregar un producto al carrito desde la página de productos.
    When agrego el producto con nombre "Sauce Labs Backpack" al carrito de compras
    And agrego el producto con nombre "Sauce Labs Bolt T-Shirt" al carrito de compras
    Then se actualiza el numero de productos seleccionados "2" en el contador del carrito de compras

  Scenario: Verificar que se puedan ver los productos agregados en el carrito de compras.
    And agrego el producto con nombre "Sauce Labs Backpack" al carrito de compras
    And agrego el producto con nombre "Sauce Labs Bolt T-Shirt" al carrito de compras
    When hago click al boton de carrito de compras en productos
    Then se muestran los productos agregados en el carrito de compras

   Scenario: Verificar que se pueda completar el proceso de compra hasta la confirmación. 
    And agrego el producto con nombre "Sauce Labs Backpack" al carrito de compras
    And agrego el producto con nombre "Sauce Labs Bolt T-Shirt" al carrito de compras
    When hago click al boton de carrito de compras en productos
    And hago click en el boton Checkout en tu cartera
    And ingreso el nombre "Diego Jorge" apellido "Huatay Gonzales" y codigo postal "LIMA 28"
    And hago click en el boton Continue en tu informacion
    And hago click al boton Finish en el resumen de la compra
    Then se muestra el mensaje de confirmacion de compra con el titulo "Thank you for your order!" y mensaje "Your order has been dispatched, and will arrive just as fast as the pony can get there!"



