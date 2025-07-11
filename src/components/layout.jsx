import '../styles/layout.css';

function Header({ children }) {
    return (
        <>
            <header>
                <h1>{children}</h1>
            </header>
        </>
    );
}

function Footer({ children }) {
    return (
        <footer>
            <p>{children}</p>
        </footer>
    );
}

export { Header, Footer };
