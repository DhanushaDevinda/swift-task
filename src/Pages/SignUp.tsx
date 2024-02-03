import { Button, Checkbox, Form, Input } from "antd";
import { supabase } from "../supabase";
import styled from "@emotion/styled";

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
export function SignUp() {
  const signUp = async (values: any) => {
    let { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <StyledForm
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={signUp}
    >
      <h2>Sign Up</h2>

      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input className="username" placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input className="email" placeholder="Email" />
      </Form.Item>
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
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>I Agree with Terms and Policy</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-button">
          Sign Up
        </Button>
      </Form.Item>
    </StyledForm>
  );
}

//email:"meone@yopmail.com",
//password:"gOgLCuOQkHWKakbPjRBF",
