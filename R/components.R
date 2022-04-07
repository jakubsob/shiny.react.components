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
