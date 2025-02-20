export function foo(value: Record<string, string>) {
    const test = Object.entries(value)
    const test2 = test.length ? test[0][1] : ''
    return test2
}
