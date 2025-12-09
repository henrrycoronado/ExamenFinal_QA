Feature: Clipboard

Scenario: Set Clipboard

    Given The user is on the clipboard section
    When Writes "hola" in the input message
    And Refresh the clipboard
    Then The content should be "hola"