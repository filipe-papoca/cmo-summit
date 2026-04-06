import { createBrowserRouter } from "react-router";
import LpCmo from "../imports/LpCmo";
import LpPapocaLlm from "../imports/LpPapocaLlm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LpCmo />,
  },
  {
    path: "/llm",
    element: <LpPapocaLlm />,
  },
]);
