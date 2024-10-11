import React from 'react';
import { getUsers } from '@/actions/user-action';

async function Page() {
//   dbConnect();
  const users = await getUsers();

  return (
    <div>
      This is disabled
      {/* {users.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))} */}
    </div>
  );
}

export default Page;
