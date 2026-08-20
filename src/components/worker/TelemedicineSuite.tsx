import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Doctor, TelemedicineAppointment } from '../../types';
import { 
  Stethoscope, 
  Video, 
  Calendar, 
  Clock, 
  Star, 
  CheckCircle2, 
  Languages, 
  Hospital, 
  ShieldCheck, 
  PhoneCall, 
  Sparkles,
  Award,
  ArrowRight
} from 'lucide-react';

export const TelemedicineSuite: React.FC = () => {
  const { 
    doctors, 
    appointments, 
    bookAppointment, 
    startVideoCall, 
    t, 
    addToast 
  } = useApp();

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState('20 Aug 2026');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [symptomsInput, setSymptomsInput] = useState('Pain and swelling in lower left leg after slipping on scaffolding planks.');
  const [confirmedBooking, setConfirmedBooking] = useState<TelemedicineAppointment | null>(appointments[0] || null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctor) return;

    const apt = bookAppointment(selectedDoctor.id, selectedDate, selectedTime, symptomsInput);
    setConfirmedBooking(apt);
    setIsBookingModalOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner with Confirmation Box if active appointment exists */}
      {confirmedBooking && (
        <div className="bg-gradient-to-r from-teal-950/80 via-slate-900 to-teal-950/80 border border-teal-500/40 rounded-2xl p-5 shadow-xl animate-fadeIn flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-4">
            <div className="relative">
              <img
                src={confirmedBooking.doctorAvatar}
                alt={confirmedBooking.doctorName}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-400 shrink-0"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                <CheckCircle2 className="w-2.5 h-2.5 text-white" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                  Appointment Confirmed
                </span>
                <span className="text-xs text-slate-400 font-mono">ID: {confirmedBooking.id}</span>
              </div>
              <h3 className="text-base font-bold text-white mt-1">
                {confirmedBooking.doctorName}
              </h3>
              <p className="text-xs text-teal-400 font-medium">
                {confirmedBooking.doctorSpecialty}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  {confirmedBooking.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {confirmedBooking.time}
                </span>
                <span className="flex items-center gap-1 bg-teal-500/10 px-2 py-0.5 rounded text-teal-300 font-semibold text-[11px]">
                  <Video className="w-3 h-3" />
                  {confirmedBooking.mode}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                startVideoCall(confirmedBooking);
                addToast('info', 'Connecting Video Room...', 'Connecting to secure doctor video room.');
              }}
              className="flex-1 md:flex-initial py-3 px-5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-extrabold text-xs shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Video className="w-4 h-4" />
              <span>Launch Live Video Consultation</span>
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-teal-400" />
            {t('telemedicineTitle')}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {t('telemedicineSubtitle')} • <strong className="text-emerald-400">100% Free & Cashless for Workers</strong>
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>NABH & MCI Certified Doctors</span>
        </div>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {doctors.map((doctor) => {
          return (
            <div
              key={doctor.id}
              className="bg-slate-900 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all group hover:shadow-teal-500/10"
            >
              <div>
                {/* Doctor Avatar & Rating Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={doctor.avatar}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-700 group-hover:border-teal-400 transition-colors shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                          {doctor.name}
                        </h4>
                      </div>
                      <p className="text-xs text-teal-400 font-medium">{doctor.specialty}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        {doctor.experience}
                      </p>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2 py-1 rounded-lg text-amber-400 text-xs font-bold shrink-0">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{doctor.rating}</span>
                    <span className="text-[10px] text-slate-500 font-normal">({doctor.reviewsCount})</span>
                  </div>
                </div>

                {/* Languages & Hospital */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Hospital className="w-3.5 h-3.5 text-teal-400" />
                      Affiliation:
                    </span>
                    <span className="font-semibold text-slate-200">{doctor.hospitalAffiliation}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Languages className="w-3.5 h-3.5 text-indigo-400" />
                      Languages:
                    </span>
                    <div className="flex gap-1">
                      {doctor.languages.map((l) => (
                        <span key={l} className="px-1.5 py-0.2 bg-slate-800 rounded text-[11px] text-slate-300">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Next Slot:
                    </span>
                    <span className="font-bold text-amber-300">{doctor.availableTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Consultation Fee</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-emerald-400">FREE (₹0)</span>
                    <span className="text-[10px] text-slate-500 line-through">₹500</span>
                    <span className="text-[9px] bg-teal-500/20 text-teal-300 px-1.5 py-0.2 rounded font-bold">Covered</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenBooking(doctor)}
                    className="py-2 px-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md shadow-teal-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>{t('bookConsultation')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src={selectedDoctor.avatar}
                  alt={selectedDoctor.name}
                  className="w-12 h-12 rounded-xl object-cover border border-teal-500/40"
                />
                <div>
                  <h3 className="text-base font-bold text-white">{selectedDoctor.name}</h3>
                  <p className="text-xs text-teal-400">{selectedDoctor.specialty}</p>
                </div>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleConfirmBooking} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Select Consultation Date
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Today, 19 Aug', 'Tomorrow, 20 Aug', '21 Aug 2026'].map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border text-center transition-all ${
                        selectedDate === d
                          ? 'bg-teal-500/20 border-teal-500 text-teal-300'
                          : 'bg-slate-950 border-slate-800 text-slate-300'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Available Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['10:30 AM', '02:00 PM', '04:30 PM', '06:00 PM', '07:30 PM', 'Instant 15m'].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border text-center transition-all ${
                        selectedTime === slot
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-slate-950 border-slate-800 text-slate-300'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Symptoms & Primary Complaint
                </label>
                <textarea
                  value={symptomsInput}
                  onChange={(e) => setSymptomsInput(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-teal-500 outline-none"
                  placeholder="Describe your pain, swelling, or trauma details..."
                  required
                />
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block">Consultation Mode</span>
                  <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Video className="w-3.5 h-3.5 text-teal-400" />
                    Encrypted High-Definition Video Call
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                  ₹0 (Employer Covered)
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
              >
                Confirm Appointment & Generate Room Link
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
