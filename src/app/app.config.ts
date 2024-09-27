import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SignalRService } from './services/signalr.service';
import { MockSignalRService } from './services/mock-signalr.service';
import { errorHandlingInterceptor } from './services/interceptor/error-handling.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(withInterceptors([errorHandlingInterceptor])),
    provideRouter(routes),
    { provide: SignalRService, useClass: MockSignalRService } // Use mock service
  ]
};
