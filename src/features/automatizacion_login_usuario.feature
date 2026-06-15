Feature: Autenticación de Usuario en Sauce Demo

  Scenario: Verificar inicio de sesion con credenciales validas
    Given ingreso a la pagina de inicio de sesion de SauceDemo
    When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    And hago click en el boton Login
    Then se muestra la página principal de productos

  Scenario: Verificar mensaje de inicio de sesion fallido con un usuario bloqueado
    Given ingreso a la pagina de inicio de sesion de SauceDemo
    When ingreso el usuario "locked_out_user" y la contraseña "secret_sauce"
    And hago click en el boton Login
    Then se muestra el mensaje de error "Epic sadface: Sorry, this user has been locked out." en el login