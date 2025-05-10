import { Component } from '@angular/core';
import { LocalBreedsService } from '../services/local/breeds/local-breeds.service';
import { Breed } from '../models/breed';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  catBreeds: Breed[] = [];
  filteredBreeds: Breed[] = [];

  constructor(
    private localBreedsService: LocalBreedsService,
    private route: Router
  ) {
    this.getBreed();
  }

  async getBreed() {
    const breeds = await this.localBreedsService.getBreedsOrCall();
    this.catBreeds = breeds;
    this.filteredBreeds = this.catBreeds
  }

  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.filteredBreeds = this.catBreeds.filter((d) => d.name.toLowerCase().includes(query));
  }

  checkDetails(breedId: string) {
    this.route.navigate([`/breed-detail/${breedId}`]);
  }
}
