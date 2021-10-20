import React from 'react';
import './style.css';
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div className='col-lg-4 col-md-6 mt-5 px-6 col-sm-8 col-xs-10 mx-auto'>
            <div className='userCard'>
              <img src={user.avatar} alt='' className='imgUser' />
              <div className='userCard-body'>
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
                <button className='btn-grad'>LEARN MORE</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}