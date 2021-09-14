import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT } from '../constants/formValidationMessages';
import { HelperService } from '../providers/helper.service';

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
  

  constructor(
    private helperService: HelperService,
  ) { }

  ngOnInit() {
    this.createFormControl();
    this.createForm();
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

}
