const Box = (props) => {
  //  Write your code here.
  const { text } = props;
  return <div className="{text}">{text}</div>;
};

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes</h1>
    <Box text="small" />
    <Box text="medium" />
    <Box text="large" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
