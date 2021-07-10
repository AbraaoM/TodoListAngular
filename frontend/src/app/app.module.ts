import { IconsModule } from './icons/icons.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { GroupElementComponent } from './components/group/group-element/group-element.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GroupElementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
