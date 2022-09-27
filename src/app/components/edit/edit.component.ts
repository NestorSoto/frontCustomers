import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:string ="";
  customerNew: Customer={
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
  }

  constructor(
    private customerService: CustomerService,
    private activateRouter: ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
   this.id=this.activateRouter.snapshot.params['id'];
   console.log(this.id);
   this.customerService.getCustomer(this.id).subscribe(
    res=>{this.customerNew=res},
    err=>console.log(err)
   );
    console.log(this.customerNew);
  }
  
  guardar(){
    this.customerService.editCustomer(this.id, this.customerNew).subscribe(
      res=>{alert("actualizado correctamente");
        this.router
      .navigate(['/inicio']);
    },
    err=>{console.log(err);
    alert("error al actualizar");
    }
    );
  }
  

}
