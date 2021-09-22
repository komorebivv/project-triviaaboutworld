import { IoEarth } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <Link to='/'><h3 className="logo"><IoEarth />TriviaAboutWorld</h3></Link>
        <ul className="nav-items">
            <Link to='/about'><li>About</li></Link>
            <Link to='/trivias'><li>Trivias</li></Link>
            <Link to='/flags'><li>Flags</li></Link>
            <Link to='/'><li>Quiz</li></Link>
        </ul>
        </nav>
    )
}

export default Navigation;