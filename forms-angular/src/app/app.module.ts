import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { SucessoCadastroComponent } from "./sucesso-cadastro/sucesso-cadastro.component";
import { MensagemComponent } from "./components/mensagem/mensagem.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MensagemComponent,
    CadastroComponent,
    SucessoCadastroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
