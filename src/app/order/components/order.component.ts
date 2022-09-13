import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    flowerName: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  } 
  
  onSubmit(){
    console.warn(this.orderForm.value);
    console.log(this.orderForm);
    this.orderForm.reset();
  }
}
