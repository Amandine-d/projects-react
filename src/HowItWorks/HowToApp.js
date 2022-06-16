import React, { useCallback, useState } from "react";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from './components/UI/Button/Button';

const HowToApp = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
  //[]
  //This callback will never change, the same component will be reused on reload
  //Insure that all the props are comparable on memo

  //Whn a function is defined, js locks in all the variables we are using in there : allowtoggle. 
  //Pb [] use the old value
  //[allowToggle] => when has a new value, we re create the function and allow us to use the new value

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div>
      <h1>Hi!</h1>
      <DemoOutput show={showParagraph} />
      {/* {showParagraph && <p>This is new</p>} */}
      <Button onClick={allowToggleHandler}>Allow Paragraph</Button>

      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default HowToApp;
