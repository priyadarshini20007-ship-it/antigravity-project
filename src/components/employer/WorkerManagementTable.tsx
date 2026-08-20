import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { WorkerProfile } from '../../types';
import { 
  Users, 
  UserPlus, 
  UploadCloud, 
  Search, 
  Filter, 
  ShieldCheck, 
  FileText, 
  MoreVertical, 
  CheckCircle2, 
  Download,
  AlertCircle
} from 'lucide-react';

export const WorkerManagementTable: React.FC = () => {
  const { workersRoster, addWorkerToRoster, employerWorkerCount, addToast } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [siteFilter, setSiteFilter] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New worker form state
  const [newName, setNewName] = useState('');
  const [newTrade, setNewTrade] = useState('Reinforcement Steel Binder');
  const [newSite, setNewSite] = useState('Metro Line 4 - Elevated Corridor');
  const [newPhone, setNewPhone] = useState('+91 98334 11223');
  const [newAge, setNewAge] = useState(30);
  const [newBloodGroup, setNewBloodGroup] = useState('B+');

  const filteredWorkers = workersRoster.filter((w) => {
    const matchesSearch = w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          w.trade.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          w.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSite = siteFilter === 'All' || w.siteName.includes(siteFilter);
    return matchesSearch && matchesSite;
  });

  const handleCreateWorker = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) return;

    addWorkerToRoster({
      name: newName,
      nameHi: newName,
      nameTa: newName,
      role: newTrade,
      roleHi: newTrade,
      trade: newTrade,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      age: newAge,
      phone: newPhone,
      aadhaarLast4: Math.floor(1000 + Math.random() * 9000).toString(),
      eShramId: `UAN-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}-1122`,
      bocwId: `BOCW-MH-2026-${Math.floor(10000 + Math.random() * 90000)}`,
      bloodGroup: `${newBloodGroup} Positive`,
      employer: 'ABC Constructions Infrastructure Ltd.',
      siteName: newSite,
      coverageStatus: 'Active',
      sumInsured: 200000,
      activeClaimsCount: 0,
      nextConsultation: null,
      emergencyContact: {
        name: 'Family Contact',
        relationship: 'Spouse',
        phone: newPhone
      }
    });

    setIsAddModalOpen(false);
    setNewName('');
  };

  const handleBulkUpload = () => {
    addToast('success', 'Bulk Excel Upload Complete! 📁', 'Imported 48 construction workers from Site A roster with instant ₹2,00,000 active insurance certificates.');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
      
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-400" />
              Worker Roster & Health Coverage Status
            </h3>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300">
              {employerWorkerCount} Active Roster
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage worker insurance enrollments, claims status, and health cards.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleBulkUpload}
            className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <UploadCloud className="w-4 h-4 text-teal-400" />
            <span>Bulk CSV Import</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="py-2 px-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-teal-500/20 transition-all cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>Add Single Worker</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search worker by name, ID, or trade..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white outline-none focus:border-teal-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Site Filter:
          </span>
          <select
            value={siteFilter}
            onChange={(e) => setSiteFilter(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white outline-none focus:border-teal-500"
          >
            <option value="All">All Construction Sites</option>
            <option value="Metro Line 4">Metro Line 4 (Elevated)</option>
            <option value="Skyrise Commercial">Skyrise Tower B2</option>
            <option value="Highway Flyover">Highway Flyover Phase 2</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider text-[10px] border-b border-slate-800">
            <tr>
              <th className="py-3 px-4">Worker Profile</th>
              <th className="py-3 px-4">Trade / Specialization</th>
              <th className="py-3 px-4">Site Assignment</th>
              <th className="py-3 px-4">Coverage Status</th>
              <th className="py-3 px-4">Sum Insured</th>
              <th className="py-3 px-4">Active Claims</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 bg-slate-900/60">
            {filteredWorkers.map((w) => (
              <tr key={w.id} className="hover:bg-slate-850 transition-colors">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={w.avatar}
                      alt={w.name}
                      className="w-9 h-9 rounded-xl object-cover border border-slate-700 shrink-0"
                    />
                    <div>
                      <span className="font-bold text-white block">{w.name}</span>
                      <span className="text-[10px] font-mono text-slate-400">{w.id} • {w.bloodGroup}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-slate-300 font-medium">{w.trade}</td>
                <td className="py-3 px-4 text-slate-400 max-w-[180px] truncate">{w.siteName}</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    {w.coverageStatus}
                  </span>
                </td>
                <td className="py-3 px-4 font-bold text-white">
                  ₹{w.sumInsured.toLocaleString('en-IN')}
                </td>
                <td className="py-3 px-4">
                  {w.activeClaimsCount > 0 ? (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold">
                      {w.activeClaimsCount} Active
                    </span>
                  ) : (
                    <span className="text-slate-500 text-[11px]">None</span>
                  )}
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => addToast('info', 'Worker Card', `Viewing health policy dossier for ${w.name}`)}
                    className="text-xs font-bold text-teal-400 hover:text-teal-300 hover:underline"
                  >
                    View Card
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Worker Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-teal-400" />
                Enroll New Construction Worker
              </h4>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateWorker} className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Worker Full Name
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Mukesh Kumar"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">
                    Trade Role
                  </label>
                  <input
                    type="text"
                    value={newTrade}
                    onChange={(e) => setNewTrade(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">
                    Age & Blood
                  </label>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      value={newAge}
                      onChange={(e) => setNewAge(Number(e.target.value))}
                      className="w-16 bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs text-white outline-none focus:border-teal-500"
                    />
                    <select
                      value={newBloodGroup}
                      onChange={(e) => setNewBloodGroup(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs text-white outline-none focus:border-teal-500"
                    >
                      <option value="O+">O+</option>
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="AB+">AB+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Site Assignment
                </label>
                <select
                  value={newSite}
                  onChange={(e) => setNewSite(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
                >
                  <option value="Metro Line 4 - Elevated Corridor">Metro Line 4 - Elevated Corridor</option>
                  <option value="Skyrise Commercial Tower B2">Skyrise Commercial Tower B2</option>
                  <option value="Express Highway Flyover Phase 2">Express Highway Flyover Phase 2</option>
                </select>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                <span className="text-emerald-400 font-bold block">Instant ₹2,00,000 Group Insurance Cover</span>
                Auto-debited under ABC Constructions Monthly Plan at ₹150/month.
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
              >
                Enroll Worker & Issue Digital Health Card
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
