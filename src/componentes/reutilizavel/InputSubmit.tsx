function InputSubmit(props: { text: string }) {
  return (
    <input className="SubmitLogin" type="submit" value={props.text} />
  );
}

export default InputSubmit;