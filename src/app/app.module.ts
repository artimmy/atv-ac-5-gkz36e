import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ServicoService } from './servico.service';
// para usar a moeda
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);
// ^^^^^
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FormComponent, TabelaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServicoService,
  /* alem de importar aquelas bibliotecas preciso colocar essas duas linhas dentro de providers junto com o servico */
  {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }]
})
export class AppModule { }
