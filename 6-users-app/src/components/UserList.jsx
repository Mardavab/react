import { UserRow } from "./UserRow"

export const UserList = ({ handlerSelecterUserForm,handlerRemoveUser, users = [] }) => {
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>update route</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <UserRow
                            key={user.id}
                            user={user}
                            handlerSelecterUserForm={handlerSelecterUserForm}
                            handlerRemoveUser={handlerRemoveUser}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}