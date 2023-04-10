import Link from 'next/link';

function Nav({ api_key }) {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link href='/'>
            <a className='nav-link'>Home</a>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/chat'>
            <a className='nav-link'>Chat</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;