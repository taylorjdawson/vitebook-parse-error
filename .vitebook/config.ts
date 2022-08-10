import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { svelteMarkdownPlugin } from '@vitebook/markdown-svelte/node';
import { defaultThemePlugin, DefaultThemeConfig } from '@vitebook/theme-default/node';

export default defineConfig<DefaultThemeConfig>({
  include: ['src/**/*.md', 'src/**/*.story.svelte'],
  plugins: [
    svelteMarkdownPlugin(),
    clientPlugin({ appFile: 'App.svelte' }),
    defaultThemePlugin(),
  ],
  site: {
    title: 'Vitebook Parse Error',
    description: 'Example showcasing the vitebook parse error',
    theme: {},
  },
});
