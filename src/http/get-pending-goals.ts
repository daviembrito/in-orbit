type PendingGoalsResponse = {
    id: string
    title: string
    weeklyFrequency: number
    completionCount: number
}[]

export async function getPendingGoals(): Promise<
    PendingGoalsResponse | undefined
> {
    const response = await fetch('http://localhost:3000/pending-goals')
    const data = await response.json()

    return data.pendingGoals
}
