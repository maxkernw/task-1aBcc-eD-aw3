import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeComponent } from './tree.component';
const MockData = {
  children: [
    {
      data: {
        author: "",
        body: "",
        replies: { data: "" }
      }
    }
  ]
}
describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    fixture.componentInstance.node = MockData
    component = fixture.componentInstance;
    fixture.componentInstance.node = {}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('author should be defined', async () => {
    expect(fixture.debugElement.nativeElement.querySelector('.author')).toBeDefined();
  });
});
