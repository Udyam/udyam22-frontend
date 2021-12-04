import { useAuthContext } from '../Context/AuthContext'
import { useHistory } from 'react-router-dom'

const { token } = useAuthContext()
const history = useHistory()
console.log(token)
if (token === undefined || token === null) {
    history.push('/')
}
