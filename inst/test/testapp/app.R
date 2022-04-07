library(shiny)
library(shiny.react)
library(react.components)

shinyApp(
  ui = fluidPage(
    Button(label = "Button 1")
  ),
  server = function(input, output) {
    return()
  }
)
