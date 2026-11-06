export default function Home() {
  const loginUrl = "https://discord.com/oauth2/authorize?client_id=1568201630112030760&response_type=code&redirect_uri=https%3A%2F%2Fsnnlies.vercel.app%2Fapi%2Fauth%2Fcallback%2Fdiscord&integration_type=0&scope=identify+openid+connections+guilds+guilds.join+applications.commands";
  const botUrl = "https://discord.com/oauth2/authorize?client_id=1568201630112030760&permissions=8&integration_type=0&scope=bot+applications.commands";

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
        snnlies.
      </h1>
      <p className="text-neutral-400 text-lg max-w-md mb-10">
        Experience the pinnacle of Discord automation. Minimalist design, absolute precision.
      </p>
      
      <div className="flex gap-4 flex-col sm:flex-row">
        <a href={loginUrl} className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition">
          Login with Discord
        </a>
        <a href={botUrl} className="px-8 py-3 border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-900 transition">
          Invite Bot
        </a>
      </div>
    </main>
  );
}
