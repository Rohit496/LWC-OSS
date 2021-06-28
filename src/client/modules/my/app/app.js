import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    message = 'This is my heading coming from JS file';

    greeting = 'I am coming form app component to greeting component';

    handleClick() {
        this.message = 'LWC OSS';
    }

    get sum() {
        return 2 + 3;
    }

    employee = ['A', 'B', 'C', 'D', 'E', 'F'];

    myData(event) {
        this.result = event.detail;
        console.log('🚀 ~ this.result', this.result);
    }
}
