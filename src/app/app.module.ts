import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartListingComponent } from './cart-listing/cart-listing.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiservicesService } from './services/apiservices.service';
import { RequestInterceptorInterceptor } from './interceptors/request-interceptor.interceptor';
import { HeaderComponent } from './header/header.component';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { AlertComponent } from './common/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninPageComponent,
    RegisterPageComponent,
    NavBarComponent,
    CartListingComponent,
    HeaderComponent,
    CourseListingComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiservicesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
