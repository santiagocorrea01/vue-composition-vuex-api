import { shallowMount } from '@vue/test-utils'
import TheHero from '@/components/TheHero.vue'

describe('Hero.vue', () => {

  it ('renders the hero component correctly', () => {
      const wrapper = shallowMount(TheHero)
      expect(wrapper).toBeDefined()
  })

  it('renders props.title when passed', () => {
    const title = 'title'
    const wrapper = shallowMount(TheHero, {
      props: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
  
})
