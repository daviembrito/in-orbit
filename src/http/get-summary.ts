type SummaryResponse = {
    completed: number
    total: number
    completionsPerDay: Record<
        string,
        {
            id: string
            title: string
            completedAt: string
        }[]
    >
}

export async function getSummary(): Promise<SummaryResponse | undefined> {
    const response = await fetch('http://localhost:3000/summary')

    return await response.json()
}
