import React, { useState } from 'react';
import { Code, BrainCircuit, Smartphone, BarChart3, Search, Filter, Menu, X } from 'lucide-react';

const BrowseStreams = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const streamCategories = ['All', 'Development', 'Data Science', 'Design', 'Business'];

  const allStreams = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'Development',
      icon: <Code className="w-8 h-8 text-blue-400" />,
      price: '₹500',
      level: 'Beginner to Pro',
      desc: 'Master the MERN stack and build scalable web apps.',
    },
    {
      id: 2,
      title: 'Data Science & AI',
      category: 'Data Science',
      icon: <BrainCircuit className="w-8 h-8 text-blue-400" />,
      price: '₹500',
      level: 'Intermediate',
      desc: 'Analyze complex data and build predictive models.',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      category: 'Development',
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      price: '₹500',
      level: 'Beginner',
      desc: 'Create iOS and Android apps using React Native.',
    },
    {
      id: 4,
      title: 'Data Analytics',
      category: 'Data Science',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      price: '₹500',
      level: 'Beginner',
      desc: 'Turn raw data into actionable insights with SQL & PowerBI.',
    },
    {
      id: 5,
      title: 'UI/UX Design Mastery',
      category: 'Design',
      icon: <Code className="w-8 h-8 text-blue-400" />,
      price: '₹500',
      level: 'All Levels',
      desc: 'Design stunning user interfaces and experiences.',
    },
    {
      id: 6,
      title: 'Digital Marketing 101',
      category: 'Business',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      price: '₹500',
      level: 'Beginner',
      desc: 'Learn SEO, SEM, and Social Media Marketing strategies.',
    },
  ];

  const filteredStreams = allStreams.filter(stream => {
    const matchesSearch = stream.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || stream.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Explore Our <span className="text-blue-500">Streams</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find the perfect path for your career. From coding to design, we have a structured
            roadmap for you.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search programs..."
              className="w-full bg-black border border-zinc-700 text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {streamCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStreams.map(stream => (
            <div
              key={stream.id}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-blue-500/30">
                  {stream.icon}
                </div>
                <span className="text-xs font-bold text-zinc-500 bg-zinc-800 px-2 py-1 rounded uppercase tracking-wider">
                  {stream.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {stream.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">{stream.desc}</p>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div>
                  <p className="text-xs text-gray-500">Level</p>
                  <p className="font-medium">{stream.level}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Price</p>
                  <p className="font-bold text-lg">{stream.price}</p>
                </div>
              </div>

              <button className="w-full mt-6 bg-white text-black font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredStreams.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Filter size={48} className="mx-auto mb-4 opacity-20" />
            <p>No streams found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseStreams;
