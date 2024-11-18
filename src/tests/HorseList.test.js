import App from '@/App.vue';
import { mount } from '@vue/test-utils';
import { afterAll, describe, expect, it } from 'vitest';
import { store } from '@/store';

describe('HorseList', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [store],
    },
  });

  it('should mount', () => {
    expect(wrapper.find('[data-test=horse-list-header]').exists()).toBe(true);
    expect(wrapper.find('[data-test=horse-list-table]').exists()).toBe(true);
  });

  it('should render horse list correctly', () => {
    expect(wrapper.findAll('[data-test=horse-list-row]')).toHaveLength(20);
  });

  afterAll(() => wrapper.unmount());
});
