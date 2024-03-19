import {Footer} from '@/components';
import {
    AlipayCircleOutlined,
    LockOutlined,
    TaobaoCircleOutlined,
    UserOutlined,
    WeiboCircleOutlined,
} from '@ant-design/icons';
import {LoginForm, ProFormText,} from '@ant-design/pro-components';
import {Helmet, history, useModel} from '@umijs/max';
import {Alert, message, Tabs} from 'antd';
import {createStyles} from 'antd-style';
import React, {useState} from 'react';
import Settings from '../../../../config/defaultSettings';
import {userRegister} from "@/services/yixianapi-backend/userController";

const useStyles = createStyles(({token}) => {
    return {
        action: {
            marginLeft: '8px',
            color: 'rgba(0, 0, 0, 0.2)',
            fontSize: '24px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            transition: 'color 0.3s',
            '&:hover': {
                color: token.colorPrimaryActive,
            },
        },
        lang: {
            width: 42,
            height: 42,
            lineHeight: '42px',
            position: 'fixed',
            right: 16,
            borderRadius: token.borderRadius,
            ':hover': {
                backgroundColor: token.colorBgTextHover,
            },
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'auto',
            backgroundImage:
                "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            backgroundSize: '100% 100%',
        },
    };
});
const ActionIcons = () => {
    const {styles} = useStyles();
    return (
        <>
            <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.action}/>
            <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.action}/>
            <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.action}/>
        </>
    );
};
const LoginMessage: React.FC<{
    content: string;
}> = ({content}) => {
    return (
        <Alert
            style={{
                marginBottom: 24,
            }}
            message={content}
            type="error"
            showIcon
        />
    );
};
const Register: React.FC = () => {
    const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
    const [type, setType] = useState<string>('account');
    const {initialState, setInitialState} = useModel('@@initialState');
    const {styles} = useStyles();
    const handleSubmit = async (values: API.UserRegisterDTO) => {
        // try {
        // 注册
        const res = await userRegister({
            ...values,
        });
        if (res.data) {
            message.success("注册成功");
            const urlParams = new URL(window.location.href).searchParams;
            history.push(urlParams.get('redirect') || '/user/login');
            return;
        } else {
            message.error(res.message);
        }
        // } catch (error) {
        //     const defaultLoginFailureMessage = '注册失败，请重试！';
        //     console.log(error);
        //     message.error(defaultLoginFailureMessage);
        // }
    };
    const {status, type: loginType} = userLoginState;
    return (
        <div className={styles.container}>
            <Helmet>
                <title>
                    {'注册'}- {Settings.title}
                </title>
            </Helmet>
            <div
                style={{
                    flex: '1',
                    padding: '32px 0',
                }}
            >
                <LoginForm
                    submitter={{
                        searchConfig: {
                            submitText: "注册"
                        }
                    }}
                    contentStyle={{
                        minWidth: 280,
                        maxWidth: '75vw',
                    }}
                    logo={<img alt="logo" src="/logo.svg"/>}
                    title="API 开放平台"
                    subTitle={'提供 API 接口'}
                    initialValues={{
                        autoLogin: true,
                    }}
                    onFinish={async (values) => {
                        await handleSubmit(values as API.UserRegisterDTO);
                    }}
                >
                    <Tabs
                        activeKey={type}
                        onChange={setType}
                        centered
                        items={[
                            {
                                key: 'account',
                                label: '账户密码注册',
                            },
                        ]}
                    />

                    {status === 'error' && loginType === 'account' && (
                        <LoginMessage content={'错误的用户名和密码(Admin/ant.design)'}/>
                    )}
                    {type === 'account' && (
                        <>
                            <ProFormText
                                name="userAccount"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined/>,
                                }}
                                placeholder={'请输入用户名'}
                                rules={[
                                    {
                                        required: true,
                                        message: '用户名是必填项！',
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name="userPassword"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined/>,
                                }}
                                placeholder={'请输入密码'}
                                rules={[
                                    {
                                        required: true,
                                        message: '密码是必填项！',
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name="checkPassword"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined/>,
                                }}
                                placeholder={'请确认密码'}
                                rules={[
                                    {
                                        required: true,
                                        message: '确认密码是必填项！',
                                    },
                                ]}
                            />
                        </>
                    )}
                    <div>
                        已有账号<a href={"/user/login"}>登录</a>
                    </div>
                </LoginForm>
            </div>
            <Footer/>
        </div>
    );
};
export default Register;
