import Card from "./AllCards";

function App(){
  return (
    <div>
      <Card
        source={
          "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk"
        }
        title={"lorem"}
        description={"lorem picsum"}
        share={"https://picsum.photos/"}
        explore={"https://unsplash.com/"}
      />

      <Card
        source={
          "https://images.unsplash.com/photo-1615739137453-bcadd839a913?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        }
        title={"lorem"}
        description={"lorem picsum"}
        share={"https://picsum.photos/"}
        explore={"https://unsplash.com/"}
      />

      <Card
        source={
          "https://images.unsplash.com/photo-1615752481822-b558d03f18af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80"
        }
        title={"lorem"}
        description={"lorem picsum"}
        share={"https://picsum.photos/"}
        explore={"https://unsplash.com/"}
      />
    </div>
  );
};

export default App;
