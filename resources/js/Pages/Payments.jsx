import React, { useState } from 'react';
import { CreditCard, DollarSign, CheckCircle2, Clock, Filter, ArrowUpRight } from 'lucide-react';

const Payments = () => {
    const [transactions] = useState([
        { id: 'TXN-1024', customer: 'John Doe', service: 'Full Grooming', amount: '50.00', method: 'Cash', status: 'Completed', date: 'Oct 28, 2023' },
        { id: 'TXN-1025', customer: 'Jane Smith', service: 'Haircut', amount: '25.00', method: 'Gcash', status: 'Pending', date: 'Oct 28, 2023' },
        { id: 'TXN-1026', customer: 'Mike Brown', service: 'Beard Trim', amount: '15.00', method: 'Bank Transfer', status: 'Completed', date: 'Oct 27, 2023' },
    ]);

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-brandDark tracking-tight">Payment Records</h1>
                    <p className="text-primary font-medium">Track manual payments and transaction history</p>
                </div>
                <div className="bg-neutralWarm px-6 py-3 rounded-2xl border border-border-muted shadow-sm">
                    <p className="text-xs font-bold text-brandDark/50 uppercase tracking-widest">Today's Revenue</p>
                    <p className="text-2xl font-black text-brandDark">$90.00</p>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary text-white p-6 rounded-3xl shadow-lg shadow-primary/20">
                    <div className="flex justify-between items-start mb-4">
                        <DollarSign size={24} className="opacity-80" />
                        <span className="bg-white/20 text-[10px] font-bold px-2 py-1 rounded-full">Monthly Total</span>
                    </div>
                    <p className="text-3xl font-bold">$2,450.00</p>
                </div>
                <div className="bg-neutralWarm border border-border-muted p-6 rounded-3xl">
                    <div className="flex justify-between items-start mb-4 text-secondary-border">
                        <Clock size={24} />
                        <span className="bg-secondary/10 text-secondary-border text-[10px] font-bold px-2 py-1 rounded-full">Outstanding</span>
                    </div>
                    <p className="text-3xl font-bold text-brandDark">$125.00</p>
                </div>
                <div className="bg-neutralWarm border border-border-muted p-6 rounded-3xl">
                    <div className="flex justify-between items-start mb-4 text-green-600">
                        <CheckCircle2 size={24} />
                        <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full">Success Rate</span>
                    </div>
                    <p className="text-3xl font-bold text-brandDark">98%</p>
                </div>
            </div>

            {/* Transaction Table */}
            <div className="bg-neutralWarm rounded-3xl border border-border-muted overflow-hidden shadow-sm">
                <div className="p-4 border-b border-border-muted bg-neutralCool/20 flex justify-between items-center">
                    <h3 className="font-bold text-brandDark">Recent Transactions</h3>
                    <button className="flex items-center gap-2 text-xs font-bold text-primary hover:bg-primary/5 p-2 rounded-lg transition-all">
                        <Filter size={14} /> FILTERS
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-border-muted/50">
                                <th className="p-4 text-xs font-bold text-brandDark/50 uppercase">Transaction ID</th>
                                <th className="p-4 text-xs font-bold text-brandDark/50 uppercase">Customer</th>
                                <th className="p-4 text-xs font-bold text-brandDark/50 uppercase">Method</th>
                                <th className="p-4 text-xs font-bold text-brandDark/50 uppercase text-right">Amount</th>
                                <th className="p-4 text-xs font-bold text-brandDark/50 uppercase text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-muted/30">
                            {transactions.map((txn) => (
                                <tr key={txn.id} className="hover:bg-white/50 transition-colors">
                                    <td className="p-4 font-mono text-xs text-brandDark/60">{txn.id}</td>
                                    <td className="p-4">
                                        <p className="font-bold text-brandDark">{txn.customer}</p>
                                        <p className="text-[10px] text-brandDark/40 uppercase font-bold">{txn.service}</p>
                                    </td>
                                    <td className="p-4 text-sm font-medium text-brandDark/70">{txn.method}</td>
                                    <td className="p-4 text-right font-black text-brandDark">${txn.amount}</td>
                                    <td className="p-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                                            txn.status === 'Completed' 
                                            ? 'bg-secondary text-brandDark' 
                                            : 'bg-neutralCool text-brandDark/40'
                                        }`}>
                                            {txn.status}
                                        </span>
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

export default Payments;