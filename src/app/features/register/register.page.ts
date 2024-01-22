import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, LoadingController, ToastController } from '@ionic/angular';
import { Observable, combineLatest, delay, finalize } from 'rxjs';
import { RegisterService } from 'src/app/core/services/register.service';
import { registerUser } from 'src/app/shared/constants/register-user';
import { DocumentTypes } from 'src/app/shared/models/document-type';
import { Gender } from 'src/app/shared/models/genders';
import { RegisterUser } from 'src/app/shared/models/register-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  @ViewChild(IonModal) modal!: IonModal;

  page = registerUser.viewPag.one;
  values = {
    ...registerUser.viewPag
  };
  titles = registerUser.titles; 
  documentTypes!: DocumentTypes[];
  genders!: Gender[];
  registerUser: RegisterUser = {} as RegisterUser;

  constructor(
    private registerService: RegisterService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getDataFromStep(dataUser: Partial<RegisterUser>, nextsStep?: number): void {
    this.registerUser = {
      ...this.registerUser,
      ...dataUser
    };

    if (nextsStep) {
      this.goToStep(nextsStep, false);
    } else {
      this.openModal();
      console.log('Register user with info', this.registerUser);
    }
  }

  goToStep(page: number, isStepper = true): void {
    if (this.page === page || (isStepper && this.page < page)) {
      return;
    }

    this.page = page;
    this.updateCheckedValues();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });

    return loading.present();
  }

  closeModal(): void {
    this.modal.canDismiss = true;
    this.modal.dismiss().finally(() => {
      this.router.navigate(['/home']);
    });
  }

  private openModal(): void {
    this.modal.present();
  }

  private async getData() {
    await this.showLoading();
    combineLatest([
      this.registerService.getDocumentTypes(),
      this.registerService.getGenders()
    ])
    .pipe(
      delay(3000), // Se añadio delay para mostrar el spinner
      finalize(() => this.loadingCtrl.dismiss())
    ) 
    .subscribe({
      next: ([documentTypes, genders]) => {
        this.documentTypes = documentTypes;
        console.log('Respuesta servicio de document types', this.documentTypes);
  
        this.genders = genders;
        console.log('Respuesta servicio de generos', this.genders);
  
      },
      error: () => {
        this.showError();
        this.router.navigate(['/home']);
      }
    });
  }

  private updateCheckedValues(): void {
    this.values.one = this.page;
    this.values.two = this.page === 1 ? registerUser.viewPag.two : this.page;
  }

  private async showError() {
    const toast = await this.toastController.create({
      message: 'Estamos presentando problemas para realizar el registor en este momento, por favor intente mas tarde.',
      duration: 3500,
      position: 'middle',
    });

    await toast.present();
  }
}
