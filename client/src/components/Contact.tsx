import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://portfolio-backend-dqtb.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "Message sent successfully!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadCV = async () => {
  try {
    const response = await fetch('https://portfolio-backend-dqtb.onrender.com/api/download-cv');
    if (!response.ok) {
      throw new Error('Failed to fetch CV');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mohammed_Kaif_CV.pdf'; // ✅ Use your actual file name
    document.body.appendChild(a);
    a.click();
    a.remove();

    // ✅ Optional success toast
    toast({
      title: "Success!",
      description: "CV downloaded successfully.",
    });

  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to download CV. Please try again.",
      variant: "destructive",
    });
  }
};

  const contactInfo = [
    {
      icon: '🌐',
      label: 'Website',
      value: 'www.mohammedkaif.com',
      gradient: 'from-electric-blue to-nebula-pink'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+91-91102 92815',
      gradient: 'from-nebula-pink to-lightning-yellow'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'mohammedkaif.fr.786@gmail.com',
      gradient: 'from-lightning-yellow to-electric-blue'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-electric-blue">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-nebula-pink mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-space-gray/30 backdrop-blur-sm rounded-xl p-6 border border-electric-blue/20">
              <h3 className="text-2xl font-bold font-orbitron mb-6 text-electric-blue">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-white">{info.icon}</span>
                    </div>
                    <div>
                      <p className="font-rajdhani font-semibold text-lightning-yellow">{info.label}</p>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={handleDownloadCV}
                className="cosmic-btn bg-gradient-to-r from-electric-blue to-nebula-pink px-8 py-4 rounded-full font-rajdhani font-semibold text-lg hover:animate-glow transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-space-gray/30 backdrop-blur-sm rounded-xl p-8 border border-electric-blue/20"
          >
          <form onSubmit={handleSubmit} className="space-y-6">
           <div>
          <label className="block text-sm font-rajdhani font-semibold text-lightning-yellow mb-2">Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 bg-white/10 border border-electric-blue/30 rounded-lg focus:border-electric-blue focus:outline-none text-white font-inter"
      placeholder="Your Name"
    />
  </div>

  <div>
    <label className="block text-sm font-rajdhani font-semibold text-lightning-yellow mb-2">Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 bg-white/10 border border-electric-blue/30 rounded-lg focus:border-electric-blue focus:outline-none text-white font-inter"
      placeholder="your@email.com"
    />
  </div>

  <div>
    <label className="block text-sm font-rajdhani font-semibold text-lightning-yellow mb-2">Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      rows={5}
      className="w-full px-4 py-3 bg-white/10 border border-electric-blue/30 rounded-lg focus:border-electric-blue focus:outline-none text-white font-inter resize-none"
      placeholder="Your message..."
    />
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className="cosmic-btn w-full bg-gradient-to-r from-electric-blue to-nebula-pink py-3 rounded-lg font-rajdhani font-semibold text-lg hover:animate-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? (
      <>
        <svg className="w-5 h-5 mr-2 inline animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      </>
    ) : (
      <>
        <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
        Send Message
      </>
    )}
  </button>
</form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
