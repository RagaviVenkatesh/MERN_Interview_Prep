// Implement conditional rendering (e.g., show “Logged In” if logged in, else “Guest”).

export default function Status({loggedIn}){ return <h2>{loggedIn?"Logged In":"Guest"}</h2>; }
