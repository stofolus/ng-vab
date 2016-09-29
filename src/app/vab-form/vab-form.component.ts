import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';

@Component({
    selector: 'app-vab-form',
    templateUrl: './vab-form.component.html',
    styleUrls: ['./vab-form.component.scss']
})
export class VabFormComponent {

    form: FormGroup;
    socialSecurityValidationPattern = '^((1[6-9]|[2-9][0-9])[0-9]{2})(0[1-9]|1[0-2])(0[1-9]'
    + '|[12][0-9]|3[01]|[678][0-9]|9[01])\-?([0-9]{4})$';

    constructor(formBuilder: FormBuilder, private registrationService: RegistrationService) {
        this.form = formBuilder.group({
            socialSecurityNumber: formBuilder.control('', [Validators.required, Validators.pattern(this.socialSecurityValidationPattern)]),
            childSocialSecurityNumber: formBuilder.control('', [
                Validators.required,
                Validators.pattern(this.socialSecurityValidationPattern)
            ]),
            useOnlineService: formBuilder.control('')
        });
        this.form.patchValue({
            useOnlineService: true
        });
    }

    putRegistration() {
        if(this.form.valid) {
            const registration = new Registration(
                <string> this.form.get('socialSecurityNumber').value.replace('-', ''),
                <string> this.form.get('childSocialSecurityNumber').value.replace('-', ''),
                <boolean> this.form.get('useOnlineService').value
            );
            this.registrationService.putRegistration(registration)
                .subscribe(
                    result => { console.log(`Success: ${result}`); },
                    error => { console.log(`Error ${error}`); }
                );
        }
    }
}
