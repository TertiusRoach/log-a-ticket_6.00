import { StyleTags } from 'code/tools/StyleTags';
import { BuildTickets } from 'code/tools/BuildTickets';

import { DefaultHeader } from 'code/events/indexHeader/DefaultHeader';

import { LoggedMain } from 'code/events/indexMain/LoggedMain';
import { ManageMain } from 'code/events/indexMain/ManageMain';
import { UserMain } from 'code/events/indexMain/UserMain';
import { ColleagueMain } from 'code/events/indexMain/ColleagueMain';

import { DefaultSidebar } from 'code/events/indexSidebar/DefaultSidebar';

import { ColleagueAssigned } from 'code/events/indexOverlay/ColleagueAssigned';
import { ColleagueDeleted } from 'code/events/indexOverlay/ColleagueDeleted';
import { ColleagueResolved } from 'code/events/indexOverlay/ColleagueResolved';
import { DefaultOverlay } from 'code/events/indexOverlay/DefaultOverlay';
import { DeleteOverlay } from 'code/events/indexOverlay/DeleteOverlay';
import { LoggedAssigned } from 'code/events/indexOverlay/LoggedAssigned';
import { LoggedDeleted } from 'code/events/indexOverlay/LoggedDeleted';
import { LoggedPending } from 'code/events/indexOverlay/LoggedPending';
import { LoggedResolved } from 'code/events/indexOverlay/LoggedResolved';
import { LogOverlay } from 'code/events/indexOverlay/LogOverlay';
import { ManageDeleted } from 'code/events/indexOverlay/ManageDeleted';
import { ManagePending } from 'code/events/indexOverlay/ManagePending';
import { ResolveOverlay } from 'code/events/indexOverlay/ResolveOverlay';
import { UserAssigned } from 'code/events/indexOverlay/UserAssigned';
import { UserDeleted } from 'code/events/indexOverlay/UserDeleted';
import { UserResolved } from 'code/events/indexOverlay/UserResolved';

//--|►| GetCode |◄|--//
export namespace GetCode {
  //--▼ Body <body> ▼--//
  export function indexBody(events: String | 'DefaultBody', bodyJS: HTMLBodyElement, bodyJQ: JQuery<HTMLBodyElement>) {
    const bodyPathHTML: String = 'html/index-body';
    switch (events) {
      case 'DefaultBody':
        new StyleTags.initiateEvents(bodyPathHTML, 'default-body');
        //--► new DefaultBody.initiateEvents(bodyJS, bodyJQ); ◄--//
        break;
    }
  }
  //--▼ Header <header> ▼--//
  export function indexHeader(events: String | 'DefaultHeader', headerJS: HTMLElement, headerJQ: JQuery<HTMLElement>) {
    const headerPathHTML: String = 'html/index-header';
    switch (events) {
      case 'DefaultHeader':
        new StyleTags.initiateEvents(headerPathHTML, 'default-header');
        new DefaultHeader.initiateEvents();
        break;
    }
  }
  //--▼ Main <main> ▼--//
  export function indexMain(events: String | 'LoggedMain' | 'ManageMain' | 'UserMain' | 'ColleagueMain', mainJS: HTMLElement, mainJQ: JQuery<HTMLElement>) {
    const mainPathHTML: String = 'html/index-main';
    switch (events) {
      case 'LoggedMain':
        BuildTickets.initiateCode(events);
        new StyleTags.initiateEvents(mainPathHTML, 'logged-main');
        new LoggedMain.initiateEvents();
        break;
      case 'ManageMain':
        BuildTickets.initiateCode(events);
        new StyleTags.initiateEvents(mainPathHTML, 'manage-main');
        new ManageMain.initiateEvents();
        break;
      case 'UserMain':
        BuildTickets.initiateCode(events);
        new StyleTags.initiateEvents(mainPathHTML, 'user-main');
        new UserMain.initiateEvents();
        break;
      case 'ColleagueMain':
        BuildTickets.initiateCode(events);
        new StyleTags.initiateEvents(mainPathHTML, 'colleague-main');
        new ColleagueMain.initiateEvents();
        break;
    }
  }
  //--▼ Sidebar <aside> ▼--//
  export function indexSidebar(events: String | 'DefaultSidebar', sidebarJS: HTMLElement, sidebarJQ: JQuery<HTMLElement>) {
    const sidebarPathHTML: String = 'html/index-sidebar';
    switch (events) {
      case 'DefaultSidebar':
        new StyleTags.initiateEvents(sidebarPathHTML, 'default-sidebar');
        new DefaultSidebar.initiateEvents();
        break;
    }
  }
  //--▼ Overlay <section> ▼--//
  export function indexOverlay(
    getEvents:
      | 'ColleagueAssigned'
      | 'ColleagueDeleted'
      | 'ColleagueResolved'
      | 'DefaultOverlay'
      | 'DeleteOverlay'
      | 'LogOverlay'
      | 'LoggedAssigned'
      | 'LoggedDeleted'
      | 'LoggedPending'
      | 'LoggedResolved'
      | 'ManageDeleted'
      | 'ManagePending'
      | 'ResolveOverlay'
      | 'UserAssigned'
      | 'UserDeleted'
      | 'UserResolved'
      | String,
    overlayJS: HTMLElement,
    overlayJQ: JQuery<HTMLElement>
  ) {
    const overlayPathHTML: String = 'html/index-overlay';
    switch (getEvents) {
      case 'ColleagueAssigned':
        new StyleTags.initiateEvents(overlayPathHTML, 'colleague-assigned');
        new ColleagueAssigned.initiateEvents();
        break;
      case 'ColleagueDeleted':
        new StyleTags.initiateEvents(overlayPathHTML, 'colleague-deleted');
        new ColleagueDeleted.initiateEvents();
        break;
      case 'ColleagueResolved':
        new StyleTags.initiateEvents(overlayPathHTML, 'colleague-resolved');
        new ColleagueResolved.initiateEvents();
        break;
      case 'DefaultOverlay':
        new StyleTags.initiateEvents(overlayPathHTML, 'default-overlay');
        new DefaultOverlay.initiateEvents();
        break;
      case 'DeleteOverlay':
        new StyleTags.initiateEvents(overlayPathHTML, 'delete-overlay');
        new DeleteOverlay.initiateEvents();
        break;
      case 'LogOverlay':
        new StyleTags.initiateEvents(overlayPathHTML, 'log-overlay');
        new LogOverlay.initiateEvents();
        break;
      case 'LoggedAssigned':
        new StyleTags.initiateEvents(overlayPathHTML, 'logged-assigned');
        new LoggedAssigned.initiateEvents();
        break;
      case 'LoggedDeleted':
        new StyleTags.initiateEvents(overlayPathHTML, 'logged-deleted');
        new LoggedDeleted.initiateEvents();
        break;
      case 'LoggedPending':
        new StyleTags.initiateEvents(overlayPathHTML, 'logged-pending');
        new LoggedPending.initiateEvents();
        break;
      case 'LoggedResolved':
        new StyleTags.initiateEvents(overlayPathHTML, 'logged-resolved');
        new LoggedResolved.initiateEvents();
        break;
      case 'ManageDeleted':
        new StyleTags.initiateEvents(overlayPathHTML, 'manage-deleted');
        new ManageDeleted.initiateEvents();
        break;
      case 'ManagePending':
        new StyleTags.initiateEvents(overlayPathHTML, 'manage-pending');
        new ManagePending.initiateEvents();
        break;
      case 'ResolveOverlay':
        new StyleTags.initiateEvents(overlayPathHTML, 'resolve-overlay');
        new ResolveOverlay.initiateEvents();
        break;
      case 'UserAssigned':
        new StyleTags.initiateEvents(overlayPathHTML, 'user-assigned');
        new UserAssigned.initiateEvents();
        break;
      case 'UserDeleted':
        new StyleTags.initiateEvents(overlayPathHTML, 'user-deleted');
        new UserDeleted.initiateEvents();
        break;
      case 'UserResolved':
        new StyleTags.initiateEvents(overlayPathHTML, 'user-resolved');
        new UserResolved.initiateEvents();
        break;
    }
  }

  export class initiateBlock {
    constructor(pagePath: String, pageName: String) {
      const folderName = pagePath.split('/')[1];
      const segment = folderName.split('-')[1];

      switch (segment) {
        case 'body':
          const bodyJS: HTMLBodyElement = document.querySelector('#index-body');
          const bodyJQ: JQuery<HTMLBodyElement> = $('#index-body');

          new StyleTags.initiateEvents(pagePath, pageName);
          GetCode.indexBody(pageName, bodyJS, bodyJQ);
          break;
        case 'header':
          const headerJS: HTMLElement = document.querySelector('#index-header');
          const headerJQ: JQuery<HTMLElement> = $('#index-header');

          new StyleTags.initiateEvents(pagePath, pageName);
          GetCode.indexHeader(`${pageName}`, headerJS, headerJQ);
          break;
        case 'main':
          const mainJS: HTMLElement = document.querySelector('#index-main');
          const mainJQ: JQuery<HTMLElement> = $('#index-main');

          new StyleTags.initiateEvents(pagePath, pageName);
          GetCode.indexMain(pageName, mainJS, mainJQ);
          break;
        case 'sidebar':
          const sidebarJS: HTMLElement = document.querySelector('#index-sidebar');
          const sidebarJQ: JQuery<HTMLElement> = $('#index-sidebar');

          GetCode.indexSidebar(pageName, sidebarJS, sidebarJQ);
          break;
        case 'overlay':
          const overlayJS: HTMLElement = document.querySelector('#index-overlay');
          const overlayJQ: JQuery<HTMLElement> = $('#index-overlay');

          new StyleTags.initiateEvents(pagePath, pageName);
          GetCode.indexOverlay(pageName, overlayJS, overlayJQ);
          break;
      }
    }
  }
}
