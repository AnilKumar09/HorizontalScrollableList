import { Component, ViewEncapsulation } from '@angular/core';
import { FuiPopupConfig } from 'ngx-fomantic-ui';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent 
{
    constructor(popupConfig: FuiPopupConfig) {
        popupConfig.isInverted = true;
        popupConfig.delay = 300;
    }
}