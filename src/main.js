import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		header: 'Як довго',
		subheader: 'ти був на лікарняному'
	}
});

export default app;
