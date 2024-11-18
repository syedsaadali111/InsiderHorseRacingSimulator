import App from '@/App.vue';
import { mount } from '@vue/test-utils';
import { afterAll, describe, expect, it } from 'vitest';
import { store } from '@/store';

describe('RaceProgram', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [store],
    },
  });

  it('should mount', () => {
    expect(wrapper.find('[data-test=race-program-header]').exists()).toBe(true);
    expect(wrapper.find('[data-test=race-program-empty-state]').exists()).toBe(true);
  });

  it('should render race schedule', async () => {
    //TODO: import hard-coded length values from common place
    await wrapper.find('[data-test=generate-schedule]').trigger('click');
    const allTables = wrapper.findAll('[data-test=race-program-table]');

    //6 laps
    expect(allTables).toHaveLength(6);

    //each lap has 10 horses
    allTables.forEach((t) => expect(t.findAll('[data-test=race-program-row]')).toHaveLength(10));
  });

  afterAll(() => wrapper.unmount());
});
