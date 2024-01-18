import * as React from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { supabase } from "../supabase";
import { AuthLayout } from "../components/Layout/AuthLayout";

export interface Props {}

export function ForgotPassword(props: Props) {
  const resetPassword = async (values: { email: string }) => {
    let { data, error } = await supabase.auth.resetPasswordForEmail(
      values.email
    );
    console.log("🚀 ~ file: App.tsx:19 ~ login ~ data, error:", data, error);
  };

  return (
    <AuthLayout>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={resetPassword}
      >
        <p>Recover your Password</p>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Reset Password
          </Button>
        </Form.Item>

        <Form.Item>Back to Login</Form.Item>
      </Form>
    </AuthLayout>
  );
}
