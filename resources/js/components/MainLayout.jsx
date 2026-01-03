import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Briefcase, Settings, User, Home, Menu, X, ShieldCheck, CreditCard, BarChart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        if (window.innerWidth >= 768) {
            setIsSidebarOpen(true);
        }
    }, []);

    const menuItems = [
        { name: 'Dashboard', icon: <Home size={20} />, path: '/dashboard' },
        { name: 'Calendar', icon: <Calendar size={20} />, path: '/calendar' },
        { name: 'Staff', icon: <ShieldCheck size={20} />, path: '/staff' },
        { name: 'Services', icon: <Briefcase size={20} />, path: '/services' },
        { name: 'Customers', icon: <User size={20} />, path: '/customers' },
        { name: 'Payments', icon: <CreditCard size={20} />, path: '/payments' },
        { name: 'Analytics', icon: <BarChart size={20} />, path: '/analytics' },
        { name: 'Settings', icon: <Settings size={20} />, path: '/settings' }
    ];

    return (
        <div className="flex h-screen bg-neutralCool overflow-hidden font-sans relative">
            {/* MOBILE OVERLAY with Framer Motion */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* SIDEBAR with Framer Motion */}
            <motion.div 
                initial={false}
                animate={{ 
                    width: isSidebarOpen ? 256 : (window.innerWidth < 768 ? 0 : 80),
                    x: (window.innerWidth < 768 && !isSidebarOpen) ? -256 : 0
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 150 }}
                className={`
                    fixed md:relative h-full z-50
                    bg-neutralWarm border-r border-border-muted flex flex-col overflow-hidden
                `}
            >
                <div className="p-6 flex items-center justify-between min-w-[256px]">
                    <AnimatePresence mode="wait">
                        {isSidebarOpen && (
                            <motion.h1 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-xl font-bold text-brandDark tracking-tight truncate"
                            >
                                Kismet Booking
                            </motion.h1>
                        )}
                    </AnimatePresence>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-1 hover:bg-neutralCool rounded-md transition-colors shrink-0"
                    >
                        {isSidebarOpen ? <X size={20} className="text-brandDark" /> : <Menu size={20} className="text-brandDark" />}
                    </button>
                </div>

                <nav className="flex-1 px-4 space-y-2 overflow-y-auto min-w-[256px]">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                border-b-2="true"
                                to={item.path}
                                onClick={() => {
                                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                                }}
                                className={`flex items-center p-3 rounded-xl transition-all ${
                                    isActive
                                        ? 'bg-secondary text-brandDark shadow-sm'
                                        : 'text-brandDark/70 hover:bg-neutralCool hover:text-brandDark'
                                }`}
                            >
                                <div className={isActive ? 'text-brandDark' : 'text-primary'}>
                                    {item.icon}
                                </div>
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span 
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className="ml-4 font-medium whitespace-nowrap"
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </Link>
                        );
                    })}
                </nav>
            </motion.div>

            {/* MAIN VIEW */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <header className="h-16 bg-neutralWarm/50 backdrop-blur-md border-b border-neutralCool flex items-center justify-between px-4 md:px-8 shrink-0">
                    <div className="flex items-center gap-2">
                        {!isSidebarOpen && (
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="md:hidden p-2 hover:bg-neutralCool rounded-lg text-brandDark"
                            >
                                <Menu size={20} />
                            </button>
                        )}
                        <h2 className="text-xs md:text-sm font-semibold text-brandDark uppercase tracking-wider truncate mr-2">
                            {menuItems.find(m => m.path === location.pathname)?.name || 'Master Calendar'}
                        </h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <button 
                            className="bg-secondary text-brandDark border-b-2 md:border-b-4 border-secondary-border px-3 md:px-5 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold hover:translate-y-[1px] shadow-sm active:scale-95 whitespace-nowrap transition-all"
                        >
                            <span className="md:hidden">+ New</span>
                            <span className="hidden md:inline" >+ New Appointment</span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-neutralCool">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;