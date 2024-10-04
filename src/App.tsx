import { CreateGoal } from './components/CreateGoal'
import { Dialog } from './components/ui/dialog'
import { EmptyGoals } from './components/EmptyGoals'
import { Summary } from './components/Summary'

export function App() {
    return (
        <Dialog>
            {/* <EmptyGoals /> */}
            <Summary />
            <CreateGoal />
        </Dialog>
    )
}
