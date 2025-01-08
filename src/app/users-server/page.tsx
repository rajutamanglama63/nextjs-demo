type User = {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return (
        <ul className="space-y-4 p-4">
            {users.map((user: User) => (
                <li key={user.id} className="p-4 bg-white shawod-md rounded-lg text-gray-700">
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    )
}