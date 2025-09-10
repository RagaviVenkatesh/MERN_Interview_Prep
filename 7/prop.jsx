// Build a simple component hierarchy (Parent → Child → Grandchild) and pass props.

const G=({msg})=><p>{msg}</p>;
const C=({msg})=><G msg={msg}/>;
export default ()=> <C msg="Hello from parent" />;
