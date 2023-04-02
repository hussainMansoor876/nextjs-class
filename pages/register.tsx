import Link from 'next/link'
import { Button, Form, Input, message } from 'antd'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../store/actions/authActions'

const Register = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const users: string[] = useSelector((state: any) => state?.authReducer.users?.map((v: any) => v?.email))

    const onFinish = (values: any) => {
        if (!values?.fullName || !values?.email || !values?.password) {
            return message.error('All Fields Reuired!')
        }
        else if (values?.password?.length < 6) {
            return message.error('Password must be atleast 6 characters!')
        }

        values.email = values?.email?.toLowerCase()

        if (users?.indexOf(values?.email) !== -1) {
            return message.error('User Already Exist with this Email!')
        }

        dispatch(registerUser(values))

        message.success('Successfully Registered!')
        router.push('/login')
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <>
            <div className='auth-page flex-box'>
                <div className='form-card flex-box'>
                    <h1>Register</h1>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ width: '100%' }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please input your Full Name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" block>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                    <p>Already have an Account? <Link href={'/login'}>Register</Link></p>
                </div>
            </div>
        </>
    )
}

export default Register