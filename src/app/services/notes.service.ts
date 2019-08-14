import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/Note';

const ApiUrl = 'http://localhost:51213/api';

@Injectable()
export class NotesService {

  constructor(private _http: HttpClient) { }

  getNote(id: string) {
    return this._http.get(`${ApiUrl}/Note/${id}`, { headers: this.getHeaders() });
  }

  getNotes() {
    return this._http.get(`${ApiUrl}/Note`, { headers: this.getHeaders() });
  }

  createNote(note: Note) {
    return this._http.post(`${ApiUrl}/Note`, note, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
  }

  updateNote(note: Note) {
    return this._http.put(`${ApiUrl}/Note`, note, { headers: this.getHeaders() });
  }

  deleteNote(id: number) {
    return this._http.delete(`${ApiUrl}/Notes/${id}`, { headers: this.getHeaders() });
  }
}
