class Menu {
  private btnEl;
  private menuEl;
  private btnTarget;

  constructor(btnClass: string, menuClass: string) {
    this.btnEl = document.querySelector(btnClass) as HTMLElement;
    this.menuEl = document.querySelector(menuClass) as HTMLUListElement;

    this.initialEvents();

    this.btnTarget = 'menuMobile' as string;
  }

  toggleMenu = (ev: Event) => {
    const elTarget = ev.target as HTMLElement;
    if (elTarget.id == this.btnTarget) {
      if (this.menuEl.classList.contains('-translate-x-full')) {
        this.menuEl.classList.remove('-translate-x-full');
        this.menuEl.classList.add('translate-x-0');
      } else {
        this.menuEl.classList.add('-translate-x-full');
        this.menuEl.classList.remove('translate-x-0');
      }
    }
  };

  initialEvents = () => {
    this.btnEl.addEventListener('click', this.toggleMenu);
  };
}

window.onload = () => {
  new Menu('nav', '#toggleMenu');
};
