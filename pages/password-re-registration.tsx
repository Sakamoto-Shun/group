import { Icon } from '@iconify/react';

export default function PasswordReRegistration() {
    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="groupware-logo">
                        <Icon className='logo' icon="carbon:logo-github" color="#005314" height="130" />
                    </div>
                    <form className='login-form' action="" method="POST">
                        <label htmlFor="password1">新しいパスワード</label>
                        <input type="password" name='password1' required minLength={8} autoFocus />
                        <label htmlFor="password">パスワード再入力</label>
                        <input type="password" name='password2' required minLength={8} />
                        <button type='submit'>パスワード再設定</button>
                    </form>
                    <p>
                        <a href='password-reset'>パスワードリセットメール再送信</a>
                    </p>
                </div>
            </div>
        </>
    )
}