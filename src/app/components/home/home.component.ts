import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/models/Customer.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista!:Customer[];//varible no nula  ?puede ser nulo
  displayedColumns: string[] = ['customerId', 'companyName', 'contactName', 'contactTitle','country',
  'region', 'city','address','phone','fax','postalCode','Acciones'];
  

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.listarCustomers();
    
  }
  listarCustomers(){
    this.customerService.getCustomers().subscribe(
      res=>{this.lista=res},
      err=>console.log(err)
      
    );
    
    
  }
  Delete(id: string): void{
    console.log(id);
    this.customerService.deleteById(id).subscribe(
      res=>{console.log("ok");
      alert("cliente eliminado");
      this.ngOnInit();
      },
      err=>console.log("err")
      

    );
  }
  DeleteAll():void{
    this.customerService.deleteAll().subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
    this.ngOnInit();
  }

}
