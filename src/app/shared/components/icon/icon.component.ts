import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() iconName: string = 'bi-bootstrap';
  @Input() fontSize: string = '1.5rem';

  constructor() { }

  ngOnInit(): void {
  }

}
