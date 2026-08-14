import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Wrench, MessageSquare, MoreHorizontal } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenEnquiry: () => void;
  onToggleMore?: () => void;
  isMenuOpen?: boolean;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  onOpenEnquiry,
  onToggleMore,
  isMenuOpen = false
}) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home, isAction: false },
    { name: 'Products', path: '/products', icon: Package, isAction: false },
    { name: 'Service', path: '/services', icon: Wrench, isAction: false },
    { name: 'Enquiry', path: '#enquiry', icon: MessageSquare, isAction: true },
    { name: 'More', path: '#more', icon: MoreHorizontal, isAction: false },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-2 py-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = item.name === 'More' 
            ? isMenuOpen 
            : (!item.isAction && location.pathname === item.path);
          const Icon = item.icon;

          if (item.name === 'More') {
            return (
              <button
                key={item.name}
                onClick={onToggleMore}
                className={`flex flex-col items-center justify-center py-1 px-3 transition-colors focus:outline-none ${
                  isActive ? 'text-tgmc-navy font-bold' : 'text-slate-500 hover:text-tgmc-navy'
                }`}
              >
                <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-tgmc-blue stroke-[2.5]' : 'text-slate-400'}`} />
                <span className={`text-[10px] ${isActive ? 'text-tgmc-navy font-bold' : 'text-slate-500'}`}>
                  {item.name}
                </span>
              </button>
            );
          }

          if (item.isAction) {
            return (
              <button
                key={item.name}
                onClick={onOpenEnquiry}
                className="flex flex-col items-center justify-center py-1 px-3 text-tgmc-navy hover:text-tgmc-blue transition-colors focus:outline-none"
              >
                <div className="w-9 h-9 rounded-full bg-tgmc-light flex items-center justify-center text-tgmc-navy mb-0.5 shadow-sm border border-tgmc-blue/20">
                  <Icon className="w-5 h-5 text-tgmc-blue" />
                </div>
                <span className="text-[10px] font-semibold text-tgmc-navy">{item.name}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 transition-colors ${
                isActive ? 'text-tgmc-navy font-bold' : 'text-slate-500 hover:text-tgmc-navy'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-tgmc-blue stroke-[2.5]' : 'text-slate-400'}`} />
              <span className={`text-[10px] ${isActive ? 'text-tgmc-navy font-bold' : 'text-slate-500'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
