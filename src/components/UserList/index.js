import React from "react"
import UserListIem from "../UserListItem"

function mapUser(users) {
   return users.map((user, index) => <UserListIem key={index} user={user}/>)
}

export function UserList({users}) {
   return <div>
      {
         mapUser(users)
      }
   </div>
}

export default UserList