import { mount } from '@vue/test-utils';
import { afterEach, expect, test, vi } from 'vitest';
import Game from '../../src/components/Game.vue';
import store from '../../src/store';
afterEach(() => vi.restoreAllMocks());
test('starts the game and moves the frog with arrow keys', async () => {
 vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue();
 vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
 const wrapper = mount(Game, { global: { plugins: [store] } });
 expect(wrapper.find('#screen').exists()).toBe(false);
 await wrapper.get('button').trigger('click');
 expect(wrapper.find('.frog').exists()).toBe(true);
 expect(store.state.frog?.pos).toEqual({ x: 112, y: 224 });
 await wrapper.get('.game').trigger('keydown', { key: 'ArrowUp' });
 expect(store.state.frog?.pos).toEqual({ x: 112, y: 208 });
 wrapper.unmount();
});
