export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer className="bg-sky-900/50 text-zinc-200 py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {year} Weather Hub. Todos os direitos reservados.</p>
                <p className="text-xs mt-1">Desenvolvido por Hugo Vilar de Olivera</p>
            </div>
        </footer>
    )
}