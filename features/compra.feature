Feature: Flujo completo de compra (E2E)

  Scenario: Compra exitosa de dos productos y retorno al menú
    Given que el usuario abre la aplicación y está en la pantalla de login
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    And presiona el botón de LOGIN
    Then debería ver la pantalla principal de PRODUCTOS

    When agrega el producto "Camisa Sauce Labs Bolt" al carrito
    And agrega el segundo producto "Camisa Roja" al carrito
    And presiona el icono del carrito de compras
    Then debería ver la lista del carrito con los productos seleccionados

    When presiona el botón de CHECKOUT
    And completa el formulario con Nombre "Henrry", Apellido "Coronado" y CP "0000"
    And presiona el botón CONTINUAR
    
    Then debería ver la pantalla de resumen de compra
    When presiona el botón TERMINAR
    Then debería ver el mensaje "GRACIAS POR SU ORDEN"

    When presiona el botón REGRESO A MENU
    Then debería ver la pantalla principal de PRODUCTOS
    When abre el menú lateral
    And presiona la opción de CERRAR SESION
    Then debería volver a la pantalla de login inicial