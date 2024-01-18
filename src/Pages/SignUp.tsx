import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import { AuthLayout } from "../components/Layout/AuthLayout";

export interface Props {}

export function SignUp(props: Props) {
  // const signUp = async (values: any) => {
  //   console.log("🚀 ~ file: SignUp.tsx:10 ~ signUp ~ values:", values);
  //   let { data, error } = await supabase.auth.signUp({
  //     email: "someone@yopmail.com",
  //     password: "gOgLCuOQkHWKakbPjRBF",
  //   });
  //   console.log("🚀 ~ file: App.tsx:19 ~ login ~ data, error:", data, error);
  // };

  const signUp = async (values: any) => {
    let { data, error } = await supabase.auth.signUp({
      email: values.email,
      //"meone@yopmail.com",
      password: values.password,
      //"gOgLCuOQkHWKakbPjRBF",
    });
    console.log("🚀 ~ file: App.tsx:19 ~ login ~ data, error:", data, error);
  };
  return (
    <>
      {/* <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={signUp}
      >
        Sign Up
      </Button> */}
      <AuthLayout>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={signUp}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </AuthLayout>
    </>
  );
}
