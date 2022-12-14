import './headerStyles.css'

export default function Header() {
    return(
        <div className="headerContainer shadow">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl"
                        href="/">
                        Social App
                    </a>
                </div>
                <div className="navbar-center"></div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}