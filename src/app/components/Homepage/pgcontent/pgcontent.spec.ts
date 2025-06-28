import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgcontent } from './pgcontent';

describe('Pgcontent', () => {
  let component: Pgcontent;
  let fixture: ComponentFixture<Pgcontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pgcontent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pgcontent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
