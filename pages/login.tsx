import { Icon } from '@iconify/react';

export default function Login() {
    // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    // if (typeof window !== "undefined" && isAuthenticated) {
    //     router.push("/");
    // }
    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="groupware-logo">
                        <Icon className='logo' icon="carbon:logo-github" color="#005314" height="130" />
                    </div>
                    <form className='login-form' action="" method="POST">
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" name='email' required minLength={5} autoFocus />
                        <label htmlFor="password">パスワード</label>
                        <input type="password" name='password' required minLength={8} />
                        <button type='submit'>ログイン</button>
                    </form>
                    <p>
                        <a href='password-reset'>パスワード忘れた方はこちら</a>
                    </p>
                </div>
            </div>
        </>
    )
}