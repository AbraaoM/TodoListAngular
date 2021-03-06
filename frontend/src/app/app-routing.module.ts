import { TaskInfosComponent } from './components/task/task-infos/task-infos.component';
import { GroupInfosComponent } from './components/group/group-infos/group-infos.component';
import { UpdateTaskComponent } from './components/task/update-task/update-task.component';
import { CreateTaskComponent } from './components/task/create-task/create-task.component';
import { CreateGroupComponent } from './components/group/create-group/create-group.component';
import { UpdateGroupComponent } from './components/group/update-group/update-group.component';
import { InfosComponent } from './views/infos/infos.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [

  {
    path:"",
    component: HomeComponent
  },
  {
    path:"infos",
    component: InfosComponent
  },
  {
    path:"group/update/:id",
    component: UpdateGroupComponent
  },
  {
    path:"group/create",
    component: CreateGroupComponent
  },
  {
    path:"group/infos/:id",
    component: GroupInfosComponent
  },
  {
    path:"task/create/:gid",
    component: CreateTaskComponent
  },
  {
    path:"task/update/:id",
    component: UpdateTaskComponent
  },
  {
    path:"task/infos/:id",
    component: TaskInfosComponent
  },
  {
    path:'**',
    pathMatch   : 'full',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
