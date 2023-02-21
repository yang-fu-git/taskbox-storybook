import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { Button } from '../button.model';


export interface ButtonStateModel {
    button: Button;
  }
  const defaultButton:Button = 
    {
        label: "Button",
        primary: true,
        size: "large",
        backgroundColor:"red",
      };
  @State<ButtonStateModel>({
    name: 'button',
    defaults: {
      button:defaultButton,
    },
  })

@Injectable()
export class ButtonState {
  @Selector()
  static getButton(state: ButtonStateModel): Button {
    return state.button;
  }
}