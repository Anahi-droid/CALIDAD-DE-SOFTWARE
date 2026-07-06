// src/components/TodoFilter.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import type { Filter } from '../types'
import { TodoFilter } from './TodoFilter'

describe('TodoFilter', () => {
  it('marca como activo el filtro indicado por current', () => {
    render(<TodoFilter current="active" onChange={vi.fn()} />)

    expect(screen.getByRole('button', { name: 'Activas' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    // los otros no están presionados
    expect(screen.getByRole('button', { name: 'Todas' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })

  it('llama a onChange con el filtro elegido', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TodoFilter current="all" onChange={onChange} />)

    await user.click(screen.getByRole('button', { name: 'Completadas' }))

    expect(onChange).toHaveBeenCalledWith<[Filter]>('completed')
  })

  it('cambia el resaltado al re-renderizar con otro current', () => {
    const { rerender } = render(<TodoFilter current="all" onChange={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Todas' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    rerender(<TodoFilter current="completed" onChange={vi.fn()} />)

    expect(screen.getByRole('button', { name: 'Completadas' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Todas' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })
})