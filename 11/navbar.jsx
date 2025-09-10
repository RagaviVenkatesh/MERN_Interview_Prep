// Build a responsive navbar with React Router links.

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
const Nav=()=> (<nav><Link to="/">Home</Link> | <Link to="/about">About</Link></nav>);
const Home=()=> <h1>Home</h1>; const About=()=> <h1>About</h1>;
export default ()=> (<BrowserRouter><Nav/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/></Routes></BrowserRouter>);
