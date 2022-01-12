import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
	const user = {
		isLoggedIn: localStorage.getItem("isLoggedIn"),
	};
	return user && user.isLoggedIn;
};

const ProtectedRoutes = () => {
	const isAuth = useAuth();
	return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
