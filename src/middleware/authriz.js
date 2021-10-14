import {useAuth} from '../context/auth';
import {useRouter} from 'next/router';
import { useEffect } from 'react';

const Auth = (props) => {
    const router = useRouter();
    const { token } = useAuth();

    useEffect(() => {
        if (!token) {
            router.replace('/login');
        }
    },[])

    return props.children;
}

export default Auth;