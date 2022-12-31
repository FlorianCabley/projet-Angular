import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuCreaComponent } from './jeu-crea.component';

describe('JeuCreaComponent', () => {
  let component: JeuCreaComponent;
  let fixture: ComponentFixture<JeuCreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuCreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuCreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
