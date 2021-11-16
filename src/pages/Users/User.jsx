import React from 'react';

const User = ({user}) => {
    return (
        <>    
          <div className="table__row">
            <div className="table__cell">{user.id}</div>
            <div className="table__cell">{user.firstName} {user.lastName}</div>
            <div className="table__cell">{user.phone}</div>
            <div className="table__cell">{user.position}</div>
          </div>
        </>
      );
};

export default User;