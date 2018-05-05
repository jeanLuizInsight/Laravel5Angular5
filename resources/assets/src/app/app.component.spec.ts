import { ReactiveFormsModule } from '@angular/forms';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './components/login/login.module';
import { CadastroModule } from './components/cadastro/cadastro.module';
import { RecuperarSenhaModule } from './components/recuperar-senha/recuperar-senha.module';
import { RecuperarFeitoModule } from './screens/recuperar-feito/recuperar-feito.module';
import { MainFooterModule } from './components/main-footer/main-footer.module';
import { MainHeaderModule } from './components/main-header/main-header.module';
import { CardProfessionalModule } from './components/card-professional/card-professional.module';
import { DropdownEnterpriseModule } from './components/dropdown-enterprise/dropdown-enterprise.module';
import { DatePickerModule } from './components/date-picker/date-picker.module';
import { MarketingModule } from './screens/marketing/marketing.module';
import { ComprasModule } from './screens/compras/compras.module';
import { ServicosModule } from './screens/servicos/servicos.module';
import { JogosModule } from './screens/jogos/jogos.module';
import { FinanceiroModule } from './screens/financeiro/financeiro.module';
import { FinalModule } from './screens/final/final.module';
import { DashboardModule } from './screens/dashboard/dashboard.module';
import { CadastrarModule } from './screens/cadastrar/cadastrar.module';
import { AccessModule } from './screens/access/access.module';
import { PerfilModule } from './screens/perfil/perfil.module';
import { RecuperarModule } from './screens/recuperar/recuperar.module';
import { RecursosHumanosModule } from './screens/recursos-humanos/recursos-humanos.module';
import { SagaModule } from './screens/saga/saga.module';
import { LOCALE_ID, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

// Components
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ReactiveFormsModule,
        AccessModule,
        BrowserModule,
        routing,
        Angular2FontawesomeModule,
        RouterModule,
        SharedModule,
        LoginModule,
        CadastroModule,
        RecuperarSenhaModule,
        RecuperarFeitoModule,
        MainFooterModule,
        MainHeaderModule,
        CardProfessionalModule,
        DropdownEnterpriseModule,
        DatePickerModule,
        MarketingModule,
        ComprasModule,
        ServicosModule,
        JogosModule,
        FinanceiroModule,
        FinalModule,
        DashboardModule,
        CadastrarModule,
        PerfilModule,
        RecuperarModule,
        RecursosHumanosModule,
        SagaModule
      ]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
