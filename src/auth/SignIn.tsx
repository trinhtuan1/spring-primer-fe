import { Button, Form, Input } from "antd";
import React from "react";
import { SigninFormModel } from "../models/AuthModel";

const SignIn = () => {
  const [form] = Form.useForm();

  const onFinish = (values: SigninFormModel) => {
    console.log(values);
  };

  return (
    <div className="signin">
      <h1 className="text-center mt-5">Login</h1>
      <div className="signin-container">
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="userId" className="mb-2">
            <Input placeholder="User ID" />
          </Form.Item>
          <Form.Item name="password" className="mb-2">
            <Input placeholder="Password" />
          </Form.Item>
          <div className="signin-buttons">
            <Button htmlType="submit" type="primary">
              Login
            </Button>
            <Button type="link">Signup</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
