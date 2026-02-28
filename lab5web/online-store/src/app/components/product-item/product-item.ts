import { Component, input, output } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  selectedImage!: string;

  ngOnInit() {
    this.selectedImage = this.product().image;
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  likeProduct() {
    this.product().likes++;
  }

  deleteProduct() {
    this.delete.emit(this.product().id);
  }

  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Check out this product: ' + this.product().link
    )}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product().link
    )}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }

  getStars(): boolean[] {
    const maxRating = 5;
    const rating = Math.round(this.product().rating || 0); 
    return Array(maxRating).fill(0).map((_, i) => i < rating);
  }
}
