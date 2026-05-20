export default function CyberLandingPage() {
  const services = [
    {
      title: 'Pentest Web',
      desc: 'Testes de invasão em aplicações web para identificar vulnerabilidades, falhas críticas e riscos de segurança antes que sejam explorados.',
    },
    {
      title: 'Análise de Vulnerabilidades',
      desc: 'Varredura de vulnerabilidades, análise preventiva, hardening e recomendações de correção para fortalecer a segurança dos sistemas.',
    },
    {
      title: 'Consultoria em Segurança',
      desc: 'Consultoria em segurança ofensiva, proteção de redes, análise de riscos e melhorias na infraestrutura digital.',
    },
    {
      title: 'Automações',
      desc: 'Automação de tarefas, bots, integrações entre sistemas, workflows inteligentes e otimização de processos para aumentar produtividade.',
    },
    {
      title: 'Landing Pages',
      desc: 'Criação de landing pages modernas, rápidas e responsivas para captação de leads, divulgação de serviços, vendas, portfólios e fortalecimento da presença digital.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,170,0.15),transparent_40%)]" />

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-sm">
        <h1 className="text-xl md:text-2xl font-bold tracking-widest text-green-400">
          CYBERSECURITY & AUTOMATIONS
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#sobre" className="hover:text-green-400 transition">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-green-400 transition">
            Serviços
          </a>
          <a href="#contato" className="hover:text-green-400 transition">
            Contato
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-8 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-400/10 text-green-300 text-sm mb-6">
            Segurança Ofensiva • Pentest • Automações
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Proteja e fortaleça sua presença digital.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
            Soluções modernas em cibersegurança, automações e desenvolvimento
            web para empresas e profissionais.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="px-8 py-4 rounded-2xl bg-green-400 text-black font-bold hover:scale-105 transition duration-300"
            >
              Solicitar análise
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-green-400 blur-3xl opacity-20 rounded-full" />

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl max-w-md text-center">
            <div className="text-green-400 text-6xl mb-6">&lt;/&gt;</div>

            <h3 className="text-3xl font-bold mb-4">
              Soluções Modernas em Tecnologia
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Desenvolvimento de automações, landing pages profissionais e
              soluções focadas em segurança digital e performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="servicos"
        className="relative z-10 px-8 py-20 max-w-7xl mx-auto"
      >
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold mb-4">Serviços</h3>

          <p className="text-gray-400">
            Soluções em segurança digital, automações e desenvolvimento web para empresas e negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-green-400/50 hover:-translate-y-2 transition duration-300"
            >
              <h4 className="text-2xl font-bold mb-4 text-green-400">
                {item.title}
              </h4>

              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="sobre"
        className="relative z-10 px-8 py-20 max-w-5xl mx-auto text-center"
      >
        <h3 className="text-4xl font-bold mb-6">Sobre</h3>

        <p className="text-gray-400 text-lg leading-relaxed">
          Especializado em tecnologia, segurança ofensiva e desenvolvimento web,
          ajudando empresas e profissionais através de análise de
          vulnerabilidades, automações e landing pages modernas.
        </p>
      </section>

      {/* CTA */}
      <section
        id="contato"
        className="relative z-10 px-8 pb-24 max-w-4xl mx-auto"
      >
        <div className="rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-400/10 to-transparent p-12 text-center backdrop-blur-xl">
          <h3 className="text-4xl font-black mb-4">
            Leve sua segurança e presença digital para outro nível.
          </h3>

          <p className="text-gray-400 mb-8">
            Entre em contato e receba uma análise inicial.
          </p>

          <a
            href="https://wa.me/+5582998382972"
            className="inline-flex px-10 py-5 rounded-2xl bg-green-400 text-black font-bold hover:scale-105 transition duration-300"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
