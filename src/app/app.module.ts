import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { VabFormComponent } from './vab-form/vab-form.component';
import { RegistrationService } from './registration.service';

@NgModule({
    declarations: [
        AppComponent,
        VabFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    providers: [
        RegistrationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
