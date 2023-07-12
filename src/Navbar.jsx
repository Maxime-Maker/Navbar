// import
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data.jsx';
import { useRef, useEffect, useState } from 'react';

// const
const Navbar = () => {
  const linkRef = useRef(0);
  const linkContainer = useRef(0);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    showLinks;
    if (showLinks) {
      linkContainer.current.style.height = `${linkHeight}px`;
    } else {
      linkContainer.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src="./src/image/logo.png" alt="logo" className="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linkContainer}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            const { icon, id, url } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
