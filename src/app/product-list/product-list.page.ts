import { Product, ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenuButton,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail
  ],
})
export class ProductListPage implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}
  async ngOnInit() {
    const response = await this.productService.getAll();
    this.products = response.results;
  }
}
