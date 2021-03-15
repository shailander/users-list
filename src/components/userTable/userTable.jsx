import React from "react";
import "./userTable.scss";

function UserTable({ users, setIsModalVisible, setSelectedUser }) {
  const handleUserSelect = (item) => {
    setIsModalVisible(true);
    setSelectedUser(item);
  };
  return (
    <>
      {users && users.length === 0 && <h1 className="no-data">No Data</h1>}
      {users && users.length > 0 && (
        <table>
          <tbody>
            {users.map((item) => (
              <tr key={item.id} onClick={() => handleUserSelect(item)}>
                <td>
                  <img alt="avatar" src={item.avatar} />
                </td>
                <td>
                  {item.first_name} {item.last_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default UserTable;
