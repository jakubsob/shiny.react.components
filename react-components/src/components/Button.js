function Button({label = "Label"}) {
  const style = {
    padding: "20px",
  }
  return (
    <button style={style}>{label}</button>
  )
}

export default Button;
