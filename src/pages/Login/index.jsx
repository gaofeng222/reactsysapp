import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Dialog } from "antd-mobile";
import { login, logout, setUser } from "@/store/modules/userStore";
import { useDispatch } from "react-redux";
import "./index.scss";
const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = () => {
    const values = form.getFieldsValue();

    if (values.name === "admin" && values.password === "123456") {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify({ name: values.name }));
      dispatch(login());
      dispatch(setUser({ name: values.name }));

      navigate("/", { replace: true });
    } else {
      Dialog.alert({
        content: "账户或密码错误",
      });
    }
  };
  return (
    <div className="login-form">
      <h2 className="login-form__title">登 录</h2>
      <Form
        layout="horizontal"
        form={form}
        footer={
          <Button
            block
            type="submit"
            color="primary"
            size="large"
            onClick={onSubmit}
          >
            提交
          </Button>
        }
      >
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            { required: true, message: "姓名不能为空" },
            { min: 2, max: 6, message: "姓名长度在2-6位之间" },
          ]}
        >
          <Input onChange={console.log} placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            { required: true, message: "密码不能为空" },
            { min: 6, max: 12, message: "密码长度在6-12位之间" },
          ]}
        >
          <Input
            onChange={console.log}
            placeholder="请输入密码"
            type="password"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
