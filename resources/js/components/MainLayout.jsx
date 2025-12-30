import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Calendar, Briefcase, Settings, User, Home, Menu, X, ShieldCheck, CreditCard, BarChart} from 'lucide-react';

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();
    const menuItems =[
        {name: 'Dashboard', icon: <Home size={20}/>, path: '/dashboard'},
        {name: 'Calendar', icon: <Calendar size={20}/>, path: '/calendar'},
        {name: 'Staff', icon: <ShieldCheck size={20}/>, path: '/staff' },
        {name: 'Services', icon: <Briefcase size={20}/>, path: '/services'},
        {name: 'Customers', icon: <User size={20}/>, path: '/customers'},
        {name: 'Payments', icon: <CreditCard size={20}/>, path: '/payments'},
        {name: 'Analytics', icon: <BarChart size={20}/>, path: '/analytics'},
        {name: 'Settings', icon: <Settings size={20}/>, path: '/settings'}
    ];
    return (
        <div className="flex h-screen bg-neutralCool overflow-hidden font-sans">
            <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-neutralWarm border-r border-border-muted transition-all duration-300 flex flex-col`}>
                <div className="p-6 flex items-center justify-between">
                    {isSidebarOpen && <h1 className="text-xl font-bold text-brandDark tracking-tight">Kismet Booking</h1>}
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-neutralCool rounded-md transition-colors">
                        {isSidebarOpen ? <X size={20} className="text-brandDark"/> : <Menu size={20} className="text-brandDark"/>}
                    </button>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link 
                                key={item.name} 
                                to={item.path}
                                className={`flex items-center p-3 rounded-xl transition-all ${
                                    isActive 
                                    ? 'bg-secondary text-brandDark shadow-sm' 
                                    : 'text-brandDark/70 hover:bg-neutralCool hover:text-brandDark'
                                }`}
                            >
                                <div className={isActive ? 'text-brandDark' : 'text-primary'}>
                                    {item.icon}
                                </div>
                                {isSidebarOpen && <span className="ml-4 font-medium">{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-neutralWarm/50 backdrop-blur-md border-b border-neutralCool flex items-center justify-between px-8">
                    <h2 className="text-lg font-semibold text-brandDark uppercase tracking-wider text-sm">
                        {menuItems.find(m => m.path === location.pathname)?.name || 'Master Calendar'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <button className="bg-secondary text-brandDark border-b-4 border-secondary-border px-5 py-2 rounded-xl text-sm font-bold hover:translate-y-[1px] hover:border-b-2 transition-all shadow-md active:scale-95">
                            + New Appointment
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8 bg-neutralCool">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;