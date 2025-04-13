import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2, ArrowRight, CheckCircle } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header/>
      <div className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        
        {/* Hero Section */}
        <section className="relative z-10 pt-16 pb-20 px-4 mx-auto max-w-screen-xl text-center lg:pt-24 lg:pb-32 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              Build Your Resume <span className="text-blue-600">With AI</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48">
              Effortlessly craft a standout resume with our AI-powered builder. Get hired faster with a professional resume tailored to your skills and experience.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 shadow-lg transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 shadow-md transition-all duration-300">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch video
              </a>  
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>AI-Powered Content</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Professional Templates</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Instant Download</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* How it Works Section */}
        <section className="py-16 bg-white z-10 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl mb-2">How it Works</h2>
            <p className="text-md text-gray-500 mb-12">Create your professional resume in just 3 simple steps</p>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-lg transition-all duration-300 hover:border-blue-500/20 hover:shadow-blue-500/10 hover:translate-y-[-5px]">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <AtomIcon className='h-8 w-8 text-blue-600'/>
                  </div>
                </div>
                <h2 className="mt-4 text-xl font-bold text-gray-900">Write your content</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Start by entering your professional information. Our AI will help you craft compelling descriptions for your experience and skills.
                </p>
              </div>

              <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-lg transition-all duration-300 hover:border-blue-500/20 hover:shadow-blue-500/10 hover:translate-y-[-5px]">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Edit className='h-8 w-8 text-blue-600'/>
                  </div>
                </div>
                <h2 className="mt-4 text-xl font-bold text-gray-900">Edit your resume</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Customize your resume with our intuitive editor. Choose from professional templates and adjust the layout to your preferences.
                </p>
              </div>

              <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-lg transition-all duration-300 hover:border-blue-500/20 hover:shadow-blue-500/10 hover:translate-y-[-5px]">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Share2 className='h-8 w-8 text-blue-600'/>
                  </div>
                </div>
                <h2 className="mt-4 text-xl font-bold text-gray-900">Share & Download</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Download your resume in multiple formats or share it directly with potential employers. Get ready to land your dream job!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50 z-10 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl mb-2">What Our Users Say</h2>
            <p className="text-md text-gray-500 mb-12">Join thousands of professionals who have created their resumes with our platform</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">J</div>
                  <div className="ml-3">
                    <h3 className="font-semibold">John D.</h3>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600">"This AI resume builder helped me create a professional resume in minutes. I landed interviews at top tech companies!"</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">S</div>
                  <div className="ml-3">
                    <h3 className="font-semibold">Sarah M.</h3>
                    <p className="text-sm text-gray-500">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-600">"The AI suggestions were spot-on. It helped me highlight skills I didn't even think to include. Highly recommend!"</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">M</div>
                  <div className="ml-3">
                    <h3 className="font-semibold">Michael R.</h3>
                    <p className="text-sm text-gray-500">Data Analyst</p>
                  </div>
                </div>
                <p className="text-gray-600">"The templates are modern and professional. I received compliments on my resume design during interviews."</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white z-10 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl mb-4">Ready to Create Your Professional Resume?</h2>
            <p className="text-lg mb-8 opacity-90">Join thousands of professionals who have already built their careers with our AI resume builder</p>
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-blue-600 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 shadow-lg transition-all duration-300">
              Get Started Now
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home