import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  onRegisterClick() {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      wrapper.classList.add('active');
    }
  }

  onLoginClick() {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      wrapper.classList.remove('active');
    }
  }

  onBtnPopupClick() {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      wrapper.classList.add('active-popup');
    }
  }

  onIconCloseClick() {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      wrapper.classList.remove('active-popup');
    }
  }

}
