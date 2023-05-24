export class PodiumElement extends LitElement {
    /**
     * Singleton initialiser for the translate function. A singleton is used to that SSR is supported since
     * typical setup hooks such as connectedCallback are not run server side. First call to the i18n() function
     * sets up lingui after which the setup version is then used.
     */
    get i18n(): import("@lingui/core").I18n;
    get translations(): any;
    get locale(): string;
    get initialState(): any;
    #private;
}
import { LitElement } from "lit";
