import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-600 blur-[120px]"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-orange-500 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Contact" subtitle="Restons en contact" />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-md h-full">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Email</h4>
                    <a 
                      href="mailto:alexis.oliveira@example.com" 
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      alexis.oliveira@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Téléphone</h4>
                    <a 
                      href="tel:+33123456789" 
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Localisation</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Lyon, France
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-slate-900 dark:text-white mb-4">
                  Me suivre
                </h4>
                <div className="flex space-x-4">
                  {['linkedin', 'github', 'twitter'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="bg-white dark:bg-slate-700 p-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1"
                    >
                      <img 
                        src={`https://cdn.simpleicons.org/${platform}/3B82F6`} 
                        alt={platform} 
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 text-slate-900 dark:text-white"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 text-slate-900 dark:text-white"
                      placeholder="Votre email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 text-slate-900 dark:text-white"
                    placeholder="Sujet de votre message"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 text-slate-900 dark:text-white resize-none"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-slate-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Envoyer <Send className="ml-2 w-4 h-4" />
                    </span>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-800 rounded-lg animate-fade-in">
                    Votre message a été envoyé avec succès. Je vous répondrai dès que possible !
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-800 rounded-lg animate-fade-in">
                    Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;