import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
import Board from "./components/Board";
import { ResetPassword } from "./Pages/ResetPassword";
import { ForgotPassword } from "./Pages/ForgotPassword";

export default function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/">
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />

          <Route path="board" element={<Board />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
