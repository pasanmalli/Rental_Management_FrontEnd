import { Routes } from '@angular/router';
import { RegisterComponent } from './page/register/register.component';
import { ViewComponent } from './page/view/view.component';
import { AddItemComponent } from './page/add-item/add-item.component';
import { ViewItemComponent } from './page/view-item/view-item.component';
import { AddRentalItemsComponent } from './page/add-rental-items/add-rental-items.component';

export const routes: Routes = [

{

path: "register",
component: RegisterComponent
},

{


path: "view",
component: ViewComponent



},
{


    path: "add-item",
    component: AddItemComponent
    
    
    
    },
{


        path: "view-item",
        component: ViewItemComponent
        
        
        
        },

        {


            path: "add-rental-item",
            component: AddRentalItemsComponent
            
            
            
            }
        
    







];
