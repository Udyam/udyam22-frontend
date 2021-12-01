import { AuthContext } from '../Context/AuthContext';
import RegisterForm from './authentication/loginregform'
export default function authprovider() {
    const [token, setToken] = useState(null);
    const [data, setData] = useState({});

    return (
        <AuthContext.Provider
            value={{
                token: token,
                data: data,
                setToken: setToken,
                setData: setData,
            }}
        >
          <RegisterForm />
       </AuthContext.Provider>
    );
}