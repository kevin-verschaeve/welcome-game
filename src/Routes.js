import Home from './Home.svelte';
import Game from './Game.svelte';

export default {
  '/': Home,
  '/game/:game': Game,
  '*': Home,
};
