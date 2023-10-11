import Footer from '@/components/Footer';
import {
  LockOutlined,
  MobileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import {useEmotionCss} from '@ant-design/use-emotion-css';
import {Helmet, history, useModel} from '@umijs/max';
import {message, Tabs} from 'antd';
import React, {useState} from 'react';
import {flushSync} from 'react-dom';
import Settings from '../../../../config/defaultSettings';
import {IconFont} from "@/utils";
import {
  loginByEmailUsingPOST,
  sendMsgUsingPOST,
  userLoginUsingPOST
} from "@/services/lucky-oj-backend/user/userController";

const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const {initialState, setInitialState} = useModel('@@initialState');

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const goAuth = async () => {
    history.push('https://gitee.com/oauth/authorize?client_id=060ff92c4fcb5790d4aabcd02924e10e7ea4fb78a84b7db58455fb7c05323724&redirect_uri=https://antares.cool/api/member/oauth2.0/gitee/success&response_type=code');
  }

  const ActionIcons = () => {
    const langClassName = useEmotionCss(({token}) => {
      return {
        marginLeft: '8px',
        color: 'rgba(0, 0, 0, 0.2)',
        fontSize: '24px',
        verticalAlign: 'middle',
        cursor: 'pointer',
        transition: 'color 0.3s',
        '&:hover': {
          color: token.colorPrimaryActive,
        },
      };
    });
    return (
      <>
        <IconFont onClick={goAuth} type="icon-gitee" className={langClassName}/>
        <a onClick={() => {
          history.push('/user/register')
        }} style={{float: 'right', color: '#1677ff', cursor: 'pointer'}}>
          立即注册
        </a>
      </>
    );
  };

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const handleSubmit = async (values: any) => {
    try {
      let res: any = {};
      if (type === 'account') {
        // 登录
        res = await userLoginUsingPOST({
          ...values,
        });
      } else if (type === 'email') {
        res = await loginByEmailUsingPOST({
          ...values,
        });
      }
      if (res.data) {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        // 登陆成功后处理
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        // 保存登陆状态
        setInitialState({
          currentUser: res.data,
        })
        return;
      } else {
        console.log(res);
      }
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div className={containerClassName}>
      <Helmet>
        <title>{'登录'}- {Settings.title}</title>
      </Helmet>
      <div style={{flex: '1', padding: '32px 0',}}>
        <LoginForm
          contentStyle={{minWidth: 280, maxWidth: '75vw',}}
          logo={<img alt="logo" src="/logo.svg"/>}
          title="Lucky OJ"
          subTitle={'Lucky OJ 是由LuckyOne自制的在线判题系统'}
          initialValues={{autoLogin: true,}}
          actions={['其他登录方式 :', <ActionIcons key="icons"/>]}
          onFinish={async (values) => {
            await handleSubmit(values as any);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '账户密码登录',
              },
              {
                key: 'email',
                label: '邮箱登录',
              },
            ]}
          />

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
            </>
          )}
          {type === 'email' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined/>,
                }}
                name="email"
                placeholder={'请输入邮箱！'}
                rules={[
                  {
                    required: true,
                    message: '邮箱是必填项！',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined/>,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'请输入验证码！'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'秒后重新获取'}`;
                  }
                  return '获取验证码';
                }}
                name="code"
                phoneName="email"
                rules={[
                  {
                    required: true,
                    message: '验证码是必填项！',
                  },
                ]}
                onGetCaptcha={async (email) => {
                  const res = await sendMsgUsingPOST({email})
                  if (res.code === 200) {
                    message.success('获取验证码成功！')
                    return;
                  }
                  throw new Error('验证码获取错误！')
                }}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码 ?
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};
export default Login;
