import { Component, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
// import { MatDialog } from '@angular/material/dialog';
// import { EventTitleDialogComponent } from './event-title-dialog/event-title-dialog.component';
// import { MatDialog } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
// import { TitleDialogComponent } from './title-dialog/title-dialog.component';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FullCalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  calendarVisible = signal(true);
  calendarOptions = signal<CalendarOptions>({
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
  });

  currentEvents = signal<EventApi[]>([]);

  constructor(private changeDetector: ChangeDetectorRef) {}

  handleCalendarToggle() {
    this.calendarVisible.update((bool) => !bool);
  }

  handleWeekendsToggle() {
    this.calendarOptions.update((options) => ({
      ...options,
      weekends: !options.weekends,
    }));
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  //   handleDateSelect(selectInfo: DateSelectArg) {
  //     const calendarApi = selectInfo.view.calendar;

  //     calendarApi.unselect(); // clear date selection

  //     this.modalRef = this.modalService.show(this.titleDialog);

  //     this.modalRef.onHide.subscribe(() => {
  //       if (this.eventTitle) {
  //         calendarApi.addEvent({
  //           id: createEventId(),
  //           title: this.eventTitle,
  //           start: selectInfo.startStr,
  //           end: selectInfo.endStr,
  //           allDay: selectInfo.allDay,
  //         });
  //       }
  //     });
  //   }
  // }

  // handleDateSelect(selectInfo: DateSelectArg) {
  //   const calendarApi = selectInfo.view.calendar;

  //   calendarApi.unselect(); // clear date selection

  //   const dialogRef = this.dialog.open(TitleDialogComponent);

  //   dialogRef.afterClosed().subscribe((title) => {
  //     if (title) {
  //       calendarApi.addEvent({
  //         id: createEventId(),
  //         title,
  //         start: selectInfo.startStr,
  //         end: selectInfo.endStr,
  //         allDay: selectInfo.allDay,
  //       });
  //     }
  //   });
  // }

  // handleDateSelect(selectInfo: DateSelectArg) {
  //   const dialogRef = this.dialog.open(EventTitleDialogComponent);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result !== null) {
  //       const eventTitle = result;
  //       const calendarApi = selectInfo.view.calendar;
  //       calendarApi.unselect(); // clear date selection
  //       calendarApi.addEvent({
  //         id: createEventId(),
  //         title: eventTitle,
  //         start: selectInfo.startStr,
  //         end: selectInfo.endStr,
  //         allDay: selectInfo.allDay,
  //       });
  //     }
  //   });
  // }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }
}
