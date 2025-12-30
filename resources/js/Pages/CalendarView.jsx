import React from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const CalendarView = ({ onSlotClick }) => {
    const hours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
    const days = [
        { name: 'Mon', date: 'Oct 30' },
        { name: 'Tue', date: 'Oct 31' },
        { name: 'Wed', date: 'Nov 01' },
        { name: 'Thu', date: 'Nov 02' },
        { name: 'Fri', date: 'Nov 03' },
        { name: 'Sat', date: 'Nov 04' },
        { name: 'Sun', date: 'Nov 05' },
    ];

    return (
        <div className="flex flex-col h-full space-y-4">
            {/* Calendar Sub-Header */}
            <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-border-muted shadow-sm">
                <div className="flex items-center gap-4">
                    <h3 className="text-xl font-bold text-brandDark">October 2023</h3>
                    <div className="flex bg-neutralCool/50 p-1 rounded-xl">
                        <button className="p-1.5 hover:bg-white rounded-lg transition-all"><ChevronLeft size={18}/></button>
                        <button className="p-1.5 hover:bg-white rounded-lg transition-all"><ChevronRight size={18}/></button>
                    </div>
                </div>
                <div className="flex bg-neutralCool/30 p-1 rounded-xl border border-border-muted">
                    {['Day', 'Week', 'Month'].map(view => (
                        <button key={view} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${view === 'Week' ? 'bg-white shadow-sm text-primary' : 'text-brandDark/50'}`}>
                            {view}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Scrollable Grid */}
            <div className="bg-white rounded-3xl border border-border-muted shadow-xl overflow-hidden flex flex-col flex-1">
                {/* Sticky Days Header */}
                <div className="grid grid-cols-[100px_repeat(7,1fr)] bg-neutralWarm/50 backdrop-blur-md border-b border-border-muted sticky top-0 z-20">
                    <div className="p-4 flex items-center justify-center border-r border-border-muted">
                        <Clock size={16} className="text-primary/40" />
                    </div>
                    {days.map((day, i) => (
                        <div key={i} className="p-4 text-center border-r border-border-muted last:border-r-0">
                            <p className="text-[10px] font-black text-primary uppercase tracking-tighter">{day.name}</p>
                            <p className="text-lg font-bold text-brandDark leading-none">{day.date.split(' ')[1]}</p>
                        </div>
                    ))}
                </div>

                {/* Grid Body */}
                <div className="overflow-y-auto flex-1">
                    {hours.map((hour) => (
                        <div key={hour} className="grid grid-cols-[100px_repeat(7,1fr)] border-b border-border-muted/30 group">
                            {/* Time Label */}
                            <div className="p-6 text-right text-[10px] font-black text-brandDark/30 uppercase border-r border-border-muted bg-neutralWarm/20 group-hover:text-primary transition-colors">
                                {hour}
                            </div>
                            
                            {/* Slots */}
                            {days.map((_, i) => (
                                <div 
                                    key={i}
                                    onClick={() => onSlotClick(hour)}
                                    className="border-r border-border-muted/30 min-h-[120px] relative hover:bg-primary/5 transition-all cursor-pointer group/slot"
                                >
                                    {/* Mock Appointment for Tue 10AM */}
                                    {hour === '10:00 AM' && i === 1 && (
                                        <div className="absolute inset-1.5 p-3 bg-primary/90 backdrop-blur-sm text-white rounded-2xl shadow-lg border-l-4 border-secondary animate-in zoom-in-95 duration-300">
                                            <p className="text-[10px] font-black uppercase opacity-80 mb-1">John Doe</p>
                                            <p className="text-xs font-bold leading-tight">Premium Grooming</p>
                                            <div className="mt-2 flex items-center gap-1 text-[9px] font-bold">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                                                PAID
                                            </div>
                                        </div>
                                    )}
                                    {/* Hover Indicator */}
                                    <div className="absolute inset-0 opacity-0 group-hover/slot:opacity-100 flex items-center justify-center pointer-events-none">
                                        <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">+ BOOK</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalendarView;