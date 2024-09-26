import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { SignalRService } from './services/signalr.service';
import { MockSignalRService } from './services/mock-signalr.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes),
    { provide: SignalRService, useClass: MockSignalRService } // Use mock service
  ]
};
