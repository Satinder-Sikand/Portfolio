import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {

  images: string[] = ['./assets/Pictures/pingpong.png', './assets/Pictures/slides1.jpg', './assets/Pictures/slide5.jpg', './assets/Pictures/slides4.jpeg', './assets/Pictures/slides3.jpg'];
  currentImageIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startImageTimer(); // Automatically switch images every 3 seconds
  }

  startImageTimer() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000); 
  }

  resetImageTimer() {
    clearInterval(this.interval); // Clear the current interval
    this.startImageTimer(); // Start a new interval
  }

  nextSlide(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.resetImageTimer();
  }

  prevSlide(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.resetImageTimer();
  }
}
