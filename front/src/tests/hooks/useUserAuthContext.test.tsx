import { renderHook } from '@testing-library/react'
import { useUserAuthContext } from '../../hooks/useUserAuthContext'

describe('useUserAuthContext Hook', () => {
    test('Hook works properly', () => {
        const { result } = renderHook(() => useUserAuthContext())

        expect(result.current.state.user).toBe(null)
        expect(typeof result.current.state).toBe('object')
    })
})
