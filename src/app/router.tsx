import { createBrowserRouter } from "react-router";
import LpCmo from "../imports/LpCmo";
import LpPapocaLlm from "../imports/LpPapocaLlm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LpPapocaLlm />,
  },
  {
    path: "/webinar-GEO",
    element: <LpPapocaLlm />,
  },
  {
    path: "/llm",
    element: <LpPapocaLlm />,
  },
  {
    path: "/cmo-summit",
    element: <LpCmo />,
  },
]);
