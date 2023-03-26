import { Button, Checkbox, Form, Input ,Image} from "antd";
// import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function Login(){
      const navigate = useNavigate()

      // function handClick(){ navigate("/")}
      const onFinish = async (values) => {
        try{
          const res= await axios.post("http://localhost:5000/auth/login" , values);
          navigate("/")
          console.log(res.data);
        }
        catch(err){
          console.log(err.response.data);
        }
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log("error");
      }



      
      return(

            <div className="flex flex-col md:flex-row">
              <div className="flex intial md:w-2/3 md:p-0 p-4  place-content-center items-center">
              <Image
              width={300}
              src="mk.jpg"
            />
              </div>
                <div className="bg-blue-400 w-full md:h-[100vh] h-[60.5vh] flex place-content-center items-center">
                  <Form  className="bg-white rounded-md p-10  flex flex-col  place-content-center items-center"
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    style={{
                      maxWidth: 600,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      className=""
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{
                        offset: 2,
                        span: 32,
                      }}
                    >
                      <Checkbox className="">Remember</Checkbox>
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 3,
                        span: 16,
                      }}
                    >
                      <Button className="bg-blue-300" type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
            </div>
    ) }
export default Login;
