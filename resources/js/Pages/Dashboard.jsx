import React from 'react';
import { Calendar, Clock, XCircle, DollarSign, Users, UserCheck, Plus, MessageSquare, AlertCircle, Activity, TrendingUp } from 'lucide-react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
    return (
        <div className="animate-in fade-in duration-500 space-y-6">
            {/* Header & Quick Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-brandDark tracking-tight">Dashboard</h1>
                    <p className="text-primary font-bold">Welcome back! Here is what's happening today.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-primary/90 transition-all">
                        <Plus size={18} /> New Appointment
                    </button>
                    <button className="p-3 bg-white border border-border-muted rounded-2xl text-brandDark hover:bg-neutralWarm transition-all shadow-sm">
                        <MessageSquare size={18} />
                    </button>
                </div>
            </div>

            {/* Top Metrics Row - Revenue, Customers, Staff */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Revenue Today', value: '$420', sub: '+$1.2k this month', icon: <DollarSign />, color: 'text-green-600' },
                    { label: 'Active Customers', value: '1,284', sub: '+12 this week', icon: <Users />, color: 'text-primary' },
                    { label: 'Staff On-Duty', value: '5/6', sub: '1 on break', icon: <UserCheck />, color: 'text-secondary-border' },
                    { label: 'System Status', value: 'Online', sub: 'All systems nominal', icon: <Activity />, color: 'text-blue-500' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-5 rounded-3xl border border-border-muted shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <div className={`p-2 bg-neutralCool/50 rounded-xl ${stat.color}`}>{stat.icon}</div>
                            <span className="text-[10px] font-black text-brandDark/30 uppercase tracking-widest">Live</span>
                        </div>
                        <p className="text-2xl font-black text-brandDark">{stat.value}</p>
                        <p className="text-xs font-bold text-brandDark/40">{stat.label}</p>
                        <p className="text-[10px] font-bold text-primary mt-2">{stat.sub}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Today's Schedule (Timeline View) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl border border-border-muted shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-border-muted flex justify-between items-center">
                            <h3 className="font-bold text-brandDark flex items-center gap-2">
                                <Clock size={18} className="text-primary" /> Today’s Schedule
                            </h3>
                            <span className="text-xs font-bold text-primary">View Full Calendar →</span>
                        </div>
                        <div className="p-6 space-y-4">
                            {[
                                { time: '09:00 AM', client: 'Alex Johnson', service: 'Full Grooming', status: 'In Progress' },
                                { time: '10:30 AM', client: 'Sarah Miller', service: 'Beard Trim', status: 'Upcoming' },
                                { time: '01:00 PM', client: 'Michael Scott', service: 'Haircut', status: 'Upcoming' },
                            ].map((appt, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-16 text-[10px] font-black text-brandDark/30 py-2">{appt.time}</div>
                                    <div className="flex-1 bg-neutralWarm/40 p-4 rounded-2xl border border-border-muted group-hover:border-primary/30 transition-all flex justify-between items-center">
                                        <div>
                                            <p className="text-sm font-bold text-brandDark">{appt.client}</p>
                                            <p className="text-xs text-brandDark/50">{appt.service}</p>
                                        </div>
                                        <span className={`text-[9px] font-black px-2 py-1 rounded-lg uppercase ${
                                            appt.status === 'In Progress' ? 'bg-secondary text-brandDark' : 'bg-neutralCool text-brandDark/40'
                                        }`}>
                                            {appt.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Analytics Snapshot */}
                    <div className="bg-brandDark p-6 rounded-3xl shadow-xl text-brandDark/10">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold flex items-center gap-2"><TrendingUp size={18} className="text-secondary" /> Weekly Growth</h3>
                            <select className="bg-white/10 border-none rounded-lg text-[10px] font-bold py-1 px-2 outline-none">
                                <option>Last 7 Days</option>
                            </select>
                        </div>
                        <div className="h-[182px] flex items-end gap-2">
                            {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                                <div key={i} className="flex-1 bg-primary/40 rounded-t-lg hover:bg-secondary transition-all cursor-help relative group" style={{ height: `${h}%` }}>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-brandDark text-[10px] font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                        ${h * 10}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Alerts & Overview */}
                <div className="space-y-6">
                    {/* Appointment Overview (Mini Stats) */}
                    <div className="bg-white p-6 rounded-3xl border border-border-muted shadow-sm">
                        <h3 className="text-xs font-black text-brandDark/30 uppercase tracking-widest mb-4">Daily Overview</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-brandDark/70">Completed</span>
                                <span className="text-sm font-black text-brandDark">12</span>
                            </div>
                            <div className="w-full bg-neutralCool h-1.5 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[60%]" />
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm font-bold text-brandDark/70">Cancelled</span>
                                <span className="text-sm font-black text-red-500">2</span>
                            </div>
                            <div className="w-full bg-neutralCool h-1.5 rounded-full overflow-hidden">
                                <div className="bg-red-500 h-full w-[10%]" />
                            </div>
                        </div>
                    </div>

                    {/* Notifications & Alerts */}
                    <div className="bg-white rounded-3xl border border-border-muted shadow-sm overflow-hidden">
                        <div className="p-4 bg-primary text-white font-bold text-xs flex items-center gap-2">
                            <AlertCircle size={14} /> Critical Alerts (2)
                        </div>
                        <div className="p-2 space-y-1">
                            <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs font-bold flex gap-3">
                                <XCircle size={16} className="shrink-0" />
                                Staff "Alex" is overbooked for 2:00 PM
                            </div>
                            <div className="p-3 bg-amber-50 text-amber-700 rounded-xl text-xs font-bold flex gap-3">
                                <AlertCircle size={16} className="shrink-0" />
                                Payment failed for INV-1092
                            </div>
                        </div>
                    </div>
                    {/* Quick Actions Panel */}
                    <div className="bg-white p-6 rounded-3xl border border-border-muted shadow-sm mt-6">
                        <h3 className="text-xs font-black text-brandDark/30 uppercase tracking-widest mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex flex-col items-center justify-center p-4 bg-neutralWarm/40 rounded-2xl border border-border-muted hover:border-primary/30 transition-all group">
                                <Users size={20} className="text-brandDark/60 group-hover:text-primary mb-2" />
                                <span className="text-[10px] font-bold text-brandDark">Add Client</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 bg-neutralWarm/40 rounded-2xl border border-border-muted hover:border-primary/30 transition-all group">
                                <Clock size={20} className="text-brandDark/60 group-hover:text-primary mb-2" />
                                <span className="text-[10px] font-bold text-brandDark">Block Time</span>
                            </button>
                        </div>
                    </div>

                    {/* Analytics Snapshot: Customer Retention */}
                    <div className="bg-white p-6 rounded-3xl border border-border-muted shadow-sm mt-6">
                        <h3 className="text-xs font-black text-brandDark/30 uppercase tracking-widest mb-4">Customer Snapshot</h3>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-brandDark/60">New vs. Returning</span>
                            <span className="text-xs font-black text-primary">84%</span>
                        </div>
                        <div className="w-full bg-neutralCool h-2 rounded-full overflow-hidden flex">
                            <div className="bg-primary h-full w-[84%]" title="Returning" />
                            <div className="bg-secondary h-full w-[16%]" title="New" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;