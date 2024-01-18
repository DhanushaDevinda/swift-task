import { Button } from "antd";
import "./App.css";
import NavigationRoutes from "./Routes";
import { supabase } from "./supabase";

function App() {
  const signUp = async () => {
    let { data, error } = await supabase.auth.signUp({
      email: "someone@yopmail.com",
      password: "gOgLCuOQkHWKakbPjRBF",
    });
    console.log("🚀 ~ file: App.tsx:19 ~ login ~ data, error:", data, error);
  };

  const login = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: "somsseone@yopmail.com",
      password: "gOgLCuOQkHWKakbPjRBF",
    });
    console.log("🚀 ~ file: App.tsx:19 ~ login ~ data, error:", data, error);
  };

  const getAllTask = async () => {
    let { data: tasks, error } = await supabase.from("tasks").select("*");
    console.log("🚀 ~ file: App.tsx:19 ~ login ~ data, error:", tasks, error);
  };

  return (
    <div className="App">
      <NavigationRoutes />

      {/* <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={signUp}
      ></Button> */}
    </div>
  );
}

export default App;

//DfaxZ47s8PJpwVuI
