import { RouterModule, Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace/workspace.component';
// import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: WorkspaceComponent }
  // , { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
