import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import styled from "@emotion/styled";
import Title from "antd/es/typography/Title";
import { Flex } from "../components/Flex";
import { H } from "../components/text/H";
import { B } from "../components/text/B";
import { AuthLayout } from "../components/Layout/AuthLayout";

export interface Props {}

export function SignIn(props: Props) {
  const signIn = async (values: any) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: values.username,
      password: values.password,
    });
    console.log("🚀 ~ file: App.tsx:19 ~ login ~ data, error:", data, error);
  };

  return (
    <div className="App">
      <AuthLayout>
        <Form
          layout="vertical"
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={signIn}
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
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link to="/forgot-password">Forgot password</Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign In
            </Button>
          </Form.Item>

          <Form.Item>
            Don't have an account? <Link to="/sign-up">register now!</Link>
          </Form.Item>
        </Form>
      </AuthLayout>
    </div>
  );
}
