import React from 'react';
import { X } from 'lucide-react';

const AppointmentModal = ({ isOpen, onClose, selectedTime }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-brandDark/40 backdrop-blur-sm transition-all">
      <div className="bg-neutralWarm rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-neutralCool animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-neutralCool bg-neutralCool/20">
          <h3 className="text-xl font-bold text-brandDark">New Appointment</h3>
          <button 
            onClick={onClose} 
            className="text-brandDark/50 hover:text-brandDark p-1 hover:bg-neutralCool rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>
        <form className="p-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-bold text-brandDark mb-2 uppercase tracking-wide">
              Customer Name
            </label>
            <input 
              type="text" 
              className="w-full p-3 bg-white border border-neutralCool rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-brandDark transition-all" 
              placeholder="e.g. John Doe" 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-brandDark mb-2 uppercase tracking-wide">
                Selected Time
              </label>
              <input 
                type="text" 
                disabled 
                value={selectedTime} 
                className="w-full p-3 bg-neutralCool/50 border border-neutralCool rounded-xl text-brandDark/60 font-medium cursor-not-allowed" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brandDark mb-2 uppercase tracking-wide">
                Service
              </label>
              <select className="w-full p-3 bg-white border border-neutralCool rounded-xl focus:ring-2 focus:ring-primary outline-none text-brandDark cursor-pointer appearance-none transition-all">
                <option>Haircut</option>
                <option>Beard Trim</option>
                <option>Full Grooming</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-secondary text-brandDark py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-secondary/20 active:scale-[0.98]"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;