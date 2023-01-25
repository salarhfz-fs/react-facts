import reactLogo from '../assets/react-logo.png';

function Header() {
    return (
        <nav className='nav'>
            <section className='brand'>
                <img alt='React logo' src={reactLogo} className='react-logo' />
                <span className='react-facts'>ReactFacts</span>
            </section>
            <section>
                <p className='project'>React Course - Project 1</p>
            </section>
        </nav>
    );
}

export default Header;
