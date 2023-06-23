import {LitElement, html, css} from 'lit';
import slugify from '@sindresorhus/slugify';

class GhostLink extends LitElement {

	static styles = css`
    .ghost-link {
      text-transform: capitalize;
    }
	`;

	static properties = {
		name: {},
		_href: { attribute: false, state: true }
	};

	willUpdate(changedProperties) {
		if (changedProperties.has("name")) {
			this._href = `/ghosts/${slugify(this.name)}.html`;
		}
	}

	render() {
		return html`<a class="ghost-link" href="${this._href}">${this.name}</a>`;
	}
}

customElements.define('ghost-link', GhostLink);