import { CreateGoal } from './components/CreateGoal'
import { Dialog } from './components/ui/dialog'
import { EmptyGoals } from './components/EmptyGoals'
import { Summary } from './components/Summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
    const { data } = useQuery({
        queryKey: ['summary'],
        queryFn: getSummary,
        staleTime: 1000 * 60, // 1 min
    })

    return (
        <Dialog>
            {(data?.total ?? 0) > 0 ? <Summary /> : <EmptyGoals />}

            <CreateGoal />
        </Dialog>
    )
}
