// Implement protected routes (show route only if logged in).

import {Navigate,Outlet} from "react-router-dom";
const Private=({authed})=> authed ? <Outlet/> : <Navigate to="/login" replace />;
