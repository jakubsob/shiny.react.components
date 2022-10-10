import Button from './components/Button'
import Header from './components/Header'
import Page from './components/Page'
import PersonaInput from './components/PersonaInput'
const { InputAdapter, ButtonAdapter } = require('@/shiny.react')

const ButtonInput = ButtonAdapter(Button);
const PersonaInputShiny = InputAdapter(PersonaInput, (value, setValue) => ({
  onChange: (e) => setValue(e.target.value),
}));

window.jsmodule = {
  ...window.jsmodule,
  '@/react-components': { Button, Header, Page },
  '@/react-components-inputs': {
    ButtonInput,
    PersonaInput: PersonaInputShiny
  }
};
