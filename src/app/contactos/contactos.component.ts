import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'] 
})
export class ContactosComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], 
      email: ['', [Validators.required, Validators.email]], 
      message: ['', [Validators.required, Validators.minLength(10)]] 
    });
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      console.log('Formulario enviado:', this.contactoForm.value);
      alert('¡Formulario enviado con éxito!');
      this.contactoForm.reset();
    } else {
      alert('Por favor completa correctamente el formulario.');
    }
  }
}
