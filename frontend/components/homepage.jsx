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
                <div id="content">
                            <div id="nav">
                            
                            </div>
                    
                            <div id="top">
                                <img scr="static/images/scrollpic.jpg" width="560" alt="scroll picture"/>
                                <h1> BE YOU, BLEND YOU </h1>
                            </div>
                    
                            <div id="middle">
                                <h2> What Are You Nourishing? </h2>
                            </div>
                    
                            <div id="bottom">
                                
                            </div>
                      
            </main>
            <footer>
                <span>&copy; 2019 Beautiful Ruins LLP. All rights reserved.</span>
            </footer></>
        );
    }
}

export default HomePage;
