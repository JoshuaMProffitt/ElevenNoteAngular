import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { NotesService } from './services/notes.service';
import { NoteIndexComponent } from './components/note/note-index/note-index.component';
import { NoteCreateComponent } from './components/note/note-create/note-create.component';
import { NoteDetailComponent } from './components/note/note-detail/note-detail.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';
import { NoteDeleteComponent } from './components/note-delete/note-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    NoteIndexComponent,
    NoteCreateComponent,
    NoteDetailComponent,
    NoteEditComponent,
    NoteDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [
    AuthService,
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MyOwnCustomMaterialModule { }
export class PizzaPartyAppModule { }
