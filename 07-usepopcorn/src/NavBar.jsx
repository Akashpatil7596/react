import Logo from './Logo';
import NumResults from './NumResults';
import SearchBar from './SearchBar';

export default function NavBar({ children }) {
   return (
      <>
         <nav className="nav-bar">
            <Logo />
            {children}
         </nav>
      </>
   );
}
