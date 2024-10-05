import App from './App.svelte';
import './style.scss';

interface IGlobal {
	__app?: App;
}

const root = document.createElement('div');
window.document.body.appendChild(root);

(window as IGlobal).__app = new App({
	target: root
});
