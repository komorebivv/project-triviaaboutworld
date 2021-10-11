import { IoEarth } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to='/'><div className="logo"><IoEarth style ={{fontSize: '30px', marginRight: '5px'}} /><h3 style={{display: 'inline'}}>TriviaAboutWorld</h3></div></Link>
        <ul className="nav-items">
            <Link to='/about'><li>About</li></Link>
            <Link to='/trivias'><li>Trivias</li></Link>
            <Link to='/countries'><li>Countries</li></Link>
            <Link to='/quiz'><li>Quiz</li></Link>
        </ul>
        </nav>
    )
}

export default Navigation;