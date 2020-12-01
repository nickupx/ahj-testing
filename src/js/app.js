import CardWidget from './widget'

const widget = new CardWidget()
widget.init()

widget.form.addEventListener('submit', (e) => {
  e.preventDefault()
  widget.validate()
})
