import logo from '../logo.svg';
import './NavBar.css';

const NavBar = () =>{
    const ImgReact = {
        width: '100px',
        backgroundColor: 'red',
    }

    return(
        <div className='heard'>
            <div>
                <img style={ImgReact} src={logo} alt='logo'/>
            </div>
            <div>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <button>Login</button>
            </div>

        </div>

    );
};

export default NavBar;





