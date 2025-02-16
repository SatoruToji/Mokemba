interface Props {
    arrContent: Record<string, string>[]
}

export function MontageText({ arrContent }: Props) {
    if(arrContent.length === 0) return
    const text = arrContent.length > 0 ? Object.values(arrContent[0])[0] : ""
    let count = 0

    // Функция для обновления состояния по времени
    const outputText = () => {
        if (count < text.length) {
            console.log(text.slice(0, count + 1)) // Печатаем текст по буквам
            count++
        }
    }

    setInterval(outputText, 30)

    return text.slice(0, count)
}