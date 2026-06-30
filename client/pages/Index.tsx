import { useState } from 'react';
import { MapPin, Phone, Clock, Star, ChevronRight, Menu, X, Sparkles, Scissors, Brush, Droplet, Palette, Zap, Hand, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', service: '', date: '', time: '' });
      setBookingSubmitted(false);
    }, 3000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const services = [
    { name: 'Hair Styling', Icon: Sparkles },
    { name: 'Hair Cutting', Icon: Scissors },
    { name: 'Hair Coloring', Icon: Palette },
    { name: 'Facial Treatments', Icon: Brush },
    { name: 'Skin Care', Icon: Droplet },
    { name: 'Makeup Services', Icon: Zap },
    { name: 'Manicure & Pedicure', Icon: Hand },
    { name: 'Bridal Beauty Packages', Icon: Heart },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(160deg, #0f0028 0%, #1a0040 30%, #2d005c 60%, #1a0033 100%)'}}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-purple-500/20 shadow-xl" style={{background:'rgba(15,0,40,0.85)', backdropFilter:'blur(20px)'}}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/40">
              <span className="text-white font-serif font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 hidden md:block">The Royalty</h1>
              <p className="text-purple-300 text-xs font-semibold">Beauty Salon</p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('services')} className="text-purple-200 hover:text-white font-medium transition">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-purple-200 hover:text-white font-medium transition">About</button>
            <button onClick={() => scrollToSection('gallery')} className="text-purple-200 hover:text-white font-medium transition">Gallery</button>
            <button onClick={() => scrollToSection('booking')} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-2 rounded-full font-medium transition shadow-lg shadow-purple-500/40">Book Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-purple-500/30 py-4 px-4" style={{background:'rgba(15,0,40,0.9)'}}>
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-left text-purple-200 hover:text-white font-medium">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-purple-200 hover:text-white font-medium">About</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-purple-200 hover:text-white font-medium">Gallery</button>
              <button onClick={() => scrollToSection('booking')} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium w-full">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" style={{background: 'linear-gradient(135deg, #1a0533 0%, #2d1060 30%, #4a0080 55%, #6b0066 80%, #1a0533 100)'}}>

        {/* ── Animated Gradient BG ── */}
        <div className="absolute inset-0 z-0 animate-gradient-shift" style={{background: 'linear-gradient(270deg,#1a0533,#3b0764,#6b21a8,#9d174d,#3b0764,#1a0533)', backgroundSize: '400% 400%'}} />

        {/* ── Large Glowing Orbs ── */}
        <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full opacity-25 blur-3xl animate-orb-drift" style={{background:'radial-gradient(circle, #c084fc, #7c3aed)'}} />
        <div className="absolute bottom-[-100px] right-[-80px] w-[480px] h-[480px] rounded-full opacity-20 blur-3xl animate-orb-drift-2" style={{background:'radial-gradient(circle, #f472b6, #be185d)'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[80px]" style={{background:'radial-gradient(circle, #e879f9, #7c3aed)'}} />

        {/* ── Floating Salon SVG Icons ── */}

        {/* Scissors - top left */}
        <motion.div animate={{y:[0,-22,0], rotate:[-10,10,-10]}} transition={{duration:5, repeat:Infinity, ease:'easeInOut'}} className="absolute top-24 left-16 opacity-30">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="18" cy="18" r="8" stroke="#f0abfc" strokeWidth="3"/><circle cx="18" cy="46" r="8" stroke="#f0abfc" strokeWidth="3"/><line x1="24" y1="24" x2="52" y2="12" stroke="#f0abfc" strokeWidth="3" strokeLinecap="round"/><line x1="24" y1="40" x2="52" y2="52" stroke="#f0abfc" strokeWidth="3" strokeLinecap="round"/><circle cx="18" cy="18" r="3" fill="#f0abfc"/><circle cx="18" cy="46" r="3" fill="#f0abfc"/></svg>
        </motion.div>

        {/* Sparkle star - top center-right */}
        <motion.div animate={{rotate:[0,360], scale:[1,1.3,1]}} transition={{duration:6, repeat:Infinity, ease:'linear'}} className="absolute top-16 right-1/4 opacity-40">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z" fill="#e879f9" opacity="0.9"/></svg>
        </motion.div>

        {/* Comb - right side */}
        <motion.div animate={{y:[0,25,0], x:[0,-10,0]}} transition={{duration:7, repeat:Infinity, ease:'easeInOut'}} className="absolute top-1/3 right-12 opacity-25">
          <svg width="48" height="72" viewBox="0 0 48 72" fill="none"><rect x="4" y="4" width="40" height="16" rx="4" stroke="#d8b4fe" strokeWidth="2.5"/><rect x="10" y="20" width="4" height="40" rx="2" fill="#d8b4fe"/><rect x="18" y="20" width="4" height="40" rx="2" fill="#d8b4fe"/><rect x="26" y="20" width="4" height="40" rx="2" fill="#d8b4fe"/><rect x="34" y="20" width="4" height="40" rx="2" fill="#d8b4fe"/></svg>
        </motion.div>

        {/* Mirror - left center */}
        <motion.div animate={{y:[0,-30,0], rotate:[-5,5,-5]}} transition={{duration:8, repeat:Infinity, ease:'easeInOut', delay:1}} className="absolute top-1/2 left-8 -translate-y-1/2 opacity-20">
          <svg width="56" height="80" viewBox="0 0 56 80" fill="none"><ellipse cx="28" cy="30" rx="22" ry="28" stroke="#f9a8d4" strokeWidth="3"/><rect x="24" y="58" width="8" height="18" rx="3" fill="#f9a8d4"/><ellipse cx="28" cy="30" rx="15" ry="20" fill="#f9a8d4" opacity="0.15"/><path d="M18 22 Q22 16 28 16" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/></svg>
        </motion.div>

        {/* Lipstick - bottom right */}
        <motion.div animate={{y:[0,-18,0], rotate:[5,-5,5]}} transition={{duration:6, repeat:Infinity, ease:'easeInOut', delay:2}} className="absolute bottom-32 right-20 opacity-25">
          <svg width="32" height="72" viewBox="0 0 32 72" fill="none"><rect x="8" y="40" width="16" height="28" rx="4" fill="#fb7185"/><rect x="6" y="32" width="20" height="12" rx="2" fill="#e11d48"/><path d="M8 32 L16 10 L24 32" fill="#fda4af"/><ellipse cx="16" cy="10" rx="8" ry="3" fill="#fda4af"/></svg>
        </motion.div>

        {/* Small stars scattered */}
        <motion.div animate={{opacity:[0.2,0.9,0.2], scale:[0.8,1.2,0.8]}} transition={{duration:3, repeat:Infinity, ease:'easeInOut', delay:0}} className="absolute top-36 right-32">
          <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="#f0abfc"/></svg>
        </motion.div>
        <motion.div animate={{opacity:[0.3,1,0.3], scale:[1,1.4,1]}} transition={{duration:2.5, repeat:Infinity, ease:'easeInOut', delay:0.8}} className="absolute bottom-40 left-32">
          <svg width="16" height="16" viewBox="0 0 20 20"><path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="#e879f9"/></svg>
        </motion.div>
        <motion.div animate={{opacity:[0.2,0.8,0.2], scale:[0.9,1.3,0.9]}} transition={{duration:3.5, repeat:Infinity, ease:'easeInOut', delay:1.5}} className="absolute top-1/2 right-36">
          <svg width="14" height="14" viewBox="0 0 20 20"><path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="#fbcfe8"/></svg>
        </motion.div>

        {/* Spinning sparkle ring - bottom left */}
        <motion.div animate={{rotate:[0,360]}} transition={{duration:20, repeat:Infinity, ease:'linear'}} className="absolute bottom-20 left-24 opacity-15">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="50" stroke="#d8b4fe" strokeWidth="1.5" strokeDasharray="8 6"/><circle cx="60" cy="60" r="35" stroke="#f9a8d4" strokeWidth="1" strokeDasharray="5 8"/></svg>
        </motion.div>

        {/* Floating nail polish bottle - top right */}
        <motion.div animate={{y:[0,-20,0], rotate:[-8,8,-8]}} transition={{duration:5.5, repeat:Infinity, ease:'easeInOut', delay:0.5}} className="absolute top-28 right-16 opacity-25">
          <svg width="28" height="68" viewBox="0 0 28 68" fill="none"><rect x="6" y="20" width="16" height="44" rx="5" fill="#c084fc"/><rect x="4" y="14" width="20" height="9" rx="3" fill="#7c3aed"/><rect x="10" y="4" width="8" height="13" rx="2" fill="#a855f7"/><rect x="8" y="28" width="4" height="28" rx="2" fill="white" opacity="0.2"/></svg>
        </motion.div>

        {/* Diagonal shimmer ribbon */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="animate-ribbon-wave absolute top-0 left-0 w-full h-full opacity-5" style={{background:'linear-gradient(135deg, transparent 40%, rgba(240,171,252,0.4) 50%, transparent 60%)'}} />
        </div>

        {/* Glass overlay for readability */}
        <div className="absolute inset-0 z-0" style={{background:'linear-gradient(to bottom, rgba(10,0,30,0.35) 0%, rgba(10,0,30,0.15) 50%, rgba(10,0,30,0.5) 100%)'}} />

          <div className="max-w-6xl mx-auto px-4 md:px-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-pink-300 font-semibold mb-4 uppercase tracking-[0.3em] text-sm"
              >
                ✦ Luxury Salon Destination ✦
              </motion.p>
              <h1 className="heading-serif text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-purple-200 mb-6 leading-tight drop-shadow-2xl">
                The Royalty Beauty Salon
              </h1>
              <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-2xl mx-auto font-light">
                Experience the finest in beauty, hair, and skincare services with our elite stylists. Where elegance meets excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('booking')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold px-8 py-3 rounded-full transition shadow-2xl shadow-purple-500/50"
                >
                  Book Appointment
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+971564629378"
                  className="border-2 border-purple-400/60 text-purple-100 hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition duration-300 backdrop-blur-sm"
                >
                  Call Now
                </motion.a>
              </div>

              <div className="flex flex-col md:flex-row gap-8 justify-center text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/40">
                    <Star className="text-white" size={24} fill="white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">4.9 ⭐</p>
                    <p className="text-purple-200 text-sm">295 Reviews</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/40">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Open Daily</p>
                    <p className="text-purple-200 text-sm">Until 10 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      {/* Services Section */}
      <section id="services" className="section-padding relative" style={{background: 'linear-gradient(180deg, #0f0028 0%, #1a0040 50%, #0f0028 100%)'}}>
        {/* Decorative orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{background:'radial-gradient(circle, #9333ea, transparent)'}} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{background:'radial-gradient(circle, #ec4899, transparent)'}} />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-pink-400 font-semibold uppercase tracking-widest text-sm mb-4">✦ Our Excellence ✦</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">Premium Services</h2>
            <p className="text-purple-200/70 max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and wellness services designed to enhance your natural beauty.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => {
              const { Icon } = service;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />
                    <div className="relative border border-purple-500/30 rounded-xl p-8 text-center transition duration-500 hover:border-pink-400/60" style={{background:'rgba(139,92,246,0.08)', backdropFilter:'blur(12px)'}}>
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur" />
                        <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition duration-500 shadow-lg shadow-purple-500/40">
                          <Icon className="text-white" size={32} />
                        </div>
                      </div>
                      <h3 className="font-semibold text-purple-100 text-lg group-hover:text-white transition">{service.name}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding relative" style={{background:'linear-gradient(180deg, #0f0028 0%, #200050 50%, #150035 100%)'}}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{background:'radial-gradient(circle, #c084fc, transparent)'}} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{background:'radial-gradient(circle, #f472b6, transparent)'}} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/60">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
                  alt="Luxury Salon Interior"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">✦ Premium Salon</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-pink-400 font-semibold uppercase tracking-widest text-sm mb-4">✦ About Us ✦</p>
              <h2 className="heading-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6">The Royalty Beauty Salon</h2>
              <p className="text-purple-200/80 text-lg mb-6 leading-relaxed">
                At The Royalty Beauty Salon, we provide professional beauty services with experienced stylists and beauty experts. Our mission is to deliver exceptional beauty experiences that enhance your confidence and natural beauty.
              </p>
              <p className="text-purple-200/70 text-lg mb-8 leading-relaxed">
                Located in the heart of Karama, Dubai, we're dedicated to creating a luxurious haven where every client feels pampered and valued.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-100 mb-1">Expert Stylists</h4>
                    <p className="text-purple-300/70">Trained professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-100 mb-1">Premium Products</h4>
                    <p className="text-purple-300/70">Only the finest brands and treatments</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-100 mb-1">Luxury Experience</h4>
                    <p className="text-purple-300/70">Relaxing ambiance and personalized care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding relative" style={{background:'linear-gradient(180deg, #150035 0%, #0f0028 50%, #1a003a 100%)'}}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{background:'radial-gradient(circle, #a855f7, transparent)'}} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{background:'radial-gradient(circle, #ec4899, transparent)'}} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-pink-400 font-semibold uppercase tracking-widest text-sm mb-4">✦ Visual Excellence ✦</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">Salon Gallery</h2>
            <p className="text-purple-200/70 max-w-2xl mx-auto">
              Take a glimpse into our luxurious salon space and the beautiful transformations we create.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', title: 'Hair Services', tag: '✂ Styling' },
              { img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', title: 'Facial Treatments', tag: '✦ Glow Up' },
              { img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', title: 'Nail Care', tag: '💅 Manicure' },
              { img: 'https://images.unsplash.com/photo-1487412947147-5cebf100d2f5?w=600&q=80', title: 'Makeup', tag: '💄 Glam' },
              { img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', title: 'Skincare', tag: '🌿 Skincare' },
              { img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80', title: 'Bridal Packages', tag: '👰 Bridal' },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-purple-900/40 border border-purple-500/20 hover:border-pink-400/50 transition-all duration-500">
                  {/* Real Photo */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Always-visible gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* Always-visible title at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-2">{item.tag}</span>
                    <h3 className="text-white font-bold text-xl drop-shadow-lg">{item.title}</h3>
                  </div>
                  {/* Hover glow border */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-pink-400/50 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-padding bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-pink-300 font-semibold uppercase tracking-widest text-sm mb-4">Reserve Your Slot</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-white mb-4">Book Your Appointment</h2>
            <p className="text-gray-300">
              Schedule your beauty appointment with us today and experience the luxury you deserve.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleBooking}
            className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-8 space-y-6 shadow-2xl hover:bg-white/20 transition duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition placeholder-white/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition placeholder-white/50"
                  placeholder="+971 56 462 9378"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white/20 transition"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white/20 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleFormChange}
                required
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white/20 transition"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 rounded-full transition shadow-lg"
            >
              {bookingSubmitted ? '✓ Booking Confirmed!' : 'Book Appointment'}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding relative" style={{background:'linear-gradient(180deg, #0f0028 0%, #1a0040 60%, #0f0028 100%)'}}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{background:'radial-gradient(circle, #a855f7, transparent)'}} />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{background:'radial-gradient(circle, #ec4899, transparent)'}} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-pink-400 font-semibold uppercase tracking-widest text-sm mb-4">✦ Get In Touch ✦</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">Contact Us</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition duration-500 w-16 h-16 mx-auto" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/40 group-hover:shadow-2xl transition duration-500">
                  <MapPin className="text-white" size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-purple-100 text-lg mb-2">Location</h3>
              <p className="text-purple-300/80 text-sm leading-relaxed">
                KW-251, Al Wasl Building (R405) - Shop 1<br />
                35th St, Near ADCB Metro Station<br />
                Al Karama, Dubai, UAE
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition duration-500 w-16 h-16 mx-auto" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/40 group-hover:shadow-2xl transition duration-500">
                  <Phone className="text-white" size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-purple-100 text-lg mb-2">Phone</h3>
              <a href="tel:+971564629378" className="text-pink-300 hover:text-pink-200 font-semibold transition">
                +971 56 462 9378
              </a>
              <p className="text-purple-300/70 text-sm mt-2">Open Daily Until 10 PM</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition duration-500 w-16 h-16 mx-auto" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/40 group-hover:shadow-2xl transition duration-500">
                  <Clock className="text-white" size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-purple-100 text-lg mb-2">Hours</h3>
              <p className="text-purple-300/80 text-sm">
                Open Daily<br />
                Until 10 PM<br />
                <span className="text-pink-300 font-semibold">4.9 ⭐ (295 Reviews)</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/971564629378"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg shadow-green-500/30"
            >
              💬 WhatsApp Booking
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg shadow-pink-500/30"
            >
              📷 Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971564629378"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition transform hover:scale-110 z-40"
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.297-2.504 3.831 0 3.165 3.909 5.568 6.286 5.568.592 0 1.181-.11 1.762-.322l1.242 1.243c.961.961 2.227 1.488 3.578 1.488 2.806 0 5.11-2.307 5.11-5.116 0-2.343-1.713-4.471-4.457-5.309-.807-.233-1.609-.345-2.387-.345z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-serif font-bold">R</span>
                </div>
                <span className="font-serif font-bold">The Royalty</span>
              </div>
              <p className="text-gray-400 text-sm">Premium beauty salon in Karama, Dubai.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-gold-500 transition">Services</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-gold-500 transition">About</button></li>
                <li><button onClick={() => scrollToSection('booking')} className="hover:text-gold-500 transition">Book</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="tel:+971564629378" className="hover:text-gold-500 transition">+971 56 462 9378</a></li>
                <li>Open Daily Until 10 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">Instagram</a>
                <a href="https://wa.me/971564629378" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 The Royalty Beauty Salon. All rights reserved.</p>
            <p className="text-xs mt-2">Best Salon in Karama Dubai - Premium Beauty Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
