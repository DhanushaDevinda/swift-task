import { Button, Checkbox, Form, Input, message } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import styled from "@emotion/styled";
import { AuthLayout } from "../components/Layout/AuthLayout";
import { useNavigate } from "react-router-dom";

const StyledForm = styled(Form)`
  width: 300px;
  padding: 30px;
  margin: 50px auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .email,
  .password {
    width: 100%;
    padding: 6px 20px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .login-button {
    width: 100%;
    background-color: #4caf50;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #45a049 !important;
    }
  }
`;

export function SignIn() {
  const navigate = useNavigate();
  const signIn = async (values: any) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: values.username,
      password: values.password,
    });
    if (error) {
      message.error("Invalid email or password");
      navigate("/sign-in");
    } else {
      message.success("Successfully logged in");
      navigate("/board");
    }
  };

  return (
    <AuthLayout>
      <StyledForm
        layout="vertical"
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={signIn}
      >
        <h2>Welcome Back</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input className="email" type="email" placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input className="password" type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link to="/forgot-password">Forgot password</Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Sign In
          </Button>
        </Form.Item>

        <Form.Item>
          Don't have an account? <Link to="/sign-up">register now!</Link>
        </Form.Item>
      </StyledForm>
    </AuthLayout>
  );
}
