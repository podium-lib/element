import { i18n } from "@lingui/core";
import { LitElement } from "lit";

export class PodiumElement extends LitElement {
  #translationSupport = false;

  /**
   * Singleton initialiser for the translate function. A singleton is used to that SSR is supported since
   * typical setup hooks such as connectedCallback are not run server side. First call to the i18n() function
   * sets up lingui after which the setup version is then used.
   */
  get i18n() {
    if (!this.#translationSupport) {
      i18n.load(this.locale, this.translations);
      i18n.activate(this.locale);
      this.#translationSupport = true;
    }

    return i18n;
  }

  get translations() {
    return this.getAttribute("translations")
      ? JSON.parse(this.getAttribute("translations") || "{}")
      : {};
  }

  get locale() {
    return this.getAttribute("locale") || "en";
  }

  get initialState() {
    return JSON.parse(this.getAttribute("initial-state") || "{}");
  }
}
