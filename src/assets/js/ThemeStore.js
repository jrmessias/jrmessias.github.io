// ThemeStore.js
import { ref, watch, onMounted } from 'vue';

// Criando um store simples para o tema
export const useThemeStore = () => {
    // Estado global para o modo escuro
    const isDarkMode = ref(false);

    // Função para alternar o tema
    const toggleTheme = () => {
        isDarkMode.value = !isDarkMode.value;
    };

    // Função para aplicar o tema ao documento
    const applyTheme = () => {
        if (isDarkMode.value) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Salvar preferência no localStorage
        localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
    };

    // Inicializar o tema
    const initTheme = () => {
        // Verificar preferência salva ou preferência do sistema
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            isDarkMode.value = savedTheme === 'dark';
        } else {
            // Verificar preferência do sistema se não houver preferência salva
            isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        applyTheme();

        // Ouvir mudanças na preferência do sistema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleMediaQueryChange = (e) => {
            if (!localStorage.getItem('theme')) {
                isDarkMode.value = e.matches;
            }
        };
        mediaQuery.addEventListener('change', handleMediaQueryChange);
    };

    // Observar mudanças e aplicar o tema
    watch(isDarkMode, () => {
        applyTheme();
    });

    onMounted(initTheme); // Call initTheme on mount

    return {
        isDarkMode,
        toggleTheme,
        initTheme
    };
};

// Criar uma instância única do store para ser usada em toda a aplicação
export const themeStore = useThemeStore();
