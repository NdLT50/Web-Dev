import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products: Product[] = [

    {
      id: 1,
      name: 'Sony PlayStation 5 Slim',
      description: 'An immersive gaming experience in a slim form factor. Get ready to meet the new PlayStation 5 Slim. ',
      price: 303880,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png',
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/'
    },

    {
      id: 2,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro Max 256Gb — это воплощение инноваций и стиля.',
      price: 860931,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/p88/64170093.png?format=gallery-medium  ',
        'https://resources.cdn-kaspi.kz/img/m/p/ped/p29/64476207.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p49/p27/64476210.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/'
    },

    {
      id: 3,
      name: 'Чехол для Apple iPhone 17 Pro Max прозрачный',
      description: ' Прозрачный силикон — подчеркнет красоту вашего iPhone.',
      price: 130,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p3b/92600501.bin',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc0/p3b/92600501.bin',
        'https://resources.cdn-kaspi.kz/img/m/p/pd7/p7e/65362731.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-17-pro-max-prozrachnyi-145825236/'
    },

    {
      id: 4,
      name: 'Leadbros 3 GB6001SS серебристый',
      description: 'Газовая плита',
      price: 24990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h85/h5a/84397126844446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h85/h5a/84397126844446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h32/84397126909982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/hec/84397126975518.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h70/h2c/84397127041054.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/leadbros-3-gb6001ss-serebristyi-113545055/'
    },

    {
      id: 5,
      name: 'Solgar Magnesium with Vitamin B6 Магний В6 400 мг таблетки 100 шт',
      description: 'Минерал магния в форме оксида с добавлением витамина B6',
      price: 6781,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4a/pab/77541469.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4a/pab/77541469.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p88/pdb/75759104.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3b/p10/76929159.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/solgar-magnesium-with-vitamin-b6-magnii-v6-400-mg-tabletki-100-sht-113491045/'
    },

    {
      id: 6,
      name: 'Кофемашина HOKURA CM5520 черный',
      description: 'Автоматическая кофемашина с функцией приготовления капучино',
      price: 95988,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p9c/75983700.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p67/p9c/75983700.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4b/p9c/75983701.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2f/p9c/75983702.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p12/p9c/75983703.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbe/p9b/75983706.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kofemashina-hokura-cm5520-chernyi-148648774/'
    },

    {
      id: 7,
      name: 'Наушники Apple AirPods Max 2 синий',
      description: 'Модель автоматически умеет определять, когда нужно отключить шумоподавление.',
      price: 281683,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/p5e/3537740.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p96/p5e/3537740.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7a/p5e/3537741.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5e/p5e/3537742.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p42/p5e/3537743.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-sinii-128625122/'
    },

    {
      id: 8,
      name: 'Ноутбук Apple MacBook Pro 16 2023 16.2" / 48 Гб / SSD 1024 Гб / macOS / MUW63RU/A',
      description: 'Apple MacBook Pro 16 M3 Max 2023 - идеально подходит для профессионалов.',
      price: 2298500,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf8/h2e/84577772339230.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/h2e/84577772339230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h3e/84577686388766.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h3e/84577686388766.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h80/84577686585374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h43/h45/84577686650910.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-16-2-48-gb-ssd-1024-gb-macos-muw63ru-a-114863237/'
    },

    {
      id: 9,
      name: 'Квадроцикл GOES 400L взрослый 400 куб. см серый',
      description: 'Cовременный квадроцикл среднего класса с электроусилителем руля.',
      price: 5000000,
      rating: 0.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p76/p5d/91918906.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p76/p5d/91918906.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3e/p5d/91918908.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p5a/91918910.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kvadrotsikl-goes-400l-vzroslyi-400-kub-sm-seryi-153689254/'
    },

    {
      id: 10,
      name: 'TANK AODES утилитарный 4-тактный 1000 куб. см красный',
      description: 'Affordable smartphone with high resolution camera.',
      price: 5000000,
      rating: 1.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9c/pf1/82696095.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pf1/82696095.jpg?format=gallery-medium    ',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/pf1/82696096.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p63/pf1/82696097.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/pa3/82696115.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p71/pa3/82696112.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/tank-aodes-utilitarnyi-4-taktnyi-1000-kub-sm-krasnyi-150975344/'
    }

  ];

}
