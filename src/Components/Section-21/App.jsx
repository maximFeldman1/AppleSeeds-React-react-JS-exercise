import Text from "./React-Hooks/18.1/Text";
import ToDo from "./React-Hooks/18.2/SimpleToDo";
import react from "react";

const items = {
  text:
    "Lorem ipsum dolor,Lorem ipsum ,Lorem ipsum dolor sit amet, consectetur adipisicing..Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quas veniam hic velit enim  elit. Nostrum quas veniam hic velit enimdolor sit amet, consectetur adipisicing elit. Nostrum quas veniam hic velit enim sit amet, consectetur adipisicing elit. Nostrum quas veniam hic velit enim odit nemo dolorum ad exercitationem animi assumend   officiis eius, et provident ea quisquam quibusdam, culpa voluptates!",
  length: 150,
};

export default () => {
  return (
    <div>
      <Text items={items} />
      <ToDo/>
    </div>
  );
};
