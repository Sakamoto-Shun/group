import { Icon } from '@iconify/react';

export default function PasswordReset() {
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
                        <button type='submit'>パスワード再設定のリンクを送信</button>
                    </form>
                    <p>
                        <a href='login'>ログインはこちら</a>
                    </p>
                </div>
            </div>
        </>
    )
}