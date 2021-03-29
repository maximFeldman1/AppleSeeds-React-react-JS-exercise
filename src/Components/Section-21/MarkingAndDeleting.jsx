import React, { useState } from "react";

const initialState = ["one", "two", "three", "four", "five"];
const CheckBox = () => {
  const [checkBox, setCheckBox] = useState(
    initialState.map((item) => ({
      value: item,
      checked: false,
    }))
  );

  const handleAllCheck = (index) => {
    const newItem = [...checkBox];
    newItem[index].checked = !newItem[index].checked;
    setCheckBox(newItem);
  };

  const onDelete = () => {
    const newItem = checkBox.filter((item) => !item.checked);
    console.log(newItem);
    setCheckBox(newItem);
  };

  const onReset = () => {
      setCheckBox(initialState.map(item=>({
          value:item,
          checked:false
      })))
  }

  return (
    <div>
      <div>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onReset}>Reset</button>
      </div>

      <div>
        {checkBox.map((item, index) => (
          <li key={index}>
            <input
              name={item.value}
              type="checkbox"
              checked={item.checked}
              onChange={() => handleAllCheck(index)}
            />
            {item.value}
          </li>
        ))}
      </div>
    </div>
  );
};

export default CheckBox;
