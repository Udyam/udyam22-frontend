import { AuthContext } from './Context/AuthContext'
import { React} from 'react'



export const AuthProvider = ({ children }) => {
   
    const setToken = (newToken) => {
        localStorage.setItem('userToken', JSON.stringify(newToken))
        
        
    }
    const logout = () => {
     localStorage.removeItem('userToken')
        
    }
    return (
        <AuthContext.Provider
            value={{
                setToken,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

/*import { AuthContext } from '../Context/AuthContext';
export default function authprovider() {
    const [token, setToken] = useState(null);
    const [data, setData] = useState({});
    const logout = () => {
       
      }

    return (
        <AuthContext.Provider
            value={{
                token: token,
                data: data,
                setToken: setToken,
                setData: setData,
            }}
        >
       <ChildComponents />

       </AuthContext.Provider>
    );
}*/
