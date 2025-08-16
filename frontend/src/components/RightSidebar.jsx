import React from 'react'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?.profilePicture || assets.avatar_icon} alt="" 
        className='w-20 aspect-[1/1] rounded-full'/>
      </div>
    </div>
  )
}

export default RightSidebar
