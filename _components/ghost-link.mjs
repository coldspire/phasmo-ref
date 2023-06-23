import {LitElement, html, css} from 'lit';
import slugify from '@sindresorhus/slugify';

class GhostLink extends LitElement {

	static styles = css`
    .ghost-link {
      text-transform: capitalize;
    }
	`;

	static properties = {
		ghostName: {}
	};

	get href() {
		return `/ghosts/${slugify(this.ghostName)}.html`;
	}

	render() {
		return html`<a class="ghost-link" href="${this.href}">${this.ghostName}</a>`;
	}
}

customElements.define('ghost-link', GhostLink);