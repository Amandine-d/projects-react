import { useEffect, useState } from "react";

let globalState = {};

let listeners = [];

let actions = {};

const useStore = () => {
  const setState = useState(globalState)[1];
  //Only interested in the second value

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter(li => li !== setState);
    }
  }, [setState]);

  return (

  );
};