import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const recoveredToken = localStorage.getItem("tokenUser");

        if (recoveredUser && recoveredToken) {
            setUser(JSON.parse(recoveredUser));
            setToken(JSON.parse(recoveredToken));
        }

        setLoading(false);
    }, []);

    const login = (data) => {
        const loggedUser = data;
        delete loggedUser.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("tokenUser", JSON.stringify(data.token));

        setUser(loggedUser);
        setToken(data.token);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, token, login, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
