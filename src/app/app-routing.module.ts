
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapDashboardComponent } from './chap-dashboard/chap-dashboard.component';
import { ChapNavComponent } from './chap-nav/chap-nav.component';
import { ChapLoginComponent } from './chap-login/chap-login.component';
import { ChapOrderComponent } from './chap-order/chap-order.component';
import { ChapMonitorComponent } from './chap-monitor/chap-monitor.component';
import { ChapHelpComponent } from './chap-help/chap-help.component';
import { ChapSettingsComponent } from './chap-settings/chap-settings.component';
import { ChapAdminComponent } from './chap-admin/chap-admin.component';
import { ChapInventoryComponent } from './chap-inventory/chap-inventory.component';
import { ChapProductsComponent } from './chap-products/chap-products.component';
import { ChapStatisticsComponent } from './chap-statistics/chap-statistics.component';
import { ChapCheckoutComponent } from './chap-checkout/chap-checkout.component';
import { ChapCartDetailComponent } from './chap-cart-detail/chap-cart-detail.component';
import { ChapEditProductComponent } from './chap-edit-product/chap-edit-product.component';
import { ChapCategoryCountComponent } from './chap-category-count/chap-category-count.component';
import { ChapProductCountComponent } from './chap-product-count/chap-product-count.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { ChapOrderTableComponent } from './chap-order-table/chap-order-table.component';

const childRoutes: Routes = [
        {
            path: 'products',
            component: ChapProductCountComponent
        },
        {
            path: 'categories',
            component: ChapCategoryCountComponent
        }
    ];

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: ChapLoginComponent
    },
    {
        path: 'nav',
        component: ChapNavComponent
    },
    {
        path: 'dashboard',
        component: ChapDashboardComponent
    },
    {
        path: 'stats',
        component: ChapStatisticsComponent
    },
    {
        path: 'products',
        component: ChapProductsComponent
    }, {
        path: 'products/:mode/:id',
        component: ChapEditProductComponent
    }, {
        path: 'products/:mode',
        component: ChapEditProductComponent
    }, {
        path: 'product/delete/:id',
        component: ChapEditProductComponent
    },
    {
        path: 'inventory',
        component: ChapInventoryComponent,
        children: childRoutes
    }, {
        path: 'inventory/:category',
        component: ChapInventoryComponent,
        children: childRoutes
    },
    {
        path: 'order',
        component: ChapOrderComponent,
        children: [
                    {
                        path: 'products',
                        component: ChapProductCountComponent
                    },
                    {
                        path: 'categories',
                        component: ChapCategoryCountComponent
                    },
                    {
                        path: 'orderTable',
                        component: ChapOrderTableComponent
                    }
                  ],
        canActivate: [StoreFirstGuard]
    },
    {
        path: 'order/:category',
        component: ChapOrderComponent,
        children: childRoutes
    },
    {
        path: 'admin',
        component: ChapAdminComponent
    },
    {
        path: 'settings',
        component: ChapSettingsComponent
    },
    {
        path: 'help',
        component: ChapHelpComponent
    },
    {
        path: 'monitor',
        component: ChapMonitorComponent
    }
    ,
    {
        path: 'cartdetail',
        component: ChapCartDetailComponent,
        canActivate: [StoreFirstGuard]
    },
    {
        path: 'checkout',
        component: ChapCheckoutComponent,
        canActivate: [StoreFirstGuard]
    }
    /*,
    {
        path: '**', redirectTo: 'dashboard'
    }*/
];


@NgModule({
    imports: [
                RouterModule.forRoot(routes)
            ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
