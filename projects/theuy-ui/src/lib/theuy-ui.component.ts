import {Component} from '@angular/core';
import {DONNA_ICONS as DONNA_ICONS} from "../donna/icons";

@Component({
  template: `
    <div style="display: flex; flex-direction: row; gap: 10px; margin-bottom: 50px;">

      <section style="display: flex; flex-direction: column; gap: 10px;">
        <button donna-flat-button class="selected">
          <mat-icon svgIcon="${DONNA_ICONS["placeholder-outlined"]}"></mat-icon>
          button
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-flat-button class="selected">
          button
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-flat-button class="selected">
          button
        </button>

        <button donna-flat-button class="selected">
          <mat-icon svgIcon="${DONNA_ICONS["placeholder-outlined"]}"></mat-icon>
        </button>
      </section>

      <section style="display: flex; flex-direction: column; gap: 10px;">
        <button donna-rounded-button class="selected">
          <mat-icon svgIcon="${DONNA_ICONS["placeholder-outlined"]}"></mat-icon>
          button
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-rounded-button class="selected">
          button
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-rounded-button class="selected">
          button
        </button>

        <button donna-rounded-button class="selected">
          <mat-icon svgIcon="${DONNA_ICONS["placeholder-outlined"]}"></mat-icon>
        </button>
      </section>

      <section style="display: flex; flex-direction: column; gap: 10px;">
        <button donna-fab-button class="selected">
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-fab-button class="selected">
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-fab-button class="selected">
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-fab-button class="selected">
          <mat-icon svgIcon="${DONNA_ICONS["placeholder-outlined"]}"></mat-icon>
        </button>
      </section>
    </div>

    <div style="display: flex; flex-direction: row; gap: 10px; margin-bottom: 50px;">

      <section style="display: flex; flex-direction: column; gap: 10px;">
        <button donna-flat-button>
          <mat-icon svgIcon="${DONNA_ICONS["placeholder-outlined"]}"></mat-icon>
          button
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-flat-button>
          button
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-flat-button>
          button
        </button>

        <button donna-flat-button>
          <mat-icon svgIcon="${DONNA_ICONS["placeholder-outlined"]}"></mat-icon>
        </button>
      </section>

      <section style="display: flex; flex-direction: column; gap: 10px;">
        <button donna-rounded-button>
          <mat-icon svgIcon="${DONNA_ICONS["placeholder-outlined"]}"></mat-icon>
          button
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-rounded-button>
          button
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-rounded-button>
          button
        </button>

        <button donna-rounded-button>
          <mat-icon svgIcon="${DONNA_ICONS["placeholder-outlined"]}"></mat-icon>
        </button>
      </section>

      <section style="display: flex; flex-direction: column; gap: 10px;">
        <button donna-fab-button>
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-fab-button>
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-fab-button>
          <mat-icon svgIcon="${DONNA_ICONS["add-circle-outlined"]}"></mat-icon>
        </button>

        <button donna-fab-button>
          <mat-icon svgIcon="${DONNA_ICONS["placeholder-outlined"]}"></mat-icon>
        </button>
      </section>
    </div>



  `,
  selector: 'lib-theuy-ui',
  styles: [],
})
export class TheuyUiComponent {
}
