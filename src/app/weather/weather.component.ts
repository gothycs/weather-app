import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  myWeather: any;
  temperature: number = 0;
  feels: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  icon: string = '';
  city: string = 'London';
  city2: string = 'London';
  units: string = 'metric';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getweather(this.city, this.units).subscribe({

      next: (res) => {
        this.myWeather = res;
        this.temperature = this.myWeather.main.temp;
        this.feels = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;
        this.city2 = this.city;

        this.icon = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@4x.png';
      },
    })
  }
}
