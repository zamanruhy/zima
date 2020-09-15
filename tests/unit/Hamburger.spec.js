import { render, fireEvent } from '@testing-library/svelte'
import Hamburger from '@/components/common/Hamburger.svelte'

describe('Hamburger.svelte', () => {
  it('should render correctly', async () => {
    const { container, component } = render(Hamburger, {
      props: {
        active: true
      }
    })
    const hamburger = container.querySelector('.hamburger')
    const onChange = jest.fn()
    component.$on('change', onChange)
    expect(hamburger).toHaveClass('hamburger_active')
    await fireEvent.click(hamburger)
    expect(hamburger).not.toHaveClass('hamburger_active')
    expect(onChange).toHaveBeenCalled()
    expect(onChange.mock.calls[0][0].detail).toBe(false)
  })
})
