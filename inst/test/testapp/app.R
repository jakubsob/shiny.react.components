library(shiny)
library(shiny.react)
library(react.components)


shinyApp(
  ui = fluidPage(
    Header(user = "John"),
    fluidRow(
      column(
        6,
        Button.shinyInput(inputId = "button", label = "Button input", primary = TRUE),
      ),
      column(
        2,
        textOutput("buttonOutput"),
      )
    ),
    fluidRow(
      column(
        6,
        PersonaInput.shinyInput(inputId = "persona", placeholder = "Write a name", primary = TRUE)
      ),
      column(
        2,
        textOutput("personaOutput"),
      )
    )
  ),
  server = function(input, output) {
    output$buttonOutput <- renderText({
      input$button
    })

    output$personaOutput <- renderText({
      input$persona
    })
  }
)
