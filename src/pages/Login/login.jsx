import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.less";
const Login = () => {
  const history = useNavigate();

  const onFinish = (values) => {
    const { username, password } = values;

    if (username === "admin" && password == "123") {
      console.log("Yes");
      sessionStorage.setItem("isLogin", true);
      setTimeout(() => {
        sessionStorage.removeItem("isLogin");
      }, 60 * 60 * 1000);
      history("/user/lists");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.mainFormLogin}>
      <h4>登录</h4>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
