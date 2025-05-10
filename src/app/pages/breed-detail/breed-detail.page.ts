import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breed } from 'src/app/models/breed';
import { LocalBreedsService } from 'src/app/services/local/breeds/local-breeds.service';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.page.html',
  styleUrls: ['./breed-detail.page.scss'],
  standalone: false
})
export class BreedDetailPage {
  breed: Breed | null = null;

  constructor(
    private route: ActivatedRoute,
    private localBreedsService: LocalBreedsService
  ) {
    this.getBreed();
  }

  async getBreed() {
    const breeds = await this.localBreedsService.getBreedsOrCall();
    const id = this.route.snapshot.paramMap.get('id');

    const currentBreed = breeds?.find(breed => breed.id === id) || null
    this.breed = currentBreed;
  }
}
