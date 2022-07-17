import { ReactElement } from "react"
import { Icon } from '@iconify/react';
import { useRouter } from "next/router";
import { useState } from "react"

type LayoutProps = Required<{
    readonly children: ReactElement
}>


export default function Layout({ children }: LayoutProps) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false) // 仮
    // const dispatch = useDispatch();
  return (
    <>
        <div className={isAuthenticated ?  "wrapper" : "bg-green wrapper"}>
            <div className="header-wrapper">
                <div className="header-container">
                    <header>
                        <h2 className="header-logo">Groupware</h2>
                    </header>
                </div>
            </div>
            <div className="main-wrapper">
                <div className={isAuthenticated ? "sidebar" : "display-none sidebar"}>
                    <ul>
                        <li>
                            <a href="#">イベント
                                <Icon className="sidebar-icon" icon="simple-line-icons:calender" color="black" height="25" />
                            </a>
                        </li>
                        <li>
                            <a href="#">お知らせ
                            <Icon className="sidebar-icon" icon="emojione-monotone:newspaper" color="black" height="25" />
                            </a>
                        </li>
                        <li>
                            <a href="#">グループ
                            <Icon className="sidebar-icon" icon="clarity:group-line" color="black" height="25" />
                            </a>
                        </li>
                        <li>
                            <a href="#">FAQ
                            <Icon className="sidebar-icon" icon="akar-icons:chat-question" color="black" height="25" />
                            </a>
                        </li>
                        <li>
                            <a href="#">設定
                                <Icon className="sidebar-icon" icon="ant-design:setting-outlined" color="black" height="25" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <main>{children}</main>
                </div>
            </div>
            <div className="footer-wrapper">
                <footer>
                    <div className="footer-logo">Groupware</div>
                </footer>
            </div>  
        </div>
    </>
  )
}