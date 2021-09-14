import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http'

export interface OrderData{
  name:string,
  surmane:string,
  phonenumber: string,
  email:string,
  payment:string,
  delivery:string,
  city:string,
  department:number,
  notes:string
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderData: OrderData[] = []

  constructor(public httpClient:HttpClient) {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      surname: new FormControl('',[Validators.required]),
      email: new FormControl('',[
        Validators.email,
        Validators.required]),
      phonenumber: new FormControl('',[Validators.required, Validators.minLength(10)]),
      payment: new FormControl(''),
      delivery: new FormControl(''),
      notes: new FormControl(''),

    })

   }
  
  public form:FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      surname: new FormControl('',[Validators.required]),
      email: new FormControl('',[
        Validators.email,
        Validators.required]),
      phonenumber: new FormControl('',[Validators.required, Validators.minLength(10)]),
      payment: new FormControl('',[Validators.required]),
      delivery: new FormControl('',[Validators.required]),
      notes: new FormControl(''),

    });
    this.httpClient.get<OrderData[]>('http://localhost:8080/api/tutorials')
  }
  onSubmit(){
    console.log('form submited', this.form)
    const formData = {...this.form.value}
    console.log('form submites', formData, this.form.invalid)
  }

}
