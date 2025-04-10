
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About WRLDS Technologies
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                We're a team of innovators dedicated to revolutionizing smart textile technology for industries worldwide.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    At WRLDS Technologies, we're on a mission to transform ordinary textiles into intelligent, 
                    data-driven solutions that improve safety, performance, and quality of life across industries.
                  </p>
                  <p className="text-gray-600">
                    We believe that by embedding intelligence into everyday fabrics, we can create a more 
                    connected, responsive, and safer world.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Innovation:</strong> We push boundaries to create solutions that weren't possible before.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Quality:</strong> We're committed to excellence in every sensor, algorithm, and solution we deliver.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Collaboration:</strong> We work closely with our clients to ensure their unique needs are met.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Impact:</strong> We measure success by the tangible differences our technology makes in the real world.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    WRLDS Technologies was founded in 2020 by a team of engineers, textile specialists, and data scientists 
                    who saw the untapped potential in combining advanced sensor technology with everyday fabrics.
                  </p>
                  <p className="text-gray-600 mb-4">
                    What began as research into conductive textiles quickly evolved into a comprehensive platform for 
                    creating, deploying, and analyzing data from smart textile solutions across multiple industries.
                  </p>
                  <p className="text-gray-600">
                    Today, we're proud to partner with leading organizations in fire safety, sports performance, healthcare, 
                    and industrial applications to create textile sensor solutions that are literally changing the fabric of 
                    these industries.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-gray-600 mb-8">
                  Our diverse team combines expertise in textile engineering, electronics, software development, 
                  artificial intelligence, and industry-specific knowledge to deliver holistic solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Dr. Maria Chen",
                      role: "Chief Technology Officer",
                      bio: "With a Ph.D. in Materials Science, Maria leads our textile sensor development and innovation."
                    },
                    {
                      name: "James Wilson",
                      role: "Head of AI & Analytics",
                      bio: "James brings 15 years of experience in machine learning to transform sensor data into actionable insights."
                    },
                    {
                      name: "Sarah Johnson",
                      role: "Industry Solutions Director",
                      bio: "Sarah works directly with clients to understand their unique challenges and develop tailored solutions."
                    }
                  ].map((member, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
