dependency <- function() {
  htmltools::htmlDependency(
    name = "react-components",
    version = "0.1.0",
    package = "react.components",
    src = "www",
    script = "react-components.js"
  )
}

component <- function(name) {
  function(...) {
    shiny.react::reactElement(
      module = "@/react-components",
      name = name,
      props = shiny.react::asProps(...),
      deps = dependency()
    )
  }
}

#' @export
Button <- component("Button")

#' @export
Header <- component("Header")

#' @export
Page <- component("Page")

input <- function(name, defaultValue) {
  function(inputId, ..., value = defaultValue) {
    shiny.react::reactElement(
      module = "@/react-components-inputs",
      name = name,
      props = shiny.react::asProps(inputId = inputId, ..., value = value),
      deps = dependency()
    )
  }
}

#' @export
PersonaInput.shinyInput <- input("PersonaInput", NULL)

button <- function(name) {
  function(inputId, ...) {
    shiny.react::reactElement(
      module = "@/react-components-inputs", name = name,
      props = shiny.react::asProps(inputId = inputId, ...),
      deps = dependency()
    )
  }
}

#' @export
Button.shinyInput <- button("ButtonInput")
