import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

function ScrollContextComponent({ children }) {
  const aboutRef = useRef(null);
  const intServiceRef = useRef(null);
  const NRIServiceRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ScrollContext.Provider
      value={{ aboutRef, intServiceRef, NRIServiceRef, teamRef, contactRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useComponent() {
  const context = useContext(ScrollContext);
  if (context === undefined) throw new Error("out the component");
  return context;
}

export default ScrollContextComponent;
