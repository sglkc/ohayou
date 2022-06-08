import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    vite: {
      server: {
        hmr: {
          host: "localhost",
          port: 3000,
          overlay: true,
        },
      },
    },
	}
};

export default config;
