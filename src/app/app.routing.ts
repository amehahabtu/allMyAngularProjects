import {RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
export const routing =RouterModule.forRoot([
{
    path:'home',
    component:HomeComponent,
    children:[
        {
            path:'about',
            component:AboutComponent,
            outlet: 'OurMain'
        },
        {
            path:'contact',
            component:ContactComponent,
            outlet: 'OurMain'
        },
        {
            path:'history',
            component:HistoryComponent,
            outlet: 'OurMain'
        },
        {
            path:'product',
            component:ProductComponent,
            outlet: 'OurMain'
        }]
    },
    {path:'**',redirectTo: 'home',pathMatch:'full'}
]);