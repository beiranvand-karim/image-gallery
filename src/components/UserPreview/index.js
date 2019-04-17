import React from "react"
import UserList from "../UserList"

export function UserPreview({users}) {
   return <div>
      <UserList users={users}/>
   </div>
}

export default UserPreview