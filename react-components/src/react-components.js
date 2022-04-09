import Button from './components/Button'
import Header from './components/Header'
import Page from './components/Page'
const { ButtonAdapter } = require('@/shiny.react')

const ButtonInput = ButtonAdapter(Button);

window.jsmodule = {
  ...window.jsmodule,
  '@/react-components': { Button, Header, Page },
  '@/react-components-inputs': { ButtonInput }
};
