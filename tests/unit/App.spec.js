import { shallowMount } from "@vue/test-utils"
import VueApp from "@/App.vue"

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

describe("App component", () => {
  const wrapper = shallowMount(VueApp)

  it("Should have a Header component", () => {
    // Config
    const exists = wrapper.findComponent(Header).exists();

    // Expect
    expect(exists).toBe(true)
  })

  it("Should have a Footer component", () => {
    // Config
    const exists =  wrapper.findComponent(Footer).exists();

    // Expect
    expect(exists).toBe(true)
  })

  it("Should have a Notifications alert element", () => {
    // Config
    const exists = wrapper.find('notifications').exists();

    // Expect
    expect(exists).toBe(true)

  })
})