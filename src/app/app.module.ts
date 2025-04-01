import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from 'src/app/components/testComponent/testComponent.component';
import { Title } from 'src/app/components/ui/Title/title.component';

@NgModule({
  declarations: [AppComponent, TestComponent, Title],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
