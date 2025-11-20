import React, { useState } from 'react';
import { X } from 'lucide-react';

const PasswordPopup = ({ isOpen, onClose, email, onSubmit }) => {
  const [password, setPassword] = useState('');
  const [emailInput, setEmailInput] = useState(email);
  const [showPassword, setShowPassword] = useState(false); // State for showing password

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Enter Credentials</h2>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit(emailInput, password);
          }}
          className="flex flex-col gap-4"
        >
          {/* Email Input Field */}
          <input
            type="email"
            value={emailInput}
            required
            placeholder="Enter your email"
            onChange={e => setEmailInput(e.target.value)}
            className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          {/* Password Input Field */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              required
              placeholder="Enter your password"
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordPopup;
