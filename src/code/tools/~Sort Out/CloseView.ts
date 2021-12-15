//--|►| CloseView |◄|--//
export namespace CloseView {
  export function initiateCode(containerJS: HTMLElement) {
    const activeTicketJS: HTMLElement = document.querySelector('.active-ticket');

    let clearContainer = () => {
      containerJS.innerHTML = '';
      containerJS.className = '';
      containerJS.style.display = 'none';
      containerJS.className = 'default-overlay';
      activeTicketJS.classList.remove('active-ticket');
    };
    $('#close-overlay').on('click', () => {
      clearContainer();
    });
    $('#overlay-background').on('click', () => {
      clearContainer();
    });
  }
}
