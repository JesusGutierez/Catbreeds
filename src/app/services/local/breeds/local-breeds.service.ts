import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { Breed } from 'src/app/models/breed';
import { HttpBreedsService } from '../../http/http-breeds.service';

@Injectable({
  providedIn: 'root'
})
export class LocalBreedsService {
  catBreeds = new BehaviorSubject<Breed[]>([]);

  constructor(
    private httpBreedService: HttpBreedsService
  ) { }

  getBreeds(): Observable<Breed[]> {
    return this.catBreeds.asObservable();
  }

  setBreeds(newBreeds: Breed[]) {
    this.catBreeds.next(newBreeds);
    sessionStorage.setItem('breeds', JSON.stringify(newBreeds))
  }

  async getBreedsOrCall(): Promise<Breed[]> {
    const stringBreeds = sessionStorage?.getItem('breeds');
    const currentBreeds = stringBreeds ? JSON.parse(stringBreeds) : null;
    if (!currentBreeds) {
      try {
        const newBreeds: Breed[] = (await lastValueFrom(this.httpBreedService.getBreeds())).body;
        this.setBreeds(newBreeds);
        return newBreeds;
      } catch (error) {
        console.log('Error al obtener las razas');
        return [];
      }
    }

    return currentBreeds;
  }
}
