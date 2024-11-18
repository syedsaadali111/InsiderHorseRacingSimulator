import App from '@/App.vue';
import { mount } from '@vue/test-utils';
import { afterAll, describe, expect, it } from 'vitest';
import { store } from '@/store';

describe('RaceAnimation', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [store],
    },
  });

  it('should mount', () => {
    expect(wrapper.find('[data-test=race-animation-empty-state]').exists()).toBe(true);
  });

  it('should render horses on the race track', async () => {
    await wrapper.find('[data-test=generate-schedule]').trigger('click');
    expect(wrapper.findAll('[data-test=race-horses-image]')).toHaveLength(10);
  });

  it("should render first race's horses", () => {
    const horses = wrapper.findAll('[data-test=race-horses]');
    const firstRace = Object.values(store.state.schedule)?.[0];
    horses.forEach((horse, index) =>
      expect(horse.find('[data-test=race-horse-name]')?.text()).toEqual(firstRace[index]?.name),
    );
  });

  afterAll(() => wrapper.unmount());
});
