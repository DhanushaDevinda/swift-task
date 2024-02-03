import { Button, Form, Input } from "antd";
import { supabase } from "../supabase";
import styled from "@emotion/styled";
import { AuthLayout } from "../components/Layout/AuthLayout";

const StyledForm = styled(Form)`
  width: 300px;
  padding: 30px;
  margin: 50px auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .email,
  .password,
  .username {
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

export function ResetPassword() {
  const resetPassword = async (values: any) => {
    const { data, error } = await supabase.auth.updateUser({
      password: values.password,
    });
  };

  return (
    <AuthLayout>
      <StyledForm
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={resetPassword}
      >
        <h2>Reset Password</h2>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input className="password" type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            className="password"
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Reset Password
          </Button>
        </Form.Item>
      </StyledForm>
    </AuthLayout>
  );
}
