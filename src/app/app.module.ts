import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TaskModule } from './components/task.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// wire the store to the app.
import { InboxScreenComponent } from './components/inbox-screen.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
import { DefaultButtonComponent } from './default/button.component';
import { ButtonComponent } from './components/button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InboxScreenComponent,
    PureInboxScreenComponent,
    ButtonComponent,
    DefaultButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TaskModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
