import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  customerNew : Customer={
    customerId: '',
    address: '',
    city: '',
    companyName: '',
    contactName: '',
    contactTitle: '',
    country: '',
    fax: '',
    phone: '',
    postalCode: '',
    region: ''
  };
  constructor(private customerService : CustomerService, private router: Router) { }

  ngOnInit(): void {}
  agregarCustomer(){
    this.customerService.saveCustomer(this.customerNew).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/inicio']);
      },
      err=>console.log(err)

    );
  }

}
