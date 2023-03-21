import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheuyUiComponent } from './theuy-ui.component';

describe('TheuyUiComponent', () => {
  let component: TheuyUiComponent;
  let fixture: ComponentFixture<TheuyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheuyUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheuyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
