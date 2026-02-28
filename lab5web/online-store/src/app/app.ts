import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './components/services/product.service';
import { Product } from './models/product.model';
import { Category } from './models/product.category';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [ProductService]
})
export class App {
  categories: Category[] = [];
  selectedCategory = signal<Category | null>(null);
  products = signal<Product[]>([]);

  constructor(private productService: ProductService) {
    this.categories = [{ id: 0, name: 'All' }, ...this.productService.getCategories()];
    this.selectCategory(this.categories[0]);
  }

  selectCategory(category: Category) {
    this.selectedCategory.set(category);
    if (category.id === 0) {
      this.products.set(this.productService.getAllProducts());
    } else {
      this.products.set(this.productService.getProductsByCategory(category.id));
    }
  }

  handleDelete(id: number) {
  this.productService.deleteProduct(id);
  if (this.selectedCategory()?.id === 0) {
    this.products.set(this.productService.getAllProducts());
  } else {
    this.products.set(this.productService.getProductsByCategory(this.selectedCategory()!.id));
  }
}

}
