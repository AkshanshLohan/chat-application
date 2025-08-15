import React from 'react'
import assets, { userDummyData } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate()

  return (
    <div
      className={`bg-violet-300/10 h-full p-5 rounded-r-xl overflow-y-auto text-white ${
        selectedUser ? 'max-md:hidden' : ''
      }`}
    >
      {/* Top section (logo + menu) */}
      <div className="pb-5 space-y-4">
        <div className="flex items-center justify-between">
          <img src={assets.logo} alt="App logo" className="max-w-40" />
          <div className="relative group">
            <button className="p-2">
              <img src={assets.menu_icon} alt="Menu" className="h-5" />
            </button>
            <div className="absolute hidden group-hover:block top-full right-0 z-20 w-32 space-y-2 p-4 rounded-md bg-[#282142] border border-gray-600 text-sm">
              <button
                onClick={() => navigate('/profile')}
                className="w-full text-left hover:text-violet-300"
              >
                Edit Profile
              </button>
              <hr className="border-gray-600" />
              <button className="w-full text-left hover:text-violet-300">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <label className="flex items-center gap-2 bg-[#282142] rounded-full px-3 py-1">
          <img src={assets.search_icon} alt="Search user" className="w-3" />
          <input
            type="text"
            className="bg-transparent flex-1 text-xs text-white placeholder-gray-300 focus:outline-none"
            placeholder="Search User..."
          />
        </label>
      </div>

      {/* User List */}
      <div className="flex flex-col space-y-1">
        {userDummyData.map((user, index) => {
          const isActive = selectedUser?._id === user._id
          const isOnline = index < 3

          return (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`relative flex items-center gap-3 p-3 pl-4 rounded-lg transition hover:bg-[#282142]/50 ${
                isActive ? 'bg-[#282142]/50' : ''
              }`}
            >
              <img
                src={user?.profilePic || assets.avatar_icon}
                alt={`${user.fullName}'s avatar`}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex flex-col text-left">
                <span className="font-medium leading-4">{user.fullName}</span>
                <span
                  className={`text-xs ${
                    isOnline ? 'text-green-400' : 'text-neutral-400'
                  }`}
                >
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
              {!isOnline && (
                <span className="absolute top-2 right-2 h-5 w-5 flex justify-center items-center text-[10px] rounded-full bg-violet-500/50">
                  {index}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
