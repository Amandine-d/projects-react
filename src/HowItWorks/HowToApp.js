import React, { useCallback, useState } from "react";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from './components/UI/Button/Button';

const HowToApp = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  
  const toggleParagraphHandler = useCallback (() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);
  //[]
  //This callback will never change, the same component will be reused on reload
  //Insure that all the props are comparable on memo

  return (
    <div>
      <h1>Hi!</h1>
      <DemoOutput show={showParagraph} />
      {/* {showParagraph && <p>This is new</p>} */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default HowToApp;
