import Q2 from "./Q2";

function inputSomething(event) {
  console.log(event.target.value)
}

const Q1Input = () => {
  return (
    <div >
      <input type="text" onInput={inputSomething}/>
      <Q2/>
    </div>
  );
};

export default Q1Input;
