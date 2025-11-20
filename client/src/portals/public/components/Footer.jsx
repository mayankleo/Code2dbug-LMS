import React from 'react';

const Footer = () => {
  return (
    <>
      <div className=" bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
        {/* --- FOOTER --- */}
        <footer className="bg-black border-t border-zinc-800 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <div className="font-bold text-xl tracking-tighter mb-4">
                  LMS<span className="text-blue-500">PORTAL</span>
                </div>
                <p className="text-gray-500 text-sm">
                  Empowering students with practical skills and industry-ready projects.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Platform</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>
                    <a href="/browse" className="hover:text-blue-400">
                      Browse Streams
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="hover:text-blue-400">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="/verification" className="hover:text-blue-400">
                      Verification
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Community</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>
                    <a href="/campus" className="hover:text-blue-400">
                      Campus Ambassador
                    </a>
                  </li>
                  <li>
                    <a href="/events" className="hover:text-blue-400">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Connect</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Twitter / X
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
              <p>© 2025 LMS Portal. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
