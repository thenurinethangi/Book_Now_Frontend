import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CinemaProtectedRoute = ({ children }: Props) => {
    const { user, loading } = useSelector((state: RootState) => state.auth);

    if (loading) return null;

    if (!user || !user.roles?.includes("CINEMA")) {
        return <Navigate to="/cinema/landing" replace />;
    }

    return children;
};

export default CinemaProtectedRoute;
