import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import {  NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdercompleteComponent } from './ordercomplete/ordercomplete.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyordersComponent } from './myorders/myorders.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchComponent } from './search/search.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { BirthdateComponent } from './birthdate/birthdate.component';
import { RegCompleteComponent } from './reg-complete/reg-complete.component';
import { QuestionComponent } from './question/question.component';
// import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { SkincareplanComponent } from './skincareplan/skincareplan.component';
import { TopicalComponent } from './topical/topical.component';
import { ProductupsellComponent } from './productupsell/productupsell.component';
import { ShippingfrequencyComponent } from './shippingfrequency/shippingfrequency.component';
import { ReminderComponent } from './reminder/reminder.component';
import { AccutaneevalComponent } from './accutaneeval/accutaneeval.component';
import { AcnebotherComponent } from './acnebother/acnebother.component';
import { SetpharmacyComponent } from './setpharmacy/setpharmacy.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ToastrModule } from 'ngx-toastr';
import { ShippingcartComponent } from './shippingcart/shippingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    ForgetpasswordComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    ProductComponent,
    AddtocartComponent,
    MainComponentComponent,
    CheckoutComponent,
    PaymentComponent,
    OrdercompleteComponent,
    MyordersComponent,
    BlogComponent,
    ContactComponent,
    UserProfileComponent,
    SearchComponent,
    ZipcodeComponent,
    BirthdateComponent,
    RegCompleteComponent,
    QuestionComponent,
    SkincareplanComponent,
    TopicalComponent,
    ProductupsellComponent,
    ShippingfrequencyComponent,
    ReminderComponent,
    AccutaneevalComponent,
    AcnebotherComponent,
    SetpharmacyComponent,
    ShippingcartComponent,
 
    
    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    // DatePickerModule,
    SlickCarouselModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,FormsModule,
    BsDatepickerModule.forRoot(),
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    ToastrModule.forRoot()


    
    
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

