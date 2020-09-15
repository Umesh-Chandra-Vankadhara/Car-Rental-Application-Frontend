
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms'
import { faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.css']
})
export class SigninModalComponent implements OnInit {
   fasigninalt = faSignInAlt;
   fauserplus =faUserPlus;
   showModal: boolean;
   submitted = false;
   Email:string;
   Password:string;

 
  constructor() { }
  show()
  {
    // Show-Hide Modal Check
    this.showModal = true; 
    
  }
    //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }


  ngOnInit(): void {
  }
  onSubmit(credentials:NgForm){
    console.log(credentials);
  }
}



