import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingInfoFeedComponent } from './landing-info-feed.component';

describe('LandingInfoFeedComponent', () => {
  let component: LandingInfoFeedComponent;
  let fixture: ComponentFixture<LandingInfoFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingInfoFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingInfoFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
