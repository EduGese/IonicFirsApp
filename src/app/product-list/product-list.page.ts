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
  IonThumbnail,
  IonAvatar,
  IonImg,
  IonSearchbar,
  IonButton,
  IonModal,
  IonAccordion,
  IonAccordionGroup,
  IonBadge,
  IonGrid,
  IonRow,
  IonCol,
  IonApp,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonAccordion,
    IonModal,
    IonButton,
    IonSearchbar,
    IonImg,
    IonAvatar,
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
    IonThumbnail,
    IonAccordionGroup,
    IonBadge,
    IonGrid,
    IonRow,
    IonCol,
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
