import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { QuoteResult } from '../model/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private connection: HubConnection | undefined;
  private signalRSubject = new BehaviorSubject<QuoteResult[]>([]);
  private signalRSubjectError = new BehaviorSubject<boolean>(false);

  get signalR(): Observable<QuoteResult[]> {
    return this.signalRSubject.asObservable();
  }

  get signalRError(): Observable<boolean> {
    return this.signalRSubjectError.asObservable();
  }

  constructor() {
    this.setupSignalR();
  }

  private setupSignalR() {
    this.connection = new HubConnectionBuilder()
      .withUrl('SIGNALR_URL')
      .build();

    this.connection
      .start()
      .then(() => console.log('SignalR connected'))
      .catch(err => console.error('Error while starting SignalR connection: ', err));

    this.connection.on('ReceiveMessage', (message: QuoteResult[]) => {
      this.signalRSubject.next(message);
    });
  }

  sendMessage(message: string) {
    this.connection?.invoke('SendMessage', message).catch(err => console.error(err));
  }
}
