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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-black hidden md:block">The Royalty</h1>
              <p className="text-gold-500 text-xs font-semibold">Beauty Salon</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-gold-500 font-medium transition">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gold-500 font-medium transition">About</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-gold-500 font-medium transition">Gallery</button>
            <button onClick={() => scrollToSection('booking')} className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-medium transition">Book Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-white/20 py-4 px-4">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-gold-500 font-medium">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-gold-500 font-medium">About</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-gold-500 font-medium">Gallery</button>
              <button onClick={() => scrollToSection('booking')} className="bg-gold-500 text-white px-6 py-2 rounded-lg font-medium w-full">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="absolute inset-0 backdrop-blur-3xl z-0" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold-200 rounded-full filter blur-3xl opacity-30 z-0 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-200 rounded-full filter blur-3xl opacity-30 z-0 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-white/50 to-transparent z-0" />

        <div className="max-w-6xl mx-auto px-4 md:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gold-500 font-semibold mb-4 uppercase tracking-wider">Welcome to Luxury</p>
            <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl text-black mb-6">
              Best Beauty Salon in Karama Dubai
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Experience premium beauty, hair, and skincare services with our professional salon experts. Elevate your beauty journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('booking')}
                className="btn-gold"
              >
                Book Appointment
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+971564629378"
                className="btn-outline-gold"
              >
                Call Now
              </motion.a>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="text-white" size={24} fill="white" />
                </div>
                <div>
                  <p className="font-bold text-black">4.9 ⭐</p>
                  <p className="text-gray-600 text-sm">295 Reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-black">Open Daily</p>
                  <p className="text-gray-600 text-sm">Until 10 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-4">Our Excellence</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-black mb-4">Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
                    <div className="relative bg-white/40 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center hover:bg-white/50 transition duration-500 hover:border-gold-300/40">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur" />
                        <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-gold-400 to-gold-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition duration-500">
                          <Icon className="text-white" size={32} />
                        </div>
                      </div>
                      <h3 className="font-semibold text-black text-lg group-hover:text-gold-600 transition">{service.name}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 animate-pulse" />
                <div className="relative aspect-square bg-gradient-to-br from-gold-400/80 to-gold-600/80 backdrop-blur-sm flex items-center justify-center group">
                  <Sparkles className="text-white" size={80} className="animate-spin group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-4">About Us</p>
              <h2 className="heading-serif text-4xl md:text-5xl text-black mb-6">The Royalty Beauty Salon</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At The Royalty Beauty Salon, we provide professional beauty services with experienced stylists and beauty experts. Our mission is to deliver exceptional beauty experiences that enhance your confidence and natural beauty.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Located in the heart of Karama, Dubai, we're dedicated to creating a luxurious haven where every client feels pampered and valued.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Expert Stylists</h4>
                    <p className="text-gray-600">Trained professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Premium Products</h4>
                    <p className="text-gray-600">Only the finest brands and treatments</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Luxury Experience</h4>
                    <p className="text-gray-600">Relaxing ambiance and personalized care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-4">Visual Excellence</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-black mb-4">Salon Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
              { Icon: Scissors, title: 'Hair Services' },
              { Icon: Brush, title: 'Facial Treatments' },
              { Icon: Hand, title: 'Nail Care' },
              { Icon: Palette, title: 'Makeup' },
              { Icon: Droplet, title: 'Skincare' },
              { Icon: Heart, title: 'Bridal Packages' },
            ].map((item, index) => {
              const { Icon } = item;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <div className="relative group rounded-xl overflow-hidden cursor-pointer h-64">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center group-hover:scale-110 transition transform duration-500">
                      <Icon className="text-white" size={64} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-padding bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold-400 font-semibold uppercase tracking-wider mb-4">Reserve Your Slot</p>
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
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 space-y-6 shadow-2xl hover:bg-white/15 transition duration-500"
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
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white/20 transition placeholder-white/50"
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
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white/20 transition placeholder-white/50"
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
              className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 rounded-lg transition"
            >
              {bookingSubmitted ? '✓ Booking Confirmed!' : 'Book Appointment'}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-4">Get In Touch</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-black mb-4">Contact Us</h2>
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
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition duration-500 w-16 h-16 mx-auto" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition duration-500">
                  <MapPin className="text-white" size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">Location</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                KW-251, Al Wasl Building (R405) - Shop 1<br />
                35th St, Near ADCB Metro Station<br />
                Al Karama, Dubai, UAE
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition duration-500 w-16 h-16 mx-auto" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition duration-500">
                  <Phone className="text-white" size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">Phone</h3>
              <a href="tel:+971564629378" className="text-gray-600 hover:text-gold-500 font-semibold transition">
                +971 56 462 9378
              </a>
              <p className="text-gray-500 text-sm mt-2">Open Daily Until 10 PM</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition duration-500 w-16 h-16 mx-auto" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition duration-500">
                  <Clock className="text-white" size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">
                Open Daily<br />
                Until 10 PM<br />
                <span className="text-gold-500 font-semibold">4.9 ⭐ (295 Reviews)</span>
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
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              💬 WhatsApp Booking
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition"
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
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition">Instagram</a>
                <a href="https://wa.me/971564629378" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition">WhatsApp</a>
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
