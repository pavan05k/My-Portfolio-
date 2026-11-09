import { useEffect, useState } from 'react'

export default function useTyping(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let t
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), hold)
    } else if (deleting && text === '') {
      t = setTimeout(() => {
        setDeleting(false)
        setI((n) => n + 1)
      }, 250)
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? erase : type,
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, i, words, type, erase, hold])

  return text
}
