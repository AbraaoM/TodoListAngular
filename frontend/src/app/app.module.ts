import { IconsModule } from './icons/icons.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { GroupElementComponent } from './components/group/group-element/group-element.component';
import { HomeComponent } from './views/home/home.component';
import { InfosComponent } from './views/infos/infos.component';
import { TaskElementComponent } from './components/task/task-element/task-element.component';
import { CreateGroupComponent } from './components/group/create-group/create-group.component';
import { UpdateGroupComponent } from './components/group/update-group/update-group.component';
import { UpdateTaskComponent } from './components/task/update-task/update-task.component';
import { CreateTaskComponent } from './components/task/create-task/create-task.component';
import { TaskInfosComponent } from './components/task/task-infos/task-infos.component';
import { GroupInfosComponent } from './components/group/group-infos/group-infos.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReadGroupComponent } from './components/group/read-group/read-group.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GroupElementComponent,
    HomeComponent,
    InfosComponent,
    TaskElementComponent,
    CreateGroupComponent,
    UpdateGroupComponent,
    UpdateTaskComponent,
    CreateTaskComponent,
    TaskInfosComponent,
    GroupInfosComponent,
    ReadGroupComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IconsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
