import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Hospital } from '../../types';
import { 
  Hospital as HospitalIcon, 
  PhoneCall, 
  MapPin, 
  Star, 
  CheckCircle2, 
  Navigation, 
  ShieldCheck, 
  Bed, 
  Search 
} from 'lucide-react';

export const NearbyHospitals: React.FC = () => {
  const { hospitals, t, addToast } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHospital, setSelectedHospital] = useState<Hospital>(hospitals[0]);

  const filteredHospitals = hospitals.filter(h =>
    h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleNavigate = (hospital: Hospital) => {
    addToast('info', 'Opening GPS Route 📍', `Calculating fastest ambulance route to ${hospital.name}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <HospitalIcon className="w-6 h-6 text-teal-400" />
            {t('findHospitalBtn')}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            45+ Empanelled 100% Cashless Hospitals across NCR & Industrial Metro Corridors
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search trauma care, fracture..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white outline-none focus:border-teal-500"
          />
        </div>
      </div>

      {/* Grid: Hospital Cards & Simulated Interactive Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left List of Hospitals */}
        <div className="lg:col-span-7 space-y-4">
          {filteredHospitals.map((hospital) => {
            const isSelected = selectedHospital.id === hospital.id;
            return (
              <div
                key={hospital.id}
                onClick={() => setSelectedHospital(hospital)}
                className={`bg-slate-900 border rounded-2xl p-5 shadow-lg cursor-pointer transition-all ${
                  isSelected
                    ? 'border-teal-500 shadow-teal-500/10 ring-1 ring-teal-500/40 bg-slate-850'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        100% Cashless Partner
                      </span>
                      <span className="text-xs text-teal-400 font-bold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {hospital.distance}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-1.5">{hospital.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{hospital.address}</p>
                  </div>

                  <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-lg text-amber-400 text-xs font-bold shrink-0">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{hospital.rating}</span>
                  </div>
                </div>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800">
                  {hospital.specialties.map((spec) => (
                    <span key={spec} className="px-2 py-0.5 bg-slate-950 text-slate-300 rounded text-[10px]">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Bed Availability & Action */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
                    <Bed className="w-3.5 h-3.5" />
                    {hospital.bedAvailability}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${hospital.emergencyPhone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>Call Trauma Desk</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Map Simulation & Hospital Focus Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex-1 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-teal-400" />
                  Live Corridor GPS Radar
                </span>
                <span className="text-[10px] font-mono text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded">
                  Active Geo-Fence
                </span>
              </div>

              {/* Simulated Map Graphic with Pulse Pins */}
              <div className="relative mt-3 h-52 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center p-4">
                {/* Background gridlines for map aesthetic */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
                
                {/* Construction Site Location Pin */}
                <div className="absolute top-1/3 left-1/4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-500/30 animate-pulse flex items-center justify-center text-[8px] font-bold text-black">
                    🏗️
                  </div>
                  <span className="text-[9px] font-bold text-amber-300 bg-slate-900/90 px-1.5 py-0.5 rounded mt-1 shadow">
                    Site A (Metro)
                  </span>
                </div>

                {/* Hospital Pins */}
                <div className="absolute top-1/4 right-1/4 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/40 animate-pulse flex items-center justify-center text-[10px] text-white">
                    🏥
                  </div>
                  <span className="text-[9px] font-bold text-emerald-300 bg-slate-900/90 px-1.5 py-0.5 rounded mt-1 shadow">
                    Fortis Escorts (2.4km)
                  </span>
                </div>

                <div className="absolute bottom-1/4 left-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-teal-500 ring-4 ring-teal-500/30 flex items-center justify-center text-[9px] text-white">
                    🏥
                  </div>
                  <span className="text-[9px] font-bold text-teal-300 bg-slate-900/90 px-1.5 py-0.5 rounded mt-1 shadow">
                    Apollo Trauma (4.1km)
                  </span>
                </div>

                <div className="absolute bottom-2 right-2 text-[9px] text-slate-500 font-mono">
                  Map Data © NirmaanCare GeoRadar
                </div>
              </div>

              {/* Selected Hospital Focus */}
              <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block">
                  Focused Trauma Centre:
                </span>
                <h4 className="text-sm font-bold text-white">{selectedHospital.name}</h4>
                <p className="text-xs text-slate-400">{selectedHospital.address}</p>
                <div className="flex items-center justify-between text-xs pt-2">
                  <span className="text-slate-300">Emergency Desk:</span>
                  <span className="font-mono font-bold text-rose-400">{selectedHospital.emergencyPhone}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <button
                onClick={() => handleNavigate(selectedHospital)}
                className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Start Direct Ambulance Navigation (7 Mins)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
