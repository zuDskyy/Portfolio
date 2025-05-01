export default function Layout() {
    return (
      <div className="min-h-screen bg-[#0f172a] font-sans text-white">
        <Navbar />
        <TabMenu />
  
        {/* Main Content */}
        <main className="p-6 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome to Zuka Admin Panel</h1>
          {/* Your chart or pages go here */}
        </main>
  
        <Footer />
      </div>
    );
  }