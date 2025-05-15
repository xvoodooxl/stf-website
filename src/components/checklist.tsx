'use client'

import { useState } from 'react'

export function Checklist({
  title = 'Checklist',
  items,
}: {
  title: string
  items: string[]
}) {
  const [checked, setChecked] = useState<boolean[]>(() =>
    new Array(items.length).fill(false),
  )

  const toggle = (index: number) => {
    setChecked(prev => {
      const newChecked = [...prev]
      newChecked[index] = !newChecked[index]
      return newChecked
    })
  }

  return (
    <>
      <h2 className='x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-[fade-in_1.5s] x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border mb-4'>
        {title}
      </h2>
      <ul className='space-y-2'>
        {items.map((item, i) => (
          <li key={i} className='flex items-start gap-2'>
            <button
              aria-label='Toggle checklist item'
              onClick={() => toggle(i)}
              className={`flex h-5 w-5 items-center justify-center rounded border font-bold transition ${checked[i] ? 'bg-stf border-yellow-400 dark:text-amber-900' : 'border-none dark:bg-neutral-400/40'} `}
            >
              {checked[i] && '✓'}
            </button>
            <span
              className={
                checked[i]
                  ? 'text-neutral-500 line-through dark:text-neutral-400'
                  : ''
              }
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
