import { revalidatePath } from "next/cache";

type mockUser = {
    id: string;
    name: string;
};

export default async function UsersServer() {
    const response = await fetch('https://677e2a7a94bde1c1252aafe6.mockapi.io/users');
    const users = await response.json();

    async function addUser(formData: FormData) {
        "use server";
        const name = formData.get('name');
        const res = await fetch('https://677e2a7a94bde1c1252aafe6.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        const newUser = await res.json();
        console.log(newUser);
        revalidatePath('/mock-users');
    }
    return (
        <div>
        <form className="mb-4" action={addUser}>
            <input type="text" name="name" required className="border p-2 rounded-md mr-2"/>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add User</button>
        </form>
        <div className="py-4 grid grid-cols-4 gap-4">
            {users.map((user: mockUser) => (
                <div key={user.id} className="p-4 bg-white shawod-md rounded-lg text-gray-700">
                    {user.name}
                </div>
            ))}
        </div>
        </div>
    )
}