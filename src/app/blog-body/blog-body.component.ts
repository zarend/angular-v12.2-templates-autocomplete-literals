import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-body',
  templateUrl: './blog-body.component.html',
  styleUrls: ['./blog-body.component.css']
})
export class BlogBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() mode!: 'full' | 'compact';
  @Input() paras!: string[];
}
