import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { CartListingComponent } from './cart-listing/cart-listing.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfileResolver } from './resolver/profile.resolver';
import { CartResolver } from './resolver/cart.resolver';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { CourseResolver } from './resolver/course.resolver';
import { AuthSigninGuard } from './guard/auth-signin.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SigninPageComponent,
    canActivate:[AuthSigninGuard],
  },
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'cart-listing',
    component: CartListingComponent,
    canActivate:[AuthGuard],
    resolve: {
      resolveData: CartResolver
    }
  },
  {
    path: 'profile',
    component: RegisterPageComponent,
    canActivate:[AuthGuard],
    resolve: {
      resolveData: ProfileResolver
    }
  },
  {
    path: 'course-listing',
    component: CourseListingComponent,
    canActivate:[AuthGuard],
    resolve: {
      resolveData: CourseResolver
    },
      
  },

  {
    path: 'register-listing',
    component: RegisterPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
