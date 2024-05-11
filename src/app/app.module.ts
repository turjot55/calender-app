// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { ClarityModule } from '@clr/angular';

// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { EntryComponent } from './entry/entry.component';
// import { CalendarComponent } from './calender/calender.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { DropdownComponent } from './dropdown/dropdown.component';
// import { AppRoutingModule } from './app.routes';

// @NgModule({
//   declarations: [
//     AppComponent,
//     EntryComponent,
//     CalendarComponent,
//     DropdownComponent,
//   ],
//   imports: [
//     BrowserModule,
//     ClarityModule,
//     BrowserAnimationsModule,
//     DragDropModule,
//     ReactiveFormsModule,
//     AppRoutingModule, // Add AppRoutingModule here
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FullCalendarModule } from '@fullcalendar/angular';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     BrowserModule,
//     FullCalendarModule, // register FullCalendar with your app
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FullCalendarModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
