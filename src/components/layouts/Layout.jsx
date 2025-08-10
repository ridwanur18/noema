export default function Layout(props) {
    const { children } = props;

    return (
        <>
            <header>
                <h1 className="text-gradient">noema</h1>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <small>Created by</small>
                <a target="_blank" href="https://github.com/ridwanur18">
                    <img alt="pfp" src="https://avatars.githubusercontent.com/u/60860344?v=4" />
                    <p>@ridwanur18</p>
                    <i className="fa-brands fa-github"></i>
                </a>
            </footer>
        </>
    )
}