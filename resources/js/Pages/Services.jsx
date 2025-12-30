import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Clock, DollarSign, Briefcase } from 'lucide-react';

const Services = () => {
  // Example state - later this will come from Supabase
  const [services, setServices] = useState([
    { id: 1, name: 'Standard Haircut', duration: '30 min', price: '25.00' },
    { id: 2, name: 'Premium Grooming', duration: '60 min', price: '50.00' },
    { id: 3, name: 'Beard Styling', duration: '20 min', price: '15.00' },
  ]);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-brandDark tracking-tight">Service Catalog</h1>
          <p className="text-primary font-medium">Define your offerings and pricing</p>
        </div>
        <button className="flex items-center gap-2 bg-secondary text-brandDark border-b-4 border-secondary-border px-6 py-3 rounded-xl font-bold hover:translate-y-[1px] hover:border-b-2 transition-all shadow-lg shadow-secondary/20">
          <Plus size={20}/> Add New Service
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-neutralWarm p-6 rounded-3xl border border-border-muted shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
          >
            {/* Design Accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />

            <div className="flex justify-between items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary border border-primary/20">
                <Briefcase size={24} />
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-neutralCool rounded-lg text-brandDark transition-colors">
                  <Edit3 size={18}/>
                </button>
                <button className="p-2 hover:bg-red-50 rounded-lg text-red-500 transition-colors">
                  <Trash2 size={18}/>
                </button>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-brandDark mb-4">{service.name}</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-brandDark/70">
                <div className="p-1.5 bg-neutralCool rounded-lg text-primary">
                    <Clock size={16} />
                </div>
                <span className="font-medium">{service.duration}</span>
              </div>
              <div className="flex items-center gap-3 text-brandDark/70">
                <div className="p-1.5 bg-neutralCool rounded-lg text-secondary-border">
                    <DollarSign size={16} />
                </div>
                <span className="font-bold text-lg text-brandDark">${service.price}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State / Add Placeholder */}
        <button className="border-2 border-dashed border-border-muted rounded-3xl flex flex-col items-center justify-center p-8 text-brandDark/40 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all group">
            <Plus size={48} className="mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-bold">Create New Service</span>
        </button>
      </div>
    </div>
  );
};

export default Services;