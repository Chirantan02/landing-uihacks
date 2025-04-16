
import { motion } from 'framer-motion'
import { useState } from 'react'
import React from 'react'

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Upload a Photo",
      description: "Take a full-length photo or selfie. Our AI analyzes your body structure and creates your digital avatar in seconds.",
      image: "https://res.cloudinary.com/dx5hxdqnj/image/upload/v1730560245/ComfyUI_00080__hdlv0t.png"
    },
    {
      title: "Browse & Select", 
      description: "Explore our marketplace filled with clothes from various brands. Click on any item you like to try it on virtually.",
      image: "https://res.cloudinary.com/dx5hxdqnj/image/upload/v1730560245/ComfyUI_00082__faciuz.png"
    },
    {
      title: "See & Shop",
      description: "Instantly see how clothes look on you, get size recommendations, and make confident purchase decisions.",
      image: "https://res.cloudinary.com/dx5hxdqnj/image/upload/v1730560244/ComfyUI_00092__glihjn.png"
    }
  ]

  return (
    <div className="relative py-24">
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h1 
          className="text-[80px] leading-[1.1] text-white font-medium tracking-tight"
          style={{ fontFamily: 'Sohne Breit, sans-serif' }}
        >
          AI-first fashion platform for<br />
          shoppers, brands, and retailers
        </h1>
      </div>

      {/* White Box Container */}
      <div className="relative z-1 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[24px] p-12">
          {/* For customers tag */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#FF4405] text-white text-sm font-medium mb-12">
            For Shoppers
          </div>

          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-16">
            {/* Left Side - Steps */}
            <div className="space-y-8">
              <h2 className="text-[48px] leading-[1.1] font-bold text-black">
                Virtual try-on,<br />
                simplified for<br />
                everyone
              </h2>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer border-t border-gray-200 pt-6 transition-all duration-300 ${
                      activeStep === index 
                        ? 'opacity-100' 
                        : 'opacity-70 hover:opacity-90'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <h3 
                      className="text-2xl text-gray-900 mb-3"
                      style={{ 
                        fontFamily: 'Sohne Breit, sans-serif',
                        fontWeight: 800
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-gray-700 leading-relaxed text-lg font-medium"
                      style={{ fontFamily: 'Sohne Breit, sans-serif' }}
                    >
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <button className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-900 transition-colors">
                Learn more
              </button>
            </div>

            {/* Right Side - Image Container with Background */}
            <div className="relative w-[600px] h-[700px]">
              {/* Subtle background image */}
              <div 
                className="absolute -top-8 -bottom-8 left-0 right-0 z-0 rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url('https://res.cloudinary.com/dx5hxdqnj/image/upload/v1730573725/ComfyUI_00113__zpzwnm.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              {/* Step Images */}
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: activeStep === index ? 1 : 0,
                    x: activeStep === index ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 z-1 ${
                    activeStep === index ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                >
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks