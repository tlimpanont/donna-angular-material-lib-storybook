import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { listOfDonnaIcons as donnaIcons } from '../donna/icons';

@Injectable({
  providedIn: 'root',
})
export class TheuyUiService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  public registerCustomIcons() {
    donnaIcons.forEach(({ iconName, rawHTML }) => {
      this.matIconRegistry.addSvgIconLiteral(
        iconName.toString(),
        this.domSanitizer.bypassSecurityTrustHtml(rawHTML)
      );
    });
  }
}
