import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { supabase } from "../supabase";
import { AuthLayout } from "../components/Layout/AuthLayout";

export interface Props {}

export function ResetPassword(props: Props) {
  const resetPassword = async (values: any) => {
    const { data, error } = await supabase.auth.updateUser({
      //email: "swifttask@yopmail.com",
      password: values.password,
    });
    console.log(
      "🚀 ~ file: ResetPassword.tsx:13 ~ resetPassword ~ data, error:",
      data,
      error
    );
  };

  return (
    <AuthLayout>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={resetPassword}
      >
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
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
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
      </Form>
    </AuthLayout>
  );
}
