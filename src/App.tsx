import { CreateGoal } from './components/CreateGoal'
import { Dialog } from './components/ui/dialog'
import { EmptyGoals } from './components/EmptyGoals'

export function App() {
    return (
        <Dialog>
            <EmptyGoals />
            <CreateGoal />
        </Dialog>
    )
}
