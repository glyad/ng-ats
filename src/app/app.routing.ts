import { RouterModule, Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace/workspace.component';
import { ContactListComponent } from './contacts/contactList.component';

const routes: Routes = [
    { path: '', component: WorkspaceComponent }
  , { path: 'contacts', component: ContactListComponent}
];

export const routing = RouterModule.forRoot(routes);
