import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ className }) {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" d=""/></svg>
  const menuItems = [
    {
      title: "Dashboard",
      icon: { path: "M13.5 9V4H20v5h-6.5ZM4 12V4h6.5v8H4Zm9.5 8v-8H20v8h-6.5ZM4 20v-5h6.5v5H4Z", viewBox: "0 0 24 24" },
      submenu: [
        { title: "Dashboard", icon: { path: "M8 8h48v8H8zm0 15h48v8H8zm0 15h48v8H8z", viewBox: "0 0 64 64" }, path: "/" },
        { title: "Users", icon: { path: "M32 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm0 12c-14 0-24 8-24 16v8h48v-8c0-8-10-16-24-16z", viewBox: "0 0 64 64" }, path: "/users" },
        { title: "Products", icon: { path: "M12 8v48h40V8H12zm4 4h32v40H16V12z", viewBox: "0 0 64 64" }, path: "/products" },
        { title: "Categories", icon: { path: "M12 8h40v8H12zm0 15h40v8H12zm0 15h40v8H12z", viewBox: "0 0 64 64" }, path: "/categories" }
      ]
    },
    {
      title: "Settings",
      icon: { 
        path: "M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z", 
        viewBox: "0 0 24 24" 
      },
      submenu: [
        { title: "General", icon: { path: "M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0Zm.667 1.359v1.035a.667.667 0 0 1-1.334 0V1.359A8.614 8.614 0 0 0 5.637 2.51l.522.584a.667.667 0 0 1-.995.888l-.63-.707a8.714 8.714 0 0 0-1.776 1.962l.843.506a.667.667 0 0 1-.686 1.143l-.803-.481a8.607 8.607 0 0 0-.709 2.491h.907a.667.667 0 1 1 0 1.334l-.973-.001v.031a8.627 8.627 0 0 0 .742 3.263l.836-.559a.667.667 0 0 1 .741 1.109l-.939.627A8.66 8.66 0 0 0 10 18.667a8.662 8.662 0 0 0 7.447-4.23l-1.132-.757a.667.667 0 0 1 .74-1.109l.989.661a8.633 8.633 0 0 0 .62-3.003H17.58a.667.667 0 0 1 0-1.333h1.017a8.608 8.608 0 0 0-.57-2.168l-.95.492a.667.667 0 1 1-.612-1.184l.965-.5a8.71 8.71 0 0 0-1.839-2.158l-.602.789a.667.667 0 1 1-1.06-.81l.58-.76a8.615 8.615 0 0 0-3.842-1.238Zm3.248 5.46a.667.667 0 0 1-.104.937l-2.04 1.631l.007.12c0 .692-.529 1.262-1.205 1.326l-.129.006a1.333 1.333 0 1 1 .558-2.544l1.976-1.58a.667.667 0 0 1 .937.104Z", viewBox: "0 0 20 20" }, path: "/settings" },
        { title: "Advanced", icon: { path: "M32 8a4 4 0 0 1 0 8 4 4 0 0 1 0-8zm0 12a4 4 0 0 1 0 8 4 4 0 0 1 0-8zm0 12a4 4 0 0 1 0 8 4 4 0 0 1 0-8z", viewBox: "0 0 64 64" }, path: "/settings/advanced" }
      ]
    },
    {
      title: "Users",
      icon: { path: "M32 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm0 12c-14 0-24 8-24 16v8h48v-8c0-8-10-16-24-16z", viewBox: "0 0 64 64" },
      submenu: [
        { title: "Users", icon: { path: "M32 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm0 12c-14 0-24 8-24 16v8h48v-8c0-8-10-16-24-16z", viewBox: "0 0 64 64" }, path: "/users" },
        { title: "Dashboard", icon: { path: "M8 8h48v8H8zm0 15h48v8H8zm0 15h48v8H8z", viewBox: "0 0 64 64" }, path: "/" }
      ]
    },
    {
      title: "Products",
      icon: { path: "M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM5 21a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm2-9H3V3h4Z M10.01 2v9.01h5V2h-5z M17 2v9.01h5V2h-5zm-6.99 11v9h5v-9h-5z M17 13v9h5v-9h-5z", viewBox: "0 0 24 24" },
      submenu: [
        { title: "Products", icon: { path: "M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM5 21a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm2-9H3V3h4Z M10.01 2v9.01h5V2h-5z M17 2v9.01h5V2h-5zm-6.99 11v9h5v-9h-5z M17 13v9h5v-9h-5z", viewBox: "0 0 24 24" }, path: "/products" },
        { title: "Categories", icon: { path: "M12 8h40v8H12zm0 15h40v8H12zm0 15h40v8H12z", viewBox: "0 0 64 64" }, path: "/categories" }
      ]
    }
  ];

  return (
    <aside className={`sidebar ${className}`}>
      <div className="sidebar-brand py-5 text-center bg-gray-900">
        <a href="/" className="text-white text-2xl font-bold no-underline">Jester</a>
      </div>
      <div className="overflow-y-auto scrollbar-hide h-[calc(100vh-60px)] pr-2 bg-gray-900">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); toggleItem(index); }}
                className="flex items-center py-3 px-5 text-white hover:bg-gray-700 transition-colors"
              >
                <svg 
                  viewBox={item.icon.viewBox} 
                  className="w-5 h-5 mr-3" 
                  fill="currentColor"
                >
                  <path d={item.icon.path} />
                </svg>
                {item.title}
                {item.submenu && (
                  <svg 
                    viewBox="0 0 20 20" 
                    className={`w-4 h-4 ml-auto transition-transform duration-300 ${openItem === index ? 'rotate-180' : ''}`} 
                    fill="currentColor"
                  >
                    <path d="M5 7l5 5 5-5"/>
                  </svg>
                )}
              </a>
              {item.submenu && (
                <ul className={`submenu bg-gray-800 ${openItem === index ? 'open' : ''}`}>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink 
                        to={subItem.path} 
                        className={({ isActive }) => `flex items-center py-2 px-5 pl-12 text-gray-300 hover:bg-gray-700 ${isActive ? 'bg-gray-900' : ''}`}
                      >
                        <svg 
                          viewBox={subItem.icon.viewBox} 
                          className="w-4 h-4 mr-3" 
                          fill="currentColor"
                        >
                          <path d={subItem.icon.path} />
                        </svg>
                        {subItem.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}