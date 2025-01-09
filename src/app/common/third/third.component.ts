import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, last, Observable } from 'rxjs';
import { MyValidator } from './myValidator';
import { ThirdService } from './third.service';

@Component({
  selector: 'app-third',
  standalone: false,

  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {

  myGroup: FormGroup;

  onSubmit(){

    const name = this.myGroup.get('firstName')?.value;
    const surname = this.myGroup.get('lastName')?.value;

    this.service.postSomeData({name, job: surname})
      .subscribe( response => {
        console.log(response);
      });


  }


  // name= new FormControl("");
  // name$ : Observable<string | null> | undefined = undefined;

   constructor(private fb: FormBuilder, private service: ThirdService) {

    this.myGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [MyValidator]],
    });

    this.myGroup.get('firstName')?.valueChanges
      .pipe( debounceTime(1500))

      .subscribe( testo => {
        console.log(testo);
      });




    // this.name$ = this.name.valueChanges;

    // this.name$.subscribe(valore => {
    //   if(valore && valore.length > 10){
    //     this.name.setValue(valore.slice(0,10));
    //   }
    };


  // onKeyup(x: KeyboardEvent) {
  //   const myInput = x.target as HTMLInputElement;
  //   const value = myInput.value;
  //   console.log(value);
  // }

  onKeyup(value: string) {
    console.log(value);
  }

  get firstName(){
    return this.myGroup.get('firstName');
  }

  get lastName(){
    return this.myGroup.get('lastName');
  }

}
