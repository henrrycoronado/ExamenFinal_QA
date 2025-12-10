@carro
Feature: Gestión del Carrito de Compras

  Scenario: Agregar producto al carrito, verificarlo y eliminarlo
    Given que el usuario abre la aplicación y está en la pantalla de login
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    And presiona el botón de LOGIN
    Then debería ver la pantalla principal de PRODUCTOS

    When agrega el producto "Camisa Sauce Labs Bolt" al carrito
    And presiona el icono del carrito de compras
    Then debería ver "Camisa Sauce Labs Bolt" en la lista del carrito
    When presiona el botón de REMOVER
    Then el producto ya no debería estar en el carrito
    When presiona el botón CONTINUAR COMPRANDO
    Then debería ver la pantalla principal de PRODUCTOS

    When abre el menú lateral
    And presiona la opción de CERRAR SESION
    Then debería volver a la pantalla de login inicial