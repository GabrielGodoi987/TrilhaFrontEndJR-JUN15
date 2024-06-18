// import { describe, it, expect } from 'vitest'

// import { mount } from '@vue/test-utils'
// import HelloWorld from '../HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })

import { describe, it, expect } from "vitest";
import {mount} from '@vue/test-utils';
import HeaderComponent from "../basicsComponents/header/HeaderComponent.vue";

describe('Header', () => {
    it('Renderizou corretamente', () => {
        const wrapper = mount(HeaderComponent, {
            props: {
                msg: "O componente está funcionando corretamente"
            }
        })
        expect(wrapper.text());
    })
})