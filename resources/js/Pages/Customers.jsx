import React, { useState } from 'react';
import { Search, UserPlus, Mail, Phone, Calendar as CalendarIcon, MoreVertical } from 'lucide-react';

const Customers = () => {
    // Mock data - will later be fetched from your Supabase 'customers' table
    const [customers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-0123', lastVisit: '2023-10-25', totalSpent: '150.00' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-0456', lastVisit: '2023-10-20', totalSpent: '85.00' },
        { id: 3, name: 'Michael Brown', email: 'mike@example.com', phone: '555-0789', lastVisit: '2023-10-15', totalSpent: '210.00' },
    ]);

    return (
        <div className="animate-in fade-in duration-500">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-brandDark tracking-tight">Customer Directory</h1>
                    <p className="text-primary font-medium">Manage your client relationships and history</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-secondary text-brandDark border-b-4 border-secondary-border px-6 py-3 rounded-xl font-bold hover:translate-y-[1px] hover:border-b-2 transition-all shadow-lg shadow-secondary/20">
                    <UserPlus size={20}/> Add New Customer
                </button>
            </div>

            {/* Search and Filters */}
            <div className="bg-neutralWarm p-4 rounded-2xl border border-border-muted mb-6 flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brandDark/40" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search by name, email, or phone..." 
                        className="w-full pl-10 pr-4 py-2 bg-white border border-border-muted rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                </div>
            </div>

            {/* Customer Table */}
            <div className="bg-neutralWarm rounded-3xl border border-border-muted overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-neutralCool/30 border-b border-border-muted">
                                <th className="p-4 font-bold text-brandDark uppercase text-xs tracking-widest">Customer</th>
                                <th className="p-4 font-bold text-brandDark uppercase text-xs tracking-widest">Contact</th>
                                <th className="p-4 font-bold text-brandDark uppercase text-xs tracking-widest">Last Visit</th>
                                <th className="p-4 font-bold text-brandDark uppercase text-xs tracking-widest text-right">Revenue</th>
                                <th className="p-4 w-10"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-muted/50">
                            {customers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-primary/5 transition-colors group">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-sm">
                                                {customer.name.charAt(0)}
                                            </div>
                                            <span className="font-bold text-brandDark">{customer.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-brandDark/70">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-1"><Mail size={14}/> {customer.email}</div>
                                            <div className="flex items-center gap-1 mt-1"><Phone size={14}/> {customer.phone}</div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-brandDark/70">
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon size={14} className="text-primary"/>
                                            {customer.lastVisit}
                                        </div>
                                    </td>
                                    <td className="p-4 text-right font-bold text-brandDark">
                                        ${customer.totalSpent}
                                    </td>
                                    <td className="p-4">
                                        <button className="p-2 hover:bg-neutralCool rounded-lg text-brandDark/40 hover:text-brandDark transition-all">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customers;