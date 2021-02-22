import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DashComponent } from "./dash/dash.component";
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
    declarations:[ 
        DashComponent, SignUpComponent],
    imports:[SharedModule,
    FormsModule],
    exports:[ 
        DashComponent,
        SignUpComponent
    ]

})
export class pwcwcModule { }