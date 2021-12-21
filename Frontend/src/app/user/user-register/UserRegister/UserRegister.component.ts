import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user-service.service';
import { AlertyfyService } from 'src/app/service/alertyfy.service';

@Component({
  selector: 'app-UserRegister',
  templateUrl: './UserRegister.component.html',
  styleUrls: ['./UserRegister.component.css']
})
export class UserRegisterComponent implements OnInit {
  user: User;
  registerFormGroup!: FormGroup;
  userSubmited: boolean;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private alertyfyService: AlertyfyService
    ) { }

  ngOnInit() {
    // this.registerFormGroup = new FormGroup({
    //   userName: new FormControl('Mark', Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, <unknown>this.passwordMatchingValidator);
    //We can use given below function instented of above code 
      this.createRegistrationFrom();
  }

  createRegistrationFrom(){
    this.registerFormGroup = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required,Validators.email]],
      password: [null,[Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    },{validators: this.passwordMatchingValidator})
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null  : {notmatched: true};
  }
  userData(): User{
    return this.user = {
      userName:  this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  get userName(){
    return this.registerFormGroup.get('userName') as FormControl;
  }
  get email(){
    return this.registerFormGroup.get('email') as FormControl;
  }
  get password(){
    return this.registerFormGroup.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerFormGroup.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerFormGroup.get('mobile') as FormControl;
  }

  onSubmit(){
    this.userSubmited = true;
    console.log(this.registerFormGroup);
    if(this.registerFormGroup.valid){
      //this.user = Object.assign(this.user, this.registerFormGroup.value);
      //this.userService.addUser(this.user);
      this.userService.addUser(this.userData())
      this.userSubmited  = false;
      this.alertyfyService.success('Congrats, you are successfully registered');
    }else{
      this.alertyfyService.error('Kindly provide the required field');
      
    }
  }
}