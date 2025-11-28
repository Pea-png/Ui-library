import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUiLib } from './my-ui-lib';

describe('MyUiLib', () => {
  let component: MyUiLib;
  let fixture: ComponentFixture<MyUiLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyUiLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUiLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
