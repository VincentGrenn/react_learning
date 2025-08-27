import ReactLogo from "../assets/react.svg";

function Header() {
    return (
        <header id="MainHeader">
            <img id="ReactLogo" src={ ReactLogo } alt="React Logo"></img>
            <h1>React Learning</h1>
            <p>A sandbox for me.</p>
            <hr></hr>
        </header>
    );
}

export default Header;