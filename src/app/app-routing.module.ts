import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AuthenticationGuard } from './authentication.guard';
import { CheckoutComponent } from './checkout/checkout.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OrdercompleteComponent } from './ordercomplete/ordercomplete.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyordersComponent } from './myorders/myorders.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchComponent } from './search/search.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { BirthdateComponent } from './birthdate/birthdate.component';
import { RegCompleteComponent } from './reg-complete/reg-complete.component';
import { QuestionComponent } from './question/question.component';
import { SkincareplanComponent } from './skincareplan/skincareplan.component';
import { TopicalComponent } from './topical/topical.component';
import { ProductupsellComponent } from './productupsell/productupsell.component';
import { ShippingfrequencyComponent } from './shippingfrequency/shippingfrequency.component';
import { ReminderComponent } from './reminder/reminder.component';
import { AccutaneevalComponent } from './accutaneeval/accutaneeval.component';
import { AcnebotherComponent } from './acnebother/acnebother.component';
import { ShippingcartComponent } from './shippingcart/shippingcart.component';

const routes: Routes = [

  { path:'',redirectTo:"/login",pathMatch:'full'},
  { path: 'home/:id',component: HomepageComponent,canActivate:[AuthenticationGuard]},
  { path: 'reg',component: RegistrationComponent},
  { path: 'login',component: LoginComponent},
  { path: 'dash',component: DashboardComponent},
  { path: 'forgetpass',component: ForgetpasswordComponent},
  { path: 'about',component: AboutComponent},
  { path: 'products',component: ProductComponent},
  { path: 'cart',component: AddtocartComponent},
  { path: 'home',component: HomepageComponent},
  { path: 'checkout',component: CheckoutComponent},
  { path: 'payment',component: PaymentComponent},
  { path: 'ordercomplete/:id',component:  OrdercompleteComponent},
  { path: 'orders',component:  MyordersComponent},
  { path: 'blogs',component:  BlogComponent},
  { path: 'contact',component:  ContactComponent},
  { path: 'profile',component:  UserProfileComponent},
  { path: 'search',component:  SearchComponent},
  { path: 'zipcode',component:  ZipcodeComponent},
  { path:'birthdate',component:  BirthdateComponent},
  { path:'reg-complete',component:  RegCompleteComponent},
  { path:'question',component:  QuestionComponent},
  { path:'skincareplan',component:  SkincareplanComponent},
  {  path:'topical',component: TopicalComponent},
  {  path:'productupsell',component: ProductupsellComponent},
  {  path:'shippingfrequency',component: ShippingfrequencyComponent},
  {  path:'reminder',component: ReminderComponent},
  {  path:'accutaneeval',component: AccutaneevalComponent},
  {  path:'acnebother',component: AcnebotherComponent},
  {  path:'shippingcart',component: ShippingcartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
