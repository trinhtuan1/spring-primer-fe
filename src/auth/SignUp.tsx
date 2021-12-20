import { Form, Input, Radio } from "antd";
import React from "react";

const SignUp = () => {
  const options = [
    { value: "male", label: "Male", id: 1 },
    { value: "female", label: "Female", id: 2 },
  ];

  return (
    <div className="signup">
      <h1>User Signup</h1>
      <Form>
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
      </Form>
    </div>
  );
};

export default SignUp;
