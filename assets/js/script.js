// Verifica se o acesso está ocorrendo a partir de um dispositivo desktop
function isDesktop() {
    return window.matchMedia("(min-width: 1024px)").matches;
}

// Exemplo de uso
if (!isDesktop()) {
    // Esconde o conteúdo para desktop
    document.getElementById("desktop-content").style.display = "none";
    
    // Exibe o aviso para dispositivos móveis
    document.getElementById("mobile-warning").style.display = "block";
}
