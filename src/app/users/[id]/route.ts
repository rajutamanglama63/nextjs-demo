import { users } from "../route";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const user = users.find((user) => user.id === parseInt(params.id));
    if(!user) {
        return new Response("User not found", {status: 404});
    }
    return Response.json(user);
}