import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <><header>
                <nav className="navbar">
                    <div className="navbar-brand">
                        <a href="/">
                            <img className="logo" src={"static/images/logo.svg"}/>
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <ul>
                            <a className="navbar-item" href="/"><i data-feather="search"></i></a>
                            <a className="navbar-item" href="/"><i data-feather="log-in"></i></a>
                            <a className="navbar-item" href="/"><i data-feather="shopping-bag"></i></a>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <h1>Welcome to Beautiful Ruins</h1>
            </main>
            <footer>
                <span>&copy; 2019 Beautiful Ruins LLP. All rights reserved.</span>
            </footer></>
        );
    }
}

export default HomePage;