export default function Contact() {
    return (
      <main className="min-h-screen text-white p-10">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="max-w-3xl mx-auto bg-zinc-800 p-8 rounded-xl">
          <form className="grid gap-6">
            <div>
              <label className="block mb-1 text-sm text-zinc-400">Your Name</label>
              <input className="w-full p-3 rounded bg-zinc-900 text-white" type="text" placeholder="John Doe" />
            </div>
            <div>
              <label className="block mb-1 text-sm text-zinc-400">Email Address</label>
              <input className="w-full p-3 rounded bg-zinc-900 text-white" type="email" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block mb-1 text-sm text-zinc-400">Message</label>
              <textarea className="w-full p-3 rounded bg-zinc-900 text-white" rows={5} placeholder="Tell us what's on your mind..." />
            </div>
            <button className="bg-green-600 hover:bg-green-700 transition p-3 rounded font-semibold">Send Message</button>
          </form>
        </div>
      </main>
    )
  }