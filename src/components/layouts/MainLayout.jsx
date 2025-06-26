import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Sidebar from '../shared/Sidebar';
import Footer from '../shared/Footer';
import '../../App.css';

export default function Layout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarExpanded(true);
      } else {
        setSidebarExpanded(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
    if (isMobile) {
      document.body.classList.toggle('sidebar-open', !sidebarExpanded);
    }
  };

  return (
    <div className="relative">
      <Sidebar className={`${sidebarExpanded ? 'expanded' : ''}`} />
      <div className={`content-container transition-all duration-300 ${sidebarExpanded && !isMobile ? 'md:ml-[250px]' : ''}`}>
        <Header toggleSidebar={toggleSidebar} />
        <main className="min-h-[calc(100vh-90px)] p-5 bg-gray-100">
          <Outlet />
        </main>
        <Footer />
      </div>
      {isMobile && sidebarExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-[1999]"
          onClick={() => {
            setSidebarExpanded(false);
            document.body.classList.remove('sidebar-open');
          }}
        />
      )}
    </div>
  );
}