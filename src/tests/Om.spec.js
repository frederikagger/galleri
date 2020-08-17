import {shallowMount} from '@vue/test-utils';
import Om from './Om';

describe('Om', () => {
    it('renders a p', () => {
        const wrapper = shallowMount(Om);
        expect(wrapper.contains('p')).toBe(true)
    })
})
