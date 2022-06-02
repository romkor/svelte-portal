import { SvelteComponentTyped } from "svelte";
/**
 * Usage: <div use:portal={'css selector'}> or <div use:portal={document.body}>
 *
 * @param {HTMLElement} el
 * @param {HTMLElement|string} target DOM Element or CSS Selector
 */
export declare function portal(el: HTMLElement, target?: HTMLElement | string): {
    update: (newTarget: HTMLElement | string) => Promise<void>;
    destroy: () => void;
};
declare const __propDef: {
    props: {
        /**
             * DOM Element or CSS Selector
             * @type { HTMLElement|string}
             */ target?: string | HTMLElement | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type PortalProps = typeof __propDef.props;
export declare type PortalEvents = typeof __propDef.events;
export declare type PortalSlots = typeof __propDef.slots;
export default class Portal extends SvelteComponentTyped<PortalProps, PortalEvents, PortalSlots> {
}
export {};
