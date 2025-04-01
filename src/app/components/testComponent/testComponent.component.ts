import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/components/models/product';

@Component({
  selector: 'app-testComponent',
  templateUrl: './testComponent.component.html',
  styleUrls: ['./testComponent.component.css'],
})
export class TestComponent {
  @Input() product: IProduct;
}
