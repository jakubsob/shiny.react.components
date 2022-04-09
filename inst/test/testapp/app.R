library(shiny)
library(shiny.react)
library(react.components)

shinyApp(
  ui = fluidPage(
    Button(label = "Button Primary Large", primary = TRUE, size = "large"),
    Button(label = "Button Small", primary = FALSE, size = "small"),
    Button.shinyInput(inputId = "button", label = "Button input", primary = TRUE),
    textOutput("buttonOutput"),
    Header(user = "John"),
    Page()
  ),
  server = function(input, output) {
    output$buttonOutput <- renderText({
      input$button
    })
  }
)
