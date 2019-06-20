import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicasVideoPage } from './musicas-video.page';

describe('MusicasVideoPage', () => {
  let component: MusicasVideoPage;
  let fixture: ComponentFixture<MusicasVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicasVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicasVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
