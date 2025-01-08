"use client"

import { useEffect, useState } from "react";

type User = {
    id: string;
    name: string;
    username: string
    email: string;
    phone: string;
};

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError("Failed to fetch users");
                if(error instanceof Error) {
                    setError(`Failed to fetch users: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if(loading) return <div>Loading...</div>;
    if(error) return <div>{error}</div>;
    return (
       <ul className="space-y-4 p-4">
        {users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.email})
            </li>
        ))}
       </ul> 
    )
}