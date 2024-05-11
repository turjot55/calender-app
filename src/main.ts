// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { AppModule } from './app/app.module';

// // platformBrowserDynamic()
// //   .bootstrapApplication(AppComponent, appConfig)
// //   .catch((err) => console.error(err));

// // platformBrowserDynamic()
// //   .bootstrapModule(AppComponent)
// //   .catch((err) => console.error(err));

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then((module) => bootstrapApplication(module));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'zone.js'; // hack for StackBlitz

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
