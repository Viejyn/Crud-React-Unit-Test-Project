import React from "react";

const UserList = ({ users }) => {
    return (
        <div className="container mt-4">
            <div className="table-responsive">
                <table className="table table-dark table-striped table-hover">
                  <thead>
                    <tr>
                      <th>İsim</th>
                      <th>Email</th>
                      <th>Yaş</th>
                    </tr>                    
                  </thead>
                  <tbody data-testid="table-body">
                    {users.map((user, i) => (
                      <tr key={i}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                      </tr>
                    ))}                   
                  </tbody>
                </table>
            </div>
        </div>    
    );
};

export default UserList;