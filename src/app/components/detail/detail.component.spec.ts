import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { LoadingComponent } from '../loading/loading.component';
import { TreeComponent } from '../tree/tree.component';
import { ActivatedRoute, Params } from '@angular/router';
import { RedditService } from '../../services/reddit.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

fdescribe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      snapshot: { params: {} },
      queryParams: of({ data: "id" } as Params)
    } as ActivatedRoute;
    fakeActivatedRoute.snapshot.params = { sub: "awd" }

    TestBed.configureTestingModule({
      declarations: [DetailComponent, LoadingComponent, TreeComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }, RedditService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.loading).toBe(true);
  });
});
