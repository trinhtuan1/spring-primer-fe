import { Button, Form, Input, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";
import { UserDetailModel } from "../models/AuthModel";
import { genderEnum } from "../models/common";

const UserList = () => {
  const [form] = Form.useForm();

  const data: UserDetailModel[] = [
    {
      userId: "system@co.jp",
      userName: "System Administrator",
      birthday: moment("01/01/2000"),
      age: "21",
      gender: genderEnum.MALE,
    },
    {
      userId: "system1@co.jp",
      userName: "System Haha Administrator",
      birthday: moment("01/01/2002"),
      age: "23",
      gender: genderEnum.FEMALE,
    },
  ];

  const columns: ColumnsType = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: () => <Button type="primary">Detail</Button>,
    },
  ];

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className="user-list mt-2 mb-2">
      <Form form={form} onFinish={onFinish} className="d-flex flex-row">
        <Form.Item name="userId" label="User ID" className="ms-2">
          <Input />
        </Form.Item>
        <Form.Item name="userName" label="User Name" className="ms-2">
          <Input />
        </Form.Item>
        <Button type="primary" className="ms-2">
          search
        </Button>
        <Button type="primary" className="ms-2">
          search(REST)
        </Button>
      </Form>
      <Table<any> columns={columns} dataSource={data}></Table>
    </div>
  );
};

export default UserList;
