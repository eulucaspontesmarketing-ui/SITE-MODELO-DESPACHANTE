import React, { useEffect } from 'react';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5592900000000";

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-blur');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#003366] overflow-x-hidden selection:bg-[#F2A900] selection:text-[#003366]">
      
      {/* BLOCO 1 – HERO (RESPONSIVO: DESKTOP E MOBILE) */}
      <section className="w-full relative overflow-hidden bg-white">
        <h1 className="sr-only">Despachante em Manaus - Regularização de Veículos e CNH</h1>
        
        {/* IMAGEM DESKTOP */}
        <img 
          src="https://i.postimg.cc/B6HJHG01/Chat-GPT-Image-3-de-jan-de-2026-02-15-51.png" 
          alt="Lumma Despachante - Desktop" 
          className="hidden md:block w-full h-screen object-cover object-center"
        />

        {/* IMAGEM MOBILE */}
        <img 
          src="https://i.postimg.cc/wTGxC20R/Chat-GPT-Image-3-de-jan-de-2026-02-28-41.png" 
          alt="Lumma Despachante - Mobile" 
          className="block md:hidden w-full h-auto object-contain"
        />
      </section>

      {/* BLOCO 2 – BOTÃO DE AÇÃO IMEDIATA */}
      <section className="py-8 px-6 flex justify-center bg-white -mt-4 relative z-10">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md bg-[#F2A900] text-[#003366] font-black text-xl py-5 px-8 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-center uppercase tracking-tight"
        >
          Falar agora no WhatsApp
        </a>
      </section>

      {/* BLOCO 3 – SERVIÇOS */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-8 border-l-8 border-[#F2A900] pl-5 uppercase tracking-tighter">
          Serviços disponíveis
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {['Transferência de veículo', 'Multas', 'CNH', 'Licenciamento'].map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-lg">
              <span className="text-[#F2A900]">✔</span> {item}
            </div>
          ))}
        </div>
        <p className="text-slate-600 leading-relaxed font-medium">
          Também oferecemos atendimento presencial no escritório, atendimento a domicílio com agendamento e assessoria completa em toda documentação veicular.
        </p>
      </section>

      {/* NOVO BLOCO 1 – ATENDEMOS TAMBÉM EMPRESAS */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#006688]/10 to-white text-center">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-tight">
            Atendemos <span className="text-[#F2A900]">pessoas físicas</span> <br className="hidden md:block" /> e <span className="text-[#F2A900]">empresas</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#F2A900] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl font-bold text-[#006688] uppercase tracking-widest">
            Veículos particulares, frotas e CNPJ
          </p>
        </div>
      </section>

      {/* BLOCO 4 – ATENDIMENTO PRESENCIAL */}
      <section className="py-16 px-6 bg-[#003366] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Onde estamos</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            Possuímos local fixo no coração de <span className="text-[#F2A900] font-bold">Manaus – AM, no bairro Centro</span>. 
            Nosso atendimento pode ser presencial ou totalmente online via WhatsApp para sua comodidade.
          </p>
        </div>
      </section>

      {/* BLOCO 5 – MAPA */}
      <section className="w-full h-[350px] bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8973650638!2d-60.0263384!3d-3.131109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c0ff67140e4f5%3A0xc3c94480d0d41fd8!2sCentro%2C%20Manaus%20-%20AM!5e0!3m2!1spt-BR!2sbr!4v1715421234567!5m2!1spt-BR!2sbr" 
          className="w-full h-full border-0 grayscale contrast-125"
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de localização em Manaus"
        ></iframe>
      </section>

      {/* BLOCO 6 – PROVA SIMPLES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-10 uppercase tracking-tighter">
          Atendimento rápido e <br/> sem complicação
        </h2>
        <div className="max-w-3xl mx-auto rounded-[40px] overflow-hidden shadow-2xl reveal-blur">
          <img 
            src="https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg" 
            alt="Atendimento Profissional" 
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* NOVO BLOCO 2 – SERVIÇOS MAIS PROCURADOS */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">Serviços mais procurados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Transferência de veículo', 'Emplacamento', 'Regularização de débitos', 'CNH'].map((service, idx) => (
              <div 
                key={service} 
                className={`reveal p-8 rounded-[32px] bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 hover:bg-[#006688] hover:text-white hover:-translate-y-2 hover:shadow-xl cursor-default`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#F2A900] rounded-2xl mb-6 flex items-center justify-center text-[#003366] text-2xl font-black">
                  ✦
                </div>
                <h3 className="text-xl font-black uppercase leading-tight">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 7 – COMO FUNCIONA */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center uppercase">Como funciona</h2>
          <div className="space-y-8">
            {[
              { id: 1, title: 'Chama no WhatsApp', desc: 'Inicie o contato para tirar dúvidas e receber um orçamento rápido.' },
              { id: 2, title: 'Envia os documentos', desc: 'Envie fotos ou cópias dos documentos necessários de forma digital.' },
              { id: 3, title: 'Nós resolvemos tudo', desc: 'O despachante cuida de toda a burocracia e te avisa ao finalizar.' }
            ].map((step) => (
              <div key={step.id} className="flex gap-6 items-start reveal">
                <div className="flex-shrink-0 w-12 h-12 bg-[#006688] text-white rounded-full flex items-center justify-center font-black text-xl">
                  {step.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 tracking-tight">{step.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVO BLOCO 3 – POR QUE USAR UM DESPACHANTE */}
      <section className="py-24 px-6 bg-[#003366] text-white relative">
        {/* Separador visual superior (diagonal) */}
        <div className="absolute top-0 left-0 w-full h-12 bg-slate-50 -translate-y-full [clip-path:polygon(0_100%,100%_0,100%_100%)]"></div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-16 text-center uppercase tracking-tight">Por que usar um despachante?</h2>
          <div className="grid gap-6">
            {[
              { t: 'Evita filas e perda de tempo', d: 'Fazemos todo o trabalho burocrático por você sem que precise sair de casa.' },
              { t: 'Processo correto e legalizado', d: 'Garantimos que toda a documentação esteja rigorosamente dentro da lei.' },
              { t: 'Acompanhamento até finalizar', d: 'Você recebe atualizações constantes até que o seu documento esteja pronto.' }
            ].map((benefit, i) => (
              <div key={i} className="reveal flex flex-col md:flex-row items-center gap-6 p-8 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-16 h-16 bg-[#F2A900] rounded-full flex items-center justify-center text-[#003366] text-3xl shrink-0 group-hover:scale-110 transition-transform">
                  🛡️
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-black text-[#F2A900] mb-2 uppercase tracking-tight">{benefit.t}</h3>
                  <p className="text-white/70 font-medium leading-relaxed">{benefit.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Separador visual inferior */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white translate-y-full [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
      </section>

      {/* BLOCO 8 – DÚVIDAS FREQUENTES (FAQ) */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">Dúvidas Frequentes</h2>
        <div className="grid gap-4">
          {[
            { q: 'Quanto tempo demora para regularizar?', a: 'Cada caso é único, mas trabalhamos com prazos reduzidos, resolvendo a maioria dos processos em poucos dias.' },
            { q: 'Preciso ir até o escritório?', a: 'Não. Quase todos os nossos serviços podem ser realizados 100% online através do WhatsApp.' },
            { q: 'O atendimento é seguro?', a: 'Sim, somos profissionais credenciados com anos de experiência em Manaus.' },
            { q: 'Vocês atendem em casa?', a: 'Sim! Realizamos atendimento a domicílio mediante agendamento prévio para sua total comodidade.' }
          ].map((item, idx) => (
            <details key={idx} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-slate-700 hover:text-[#006688] transition-colors">
                {item.q}
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="p-6 pt-0 text-slate-500 font-medium border-t border-slate-50">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* BLOCO 9 – CTA FINAL */}
      <section className="py-20 px-6 bg-slate-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight uppercase tracking-tighter">
            Solicite seu orçamento agora
          </h2>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-[#F2A900] text-[#003366] font-black text-xl md:text-2xl py-6 px-12 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tight"
          >
            Falar agora no WhatsApp
          </a>
        </div>
      </section>

      {/* BLOCO 11 – RODAPÉ */}
      <footer className="py-12 px-6 bg-[#003366] text-white/50 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-4 font-bold text-sm tracking-wide">
          <p className="text-white text-lg font-black tracking-widest uppercase">Despachante – Nome de Exemplo</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <span>Atendimento presencial em Manaus – AM</span>
            <span className="hidden md:inline">|</span>
            <span>Atendimento via WhatsApp</span>
          </div>
          <p className="text-[10px] uppercase opacity-40 pt-8">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* BLOCO 10 – ASSISTENTE DE IA (LUIZA) */}
      <AIChatBot />
    </div>
  );
};

export default App;