import axios from 'axios';
import { useEffect, useState } from 'react';

export const Users = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetch() {
            console.log('sending... ');
            await axios.get('http://localhost:8081/listUsers')
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
        <div>
            Hello, users!
            <div style={{
                marginTop: 20
            }}>
                {users.map((user: {
                    name: string,
                    password: string,
                    profession: string,
                    id: number,
                }, key: number) => (
                    <div key={key}>
                        Hei {user.name}!
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;