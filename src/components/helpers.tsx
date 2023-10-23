import { sample } from "lodash"


export const delayRandomly = () => {
    const timeout = sample([0, 200, 500, 700, 1000, 3000])
    return new Promise(resolve => setTimeout(resolve, timeout))
}

export const throwRandomly = () => {
    const shouldThrow = sample([false, true, false, true])
    if (shouldThrow) throw new Error ('Симулированная проблема')
}