import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';
import { last } from 'rxjs';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  // MI SERVICIO TOSTADA
  private tostada = inject(ToastrService);

  // CREACION DE FORMULARIO
  FormularioRegister = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    lastname2: new FormControl('', ),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
  });

  private getErrorMessage(campo: string, nombreCampo: string): string | null {
    // OBTENEMOS EL CONTROL DEL CAMPO
    const control = this.FormularioRegister.get(campo);
    // SI EL CONTROL NO EXISTE O NO TIENE ERRORES RETORNAMOS NULL
    if (!control || !control.errors) return null;

    const errors = control.errors;

    // DEPENDIENDO DEL TIPO DE ERROR RETORNAMOS UN MENSAJE
    if (errors['required']) return `${nombreCampo}: Este campo es obligatorio`;
    if (errors['minlength']) return `${nombreCampo}: Debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
    if (errors['maxlength']) return `${nombreCampo}: No puede tener más de ${errors['maxlength'].requiredLength} caracteres`;
    if (errors['pattern']) return `${nombreCampo}: Solo se permiten letras y espacios`;
    if (errors['min']) return `${nombreCampo}: Debe ser mayor a $${errors['min'].min}`;
    if (errors['max']) return `${nombreCampo}: No puede ser mayor a $${errors['max'].max}`;
    if (errors['email']) return `${nombreCampo}: tiene que ser un correo válido`;

    return null;
  }

  onRegister() {
    if (this.FormularioRegister.valid){

    }
    else {
      const campos: { [key: string]: string } = { name: 'Nombre', lastname: 'Apellido Paterno', lastname2: 'Apellido Materno', email: 'Email', password: 'Contraseña', confirmpassword: 'Confirmar Contraseña' };

      Object.keys(campos).forEach((key) => {
        const errorMessage = this.getErrorMessage(key, campos[key]);
        if (errorMessage) {
          this.tostada.error(errorMessage, 'Error de validación');
        }
      });
    }
  }
}
