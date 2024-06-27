function InputSubmit(props: { text: string }) {
  return (

    <input className="SubmitLogin" type="submit" value={props.text} onClick={() => window.location.href = `/lista`} />
  );
}

export default InputSubmit;