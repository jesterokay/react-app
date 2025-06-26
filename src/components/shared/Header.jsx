import { useState, useEffect } from 'react';

export default function Header({ toggleSidebar }) {
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.modalProfile') && !e.target.closest('#profilePopup')) {
        setShowProfileModal(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-900 text-white sticky top-0 flex items-center justify-between px-3 shadow-md h-[50px] z-[2001]">
      <div className="flex items-center">
        <button 
          className="bg-transparent border-0 text-white mr-2 p-1 hover:bg-gray-700 rounded"
          onClick={toggleSidebar}
          id="toggleSidebar"
          aria-expanded="false"
          aria-controls="sidebar"
        >
          <svg viewBox="0 0 64 64" className="w-5 h-5" fill="currentColor">
            <path d="M8 16h48v8H8zm0 15h48v8H8zm0 15h48v8H8z"/>
          </svg>
        </button>
        <a className="text-white no-underline hover:text-gray-300" title="home" href="/">Jester Syst</a>
      </div>
      
      <div className="flex items-center gap-3 relative">
        <a className="text-white p-1 hover:bg-gray-700 rounded" title="home" href="/">
          <svg viewBox="0 0 64 64" className="w-5 h-5" fill="currentColor">
            <path d="M32 6L6 26v32h16V38h20v20h16V26L32 6z"/>
          </svg>
        </a>
        
        <a className="text-white p-1 hover:bg-gray-700 rounded" title="users" href="/users">
          <svg viewBox="0 0 64 64" className="w-5 h-5" fill="currentColor">
            <path d="M32 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm0 12c-14 0-24 8-24 16v8h48v-8c0-8-10-16-24-16z"/>
          </svg>
        </a>
        
        <a className="text-white p-1 hover:bg-gray-700 rounded" title="products" href="/products">
          <svg viewBox="0 0 64 64" className="w-5 h-5" fill="currentColor">
            <path d="M12 8v48h40V8H12zm4 4h32v40H16V12z"/>
          </svg>
        </a>
        
        <a className="text-white p-1 hover:bg-gray-700 rounded" title="categories" href="/categories">
          <svg viewBox="0 0 64 64" className="w-5 h-5" fill="currentColor">
            <path d="M12 8h40v8H12zm0 15h40v8H12zm0 15h40v8H12z"/>
          </svg>
        </a>
        
        <button 
          className="text-white p-1 hover:bg-gray-700 rounded cursor-pointer"
          id="profilePopup"
          title="profile"
          onClick={() => setShowProfileModal(!showProfileModal)}
        >
          <svg viewBox="0 0 64 64" className="w-5 h-5" fill="currentColor">
            <path d="M32 12a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 28c-11 0-20 6-20 12v8h40v-8c0-6-9-12-20-12z"/>
          </svg>
        </button>
        
        {showProfileModal && (
          <div className="absolute bg-white rounded-lg shadow-lg w-60 top-[40px] right-0 z-[2010] overflow-hidden border border-gray-200">
            <div className="bg-blue-600 bg-gradient-to-r from-blue-500 to-blue-700 text-center py-3">
              <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto" fill="white">
                <path d="M32 12a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 28c-11 0-20 6-20 12v8h40v-8c0-6-9-12-20-12z"/>
              </svg>
            </div>
            
            <div className="p-3">
              <h2 className="block text-center mb-3 text-green-600 font-extrabold text-xl">User Name</h2>
              
              <div className="border-t border-b border-gray-200 py-2 mb-3">
                <a href="#" className="flex items-center py-2 px-1 text-gray-800 hover:bg-gray-100 rounded">
                  <svg viewBox="0 0 64 64" className="w-4 h-4 mr-2 text-blue-600" fill="currentColor">
                    <path d="M12 8v48h40V8H12zm4 4h32v40H16V12z"/>
                  </svg>
                  My Profile
                </a>
                <a href="#" className="flex items-center py-2 px-1 text-gray-800 hover:bg-gray-100 rounded">
                  <svg viewBox="0 0 64 64" className="w-4 h-4 mr-2 text-blue-600" fill="currentColor">
                    <path d="M32 0a32 32 0 1 0 0 64 32 32 0 0 0 0-64zm0 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 40a24 24 0 0 1-16-5.7V40h32v2.3A24 24 0 0 1 32 48z"/>
                  </svg>
                  Settings
                </a>
              </div>
              
              <a href="/userLogout" className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors">
                <svg viewBox="0 0 64 64" className="w-4 h-4 mr-2" fill="currentColor">
                  <path d="M32 0a32 32 0 1 0 0 64 32 32 0 0 0 0-64zm8 48H16V16h24v8h-8v4h8v12h-8v4h8v8z"/>
                </svg>
                Log Out
              </a>
            </div>
          </div>
        )}
        
        <a className="text-white p-1 hover:bg-gray-700 rounded" title="sign out" href="/userLogout">
          <svg viewBox="0 0 64 64" className="w-5 h-5" fill="currentColor">
            <path d="M32 0a32 32 0 1 0 0 64 32 32 0 0 0 0-64zm8 48H16V16h24v8h-8v4h8v12h-8v4h8v8z"/>
          </svg>
        </a>
      </div>
    </header>
  );
}