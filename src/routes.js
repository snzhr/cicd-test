import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { QuestionPage } from "./pages/QuestionPage.jsx";
import { Questions } from "./components/Questions.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Questions />,
      },
      {
        path: "questions/:id",
        element: <QuestionPage />,
      },
    ],
  },
]);
