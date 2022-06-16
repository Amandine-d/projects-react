import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  return (
    // <p>{props.show ? 'This is new' : ''}</p>
    <MyParagraph>{props.show ? 'This is new' : ''}</MyParagraph>
  );
};

//memo tells react that react should look at the props the compoenent gets et only if the value changes, the component will execute
//Avoids unnecessary rendering

//If we use show={false} in App.js, we use a boolean
//compares props.show === props.previous.show
//works for primitive value

export default React.memo(DemoOutput);
