import { Component, OnInit } from '@angular/core';
import * as LiveUpdates from '@capacitor/live-updates';
import {App} from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private result: any;
  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    this.result = await LiveUpdates.sync();
    alert(JSON.stringify(this.result))
    try {
      // Register event to fire each time user resumes the app  
      App.addListener('appStateChange', async (state) => {
        if (state.isActive && localStorage.getItem('shouldReloadApp') === 'true') {
          await LiveUpdates.reload();
        } else {
          const result = await LiveUpdates.sync();
          localStorage.setItem('shouldReloadApp', result.activeApplicationPathChanged.toString());
        }
      });

      // First sync on app load
      const result = await LiveUpdates.sync();
      localStorage.setItem('shouldReloadApp', result.activeApplicationPathChanged.toString());
    } catch (error) {
      console.error('Error initializing app', error);
    }


  }
  

}
