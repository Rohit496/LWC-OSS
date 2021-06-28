import { LightningElement, api } from 'lwc';
export default class Greeting extends LightningElement {
    @api myGreeting;

    callMethod() {
        const evt = new CustomEvent('pass', {
            detail: 'New Custom Event'
        });
        this.dispatchEvent(evt);
    }
}
