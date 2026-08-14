import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Trash2, 
  Eye, 
  EyeOff, 
  Loader2, 
  CheckSquare, 
  Square,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  AlertCircle,
  X
} from 'lucide-react';
import { supabase } from '../../supabaseClient';

interface DBInquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  product?: string;
  service?: string;
  message?: string;
  status: string;
  is_read: boolean;
  created_at: string;
}

export const ManageInquiries: React.FC = () => {
  const [inquiries, setInquiries] = useState<DBInquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [loading, setLoading] = useState(true);

  // Detail Modal popup state
  const [selectedInquiry, setSelectedInquiry] = useState<DBInquiry | null>(null);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) setInquiries(data);
    } catch (e) {
      console.error("Error fetching inquiries:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to permanently delete this inquiry from the database?")) return;
    
    try {
      const { error } = await supabase.from('inquiries').delete().eq('id', id);
      if (error) throw error;
      setInquiries(prev => prev.filter(inq => inq.id !== id));
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
    } catch (err: any) {
      alert("Error deleting inquiry: " + err.message);
    }
  };

  const handleToggleRead = async (inq: DBInquiry, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextRead = !inq.is_read;
    try {
      const { error } = await supabase.from('inquiries').update({ is_read: nextRead }).eq('id', inq.id);
      if (error) throw error;
      
      const updated = { ...inq, is_read: nextRead };
      setInquiries(prev => prev.map(item => item.id === inq.id ? updated : item));
      if (selectedInquiry?.id === inq.id) setSelectedInquiry(updated);
    } catch (err: any) {
      console.error(err);
    }
  };

  const handleStatusChange = async (inq: DBInquiry, newStatus: string) => {
    try {
      const { error } = await supabase.from('inquiries').update({ status: newStatus }).eq('id', inq.id);
      if (error) throw error;
      
      const updated = { ...inq, status: newStatus };
      setInquiries(prev => prev.map(item => item.id === inq.id ? updated : item));
      if (selectedInquiry?.id === inq.id) setSelectedInquiry(updated);
    } catch (err: any) {
      alert("Error updating status: " + err.message);
    }
  };

  const handleViewDetails = async (inq: DBInquiry) => {
    setSelectedInquiry(inq);
    // Mark as Read automatically when clicked/opened
    if (!inq.is_read) {
      try {
        await supabase.from('inquiries').update({ is_read: true }).eq('id', inq.id);
        setInquiries(prev => prev.map(item => item.id === inq.id ? { ...item, is_read: true } : item));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchSearch = inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (inq.email && inq.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        inq.phone.includes(searchQuery) ||
                        (inq.product && inq.product.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchStatus = filterStatus === 'All' || inq.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'New': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'Contacted': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'In Progress': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Completed': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default: return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-white font-heading tracking-tight">
          Customer Inquiries
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Review product queries, service quotes, and contact submissions from the public website
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4">
        
        {/* Search */}
        <div className="relative w-full md:flex-grow">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search inquiries by name, phone, email, or product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
          />
        </div>

        {/* Status Filter */}
        <div className="w-full md:w-48 shrink-0">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full px-3 py-2.5 text-sm bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-200 focus:outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

      </div>

      {/* Inquiries Table / Cards */}
      {loading ? (
        <div className="min-h-[30vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-tgmc-blue" />
        </div>
      ) : filteredInquiries.length === 0 ? (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-12 text-center text-slate-500">
          <p className="text-sm">No customer inquiries found.</p>
        </div>
      ) : (
        <div className="bg-slate-950 border border-slate-800/80 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-850 bg-slate-950/60 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 w-10">Read</th>
                  <th className="py-4 px-6">Customer</th>
                  <th className="py-4 px-6">Interested In</th>
                  <th className="py-4 px-6">Message Preview</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-center w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {filteredInquiries.map((inq) => (
                  <tr 
                    key={inq.id}
                    onClick={() => handleViewDetails(inq)}
                    className={`hover:bg-slate-900/60 transition-colors cursor-pointer ${
                      !inq.is_read ? 'font-bold text-white bg-slate-900/20' : 'text-slate-300'
                    }`}
                  >
                    {/* Read Checkbox Column */}
                    <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={(e) => handleToggleRead(inq, e)}
                        className="text-slate-500 hover:text-slate-350"
                      >
                        {inq.is_read ? (
                          <CheckSquare className="w-4 h-4 text-slate-500" />
                        ) : (
                          <Square className="w-4 h-4 text-tgmc-blue" />
                        )}
                      </button>
                    </td>

                    {/* Customer Info Column */}
                    <td className="py-4 px-6">
                      <div className="space-y-0.5">
                        <div className="font-semibold text-slate-200">{inq.name}</div>
                        <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1.5">
                          <Phone className="w-3 h-3 shrink-0" />
                          <span>{inq.phone}</span>
                        </div>
                      </div>
                    </td>

                    {/* Product/Service Interested In Column */}
                    <td className="py-4 px-6">
                      <span className="font-medium text-slate-200 truncate block max-w-[150px]">
                        {inq.product || inq.service || 'General Inquiry'}
                      </span>
                    </td>

                    {/* Message Preview Column */}
                    <td className="py-4 px-6">
                      <p className="text-slate-400 truncate max-w-[200px] leading-relaxed">
                        {inq.message || 'No message.'}
                      </p>
                    </td>

                    {/* Date Column */}
                    <td className="py-4 px-6 text-slate-500 font-medium">
                      {new Date(inq.created_at).toLocaleDateString(undefined, { 
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>

                    {/* Status Column */}
                    <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                      <select
                        value={inq.status}
                        onChange={(e) => handleStatusChange(inq, e.target.value)}
                        className={`px-2.5 py-1.5 text-[10px] font-bold border rounded-lg focus:outline-none focus:ring-0 ${getStatusBadgeClass(inq.status)}`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>

                    {/* Delete Action Column */}
                    <td className="py-4 px-6 text-center" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={(e) => handleDelete(inq.id, e)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Inquiry Detail View Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div 
            className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-heading">
                Inquiry Details
              </h3>
              <button 
                onClick={() => setSelectedInquiry(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-850"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-5 text-sm text-slate-300">
              
              {/* Customer summary */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-extrabold text-white font-heading leading-tight">{selectedInquiry.name}</h4>
                  <span className={`px-2.5 py-1 text-[10px] font-bold border rounded-lg ${getStatusBadgeClass(selectedInquiry.status)}`}>
                    {selectedInquiry.status}
                  </span>
                </div>
                
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-tgmc-blue" />
                    <a href={`tel:${selectedInquiry.phone}`} className="hover:underline font-bold text-slate-300">
                      {selectedInquiry.phone}
                    </a>
                  </div>
                  {selectedInquiry.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-tgmc-blue" />
                      <a href={`mailto:${selectedInquiry.email}`} className="hover:underline text-slate-300">
                        {selectedInquiry.email}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-tgmc-blue" />
                    <span>Submitted on: {new Date(selectedInquiry.created_at).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Inquiry interest details */}
              <div className="p-4 bg-slate-950 border border-slate-850 rounded-2xl space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  Product / Service Interested In
                </span>
                <p className="font-bold text-white text-sm">
                  {selectedInquiry.product || selectedInquiry.service || 'General Water Solution Quote'}
                </p>
              </div>

              {/* Message block */}
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-tgmc-blue" />
                  <span>Customer Message</span>
                </span>
                <div className="p-4 bg-slate-950 border border-slate-850 rounded-2xl text-xs text-slate-300 leading-relaxed max-h-48 overflow-y-auto whitespace-pre-wrap">
                  {selectedInquiry.message || 'No custom details provided.'}
                </div>
              </div>

            </div>

            {/* Action buttons footer */}
            <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex justify-between gap-3">
              <button
                onClick={(e) => {
                  handleDelete(selectedInquiry.id, e);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-rose-400 hover:text-rose-350 bg-rose-500/10 border border-rose-500/20 rounded-xl transition-all cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete Inquiry</span>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => handleToggleRead(selectedInquiry)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-850 rounded-xl transition-colors cursor-pointer"
                >
                  Mark as {selectedInquiry.is_read ? 'Unread' : 'Read'}
                </button>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-tgmc-blue hover:bg-tgmc-blue/90 rounded-xl shadow cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ManageInquiries;
