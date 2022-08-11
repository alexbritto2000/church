import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MinistryComponent } from './pages/ministry/ministry.component';
import { WomenFellowshipComponent } from './pages/ministry/women-fellowship/women-fellowship.component';
import { YouthFellowshipComponent } from './pages/ministry/youth-fellowship/youth-fellowship.component';
import { ChildrenMinistryComponent } from './pages/ministry/children-ministry/children-ministry.component';
import { HistoryComponent } from './pages/history/history.component';
import { TimeComponent } from './pages/time/time.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  /* {   path:'', redirectTo:'home',pathMatch:'full' },
  {   path:'**', redirectTo:'home'  }, */
  {
    path: "ministry",
    component: MinistryComponent
  },
  {
    path: "women_fellowship",
    component: WomenFellowshipComponent
  },
  {
    path: "you_fellowship",
    component: YouthFellowshipComponent
  },
  {
    path: "child_fellowship",
    component: ChildrenMinistryComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
  {
    path: "time",
    component: TimeComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
