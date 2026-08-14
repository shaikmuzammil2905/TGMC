import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../../supabaseClient';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if session already exists, redirect to dashboard
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/admin');
      }
    });
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      setErrorMsg('');

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
      });

      if (error) {
        setErrorMsg(error.message);
      } else if (data.session) {
        navigate('/admin');
      }
    } catch (err: any) {
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 selection:bg-tgmc-blue selection:text-white">
      
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
        
        {/* Glow decoration */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-tgmc-blue/20 rounded-full blur-2xl pointer-events-none" />
        
        {/* Logo and Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-12 bg-white rounded-2xl p-1 mb-2">
            <img src="/logo.png" alt="TGMC Logo" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-2xl font-extrabold text-white font-heading tracking-tight">
            TGMC Admin Portal
          </h2>
          <p className="text-xs text-slate-400">
            Sign in to manage your website content and inquiries
          </p>
        </div>

        {/* Error Alert Box */}
        {errorMsg && (
          <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          
          {/* Email input */}
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Password input */}
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-tgmc-blue hover:bg-tgmc-blue/90 text-sm font-bold text-white rounded-xl shadow-lg shadow-tgmc-blue/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Sign In</span>
              </>
            )}
          </button>
        </form>

        <div className="pt-2 text-center">
          <p className="text-[10px] text-slate-500">
            For security reasons, multiple failed login attempts will temporarily lock the account.
          </p>
        </div>

      </div>

    </div>
  );
};

export default AdminLogin;
