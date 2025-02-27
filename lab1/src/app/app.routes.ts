import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
export const routes: Routes = [
    {path:"welcome",component:appcompount },
    {path: "/",redirectto: "/",pathmatch:"full" },
    {path:"**",component:appcomponent}
];
