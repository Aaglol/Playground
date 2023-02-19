import { useEffect, useState } from 'react';
import { useRequesthandler } from '@/hooks/useRequesthandler';

export const Users = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetch() {
            console.log('sending... ');
            await useRequesthandler('http://localhost:8081/', 'user/list', 'GET', {})
            .then((response) => {
                if (response) {
                    console.log('response: ', response.data);
                    let tempUsers: Array<unknown> = [];

                    for (let user in response.data) {
                        tempUsers.push(response.data[user]);
                    }
                    console.log('response: ', tempUsers);
                    setUsers(tempUsers);
                }
            });
        }

        fetch();
    }, []);

    return (
        <div className="container">
            <div className="container-title">
                Hello, users!
            </div>
            <div style={{
                marginTop: 20,
                width: '100%',
                textAlign: 'center',
            }}>
                {users.map((user: {
                    username: string,
                    password: string,
                    profession: string,
                    id: number,
                }, key: number) => (
                    <div key={key}>
                        Hei {user.username}!
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;