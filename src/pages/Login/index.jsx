import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Dialog, Toast } from "antd-mobile";
import { fetchLogin, logout, setUser, login } from "@/store/modules/userStore";
import { useDispatch } from "react-redux";
import "./index.scss";
const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async () => {
    const values = form.getFieldsValue();
    const result = await dispatch(fetchLogin(values));
    const { data, error } = result;
    if (error) {
      Dialog.alert({
        content: error.message,
        confirmText: "确定",
      });
    } else {
      localStorage.setItem("isLoggedIn", data.isLoggedIn);
      localStorage.setItem("user", JSON.stringify({ name: values.name }));
      dispatch(setUser({ name: values.name }));
      dispatch(login(data.isLoggedIn));
      navigate("/", { replace: true });
      Toast.show({
        content: "登录成功",
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
            loading={"auto"}
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
