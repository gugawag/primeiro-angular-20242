import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MatriculaPipe} from './shared/pipes/matricula.pipe';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {LayoutModule} from "./layout/layout.module";
import {UsuarioModule} from "./usuario/usuario.module";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from "@angular/common/http";
import {PipesModule} from "./shared/pipes/pipes.module";
import {MensagemIF} from "./shared/modelo/MensagemIF";
import {MensagemSweetService} from "./shared/services/mensagem-sweet.service";
import {FirestoreModule} from "./firestore/firestore.module";
import {ErroInterceptor} from "./interceptor/erro-interceptor";
import {AlunoServiceIF} from "./shared/services/aluno-serviceIF";
import {AlunoFireService} from "./shared/services/aluno-fire.service";
import {AlunoRestService} from "./shared/services/aluno-rest.service";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatBadgeModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        LayoutModule,
        UsuarioModule,
        PipesModule,
        FirestoreModule,
    ],
    providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi()),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErroInterceptor,
            multi: true
        },
        // Escolha qual serviço de mensagens usar
        {
            provide: MensagemIF,
            useClass: MensagemSweetService
        },
        // Escolha qual tipo de serviço (firebase ou rest) usar
        {
            provide: AlunoServiceIF,
            useClass: AlunoFireService
        }

    ],
    exports: [
        MatriculaPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
