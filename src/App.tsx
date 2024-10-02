import logo from './assets/logo.svg'
import letsStart from './assets/lets-start.svg'
import { Button } from './components/ui/button'
import { Plus } from 'lucide-react'

export function App() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8">
            <img src={logo} alt="in.orbit logo" />
            <img src={letsStart} alt="Let's start" />
            <div className="flex flex-col items-center gap-5">
                <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
                    Você ainda não cadastrou nenhuma meta. Que tal cadastrar uma
                    agora mesmo?
                </p>
                <Button>
                    <Plus className="size-4" />
                    Cadastrar meta
                </Button>
            </div>
        </div>
    )
}
