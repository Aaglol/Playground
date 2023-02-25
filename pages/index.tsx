import { useSelector } from 'react-redux';
import { appIsLoggedIn } from '@/store/slices/appSlice';
import Login from './Login';
import Frontpage from './frontpage';

export default function Home() {
    const isLoggedIn = useSelector(appIsLoggedIn);

    return isLoggedIn ? <Frontpage /> : <Login />;
}
