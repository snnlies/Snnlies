export default function Login() {
  const loginUrl = "https://discord.com/oauth2/authorize?client_id=1568201630112030760&response_type=code&redirect_uri=https%3A%2F%2Fsnnlies.vercel.app%2Fapi%2Fauth%2Fcallback%2Fdiscord&integration_type=0&scope=identify+openid+connections+guilds+guilds.join+applications.commands";
  const botUrl = "https://discord.com/oauth2/authorize?client_id=1568201630112030760&permissions=8&integration_type=0&scope=bot+applications.commands";

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
      <p className="text-neutral-400 mb-10 max-w-sm">Sign up or login with Discord to access your dashboard and manage Snnlies.</p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a href={loginUrl} className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition transform hover:scale-105">
          Login / Sign Up with Discord
        </a>
        <a href={botUrl} className="px-8 py-4 border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-900 transition transform hover:scale-105">
          Invite Bot to Server
        </a>
      </div>
    </div>
  );
}
