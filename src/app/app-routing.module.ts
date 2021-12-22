import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JointFamilyComponent } from './joint-family/joint-family.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { SecondGenerationComponent } from './second-generation/second-generation.component';
import {ThirdGenerationComponent} from './third-generation/third-generation.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {HomeComponent} from './home/home.component';
import {FourthGenerationComponent} from './fourth-generation/fourth-generation.component';
import {AboutFirstGenerationComponent} from './about-first-generation/about-first-generation.component';
import {AboutSecondGenerationComponent} from './about-second-generation/about-second-generation.component';
import {AboutThirdGenerationComponent} from './about-third-generation/about-third-generation.component';
import{AboutFourthGenerationComponent} from './about-fourth-generation/about-fourth-generation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
// import {RegisterPopupComponent} from './register-popup/register-popup.component';
import  {AuthGuard} from './auth.guard';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path :'',redirectTo:'/home',pathMatch:'full'},
  {path:'update/:id',component:UpdateDetailsComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard],
            //  children:[
            //      {path:'update/:id',component:UpdateDetailsComponent,canActivate:[AuthGuard] }
            //       ]
          },
  {path:'firstgeneration',
          component:JointFamilyComponent,canActivate:[AuthGuard],
       children:[
         {path:'aboutFirst',component:AboutFirstGenerationComponent,canActivate:[AuthGuard] }
       ]
           },
  {path:'secondgeneration',component:SecondGenerationComponent,canActivate:[AuthGuard],
  children:[
    {path:'aboutSecond',component:AboutSecondGenerationComponent,canActivate:[AuthGuard] }
  ]
},
  {path:'signin',component:SignInComponent,
                    // children:[
                    //   {path:'firstgeneration',component:JointFamilyComponent},
                    //   {path:'secondgeneration',component:SecondGenerationComponent},

                    // //]
                  },
  {path:'thirdgeneration',component:ThirdGenerationComponent,canActivate:[AuthGuard],
  children:[
    {path:'aboutThird',component:AboutThirdGenerationComponent,canActivate:[AuthGuard] }
  ]
},
  {path:'fourthgeneration',component:FourthGenerationComponent,canActivate:[AuthGuard],
  children:[
    {path:'aboutFourth',component:AboutFourthGenerationComponent,canActivate:[AuthGuard] }
  ]
},
  {path:'register',component:RegisterationComponent},
  // {path :'registerPopup',component:RegisterPopupComponent},
  {path:'myAccount',component:MyAccountComponent,canActivate:[AuthGuard]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [JointFamilyComponent,
                           SecondGenerationComponent,
                           ThirdGenerationComponent,
                          RegisterationComponent,
                          SignInComponent,
                          FourthGenerationComponent,
                          AboutFirstGenerationComponent,
                          AboutFourthGenerationComponent,
                          AboutThirdGenerationComponent,
                          AboutSecondGenerationComponent,
                          PageNotFoundComponent,
                          ProfileComponent,
                          UpdateDetailsComponent,
                          // RegisterPopupComponent,
                        HomeComponent]