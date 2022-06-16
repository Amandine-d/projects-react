import React, { useState } from "react";
import Button from './components/UI/Button/Button';

const HowToApp = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div>
      <h1>Hi!</h1>
      {showParagraph && <p>This is new</p>}
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
};

export default HowToApp;
