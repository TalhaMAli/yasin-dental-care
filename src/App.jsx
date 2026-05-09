import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

export default function YasinDentalCare() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [doctorScroll, setDoctorScroll] = useState(0);
  const [testimonialCategory, setTestimonialCategory] = useState('Whitening');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);
  const [selectedTool, setSelectedTool] = useState('aligners');
  const [treatmentGoal, setTreatmentGoal] = useState('smile');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Aesthetic Dentistry',
    date: ''
  });

  const whatsappPhone = '+923041231596';

  const handleWhatsAppClick = (message = 'Hello Yasin Dental Care! I would like to book an appointment.') => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappPhone.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}`;
    handleWhatsAppClick(message);
  };

  const doctors = [
    {
      name: 'Dr. Noman Yasin',
      role: 'Lead Dentist',
      description: 'Founder & lead dental surgeon, specialist in aesthetic and restorative dentistry',
      since: '2012'
    },
    {
      name: 'Dr. Sara Rashid',
      role: 'Orthodontist',
      description: 'Clear aligners and braces specialist',
      since: '2016'
    },
    {
      name: 'Dr. Bilal Ahmed',
      role: 'Oral Surgeon',
      description: 'Implant surgery expert',
      since: '2014'
    },
    {
      name: 'Dr. Amna Malik',
      role: 'Periodontist',
      description: 'Gum health specialist',
      since: '2018'
    }
  ];

  const services = [
    { name: 'Aesthetic Dentistry', icon: 'tooth' },
    { name: 'Orthodontics', icon: 'aligner' },
    { name: 'Implantology', icon: 'implant' },
    { name: 'Whitening', icon: 'bright' },
    { name: 'Emergency Care', icon: 'emergency' }
  ];

  const testimonials = {
    'Whitening': {
      title: 'Transform Your Smile',
      story: 'My teeth were looking tired and stained from years of coffee. After just one session with the advanced whitening treatment, I noticed an incredible transformation.',
      whatWeDid: [
        'Professional grade whitening treatment',
        'Sensitivity management protocol',
        'Custom maintenance trays',
        'Follow-up care plan'
      ],
      patient: 'Sarah Khan',
      location: 'Bahawalpur'
    },
    'Veneers': {
      title: 'A Perfect Smile',
      story: 'I always felt self-conscious about gaps and misalignment. The veneer treatment gave me the perfect smile I always dreamed of.',
      whatWeDid: [
        'Dental veneers placement',
        'Color matching consultation',
        'Bite alignment check',
        '6-month follow-up'
      ],
      patient: 'Ahsan Ali',
      location: 'Bahawalpur'
    },
    'Implantology': {
      title: 'Restored Confidence',
      story: 'I lost a tooth and thought my smile was gone forever. The implant procedure was seamless, and now I have a tooth that looks and feels completely natural.',
      whatWeDid: [
        'Comprehensive bone assessment',
        'Implant placement surgery',
        'Crown restoration',
        'Lifetime maintenance plan'
      ],
      patient: 'Fatima Hassan',
      location: 'Bahawalpur'
    },
    'Orthodontics': {
      title: 'Straight Teeth, Clear Path',
      story: 'Clear aligners made straightening my teeth comfortable and discreet. No one even noticed I was undergoing treatment!',
      whatWeDid: [
        'Digital smile design',
        'Custom aligner fabrication',
        'Monthly check-ins',
        'Retention planning'
      ],
      patient: 'Hassan Ahmed',
      location: 'Bahawalpur'
    }
  };

  const handleSliderMouseMove = (e) => {
    if (!dragging) return;
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  // SVG Illustrations
  const ClinicSVG = () => (
    <svg viewBox="0 0 1200 600" className="w-full h-full">
      <defs>
        <linearGradient id="chairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#c0c0c0', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#808080', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="lampGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ffeb3b', stopOpacity: 0.9}} />
          <stop offset="100%" style={{stopColor: '#fbc02d', stopOpacity: 0.7}} />
        </linearGradient>
      </defs>
      {/* Dental chair */}
      <ellipse cx="300" cy="350" rx="120" ry="80" fill="url(#chairGradient)" />
      <rect x="180" y="250" width="240" height="120" rx="20" fill="url(#chairGradient)" />
      <circle cx="200" cy="450" r="25" fill="#606060" />
      <circle cx="400" cy="450" r="25" fill="#606060" />
      {/* Overhead lamp */}
      <ellipse cx="600" cy="150" rx="60" ry="30" fill="url(#lampGradient)" />
      <rect x="590" y="180" width="20" height="150" fill="#333" />
      {/* Monitor */}
      <rect x="750" y="200" width="200" height="150" rx="10" fill="#1a1a1a" />
      <rect x="760" y="210" width="180" height="130" fill="#2563b0" opacity="0.3" />
      {/* Wall certificates */}
      <rect x="950" y="180" width="80" height="100" rx="5" fill="#f5deb3" stroke="#8b7355" strokeWidth="2" />
      <text x="990" y="240" textAnchor="middle" fontSize="12" fill="#8b7355" fontWeight="bold">CERT</text>
      <rect x="1070" y="180" width="80" height="100" rx="5" fill="#f5deb3" stroke="#8b7355" strokeWidth="2" />
      <text x="1110" y="240" textAnchor="middle" fontSize="12" fill="#8b7355" fontWeight="bold">CERT</text>
      {/* Sink and counter */}
      <rect x="100" y="400" width="300" height="150" fill="#e8e8e8" rx="10" />
      <circle cx="150" cy="430" r="30" fill="#c0c0c0" stroke="#808080" strokeWidth="2" />
      <circle cx="250" cy="430" r="30" fill="#c0c0c0" stroke="#808080" strokeWidth="2" />
    </svg>
  );

  const GlassToothSVG = ({ color = '#2563b0' }) => (
    <svg viewBox="0 0 120 140" className="w-full h-full">
      <defs>
        <linearGradient id={`toothGradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.9}} />
          <stop offset="50%" style={{stopColor: color, stopOpacity: 0.7}} />
          <stop offset="100%" style={{stopColor: '#1a3b6e', stopOpacity: 0.8}} />
        </linearGradient>
        <radialGradient id="toothShine" cx="30%" cy="30%">
          <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0}} />
        </radialGradient>
      </defs>
      {/* Main tooth shape */}
      <path d="M 60 10 Q 90 40 90 80 Q 90 120 60 135 Q 30 120 30 80 Q 30 40 60 10 Z" fill={`url(#toothGradient-${color})`} stroke="rgba(26,59,110,0.3)" strokeWidth="1" />
      {/* Shine effect */}
      <ellipse cx="50" cy="40" rx="20" ry="30" fill="url(#toothShine)" />
      {/* Root gradient */}
      <path d="M 55 100 Q 50 115 60 135 Q 70 115 65 100 Z" fill="rgba(26,59,110,0.2)" />
    </svg>
  );

  const DoctorPortrait = ({ name, initials }) => (
    <svg viewBox="0 0 160 200" className="w-full h-full">
      <defs>
        <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#f4a460', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#daa520', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      {/* Head */}
      <circle cx="80" cy="60" r="35" fill="url(#skinGradient)" />
      {/* Hair */}
      <path d="M 45 45 Q 45 20 80 20 Q 115 20 115 45 Z" fill="#2c1810" />
      {/* Eyes */}
      <circle cx="65" cy="50" r="5" fill="#2c1810" />
      <circle cx="95" cy="50" r="5" fill="#2c1810" />
      <circle cx="66" cy="49" r="2" fill="#ffffff" />
      <circle cx="96" cy="49" r="2" fill="#ffffff" />
      {/* Nose */}
      <line x1="80" y1="50" x2="80" y2="65" stroke="#d4956b" strokeWidth="2" />
      {/* Smile */}
      <path d="M 65 70 Q 80 78 95 70" stroke="#2c1810" strokeWidth="2" fill="none" />
      {/* Neck */}
      <rect x="70" y="90" width="20" height="15" fill="url(#skinGradient)" />
      {/* White coat */}
      <path d="M 40 105 L 40 180 L 80 185 L 120 180 L 120 105 Q 80 115 40 105 Z" fill="#ffffff" stroke="#c0c0c0" strokeWidth="1" />
      {/* Coat buttons */}
      <circle cx="80" cy="130" r="3" fill="#cccccc" />
      <circle cx="80" cy="150" r="3" fill="#cccccc" />
      <circle cx="80" cy="170" r="3" fill="#cccccc" />
      {/* Stethoscope */}
      <path d="M 100 115 Q 105 110 110 115 Q 120 130 110 145" stroke="#e74c3c" strokeWidth="2" fill="none" />
    </svg>
  );

  const AlignersTraySVG = () => (
    <svg viewBox="0 0 140 100" className="w-full h-full">
      <defs>
        <linearGradient id="trayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: '#e0e0e0', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      {/* Aligner tray */}
      <path d="M 20 40 Q 20 20 70 15 Q 120 20 120 40 L 120 50 Q 120 60 70 65 Q 20 60 20 50 Z" fill="url(#trayGradient)" stroke="#2563b0" strokeWidth="2" opacity="0.8" />
      {/* Tooth bumps */}
      {[35, 50, 65, 85, 100].map((x) => (
        <ellipse key={x} cx={x} cy="35" rx="8" ry="12" fill="#4a90d9" opacity="0.6" />
      ))}
    </svg>
  );

  const ImplantSVG = () => (
    <svg viewBox="0 0 140 140" className="w-full h-full">
      <defs>
        <linearGradient id="implantGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#c0c0c0', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#606060', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#f5f5dc', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#daa520', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      {/* Implant screw */}
      <rect x="55" y="70" width="30" height="50" rx="5" fill="url(#implantGradient)" />
      {/* Screw threads */}
      <line x1="55" y1="80" x2="85" y2="80" stroke="#404040" strokeWidth="1" opacity="0.5" />
      <line x1="55" y1="90" x2="85" y2="90" stroke="#404040" strokeWidth="1" opacity="0.5" />
      <line x1="55" y1="100" x2="85" y2="100" stroke="#404040" strokeWidth="1" opacity="0.5" />
      <line x1="55" y1="110" x2="85" y2="110" stroke="#404040" strokeWidth="1" opacity="0.5" />
      {/* Crown on top */}
      <path d="M 45 60 Q 45 30 70 20 Q 95 30 95 60 Z" fill="url(#crownGradient)" stroke="#b8860b" strokeWidth="1" />
      {/* Crown highlight */}
      <ellipse cx="65" cy="35" rx="12" ry="18" fill="#ffffff" opacity="0.4" />
    </svg>
  );

  const TeethSVG = ({ bright = false }) => (
    <svg viewBox="0 0 240 60" className="w-full h-full">
      {[20, 60, 100, 140, 180].map((x) => (
        <g key={x}>
          <rect x={x - 15} y="15" width="30" height="35" rx="3" fill={bright ? '#ffffff' : '#f5f5dc'} stroke="#e0e0e0" strokeWidth="1" />
          {bright && <circle cx={x - 5} cy="25" r="4" fill="#ffeb3b" opacity="0.6" />}
          {bright && <circle cx={x + 5} cy="30" r="3" fill="#ffeb3b" opacity="0.4" />}
        </g>
      ))}
    </svg>
  );

  const EmergencyMolarSVG = () => (
    <svg viewBox="0 0 140 160" className="w-full h-full">
      <defs>
        <linearGradient id="molarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.9}} />
          <stop offset="50%" style={{stopColor: '#e8e8e8', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: '#d0d0d0', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      {/* Molar crown */}
      <rect x="35" y="20" width="70" height="50" rx="8" fill="url(#molarGradient)" stroke="#999" strokeWidth="1" />
      {/* Cusps */}
      <polygon points="50,20 55,35 45,35" fill="#e8e8e8" />
      <polygon points="90,20 95,35 85,35" fill="#e8e8e8" />
      {/* Root 1 */}
      <path d="M 50 70 Q 45 100 40 140" stroke="#999" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Root 2 */}
      <path d="M 70 70 Q 70 105 70 140" stroke="#999" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Root 3 */}
      <path d="M 90 70 Q 95 100 100 140" stroke="#999" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Root cross-section lines */}
      <line x1="45" y1="85" x2="65" y2="85" stroke="#d0d0d0" strokeWidth="1" opacity="0.5" />
      <line x1="45" y1="105" x2="65" y2="105" stroke="#d0d0d0" strokeWidth="1" opacity="0.5" />
    </svg>
  );

  const Tooth3DSVG = ({ rotating = false }) => (
    <svg viewBox="0 0 200 280" className={`w-full h-full ${rotating ? 'animate-spin' : ''}`} style={{animationDuration: '3s'}}>
      <defs>
        <linearGradient id="mainToothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
          <stop offset="40%" style={{stopColor: '#4a90d9', stopOpacity: 0.6}} />
          <stop offset="100%" style={{stopColor: '#1a3b6e', stopOpacity: 0.9}} />
        </linearGradient>
        <radialGradient id="gloss" cx="35%" cy="25%">
          <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.9}} />
          <stop offset="60%" style={{stopColor: '#ffffff', stopOpacity: 0.2}} />
          <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0}} />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Glowing background */}
      <circle cx="100" cy="120" r="80" fill="#4a90d9" opacity="0.1" filter="url(#glow)" />
      {/* Main tooth crown */}
      <path d="M 70 40 Q 60 70 65 110 Q 70 140 100 160 Q 130 140 135 110 Q 140 70 130 40 Q 115 30 100 30 Q 85 30 70 40 Z" fill="url(#mainToothGradient)" stroke="rgba(26,59,110,0.3)" strokeWidth="2" />
      {/* Glossy highlight */}
      <ellipse cx="85" cy="60" rx="18" ry="35" fill="url(#gloss)" />
      {/* Additional shine spots */}
      <circle cx="95" cy="50" r="6" fill="#ffffff" opacity="0.6" />
      {/* Root */}
      <path d="M 85 160 Q 80 190 75 240 L 125 240 Q 120 190 115 160 Z" fill="rgba(26,59,110,0.3)" stroke="rgba(26,59,110,0.4)" strokeWidth="1" />
      {/* Root lines for detail */}
      <line x1="85" y1="170" x2="85" y2="220" stroke="rgba(26,59,110,0.2)" strokeWidth="1" opacity="0.5" />
      <line x1="95" y1="170" x2="95" y2="220" stroke="rgba(26,59,110,0.2)" strokeWidth="1" opacity="0.5" />
      <line x1="105" y1="170" x2="105" y2="220" stroke="rgba(26,59,110,0.2)" strokeWidth="1" opacity="0.5" />
      <line x1="115" y1="170" x2="115" y2="220" stroke="rgba(26,59,110,0.2)" strokeWidth="1" opacity="0.5" />
    </svg>
  );

  return (
    <div className="w-full min-h-screen bg-white" style={{fontFamily: '"DM Sans", sans-serif'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        
        * { font-family: 'DM Sans', sans-serif; }
        
        html { scroll-behavior: smooth; }
        
        .navbar-sticky {
          position: sticky;
          top: 0;
          z-index: 50;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .hero-bg {
          background: linear-gradient(135deg, rgba(26,59,110,0.8) 0%, rgba(37,99,176,0.6) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .service-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid #eaf3ff;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(74, 144, 217, 0.2);
          border-color: #4a90d9;
        }
        
        .service-card.active {
          background: #1a3b6e;
          color: white;
          border-color: #1a3b6e;
        }
        
        .doctor-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #eaf3ff;
          flex-shrink: 0;
          width: 200px;
          transition: all 0.3s ease;
        }
        
        .doctor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(74, 144, 217, 0.15);
          border-color: #4a90d9;
        }
        
        .testimonial-category-btn {
          padding: 8px 16px;
          border: 2px solid #eaf3ff;
          background: white;
          color: #0d1f3c;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .testimonial-category-btn.active {
          background: #1a3b6e;
          color: white;
          border-color: #1a3b6e;
        }
        
        .before-after-container {
          position: relative;
          width: 100%;
          height: 300px;
          border-radius: 12px;
          overflow: hidden;
          background: #f4f8ff;
        }
        
        .before-after-image {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .before-after-before {
          left: 0;
        }
        
        .before-after-after {
          right: 0;
        }
        
        .before-after-divider {
          position: absolute;
          top: 0;
          left: 50%;
          width: 4px;
          height: 100%;
          background: #2563b0;
          cursor: col-resize;
          transform: translateX(-50%);
          z-index: 10;
          box-shadow: 0 0 10px rgba(37, 99, 176, 0.5);
        }
        
        .before-after-label {
          position: absolute;
          background: rgba(26, 59, 110, 0.9);
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          z-index: 5;
        }
        
        .before-label {
          top: 10px;
          left: 10px;
        }
        
        .after-label {
          top: 10px;
          right: 10px;
        }
        
        .testimonial-after-image {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        
        .whatsapp-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #25d366 0%, #20a652 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
          z-index: 40;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }
        
        .whatsapp-button:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 32px rgba(37, 211, 102, 0.6);
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 8px 32px rgba(37, 211, 102, 0.7); }
        }
        
        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #eaf3ff;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.3s ease;
          background: white;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #4a90d9;
          box-shadow: 0 0 0 3px rgba(74, 144, 217, 0.1);
        }
        
        .submit-button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #25d366 0%, #20a652 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }
        
        .footer-link {
          color: #4a90d9;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: #eaf3ff;
        }
        
        @media (max-width: 768px) {
          .service-card { width: 100%; }
          .doctor-card { width: 150px; }
          .before-after-container { height: 200px; }
          .whatsapp-button { bottom: 20px; right: 20px; width: 50px; height: 50px; }
        }
        
        .fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar-sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1a3b6e]">Yasin Dental</div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-[#5a718a] hover:text-[#1a3b6e] transition">Services</a>
            <a href="#specialists" className="text-[#5a718a] hover:text-[#1a3b6e] transition">Specialists</a>
            <a href="#calculator" className="text-[#5a718a] hover:text-[#1a3b6e] transition">Calculator</a>
            <a href="#testimonials" className="text-[#5a718a] hover:text-[#1a3b6e] transition">Testimonials</a>
            <a href="#booking" className="text-[#5a718a] hover:text-[#1a3b6e] transition">Booking</a>
            <button onClick={() => handleWhatsAppClick()} className="bg-[#1a3b6e] text-white px-6 py-2 rounded-lg hover:bg-[#2563b0] transition">
              Book Now
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f4f8ff] p-4 border-t border-[#eaf3ff]">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-[#0d1f3c] hover:text-[#1a3b6e]">Services</a>
              <a href="#specialists" className="text-[#0d1f3c] hover:text-[#1a3b6e]">Specialists</a>
              <a href="#calculator" className="text-[#0d1f3c] hover:text-[#1a3b6e]">Calculator</a>
              <a href="#testimonials" className="text-[#0d1f3c] hover:text-[#1a3b6e]">Testimonials</a>
              <a href="#booking" className="text-[#0d1f3c] hover:text-[#1a3b6e]">Booking</a>
              <button onClick={() => handleWhatsAppClick()} className="w-full bg-[#1a3b6e] text-white py-2 rounded-lg">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-bg relative h-screen md:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ClinicSVG />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
                Unveil excellence. Discover the Yasin Smiles difference.
              </h1>
              <p className="text-lg text-[#e0e7f1] mb-8">
                World-class dental care with leading specialists. Your smile deserves the best.
              </p>
              <button onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})} className="bg-white text-[#1a3b6e] px-8 py-3 rounded-lg font-bold hover:bg-[#eaf3ff] transition">
                ABOUT US
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3b6e] mb-4">About Yasin Dental Care</h2>
            <p className="text-lg text-[#5a718a] max-w-2xl mx-auto">
              Located in Bahawalpur, Pakistan, we provide world-class dental solutions with compassion and expertise. 
              Led by Dr. Noman Yasin, our team is dedicated to transforming smiles and improving oral health.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3b6e] mb-4 text-center">Our Services</h2>
          <p className="text-center text-[#5a718a] mb-12 max-w-2xl mx-auto">
            Comprehensive dental care designed for your unique needs
          </p>

          <div className="grid md:grid-cols-5 gap-6 overflow-x-auto pb-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                onClick={() => setActiveService(idx)}
                className={`service-card p-6 text-center ${activeService === idx ? 'active' : ''}`}
              >
                <div className="h-40 mb-4 flex items-center justify-center">
                  {service.icon === 'tooth' && <div className="w-24 h-24"><GlassToothSVG color="#2563b0" /></div>}
                  {service.icon === 'aligner' && <div className="w-32 h-20"><AlignersTraySVG /></div>}
                  {service.icon === 'implant' && <div className="w-24 h-32"><ImplantSVG /></div>}
                  {service.icon === 'bright' && <div className="w-32 h-16"><TeethSVG bright={true} /></div>}
                  {service.icon === 'emergency' && <div className="w-24 h-32"><EmergencyMolarSVG /></div>}
                </div>
                <h3 className={`font-bold text-lg mb-3 ${activeService === idx ? 'text-white' : 'text-[#0d1f3c]'}`}>
                  {service.name}
                </h3>
                <div className="flex gap-2 justify-center flex-wrap">
                  <span className={`text-xs px-3 py-1 rounded-full ${activeService === idx ? 'bg-white text-[#1a3b6e]' : 'bg-[#eaf3ff] text-[#2563b0]'}`}>
                    Professional
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full ${activeService === idx ? 'bg-white text-[#1a3b6e]' : 'bg-[#eaf3ff] text-[#2563b0]'}`}>
                    Affordable
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-20 bg-[#f4f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3b6e] mb-4 text-center">Our Specialists</h2>
          <p className="text-center text-[#5a718a] mb-12 max-w-2xl mx-auto">
            Highly trained dental professionals dedicated to your care
          </p>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4">
              {doctors.map((doctor, idx) => (
                <div key={idx} className="doctor-card">
                  <div className="h-32 mb-4">
                    <DoctorPortrait name={doctor.name} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-[#4a90d9] mb-2 uppercase tracking-wider">
                      {doctor.role}
                    </p>
                    <h3 className="font-bold text-[#1a3b6e] text-sm mb-2">{doctor.name}</h3>
                    <p className="text-xs text-[#5a718a] mb-3 line-clamp-2">{doctor.description}</p>
                    <p className="text-xs text-[#9ab0c8]">Practicing since {doctor.since}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Calculator */}
      <section id="calculator" className="py-20 bg-[#eaf3ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3b6e] mb-4 text-center">Treatment Calculator</h2>
          <p className="text-center text-[#5a718a] mb-12 max-w-2xl mx-auto">
            Explore treatment options and get personalized recommendations
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Panel */}
            <div className="bg-[#1a3b6e] text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Your Goals</h3>
              
              <div className="mb-8">
                <label className="flex items-center gap-3 cursor-pointer mb-3">
                  <input
                    type="radio"
                    name="goal"
                    value="smile"
                    checked={treatmentGoal === 'smile'}
                    onChange={(e) => setTreatmentGoal(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>Brighten Smile</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer mb-3">
                  <input
                    type="radio"
                    name="goal"
                    value="alignment"
                    checked={treatmentGoal === 'alignment'}
                    onChange={(e) => setTreatmentGoal(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>Fix Alignment</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="goal"
                    value="restoration"
                    checked={treatmentGoal === 'restoration'}
                    onChange={(e) => setTreatmentGoal(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>Restore Missing</span>
                </label>
              </div>

              <h3 className="text-lg font-bold mb-4">Method</h3>
              <div className="flex flex-wrap gap-2">
                {['Aligners', 'Veneers', 'Implants'].map((method) => (
                  <button
                    key={method}
                    onClick={() => setSelectedTool(method.toLowerCase())}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                      selectedTool === method.toLowerCase()
                        ? 'bg-white text-[#1a3b6e]'
                        : 'bg-[#2563b0] text-white'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#2563b0] rounded-lg">
                <p className="text-sm">💎 Loyalty Program Available</p>
              </div>
            </div>

            {/* Center Panel */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="h-64 mb-6">
                  <Tooth3DSVG rotating={true} />
                </div>
                <p className="text-sm text-[#5a718a] font-semibold">360° Interactive View</p>
                <div className="flex gap-2 mt-4 justify-center">
                  {['Front', 'Side', 'Back'].map((angle) => (
                    <button
                      key={angle}
                      className="text-xs px-3 py-1 bg-white text-[#1a3b6e] rounded-full hover:bg-[#4a90d9] hover:text-white transition"
                    >
                      {angle}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="bg-white p-8 rounded-lg border border-[#eaf3ff]">
              <h3 className="text-xl font-bold text-[#1a3b6e] mb-6">Treatment Plan</h3>
              
              <div className="mb-6">
                <p className="text-sm text-[#5a718a] mb-2">Complexity Level</p>
                <div className="w-full bg-[#eaf3ff] rounded-full h-2 overflow-hidden">
                  <div className="bg-[#4a90d9] h-full" style={{width: '65%'}}></div>
                </div>
                <p className="text-xs text-[#5a718a] mt-2">Moderate</p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-[#0d1f3c] mb-2">Timeline</p>
                <p className="text-2xl font-bold text-[#2563b0]">6-8 months</p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-[#0d1f3c] mb-3">Recommended Specialist</p>
                <div className="bg-[#eaf3ff] p-3 rounded-lg">
                  <p className="font-semibold text-[#1a3b6e]">Dr. Noman Yasin</p>
                  <p className="text-xs text-[#5a718a]">Lead Dentist</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-[#0d1f3c] mb-2">Cost Range</p>
                <p className="text-lg font-bold text-[#1a3b6e]">PKR 25,000 - 75,000</p>
              </div>

              <button onClick={() => handleWhatsAppClick('I am interested in the treatment calculator plan!')} className="w-full bg-[#4a90d9] text-white py-2 rounded-lg font-semibold hover:bg-[#2563b0] transition">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3b6e] mb-4 text-center">Patient Stories</h2>
          <p className="text-center text-[#5a718a] mb-12 max-w-2xl mx-auto">
            Real transformations, real results
          </p>

          {/* Category Tabs */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-4">
            {Object.keys(testimonials).map((category) => (
              <button
                key={category}
                onClick={() => setTestimonialCategory(category)}
                className={`testimonial-category-btn whitespace-nowrap ${
                  testimonialCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Testimonial Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a3b6e] mb-4">
                {testimonials[testimonialCategory].title}
              </h3>
              <p className="text-[#5a718a] mb-6 leading-relaxed">
                {testimonials[testimonialCategory].story}
              </p>
              <h4 className="font-semibold text-[#1a3b6e] mb-3">What we did</h4>
              <ul className="space-y-2">
                {testimonials[testimonialCategory].whatWeDid.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-[#5a718a]">
                    <span className="text-[#4a90d9]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Column - Before/After */}
            <div
              ref={sliderRef}
              className="before-after-container"
              onMouseMove={handleSliderMouseMove}
              onMouseDown={() => setDragging(true)}
              onMouseUp={() => setDragging(false)}
              onMouseLeave={() => setDragging(false)}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setDragging(true)}
              onTouchEnd={() => setDragging(false)}
            >
              {/* Before */}
              <div className="before-after-image before-after-before">
                <div className="h-32"><TeethSVG bright={false} /></div>
                <div className="before-label">BEFORE</div>
              </div>

              {/* After */}
              <div
                className="before-after-image before-after-after"
                style={{
                  clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
                }}
              >
                <div className="h-32"><TeethSVG bright={true} /></div>
                <div className="after-label">AFTER</div>
              </div>

              {/* Divider */}
              <div
                className="before-after-divider"
                style={{ left: `${sliderPosition}%` }}
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="w-32 h-40 mx-auto mb-4">
                  <DoctorPortrait />
                </div>
                <h4 className="font-bold text-center text-[#1a3b6e]">
                  {testimonials[testimonialCategory].patient}
                </h4>
                <p className="text-sm text-center text-[#5a718a]">
                  {testimonials[testimonialCategory].location}
                </p>
              </div>

              <div className="flex gap-3 justify-center mt-6">
                <button className="text-[#4a90d9] hover:text-[#1a3b6e] transition text-2xl">
                  ←
                </button>
                <button className="text-[#4a90d9] hover:text-[#1a3b6e] transition text-2xl">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 text-[#eaf3ff] opacity-5 pointer-events-none">
          <Tooth3DSVG />
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 text-[#eaf3ff] opacity-5 pointer-events-none">
          <Tooth3DSVG />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3b6e] mb-4 text-center">Book Your Appointment</h2>
          <p className="text-center text-[#5a718a] mb-12">
            Take the first step towards your dream smile
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#0d1f3c] mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0d1f3c] mb-2">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="form-input"
                placeholder="+92 300 1234567"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0d1f3c] mb-2">Service</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="form-input"
              >
                <option>Aesthetic Dentistry</option>
                <option>Orthodontics</option>
                <option>Implantology</option>
                <option>Whitening</option>
                <option>Emergency Care</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0d1f3c] mb-2">Preferred Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="form-input"
              />
            </div>

            <button type="submit" className="submit-button">
              <Phone size={20} />
              Book via WhatsApp
            </button>
          </form>

          <p className="text-center text-sm text-[#9ab0c8] mt-6">
            We'll confirm your appointment via WhatsApp
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3b6e] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Yasin Dental Care</h3>
              <p className="text-[#9ab0c8] text-sm">
                Excellence in dental care, delivered with compassion.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-[#9ab0c8]">
                <li><a href="#services" className="footer-link">Aesthetic Dentistry</a></li>
                <li><a href="#services" className="footer-link">Orthodontics</a></li>
                <li><a href="#services" className="footer-link">Implantology</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-[#9ab0c8]">
                <li>📱 +92 304 123 1596</li>
                <li>📍 Bahawalpur, Pakistan</li>
                <li>Hours: 9 AM - 6 PM</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://wa.me/923041231596" className="w-10 h-10 bg-[#2563b0] rounded-full flex items-center justify-center hover:bg-[#4a90d9] transition">f</a>
                <a href="https://wa.me/923041231596" className="w-10 h-10 bg-[#2563b0] rounded-full flex items-center justify-center hover:bg-[#4a90d9] transition">i</a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2563b0] pt-8 text-center text-[#9ab0c8] text-sm">
            <p>&copy; 2024 Yasin Dental Care. All rights reserved. | Bahawalpur, Pakistan</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="whatsapp-button" onClick={() => handleWhatsAppClick()}>
        <Phone size={28} color="white" />
      </div>
    </div>
  );
}
