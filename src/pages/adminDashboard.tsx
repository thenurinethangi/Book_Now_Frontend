import React, { useState } from 'react';
import { 
  LayoutDashboard, Film, Users, Calendar, Settings, LogOut, 
  TrendingUp, DollarSign, Ticket, Play, Bell, Search, Menu, X,
  ChevronDown, BarChart3, Clock, Star, Eye, ChevronRight
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: 'up' | 'down';
}

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  bookings: number;
  revenue: string;
}

const AdminDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  const navItems: NavItem[] = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', active: true },
    { icon: <Film className="w-5 h-5" />, label: 'Movies' },
    { icon: <Ticket className="w-5 h-5" />, label: 'Bookings' },
    { icon: <Users className="w-5 h-5" />, label: 'Users' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Schedule' },
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  ];

  const stats: StatCard[] = [
    {
      title: 'Total Revenue',
      value: '$48,574',
      change: '+12.5%',
      icon: <DollarSign className="w-6 h-6" />,
      trend: 'up'
    },
    {
      title: 'Total Bookings',
      value: '12,845',
      change: '+8.2%',
      icon: <Ticket className="w-6 h-6" />,
      trend: 'up'
    },
    {
      title: 'Active Users',
      value: '8,426',
      change: '+15.3%',
      icon: <Users className="w-6 h-6" />,
      trend: 'up'
    },
    {
      title: 'Movies Playing',
      value: '24',
      change: '-2.4%',
      icon: <Film className="w-6 h-6" />,
      trend: 'down'
    }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 32000, bookings: 850 },
    { month: 'Feb', revenue: 38000, bookings: 920 },
    { month: 'Mar', revenue: 35000, bookings: 880 },
    { month: 'Apr', revenue: 42000, bookings: 1050 },
    { month: 'May', revenue: 45000, bookings: 1120 },
    { month: 'Jun', revenue: 48574, bookings: 1280 },
  ];

  const genreData = [
    { name: 'Action', value: 35, color: '#b91c1c' },
    { name: 'Drama', value: 25, color: '#dc2626' },
    { name: 'Comedy', value: 20, color: '#ef4444' },
    { name: 'Thriller', value: 15, color: '#f87171' },
    { name: 'Sci-Fi', value: 5, color: '#fca5a5' },
  ];

  const topMovies: Movie[] = [
    { id: 1, title: 'Avengers: Endgame', genre: 'Action', rating: 4.8, bookings: 2845, revenue: '$142,250' },
    { id: 2, title: 'The Dark Knight', genre: 'Action', rating: 4.9, bookings: 2634, revenue: '$131,700' },
    { id: 3, title: 'Inception', genre: 'Sci-Fi', rating: 4.7, bookings: 2421, revenue: '$121,050' },
    { id: 4, title: 'Interstellar', genre: 'Sci-Fi', rating: 4.6, bookings: 2198, revenue: '$109,900' },
    { id: 5, title: 'Parasite', genre: 'Drama', rating: 4.8, bookings: 1876, revenue: '$93,800' },
  ];

  const timeSlotData = [
    { time: '10 AM', bookings: 45 },
    { time: '1 PM', bookings: 78 },
    { time: '4 PM', bookings: 95 },
    { time: '7 PM', bookings: 142 },
    { time: '10 PM', bookings: 87 },
  ];

  return (
    <div className="flex h-screen bg-[#121212] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#1a1a1a] border-r border-white/5 transition-all duration-300 flex flex-col relative z-20`}>
        {/* Logo */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-700 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/50">
                <Play className="w-5 h-5 fill-white" />
              </div>
              <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent text-lg font-bold">
                BOOKNOW
              </span>
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center ${sidebarOpen ? 'space-x-3 px-4' : 'justify-center'} py-3 rounded-lg transition-all duration-300 group ${
                item.active 
                  ? 'bg-gradient-to-r from-red-900/30 to-red-700/30 text-white border border-red-900/50' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className={item.active ? 'text-red-500' : 'group-hover:text-red-500 transition-colors'}>
                {item.icon}
              </span>
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-white/5">
          <button className={`w-full flex items-center ${sidebarOpen ? 'space-x-3' : 'justify-center'} p-3 hover:bg-white/5 rounded-lg transition-colors group`}>
            <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center text-sm font-bold">
              AD
            </div>
            {sidebarOpen && (
              <div className="flex-1 text-left">
                <div className="text-sm font-medium">Admin User</div>
                <div className="text-xs text-gray-400">admin@booknow.com</div>
              </div>
            )}
          </button>
          {sidebarOpen && (
            <button className="w-full flex items-center space-x-3 px-3 py-2 mt-2 text-gray-400 hover:text-red-500 hover:bg-white/5 rounded-lg transition-all">
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Logout</span>
            </button>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-[#1a1a1a]/50 backdrop-blur-sm border-b border-white/5 sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Dashboard Overview
              </h1>
              <p className="text-sm text-gray-400 mt-1">Welcome back, here's what's happening today</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red-900/50 transition-colors w-64"
                />
              </div>

              {/* Period Selector */}
              <button className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                <Clock className="w-4 h-4 text-red-500" />
                <span className="text-sm">{selectedPeriod}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Notifications */}
              <button className="relative p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-red-900/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/0 to-red-700/0 group-hover:from-red-900/10 group-hover:to-red-700/5 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-red-900/20 rounded-xl text-red-500 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold">Revenue Overview</h3>
                  <p className="text-sm text-gray-400 mt-1">Monthly revenue and bookings trend</p>
                </div>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#b91c1c" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#b91c1c" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#b91c1c" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Genre Distribution */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold">Genre Distribution</h3>
                <p className="text-sm text-gray-400 mt-1">Popular movie genres</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={genreData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {genreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20', borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {genreData.map((genre, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: genre.color }}></div>
                      <span className="text-gray-400">{genre.name}</span>
                    </div>
                    <span className="font-medium">{genre.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Movies Table */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold">Top Performing Movies</h3>
                  <p className="text-sm text-gray-400 mt-1">Best sellers this month</p>
                </div>
                <button className="text-sm text-red-500 hover:text-red-400 flex items-center space-x-1">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {topMovies.map((movie, index) => (
                  <div 
                    key={movie.id}
                    className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/5 hover:border-red-900/30"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="text-2xl font-bold text-gray-600">#{index + 1}</div>
                      <div className="flex-1">
                        <div className="font-semibold group-hover:text-red-400 transition-colors">{movie.title}</div>
                        <div className="text-sm text-gray-400">{movie.genre}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-yellow-400 mb-1">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">{movie.rating}</span>
                        </div>
                        <div className="text-xs text-gray-400">{movie.bookings} bookings</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-400">{movie.revenue}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Slot Performance */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold">Peak Booking Hours</h3>
                <p className="text-sm text-gray-400 mt-1">Today's booking patterns</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={timeSlotData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="time" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="bookings" fill="#b91c1c" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="group p-6 bg-gradient-to-br from-red-900/20 to-red-700/10 border border-red-900/30 rounded-2xl hover:border-red-900/50 transition-all duration-300 hover:transform hover:scale-105">
              <Film className="w-8 h-8 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-semibold mb-2">Add New Movie</h4>
              <p className="text-sm text-gray-400">Upload and manage movie content</p>
            </button>
            
            <button className="group p-6 bg-gradient-to-br from-red-900/20 to-red-700/10 border border-red-900/30 rounded-2xl hover:border-red-900/50 transition-all duration-300 hover:transform hover:scale-105">
              <Calendar className="w-8 h-8 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-semibold mb-2">Schedule Showtime</h4>
              <p className="text-sm text-gray-400">Create new screening schedule</p>
            </button>
            
            <button className="group p-6 bg-gradient-to-br from-red-900/20 to-red-700/10 border border-red-900/30 rounded-2xl hover:border-red-900/50 transition-all duration-300 hover:transform hover:scale-105">
              <Eye className="w-8 h-8 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-semibold mb-2">View Reports</h4>
              <p className="text-sm text-gray-400">Access detailed analytics</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;