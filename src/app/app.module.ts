import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { JointFamilyComponent } from './joint-family/joint-family.component';
import { FamilyService} from './family.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { RegisterPopupComponent } from './register-popup/register-popup.component';
//import { AboutFirstGenerationComponent } from './about-first-generation/about-first-generation.component';
//import { AboutSecondGenerationComponent } from './about-second-generation/about-second-generation.component';
//import { AboutThirdGenerationComponent } from './about-third-generation/about-third-generation.component';
//import { AboutFourthGenerationComponent } from './about-fourth-generation/about-fourth-generation.component';
//import { FourthGenerationComponent } from './fourth-generation/fourth-generation.component';
//import { HomeComponent } from './home/home.component';
//import { SignInComponent } from './sign-in/sign-in.component';
//import { RegisterationComponent } from './registeration/registeration.component';
//import { SecondGenerationComponent } from './second-generation/second-generation.component';
//import { ThirdGenerationComponent } from './third-generation/third-generation.component';
import {FamilyFilter} from './models/family.filter';
import {RegisterServiceService} from './register-service.service';
import { ProfileComponent } from './profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    FamilyFilter,
   // JointFamilyComponent,
    routingComponents,
   PageNotFoundComponent,
   ProfileComponent,
   NavBarComponent,
   FooterPageComponent,
   UpdateDetailsComponent,
   MyAccountComponent,
   HeaderComponent
  // RegisterPopupComponent,
   //AboutFirstGenerationComponent,
   //AboutSecondGenerationComponent,
   //AboutThirdGenerationComponent,
   //AboutFourthGenerationComponent,
  // FourthGenerationComponent,
  // HomeComponent,
  
  // SignInComponent,
  // RegisterationComponent,
   //SecondGenerationComponent,
   //ThirdGenerationComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FamilyService,
    RegisterServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
