document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkBtn = document.getElementById('toggleDark');
    const toggleLightBtn = document.getElementById('toggleLight');
    const body = document.body;
    const THEME_KEY = 'siteTheme'; // Chave para armazenar no localStorage

    // Função para aplicar o tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        // Salva a preferência no localStorage
        localStorage.setItem(THEME_KEY, theme);
    }

    // 1. Verificar a preferência salva ao carregar a página
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Se não houver preferência salva, define um padrão (ex: 'light')
        applyTheme('light');
    }

    // 2. Adicionar event listeners para os botões
    toggleDarkBtn.addEventListener('click', () => {
        applyTheme('dark');
    });

    toggleLightBtn.addEventListener('click', () => {
        applyTheme('light');
    });
});