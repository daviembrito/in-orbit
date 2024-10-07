import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { Icon } from './Icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../http/get-summary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'

dayjs.locale(ptBR)

export function Summary() {
    const { data } = useQuery({
        queryKey: ['summary'],
        queryFn: getSummary,
        staleTime: 1000 * 60, // 1 min
    })

    if (!data) return null

    const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
    const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

    const completedPercentage = Math.round((data.completed / data.total) * 100)

    return (
        <div className="py-10 max-w-[460px] px-5 mx-auto flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Icon />
                    <p className="text-zinc-50 text-lg font-semibold capitalize">
                        {firstDayOfWeek} - {lastDayOfWeek}
                    </p>
                </div>
                <DialogTrigger asChild>
                    <Button size="sm">
                        <Plus />
                        Cadastrar meta
                    </Button>
                </DialogTrigger>
            </div>

            <div className="flex flex-col gap-3">
                <Progress value={data.completed} max={data.total}>
                    <ProgressIndicator
                        style={{ width: `${completedPercentage}%` }}
                    />
                </Progress>
                <div className="flex justify-between items-center text-xs text-zinc-400">
                    <span>
                        Você completou{' '}
                        <span className="text-zinc-100">{data.completed}</span>{' '}
                        de <span className="text-zinc-100">{data.total}</span>{' '}
                        metas nessa semana.
                    </span>
                    <span>{completedPercentage}%</span>
                </div>
            </div>

            <Separator />

            <div className="flex flex-wrap gap-3">
                <OutlineButton>
                    <Plus className="size-4 text-zinc-600" />
                    Meditar
                </OutlineButton>
                <OutlineButton>
                    <Plus className="size-4 text-zinc-600" />
                    Praticar exercício
                </OutlineButton>
                <OutlineButton>
                    <Plus className="size-4 text-zinc-600" />
                    Acordar cedo
                </OutlineButton>
            </div>

            <div className="flex flex-col gap-6">
                <h2 className="text-zinc-100 text-xl font-medium">
                    Sua semana
                </h2>
                {/* <span className="text-zinc-400 text-sm">
                    Você ainda não completou nenhuma meta essa semana.
                </span> */}

                <div className="flex flex-col gap-4">
                    <h3 className="font-medium">
                        Hoje{' '}
                        <span className="text-zinc-400 text-xs">
                            (06 de Agosto)
                        </span>
                    </h3>

                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="size-4 text-pink-500" />
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">
                                    Acordar cedo
                                </span>
                                " às{' '}
                                <span className="text-zinc-100">08:13h</span>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="size-4 text-pink-500" />
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">Meditar</span>"
                                às <span className="text-zinc-100">10:23h</span>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="size-4 text-pink-500" />
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">
                                    Praticar exercício
                                </span>
                                " às{' '}
                                <span className="text-zinc-100">19:49h</span>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-medium">
                        Ontem{' '}
                        <span className="text-zinc-400 text-xs">
                            (05 de Agosto)
                        </span>
                    </h3>

                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="size-4 text-pink-500" />
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">
                                    Acordar cedo
                                </span>
                                " às{' '}
                                <span className="text-zinc-100">08:17h</span>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="size-4 text-pink-500" />
                            <span className="text-zinc-400 text-sm">
                                Você completou "
                                <span className="text-zinc-100">Meditar</span>"
                                às <span className="text-zinc-100">10:12h</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
