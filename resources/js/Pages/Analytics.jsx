import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend, 
    Filler 
} from 'chart.js';
import { TrendingUp, Users, Calendar, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Analytics = () => {
    // Mock Data for the Charts
    const revenueData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Revenue ($)',
            data: [400, 600, 450, 800, 950, 1200, 700],
            backgroundColor: '#8D27DE', // Primary Purple
            borderRadius: 8,
        }]
    };

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-brandDark tracking-tight">Business Insights</h1>
                <p className="text-primary font-medium">Performance overview and growth tracking</p>
            </div>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                    { title: 'Total Revenue', value: '$4,250', icon: <DollarSign />, trend: '+12.5%', up: true },
                    { title: 'Appointments', value: '154', icon: <Calendar />, trend: '+8.2%', up: true },
                    { title: 'New Customers', value: '28', icon: <Users />, trend: '-2.4%', up: false },
                    { title: 'Avg. Ticket', value: '$27.60', icon: <TrendingUp />, trend: '+4.1%', up: true },
                ].map((stat, i) => (
                    <div key={i} className="bg-neutralWarm p-6 rounded-3xl border border-border-muted shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-neutralCool rounded-xl text-primary">{stat.icon}</div>
                            <div className={`flex items-center text-[10px] font-bold px-2 py-1 rounded-full ${stat.up ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                {stat.up ? <ArrowUpRight size={10}/> : <ArrowDownRight size={10}/>} {stat.trend}
                            </div>
                        </div>
                        <p className="text-xs font-bold text-brandDark/40 uppercase tracking-widest">{stat.title}</p>
                        <p className="text-2xl font-black text-brandDark">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-neutralWarm p-6 rounded-3xl border border-border-muted shadow-sm">
                    <h3 className="font-bold text-brandDark mb-6 uppercase text-sm tracking-widest">Weekly Revenue Performance</h3>
                    <div className="h-[300px]">
                        <Bar data={revenueData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                    </div>
                </div>

                {/* Top Services Breakdown */}
                <div className="bg-neutralWarm p-6 rounded-3xl border border-border-muted shadow-sm">
                    <h3 className="font-bold text-brandDark mb-6 uppercase text-sm tracking-widest">Most Popular Services</h3>
                    <div className="space-y-4">
                        {[
                            { name: 'Full Grooming', count: 45, color: 'bg-primary' },
                            { name: 'Haircut & Beard', count: 38, color: 'bg-secondary' },
                            { name: 'Basic Trim', count: 22, color: 'bg-brandDark' },
                            { name: 'Coloring', count: 12, color: 'bg-primary/40' },
                        ].map((service, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-xs font-bold text-brandDark mb-1">
                                    <span>{service.name}</span>
                                    <span>{service.count}</span>
                                </div>
                                <div className="w-full bg-neutralCool h-2 rounded-full overflow-hidden">
                                    <div className={`${service.color} h-full`} style={{ width: `${(service.count/45)*100}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;