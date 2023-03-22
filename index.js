// @ts-ignore
import { LitElement } from "lit";
import { registerTranslateConfig, get } from "lit-translate";

export class PodiumElement extends LitElement {
  #translationSupport = false;

  /**
   * Singleton initialiser for the translate function. A singleton is used to that SSR is supported since
   * typical setup hooks such as connectedCallback are not run server side. First call to the t() function
   * sets up i18next after which the setup version is then used.
   */
  get t() {
    if (!this.#translationSupport) {
      registerTranslateConfig({
        translationCache: this.translations,
        lang: this.locale || '',
      });
      this.#translationSupport = true;
    }
    console.log('get', get)
    return get;
  }

  get translations() {
    return this.getAttribute("translations")
      ? JSON.parse(this.getAttribute("translations") || "{}")
      : null;
  }

  get locale() {
    return this.getAttribute("locale");
  }

  get initialState() {
    return JSON.parse(this.getAttribute("initial-state") || "{}");
  }
}
