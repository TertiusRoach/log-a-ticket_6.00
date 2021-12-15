//--|▼| Tools (Import) |▼|--//
import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

//--|►| Main (Log a Ticket) |◄|--//
export namespace Start {
  //--▼ GetPage.forPage(pageName, pagePath) ▼--//
  new GetEvent.forPage('default-body', GetPath.forHTML('body'));
  new GetEvent.forPage('default-overlay', GetPath.forHTML('overlay'));

  /*--► console.log('--main.js Loaded'); ◄--*/
}
