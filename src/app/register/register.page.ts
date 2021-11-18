import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formularioregistro: FormGroup; 

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioregistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmpassword': new FormControl("",Validators.required)
      
    });

   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioregistro.value;

    if(this.formularioregistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Complete todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
      
      
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}