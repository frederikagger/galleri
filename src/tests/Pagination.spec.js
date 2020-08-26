import {RouterLinkStub, mount} from '@vue/test-utils';
import Pagination from '../components/Pagination';

let wrapper;

beforeEach(() => {
    wrapper = mount(Pagination, {
        propsData: {
            numberOfPages: 7,
            currentPage: 4,
        },
        stubs: {
            RouterLink: RouterLinkStub,
        },
        mocks: {
            $route: {
                params: {
                    id: 4,
                },
            },
        },
    });
});

describe('pagination', () => {
    test('correct number of pages', () => {
        expect(wrapper.findAllComponents(RouterLinkStub).length).toBe(9);
    })
});