import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Trash, Pen, Check2Square } from 'ng-bootstrap-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  Trash,
  Pen,
  Check2Square
};

@NgModule({
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }
