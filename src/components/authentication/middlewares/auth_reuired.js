import { useAuthContext } from './Context/AuthContext';
const { token } = useAuthContext();
console.log(token);
if(token === undefined || token === null)
{

}