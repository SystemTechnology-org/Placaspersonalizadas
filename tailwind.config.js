/**
 * Configuração do Tailwind CSS para a Landing Page de Placas em Vidro Temperado
 * Paleta de cores estrita e configurações de fontes/sombras
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Paleta rigorosa do projeto (sem cores fora desta lista)
        verde: {
          escuro: '#1B4D2E',   // Títulos e destaques principais
          medio: '#4C7A3E',    // Fundos de seção, botões secundários
          claro: '#8FAF56',    // Ícones, acentos decorativos
          whatsapp: '#25D366', // CTA de contato WhatsApp
        },
        creme: '#F1EEE4',      // Fundo creme/bege claro
        branco: '#FFFFFF',     // Branco
        neutro: '#1A1A1A',     // Texto escuro neutro
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'placa': '0 20px 35px -10px rgba(27, 77, 46, 0.15), 0 10px 15px -5px rgba(27, 77, 46, 0.08)',
        'placa-hover': '0 25px 45px -12px rgba(27, 77, 46, 0.25), 0 12px 20px -6px rgba(27, 77, 46, 0.12)',
        'vidro': '0 8px 32px 0 rgba(27, 77, 46, 0.12)',
      }
    }
  }
};
