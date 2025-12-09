Feature: Flujo de Login y Logout

Scenario: Inicio de sesión exitoso con usuario estándar y posterior cierre de sesión
    Given que el usuario abre la aplicación y está en la pantalla de login
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    And presiona el botón de LOGIN
    Then debería ver la pantalla principal de PRODUCTOS
    When abre el menú lateral
    And presiona la opción de CERRAR SESION
    Then debería volver a la pantalla de login inicial