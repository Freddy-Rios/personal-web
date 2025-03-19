import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
Note the differnce in the way that the web page is rendered which
version is better? 
is there a differnce?
*/
