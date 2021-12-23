import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBodyComponent } from './recipe-body.component';

describe('RecipeBodyComponent', () => {
  let component: RecipeBodyComponent;
  let fixture: ComponentFixture<RecipeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
