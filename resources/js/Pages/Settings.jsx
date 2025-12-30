import React, { useState } from 'react';
import { Building2, Calendar, Clock, Briefcase, Users, UserCog, Bell, CreditCard, Palette, Shield, Database, Puzzle, Save, CheckCircle } from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('Business');
    const sections = [
        { id: 'Business', icon: <Building2 size={18}/>, label: 'Business Profile' },
        { id: 'Appointments', icon: <Calendar size={18}/>, label: 'Appointment Rules' },
        { id: 'Hours', icon: <Clock size={18}/>, label: 'Working Hours' },
        { id: 'Staff', icon: <UserCog size={18}/>, label: 'Staff Management' },
        { id: 'Communication', icon: <Bell size={18}/>, label: 'Communication' },
        { id: 'Branding', icon: <Palette size={18}/>, label: 'Branding & UI' },
        { id: 'Payment', icon: <CreditCard size={18}/>, label: 'Payments & Billing' },
        { id: 'Security', icon: <Shield size={18}/>, label: 'Security' },
    ];
    return (
        <div className="flex flex-col h-full animate-in fade-in duration-500">
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-brandDark tracking-tight">Settings</h1>
                    <p className="text-primary font-medium">Configure your booking engine</p>
                </div>
                <button className="flex items-center gap-2 bg-secondary text-brandDark border-b-4 border-secondary-border px-6 py-2 rounded-xl font-bold hover:translate-y-[1px] hover:border-b-2 transition-all shadow-md">
                    <Save size={18}/> Save All Changes
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 h-full overflow-hidden">
                {/* Sidebar Navigation - Tablet/Desktop */}
                <aside className="w-full md:w-64 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                    {sections.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                                activeTab === tab.id 
                                ? 'bg-primary text-white shadow-lg' 
                                : 'text-brandDark/60 hover:bg-neutralWarm'
                            }`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </aside>

                {/* Content Area */}
                <div className="flex-1 bg-white rounded-3xl border border-border-muted shadow-sm overflow-y-auto p-8 custom-scrollbar">
                    {activeTab === 'Business' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-brandDark border-b pb-4">Business Profile</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-brandDark/50 uppercase">Business Name</label>
                                    <input type="text" className="w-full p-3 bg-neutralCool/20 border border-border-muted rounded-xl" placeholder="Kismet Booking" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-brandDark/50 uppercase">Business Logo</label>
                                    <div className="border-2 border-dashed border-border-muted rounded-xl p-4 text-center text-xs font-bold text-brandDark/40">Click to upload JPG/PNG</div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-brandDark/50 uppercase">Contact Email</label>
                                    <input type="email" className="w-full p-3 bg-neutralCool/20 border border-border-muted rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-brandDark/50 uppercase">Phone Number</label>
                                    <input type="text" className="w-full p-3 bg-neutralCool/20 border border-border-muted rounded-xl" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-black text-brandDark/50 uppercase">Business Address</label>
                                    <textarea className="w-full p-3 bg-neutralCool/20 border border-border-muted rounded-xl" rows="2"></textarea>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Branding' && (
                        <div className="space-y-8">
                            <h2 className="text-xl font-bold text-brandDark border-b pb-4">Branding & UI Customization</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 bg-neutralWarm rounded-2xl border border-border-muted">
                                    <label className="block text-sm font-bold text-brandDark mb-4">Color Palette</label>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold">Primary Color</span>
                                            <input type="color" defaultValue="#8D27DE" className="w-12 h-10 rounded-lg cursor-pointer" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold">Accent (Gold)</span>
                                            <input type="color" defaultValue="#D4AF37" className="w-12 h-10 rounded-lg cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 bg-neutralWarm rounded-2xl border border-border-muted">
                                    <label className="block text-sm font-bold text-brandDark mb-4">Button Style</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="p-2 border border-primary text-primary rounded-none text-xs font-bold">Sharp</button>
                                        <button className="p-2 bg-primary text-white rounded-full text-xs font-bold">Rounded</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Hours' && (
                        <div className="space-y-8 animate-in slide-in-from-right duration-300">
                            <div className="flex justify-between items-center border-b pb-4">
                                <h2 className="text-xl font-bold text-brandDark">Working Hours & Availability</h2>
                                <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                                    <Puzzle size={14} /> APPLY TO ALL DAYS
                                </button>
                            </div>

                            {/* Weekly Schedule */}
                            <div className="space-y-3">
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                    <div key={day} className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 p-4 bg-neutralWarm/50 rounded-2xl border border-border-muted/50 hover:border-primary/30 transition-all">
                                        {/* Day Toggle */}
                                        <div className="md:col-span-3 flex items-center gap-3">
                                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutralCool cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" defaultChecked={day !== 'Sunday'} />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                            </div>
                                            <span className="font-bold text-brandDark">{day}</span>
                                        </div>

                                        {/* Hours Input */}
                                        <div className="md:col-span-7 flex items-center gap-2">
                                            <input type="time" defaultValue="09:00" className="flex-1 p-2 bg-white border border-border-muted rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-primary" />
                                            <span className="text-brandDark/40 font-bold">to</span>
                                            <input type="time" defaultValue="18:00" className="flex-1 p-2 bg-white border border-border-muted rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-primary" />
                                        </div>

                                        {/* Break/Split Shift Action */}
                                        <div className="md:col-span-2 flex justify-end">
                                            <button className="text-[10px] font-black text-brandDark/40 hover:text-primary uppercase tracking-widest bg-white px-3 py-1.5 rounded-lg border border-border-muted shadow-sm">
                                                + Add Break
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Special Schedules & Holidays */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                <div className="p-6 bg-white border border-border-muted rounded-3xl shadow-sm">
                                    <h3 className="text-sm font-black text-brandDark/40 uppercase mb-4 tracking-widest">Holidays & Blackout Dates</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center p-3 bg-neutralCool/20 rounded-xl border border-dashed border-border-muted">
                                            <span className="text-sm font-bold text-brandDark">New Year's Day</span>
                                            <span className="text-xs text-primary font-bold">Jan 01, 2024</span>
                                        </div>
                                        <button className="w-full py-3 border-2 border-dashed border-border-muted rounded-xl text-xs font-bold text-brandDark/40 hover:border-primary hover:text-primary transition-all">
                                            + Add Holiday
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6 bg-white border border-border-muted rounded-3xl shadow-sm">
                                    <h3 className="text-sm font-black text-brandDark/40 uppercase mb-4 tracking-widest">Special Event Hours</h3>
                                    <p className="text-xs text-brandDark/60 mb-4 font-medium">Override your normal hours for specific dates like promos or events.</p>
                                    <button className="w-full py-3 bg-brandDark text-white rounded-xl text-xs font-bold hover:bg-primary transition-all shadow-md">
                                        Create Special Schedule
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'Appointments' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-brandDark border-b pb-4">Appointment Rules</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-neutralWarm rounded-2xl">
                                    <div>
                                        <p className="font-bold text-brandDark">Same-day booking allowed?</p>
                                        <p className="text-xs text-brandDark/50">Allow customers to book for today</p>
                                    </div>
                                    <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer">
                                        <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-brandDark/50">Default Duration</label>
                                        <select className="w-full p-3 bg-neutralCool/20 border border-border-muted rounded-xl text-sm font-bold">
                                            <option>30 Minutes</option>
                                            <option>60 Minutes</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-brandDark/50">Advance Limit</label>
                                        <input type="number" defaultValue="30" className="w-full p-3 bg-neutralCool/20 border border-border-muted rounded-xl text-sm font-bold" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'Staff' && (
                        <div className="space-y-8 animate-in slide-in-from-right duration-300">
                            <div className="flex justify-between items-center border-b pb-4">
                                <div>
                                    <h2 className="text-xl font-bold text-brandDark">Staff Management</h2>
                                    <p className="text-xs text-primary font-medium">Manage team access and specialties</p>
                                </div>
                                <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg hover:bg-primary/90 transition-all">
                                    + INVITE TEAM MEMBER
                                </button>
                            </div>

                            {/* Staff Table/List */}
                            <div className="space-y-4">
                                {[
                                    { name: 'Alex Rivera', role: 'Admin', services: 'All Services', status: 'Active' },
                                    { name: 'Jordan Wells', role: 'Staff', services: 'Haircut, Beard Trim', status: 'Active' }
                                ].map((member, i) => (
                                    <div key={i} className="bg-neutralWarm/30 border border-border-muted rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white hover:shadow-md transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20">
                                                {member.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-brandDark">{member.name}</p>
                                                <div className="flex gap-2 mt-1">
                                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-tighter ${
                                                        member.role === 'Admin' ? 'bg-secondary text-brandDark' : 'bg-neutralCool text-brandDark/60'
                                                    }`}>
                                                        {member.role}
                                                    </span>
                                                    <span className="text-[10px] font-bold text-brandDark/40 uppercase tracking-tighter self-center">
                                                        {member.services}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="text-right hidden md:block mr-4">
                                                <p className="text-[10px] font-black text-brandDark/30 uppercase tracking-widest">Booking Limit</p>
                                                <p className="text-xs font-bold text-brandDark">8 per day</p>
                                            </div>
                                            <button className="px-4 py-2 bg-white border border-border-muted rounded-xl text-xs font-bold text-brandDark hover:text-primary transition-colors">
                                                Edit Permissions
                                            </button>
                                            <button className="p-2 text-brandDark/20 hover:text-red-500 transition-colors">
                                                <Shield size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Permissions Matrix Snippet */}
                            <div className="p-6 bg-brandDark text-white rounded-3xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <UserCog size={120} />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-widest mb-2 text-secondary">Security Note</h3>
                                <p className="text-sm opacity-80 max-w-md leading-relaxed">
                                    Admins have full access to billing and system logs. Staff members can only view their own assigned calendar and customer contact details.
                                </p>
                            </div>
                        </div>
                    )}
                    {activeTab === 'Communication' && (
                        <div className="space-y-8 animate-in slide-in-from-right duration-300">
                            {/* Header */}
                            <div className="flex justify-between items-center border-b pb-4">
                            <div>
                                <h2 className="text-xl font-bold text-brandDark">Communication Center</h2>
                                <p className="text-xs text-primary font-medium">
                                Control email, SMS, and reminder messages sent to your clients
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-neutralCool/50 text-brandDark rounded-xl text-xs font-bold hover:bg-neutralCool transition-all">
                                SEND TEST
                                </button>
                                <button className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-sm hover:bg-primary/90 transition-all">
                                RESTORE DEFAULTS
                                </button>
                            </div>
                            </div>

                            {/* Channels */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-2xl border border-border-muted bg-neutralWarm/40 flex flex-col justify-between">
                                <div>
                                <p className="text-xs font-black text-brandDark/40 uppercase mb-1">Primary Channel</p>
                                <h3 className="font-bold text-brandDark mb-2">Email</h3>
                                <p className="text-xs text-brandDark/60">
                                    Booking confirmations, reminders, and cancellations are sent by email.
                                </p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                <span className="text-[10px] font-black text-brandDark/40 uppercase">Status</span>
                                <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm" />
                                </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border-muted bg-neutralWarm/40 flex flex-col justify-between">
                                <div>
                                <p className="text-xs font-black text-brandDark/40 uppercase mb-1">Optional Channel</p>
                                <h3 className="font-bold text-brandDark mb-2">SMS / Text</h3>
                                <p className="text-xs text-brandDark/60">
                                    Short reminders and time-sensitive alerts. Carrier fees may apply.
                                </p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                <span className="text-[10px] font-black text-brandDark/40 uppercase">Status</span>
                                <div className="w-12 h-6 bg-neutralCool rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute left-1 shadow-sm" />
                                </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl border border-border-muted bg-neutralWarm/40 flex flex-col justify-between">
                                <div>
                                <p className="text-xs font-black text-brandDark/40 uppercase mb-1">Internal</p>
                                <h3 className="font-bold text-brandDark mb-2">Staff Alerts</h3>
                                <p className="text-xs text-brandDark/60">
                                    Notify assigned staff when a new booking or cancellation is created.
                                </p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                <span className="text-[10px] font-black text-brandDark/40 uppercase">Status</span>
                                <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm" />
                                </div>
                                </div>
                            </div>
                            </div>

                            {/* Automation Rules */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-neutralWarm/40 p-6 rounded-3xl border border-border-muted flex flex-col justify-between">
                                <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Bell className="text-primary" size={18} />
                                    <h3 className="font-bold text-brandDark">Appointment Reminders</h3>
                                </div>
                                <p className="text-xs text-brandDark/60 mb-4 font-medium">
                                    Reduce no-shows by sending automatic reminders before the appointment start time.
                                </p>
                                </div>
                                <div className="flex items-center gap-3">
                                <select className="flex-1 p-2 bg-white border border-border-muted rounded-xl text-xs font-bold">
                                    <option>24 hours before</option>
                                    <option>3 hours before</option>
                                    <option>1 hour before</option>
                                </select>
                                <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm" />
                                </div>
                                </div>
                            </div>

                            <div className="bg-neutralWarm/40 p-6 rounded-3xl border border-border-muted flex flex-col justify-between">
                                <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle className="text-secondary-border" size={18} />
                                    <h3 className="font-bold text-brandDark">Confirmation Messages</h3>
                                </div>
                                <p className="text-xs text-brandDark/60 mb-4 font-medium">
                                    Send a confirmation as soon as an appointment is booked, rescheduled, or cancelled.
                                </p>
                                </div>
                                <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black text-brandDark/40 uppercase">Always on</span>
                                <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer ml-auto">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm" />
                                </div>
                                </div>
                            </div>
                            </div>

                            {/* Template Editor */}
                            <div className="bg-white rounded-3xl border border-border-muted overflow-hidden shadow-sm">
                            <div className="bg-neutralCool/30 p-4 border-b border-border-muted flex gap-4">
                                <button className="text-xs font-black text-primary border-b-2 border-primary pb-1">
                                EMAIL TEMPLATE
                                </button>
                                <button className="text-xs font-black text-brandDark/40 hover:text-brandDark transition-colors pb-1">
                                SMS TEMPLATE
                                </button>
                            </div>
                            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-brandDark/50 uppercase">Subject line</label>
                                    <input
                                    type="text"
                                    defaultValue={"Your appointment at {{business_name}} is confirmed"}
                                    className="w-full p-3 bg-neutralWarm/20 border border-border-muted rounded-xl text-sm font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-brandDark/50 uppercase">Message body</label>
                                    <textarea
                                    className="w-full p-3 bg-neutralWarm/20 border border-border-muted rounded-xl text-sm font-medium h-40"
                                    defaultValue={
                                        "Hi ${customer_name}, this is a reminder for your {{service_name}} on {{date}} at {{time}}."
                                    }
                                    />
                                </div>
                                <p className="text-[10px] text-brandDark/40 font-bold">
                                    Available variables: {"{{customer_name}}, {{service_name}}, {{date}}, {{time}}, {{business_name}}"}
                                </p>
                                </div>

                                <div className="bg-neutralCool/10 border border-border-muted rounded-2xl p-4 flex flex-col items-center justify-center">
                                <div className="w-full max-w-[280px] bg-white rounded-2xl shadow-2xl border border-border-muted overflow-hidden scale-90 md:scale-100">
                                    <div className="bg-primary p-4 flex justify-center">
                                    <div className="w-8 h-8 bg-white/20 rounded-lg" />
                                    </div>
                                    <div className="p-6 space-y-3">
                                    <div className="h-2 w-20 bg-neutralCool rounded" />
                                    <div className="h-4 w-full bg-neutralCool rounded" />
                                    <div className="h-4 w-3/4 bg-neutralCool rounded" />
                                    <div className="pt-4 h-10 w-full bg-secondary rounded-xl" />
                                    </div>
                                </div>
                                <p className="mt-4 text-[10px] font-black text-brandDark/30 uppercase tracking-widest">
                                    Mobile preview
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        )}

                    {activeTab === 'Payment' && (
                        <div className="space-y-8 animate-in slide-in-from-right duration-300">
                            {/* Header */}
                            <div className="flex justify-between items-center border-b pb-4">
                            <div>
                                <h2 className="text-xl font-bold text-brandDark">Payments & Billing</h2>
                                <p className="text-xs text-primary font-medium">
                                Configure payment gateways, deposits, and tax rules
                                </p>
                            </div>
                            <div className="flex items-center gap-2 bg-neutralCool/30 px-3 py-1.5 rounded-xl border border-border-muted">
                                <span className="text-[10px] font-black text-brandDark/40 uppercase">Default currency</span>
                                <span className="text-xs font-bold text-brandDark">PHP (₱)</span>
                            </div>
                            </div>

                            {/* Gateways */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-neutralWarm/40 rounded-3xl border border-border-muted space-y-4">
                                <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-xs font-black text-brandDark/40 uppercase mb-1">Online Payments</p>
                                    <h3 className="font-bold text-brandDark">Stripe</h3>
                                    <p className="text-xs text-brandDark/60">
                                    Accept credit and debit cards securely through Stripe.
                                    </p>
                                </div>
                                <div className="w-12 h-6 bg-neutralCool rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute left-1 shadow-sm" />
                                </div>
                                </div>
                                <div className="space-y-2">
                                <label className="text-[10px] font-black text-brandDark/50 uppercase">Publishable key</label>
                                <input
                                    type="text"
                                    placeholder="pk_live_..."
                                    className="w-full p-2 bg-white border border-border-muted rounded-xl text-xs font-mono"
                                />
                                </div>
                                <div className="space-y-2">
                                <label className="text-[10px] font-black text-brandDark/50 uppercase">Secret key</label>
                                <input
                                    type="password"
                                    placeholder="••••••••••••••"
                                    className="w-full p-2 bg-white border border-border-muted rounded-xl text-xs"
                                />
                                </div>
                            </div>

                            <div className="p-6 bg-neutralWarm/40 rounded-3xl border border-border-muted space-y-4">
                                <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-xs font-black text-brandDark/40 uppercase mb-1">Local Payments</p>
                                    <h3 className="font-bold text-brandDark">GCash / Bank Transfer</h3>
                                    <p className="text-xs text-brandDark/60">
                                    Display manual payment instructions for clients who pay offline.
                                    </p>
                                </div>
                                <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm" />
                                </div>
                                </div>
                                <div className="space-y-2">
                                <label className="text-[10px] font-black text-brandDark/50 uppercase">Instructions shown on checkout</label>
                                <textarea
                                    className="w-full p-2 bg-white border border-border-muted rounded-xl text-xs"
                                    rows={3}
                                    defaultValue="Send payment via GCash to 09xx xxx xxxx and upload your receipt."
                                />
                                </div>
                            </div>
                            </div>

                            {/* Deposits & fees */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 bg-white rounded-3xl border border-border-muted space-y-3">
                                <h3 className="text-xs font-black text-brandDark/40 uppercase">Deposit required</h3>
                                <p className="text-xs text-brandDark/60">
                                Collect a partial payment to confirm the booking.
                                </p>
                                <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    defaultValue={30}
                                    className="w-20 p-2 bg-neutralCool/20 border border-border-muted rounded-xl text-xs font-bold"
                                />
                                <span className="text-xs font-bold text-brandDark">%</span>
                                </div>
                            </div>

                            <div className="p-4 bg-white rounded-3xl border border-border-muted space-y-3">
                                <h3 className="text-xs font-black text-brandDark/40 uppercase">Service fee</h3>
                                <p className="text-xs text-brandDark/60">
                                Add an optional platform or convenience fee to each booking.
                                </p>
                                <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-brandDark">₱</span>
                                <input
                                    type="number"
                                    defaultValue={0}
                                    className="w-24 p-2 bg-neutralCool/20 border border-border-muted rounded-xl text-xs font-bold"
                                />
                                </div>
                            </div>

                            <div className="p-4 bg-white rounded-3xl border border-border-muted space-y-3">
                                <h3 className="text-xs font-black text-brandDark/40 uppercase">Refund window</h3>
                                <p className="text-xs text-brandDark/60">
                                Control how close to the appointment clients can cancel for a refund.
                                </p>
                                <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    defaultValue={24}
                                    className="w-20 p-2 bg-neutralCool/20 border border-border-muted rounded-xl text-xs font-bold"
                                />
                                <span className="text-xs font-bold text-brandDark">hours before</span>
                                </div>
                            </div>
                            </div>

                            {/* Tax settings */}
                            <div className="p-6 bg-neutralWarm/40 rounded-3xl border border-border-muted space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                <h3 className="font-bold text-brandDark">Tax configuration</h3>
                                <p className="text-xs text-brandDark/60">
                                    Set your VAT or local tax rules for all services.
                                </p>
                                </div>
                                <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer">
                                <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                <label className="text-[10px] font-black text-brandDark/50 uppercase">Tax label</label>
                                <input
                                    type="text"
                                    defaultValue="VAT"
                                    className="w-full p-2 bg-white border border-border-muted rounded-xl text-xs font-bold"
                                />
                                </div>
                                <div className="space-y-2">
                                <label className="text-[10px] font-black text-brandDark/50 uppercase">Rate</label>
                                <div className="flex items-center gap-2">
                                    <input
                                    type="number"
                                    defaultValue={12}
                                    className="w-20 p-2 bg-white border border-border-muted rounded-xl text-xs font-bold"
                                    />
                                    <span className="text-xs font-bold text-brandDark">%</span>
                                </div>
                                </div>
                                <div className="space-y-2">
                                <label className="text-[10px] font-black text-brandDark/50 uppercase">Apply to</label>
                                <select className="w-full p-2 bg-white border border-border-muted rounded-xl text-xs font-bold">
                                    <option>All services</option>
                                    <option>Selected services only</option>
                                </select>
                                </div>
                            </div>
                            </div>
                        </div>
                        )}

                        {activeTab === 'Security' && (
                        <div className="space-y-8 animate-in slide-in-from-right duration-300">
                            {/* Header */}
                            <div className="flex justify-between items-center border-b pb-4">
                            <div>
                                <h2 className="text-xl font-bold text-brandDark">Security & Access</h2>
                                <p className="text-xs text-primary font-medium">
                                Protect your account, staff access, and customer data
                                </p>
                            </div>
                            <span className="text-[10px] font-black text-brandDark/40 uppercase tracking-widest">
                                LAST UPDATED: JUST NOW
                            </span>
                            </div>

                            {/* Login & sessions */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-neutralWarm/40 rounded-3xl border border-border-muted space-y-4">
                                <h3 className="text-sm font-black text-brandDark/60 uppercase tracking-widest">Login security</h3>
                                <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-brandDark">Two-factor authentication</p>
                                    <p className="text-[11px] text-brandDark/60">
                                    Require a one-time code when admins sign in.
                                    </p>
                                </div>
                                <div className="w-12 h-6 bg-neutralCool rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute left-1 shadow-sm" />
                                </div>
                                </div>
                                <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-brandDark">Session timeout</p>
                                    <p className="text-[11px] text-brandDark/60">
                                    Auto-logout inactive users to protect sensitive data.
                                    </p>
                                </div>
                                <select className="p-2 bg-white border border-border-muted rounded-xl text-xs font-bold">
                                    <option>30 minutes</option>
                                    <option>1 hour</option>
                                    <option>4 hours</option>
                                </select>
                                </div>
                            </div>

                            <div className="p-6 bg-neutralWarm/40 rounded-3xl border border-border-muted space-y-4">
                                <h3 className="text-sm font-black text-brandDark/60 uppercase tracking-widest">Access control</h3>
                                <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-brandDark">Limit staff access</p>
                                    <p className="text-[11px] text-brandDark/60">
                                    Staff can only see their own calendar and assigned clients.
                                    </p>
                                </div>
                                <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm" />
                                </div>
                                </div>
                                <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-brandDark">Export permissions</p>
                                    <p className="text-[11px] text-brandDark/60">
                                    Control who can export booking and customer lists.
                                    </p>
                                </div>
                                <select className="p-2 bg-white border border-border-muted rounded-xl text-xs font-bold">
                                    <option>Admins only</option>
                                    <option>Admins & managers</option>
                                </select>
                                </div>
                            </div>
                            </div>

                            {/* Data & privacy */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white rounded-3xl border border-border-muted space-y-4">
                                <h3 className="text-sm font-black text-brandDark/60 uppercase tracking-widest">Customer data</h3>
                                <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-brandDark">Show masked phone numbers</p>
                                    <p className="text-[11px] text-brandDark/60">
                                    Hide full phone numbers from non-admin staff.
                                    </p>
                                </div>
                                <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm" />
                                </div>
                                </div>
                                <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-brandDark">Data retention</p>
                                    <p className="text-[11px] text-brandDark/60">
                                    Automatically archive old appointments after a set period.
                                    </p>
                                </div>
                                <select className="p-2 bg-neutralCool/20 border border-border-muted rounded-xl text-xs font-bold">
                                    <option>12 months</option>
                                    <option>24 months</option>
                                    <option>Keep indefinitely</option>
                                </select>
                                </div>
                            </div>

                            <div className="p-6 bg-white rounded-3xl border border-border-muted space-y-4">
                                <h3 className="text-sm font-black text-brandDark/60 uppercase tracking-widest">Audit & logs</h3>
                                <p className="text-xs text-brandDark/60">
                                Track important security events such as logins, password changes, and deleted records.
                                </p>
                                <ul className="space-y-2 text-[11px] text-brandDark/70">
                                <li>• Login attempts and device changes</li>
                                <li>• Booking created, updated, and cancelled</li>
                                <li>• Export actions and permission changes</li>
                                </ul>
                                <button className="mt-2 px-4 py-2 bg-brandDark text-white rounded-xl text-xs font-bold hover:bg-primary transition-all">
                                VIEW ACTIVITY LOG
                                </button>
                            </div>
                            </div>

                            {/* Security notice */}
                            <div className="p-6 bg-brandDark text-white rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Shield size={120} />
                            </div>
                            <h3 className="text-sm font-black uppercase tracking-widest mb-2 text-secondary">
                                Security best practices
                            </h3>
                            <p className="text-sm opacity-80 max-w-xl leading-relaxed">
                                Use unique strong passwords, enable two-factor authentication for all admins, and review
                                staff access regularly to keep your customers safe.
                            </p>
                            </div>
                        </div>
                        )}

                </div>
            </div>
        </div>
    );
};

export default Settings;