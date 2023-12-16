import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitpcComponent } from './produitpc.component';

describe('ProduitpcComponent', () => {
  let component: ProduitpcComponent;
  let fixture: ComponentFixture<ProduitpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
