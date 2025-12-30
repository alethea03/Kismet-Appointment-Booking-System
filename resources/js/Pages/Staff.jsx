import React, { useState } from 'react';
import { UserPlus, Mail, ShieldCheck, Star, MoreVertical, Scissors } from 'lucide-react';

const Staff = () => {
    // Mock data for team members
    const [staff] = useState([
        { id: 1, name: 'Alex Rivera', role: 'Senior Barber', email: 'alex@kismet.com', specialty: 'Fades & Shaves', status: 'Active' },
        { id: 2, name: 'Sam Taylor', role: 'Stylist', email: 'sam@kismet.com', specialty: 'Coloring', status: 'On Break' },
        { id: 3, name: 'Jordan Wells', role: 'Junior Barber', email: 'jordan@kismet.com', specialty: 'Standard Cuts', status: 'Active' },
    ]);

    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-brandDark tracking-tight">Team Members</h1>
                    <p className="text-primary font-medium">Manage staff profiles and permissions</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-secondary text-brandDark border-b-4 border-secondary-border px-6 py-3 rounded-xl font-bold hover:translate-y-[1px] hover:border-b-2 transition-all shadow-lg shadow-secondary/20">
                    <UserPlus size={20}/> Add Staff Member
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staff.map((member) => (
                    <div key={member.id} className="bg-neutralWarm rounded-3xl border border-border-muted overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                        <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                                    </div>
                                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-neutralWarm ${member.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'}`} />
                                </div>
                                <button className="p-2 text-brandDark/40 hover:text-brandDark">
                                    <MoreVertical size={20} />
                                </button>
                            </div>

                            <h3 className="text-xl font-bold text-brandDark">{member.name}</h3>
                            <p className="text-primary text-sm font-semibold mb-4">{member.role}</p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-sm text-brandDark/70">
                                    <Mail size={14} className="text-brandDark/40" />
                                    {member.email}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-brandDark/70">
                                    <Scissors size={14} className="text-brandDark/40" />
                                    <span className="bg-neutralCool/50 px-2 py-0.5 rounded-md text-xs font-bold text-brandDark uppercase tracking-tighter">
                                        {member.specialty}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-border-muted/50">
                                <div className="flex items-center gap-1 text-secondary-border">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-xs font-bold text-brandDark">4.9 Rating</span>
                                </div>
                                <button className="text-xs font-bold text-primary hover:underline uppercase tracking-widest">
                                    View Schedule
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Staff;