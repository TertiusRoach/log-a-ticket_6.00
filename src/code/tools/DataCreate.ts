//--|►| DataCreate (Tool) |◄|--//
export namespace DataCreate {
  export class initiateCode {
    constructor(blockName: 'index-data') {
      switch (blockName) {
        case 'index-data':
          const iframe: HTMLIFrameElement = document.querySelector('#index-data');
          const indexData = iframe.contentDocument || iframe.contentWindow.document;

          /*--► console.log(indexData.baseURI); ◄--*/
          //   console.log(indexData.baseURI);

          //   let ticketsData: ChildNode = indexData.childNodes[2].childNodes[1].childNodes[0];
          //   let employeesData: ChildNode = indexData.childNodes[2].childNodes[1].childNodes[2];

          //   console.log($(ticketsData).attr('id'));
          //   console.log($(employeesData).attr('id'));
          break;
      }
    }
  }
}
