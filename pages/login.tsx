import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Input, message } from 'antd'
import { loginUser } from '../store/actions/authActions'
import { User } from '../utils/interfaces'

const Login = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const users: User[] = useSelector((state: any) => state?.authReducer.users)

    const onFinish = (values: User) => {
        if (!values?.email || !values?.password) {
            return message.error('All Fields Reuired!')
        }
        else if (values?.password?.length < 6) {
            return message.error('Password must be atleast 6 characters!')
        }

        values.email = values?.email?.toLowerCase()

        for (var u of users) {
            if (u?.email === values?.email && u?.password === values?.password) {
                dispatch(loginUser(u))
                message.success('Successfully LoggedIn!')
                return router.push('/')
            }
        }

        message.error('Oops No user found with this email and password!')
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <>
            <div className='auth-page flex-box'>
                <div className='form-card flex-box'>
                    <h1>Login</h1>
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
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                        >
                            <Input className='form-input' />
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
                    <p>Don't have an Account? <Link href={'/register'}>Register</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login