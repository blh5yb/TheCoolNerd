import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT } from '../constants/formValidationMessages';
import { HelperService } from '../providers/helper.service';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contactForm: FormGroup;
  first_name: FormControl;
  last_name: FormControl;
  company: FormControl;
  email: FormControl;
  summary: FormControl;

  inquiryType: string = '';
  formError: any = {
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    summary: '',
  };
  validationMessage: any = CONTACT;

  mail_res = '';
  is_loading = false;

  constructor(
    private helperService: HelperService,
    private functions: AngularFireFunctions,
  ) {
    // functions.useEmulator("localhost", 5001); 
  }

  ngOnInit() {
    this.createFormControl();
    this.createForm();
  }

  onSubmit(){
    this.is_loading = true;
    console.log('submit');
    const fname = this.contactForm.controls["first_name"].value;
    const lname = this.contactForm.controls["last_name"].value;
    const contact_email = this.contactForm.controls["email"].value;
    const org = this.contactForm.controls["company"].value;
    const description = this.contactForm.controls["summary"].value;

    const email_info = {
      "body": "first name: "+ fname + "\nlast name: " + lname +
              "\nemail: " + contact_email + "\ncompany: " + org +
              "\ndescription: " + description
    }
    this.functions.httpsCallable("sendMail")(email_info)
      .subscribe((res: any) => {
        console.log(res);
        this.mail_res = res;
        this.is_loading = false;
      })
  }

  createFormControl(){
    this.first_name = new FormControl('', [Validators.required]),
    this.last_name = new FormControl('', [Validators.required]),
    this.email = new FormControl('', [Validators.required, Validators.email]),
    this.company = new FormControl(''),
    this.summary = new FormControl('', Validators.required)
  }

  createForm(){
    this.contactForm = new FormGroup({
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      company: this.company,
      summary: this.summary
    })
    this.contactForm.valueChanges.subscribe(data => this.onFormValueChanged(data));
  }

  onFormValueChanged(data) {
    this.formError = this.helperService.prepareValidationMessage(this.contactForm, this.validationMessage, this.formError)
  }

  onClose(){
    this.mail_res = '';
    this.contactForm.reset();
  }

}
