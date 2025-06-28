import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Hero } from "../hero/hero";
import { Pgcontent } from "../pgcontent/pgcontent";
import { Subscribe } from "../subscribe/subscribe";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Pgcontent, Subscribe, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
