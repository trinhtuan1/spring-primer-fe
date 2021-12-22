import { Button, Form, Input, Radio } from "antd";
import React from "react";
import { UserDetailModel } from "../models/AuthModel";

const SignUp = () => {
  const [form] = Form.useForm();

  const options = [
    { value: "male", label: "Male", id: 1 },
    { value: "female", label: "Female", id: 2 },
  ];

  const onFinish = (values: UserDetailModel) => {
    console.log(values);
  };

  return (
    <div className="signup">
      <h1 className="text-center">User Signup</h1>
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item label="User ID" name="userId">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input />
        </Form.Item>
        <Form.Item label="User Name" name="userName">
          <Input />
        </Form.Item>
        <Form.Item label="Birthday" name="birthday">
          <Input />
        </Form.Item>
        <Form.Item label="Age" name="age">
          <Input />
        </Form.Item>
        <Form.Item name="gender">
          <Radio.Group options={options} defaultValue={"male"}></Radio.Group>
        </Form.Item>
        <Button type="primary" block className="mb-2">
          signup
        </Button>
        <Button type="primary" block>
          signup(REST)
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
