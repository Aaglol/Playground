import { useSelector } from 'react-redux';
import { appIsLoggedIn } from '@/store/slices/appSlice';
import Login from './Login';
import UserIndex from './user';

export default function Home() {
    const isLoggedIn = useSelector(appIsLoggedIn);

    return isLoggedIn ? <UserIndex /> : <Login />;
}
