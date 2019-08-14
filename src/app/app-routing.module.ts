import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NoteIndexComponent } from './components/note/note-index/note-index.component';
import { NoteCreateComponent } from './components/note/note-create/note-create.component';
import { NoteDetailComponent } from './components/note/note-detail/note-detail.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';
import { NoteDeleteComponent } from './components/note-delete/note-delete.component';


const routes = [
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { 
    path: 'notes', children: [
      { path: '', component: NoteIndexComponent },
      { path: 'create', component: NoteCreateComponent },
      { path: 'detail/:id', component: NoteDetailComponent },
      { path: 'edit/:id', component: NoteEditComponent },
      { path: 'delete/:id', component: NoteDeleteComponent }
    ]
  },
  { path: '**', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
