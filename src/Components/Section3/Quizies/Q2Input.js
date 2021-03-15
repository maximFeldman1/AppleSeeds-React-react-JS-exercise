function inputSomething(event) {
    console.log(event.target.value)
}

const Q2Input = () => {
  return (
    <div>
      <input type="text" onInput={inputSomething}/>
    </div>
  );
};
export default Q2Input;
